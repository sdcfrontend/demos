import { tryAutoplay } from "./autoplay";
import { createButton, hideControls } from "./controls";
import { setRootAttribute } from "./attributes";

export function ads(config) {

  // Variables for video and IMA components
  let videoContent = config.videoTag;
  let adContainer = config.adsContainer;
  let autoplayAllowed = false;
  let autoplayRequiresMuted = false;

  // Initialize when the page loads
  setUpIMA();
  createAdControls(config);
  checkAutoplaySupport();

  function createAdControls(config) {
    if(config.adControls){
      return;
    }
    config.adControls = document.createElement('div');
    config.adControls.classList.add('video-player-controls', 'video-player-ad-controls');
    const button = createButton('play', { default: 'PLAY', play: 'PLAY', pause: 'PAUSE', on: 'play' });
    button.pause();
    config.adPlayerButton = button;

    button.addEventListener('click', () => {
      if (config.adsPlaying) {
        config.adsManager.pause();
      }
      else {
        config.adsManager.resume();
      }
    });

    const playGroup = document.createElement('div');
    playGroup.classList.add('video-player-play-group');
    playGroup.appendChild(button);
    config.adControls.appendChild(playGroup);
    config.playerBody.appendChild(config.adControls);
  }

  // Clean up IMA resources
  function destroyAdsManager() {
    if (config.adsManager) {
      try {
        config.adsManager.destroy();
      } catch (e) {
        console.error('Error destroying adsManager:', e);
      }
      config.adsManager = null;
    }
    setRootAttribute(config,'adsPlaying', false);

    config.adsPlaying = false;
    config.adsTimer.style.display = 'none';
  }

  // Set up IMA components
  function setUpIMA() {
    // Create the ad display container if it doesn't exist
    if (!config.adDisplayContainer) {
      config.adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoContent);
    }
    
    // Create the ads loader if it doesn't exist
    if (!config.adsLoader) {
      config.adsLoader = new google.ima.AdsLoader(config.adDisplayContainer);

      // Add event listeners for ad loading
      config.adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false);
      config.adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false);
    }

    // Store ad tag URL in config for reuse
    config.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/20346936/skynews/videoplayer&description_url=https%3A%2F%2Fnews.sky.com%2Fuk&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator={timestamp}&cmsid=2537425&vid={mediainfo.reference_id}&plcmt=1';
  }

  // Check if autoplay is supported
  function checkAutoplaySupport() {
    // Try unmuted first
    videoContent.muted = false;
    let playPromise = videoContent.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Unmuted autoplay works');
          videoContent.pause();
          autoplayAllowed = true;
          autoplayRequiresMuted = false;
          requestAds();
        })
        .catch(() => {
          console.log('Unmuted autoplay failed, trying muted');
          // Try muted playback
          tryMutedPlayback();
        });
    }
  }

  function tryMutedPlayback() {
    videoContent.muted = true;
    let playPromise = videoContent.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Muted autoplay works');
          videoContent.pause();// Always clear the container when destroying ads
          autoplayAllowed = true;
          autoplayRequiresMuted = true;
          requestAds();
        })
        .catch(() => {
          console.log('Autoplay not allowed, fallback to click-to-play');
          // Even if autoplay fails, we still want to request ads
          autoplayAllowed = false;
          autoplayRequiresMuted = false;
          requestAds();
        });
    }
  }

  // Request ads from the ad server
  function requestAds() {
    try {
      // Clean up any existing ad manager
      destroyAdsManager();
      // if(config.adContainer.firstElementChild){
      //   // config.adContainer.firstElementChild.style.display = 'none';
      // }
    
      // Initialize container for each request
      config.adDisplayContainer.initialize();

      let adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = config.adTagUrl;

      // Set autoplay based on detected support
      adsRequest.setAdWillAutoPlay(autoplayAllowed);
      adsRequest.setAdWillPlayMuted(autoplayRequiresMuted);

      // Specify the linear and nonlinear slot sizes
      adsRequest.linearAdSlotWidth = videoContent.clientWidth;
      adsRequest.linearAdSlotHeight = videoContent.clientHeight;
      adsRequest.nonLinearAdSlotWidth = videoContent.clientWidth;
      adsRequest.nonLinearAdSlotHeight = videoContent.clientHeight / 3;

      config.adsLoader.requestAds(adsRequest);
    } catch (error) {
      console.error('Error requesting ads:', error);
      // If ad request fails, start content video
      if (!config.contentEnded) {
        videoContent.play();
      }
    }
  }

  // Handle ad events
  function onAdEvent(adEvent) {
    console.log('Ad event:', adEvent.type, 'Content ended:', config.contentEnded);
  }

  function onAdProgress(event) {
    console.log('ad progress',event.getAdData());
    const data = event.getAdData();
  }

  function onContentPause() {
    videoContent.pause();
  }

  function onContentResume() {
    videoContent.play();
  }

  function onAdPaused() {
    config.adsPlaying = false;
    config.adPlayerButton.play();
  }

  function onAdResumed() {
    config.adsPlaying = true;
    config.adPlayerButton.pause();
  }

  function onAdStarted() {
    console.log('Ad started playing');
    setRootAttribute(config,'adsPlaying', true);
    config.adPlayerButton.pause();
    // hideControls(config, false);
    config.adsPlaying = true;
    adContainer.style.display = 'block';
  }

  function onAllAdsCompleted() {
    setRootAttribute(config,'adsPlaying', false);
    destroyAdsManager();
    
    // Only play content if it's a pre-roll (not post-roll)
    if (!config.contentEnded) {
      // For preroll, handle playback
      if (!config.autoplayed) {
        tryAutoplay(config);
      } else {
        // For live streams, seek to live edge after pre-roll
        if (config.live && config.hls && config.hls.liveSyncPosition) {
          config.videoTag.currentTime = config.hls.liveSyncPosition;
        }
        config.videoTag.play();
      }
    } else {
      // For post-roll, keep the video stopped and at the end
      config.videoTag.currentTime = config.videoTag.duration;
      config.videoTag.pause();
    }
  }

  // Handle successful ad load
  function onAdsManagerLoaded(adsManagerLoadedEvent) {
    console.log('Ads manager loaded, creating new manager');
    // Clean up any existing adsManager
    destroyAdsManager();
    
     // Configure rendering settings
     var adsRenderingSettings = new google.ima.AdsRenderingSettings();
     adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
     adsRenderingSettings.uiElements = [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN];

    // Create new ads manager
    config.adsManager = adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);
    
    // Add event listeners for ad loading
    config.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPause);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResume);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, onAdPaused);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, onAdResumed);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAllAdsCompleted);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, onAdProgress);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent);
    config.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
    config.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdStarted);
    

    // Start the ads
    try {
      console.log('Initializing ads manager with dimensions:', {
        width: videoContent.clientWidth,
        height: videoContent.clientHeight,
        isPostroll: config.contentEnded
      });
      
      // Initialize with video dimensions
      config.adsManager.init(videoContent.clientWidth, videoContent.clientHeight, google.ima.ViewMode.NORMAL);
      
      // For postroll, we don't need to worry about autoplay
      if (config.contentEnded) {
        videoContent.muted = false;
        // Ensure container is visible for postroll
        config.adsContainer.style.display = 'block';
        setRootAttribute(config,'adsPlaying', true);
        config.adsPlaying = true;
      } else {
        videoContent.muted = autoplayRequiresMuted;
      }
      
      console.log('Starting ads playback');
      config.adsManager.start();
    } catch (adError) {
      console.error('Error starting ads:', adError);
      // Play content if ads fail and it's not a postroll
      if (!config.contentEnded) {
        videoContent.play();
      }
    }
  }

  // Handle ad errors
  function onAdError(adErrorEvent) {
    console.log('Ad error:', adErrorEvent.getError());
    destroyAdsManager();
    if (!config.contentEnded) {
      videoContent.play();
    }
  }
}

export function teardownAds(config) {
 // Clean up existing ad state
 if (config.adsManager) {
  config.adsManager.destroy();
  config.adsManager = null;
}
if (config.adsLoader) {
  config.adsLoader.destroy();
  config.adsLoader = null;
}
// Reset content ended flag
config.contentEnded = false;
}   
