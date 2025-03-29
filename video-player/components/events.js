import { tryAutoplay } from "./autoplay";
import { ads } from "./ads";
import { captions } from "./captions";
import { showLoader } from "./ui";
import { teardownAds } from "./ads";
import { getLiveBuffer, isLive } from "./live";

import { setRootAttribute, bindNativeAttributes } from "./attributes";

export function ended(config){
  console.log('ENDED - Content ended, preparing for postroll');
  if (config.showAds) {
    // Set flag to indicate content has ended (for post-roll handling)
    config.contentEnded = true;
    
    // Signal that content is complete and request post-roll
    if (config.adsLoader) {
      console.log('REQUESTING POST-ROLL ADS');
      try {
        // Make sure ad container is visible
        setRootAttribute(config,'adsPlayer', true);
        config.adsContainer.style.display = 'block';
        
        // Signal content completion
        config.adsLoader.contentComplete();
        
        // Create proper ad request with tag URL
        let adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = config.adTagUrl;
        adsRequest.linearAdSlotWidth = config.videoTag.clientWidth;
        adsRequest.linearAdSlotHeight = config.videoTag.clientHeight;
        adsRequest.nonLinearAdSlotWidth = config.videoTag.clientWidth;
        adsRequest.nonLinearAdSlotHeight = config.videoTag.clientHeight / 3;
        
        console.log('Postroll request config:', {
          width: config.videoTag.clientWidth,
          height: config.videoTag.clientHeight,
          adTagUrl: config.adTagUrl
        });
        
        // Request new ads - this will trigger onAdsManagerLoaded
        config.adsLoader.requestAds(adsRequest);
      } catch (error) {
        console.error('Error requesting post-roll ad:', error);
      }
    } else {
      console.error('No adsLoader available for postroll');
    }
  }
  // config.controls.hideControls(config, false);
}


export function loadedmetadata(config) {
  config.maxSeekableTime = config.videoTag.duration;
  config.minSeekableTime = 0;
  console.log('LOADEDDATA');  
  
  config.live = isLive(config);
  setRootAttribute(config,'live', config.live);
  
  if (config.live) {
      config.minSeekableTime = getLiveBuffer(config).bufferStart;
      config.maxSeekableTime = getLiveBuffer(config).bufferEnd;
  }

  config.controls.durationEl.isLive(config.live);
  
  config.controls.scrubberEl.setTime(config.minSeekableTime, config.maxSeekableTime, config.videoTag.currentTime, 888);
  config.controls.durationEl.setTime(config.videoTag.currentTime, config.maxSeekableTime, 333);
  
  captions(config);

  // Add a listener for when text tracks are loaded in Safari
  if (config.videoTag.textTracks.length === 0) {
    config.videoTag.addEventListener('loadeddata', () => {
      console.log('LOADED DATA', Array.from(config.videoTag.textTracks));
      captions(config);
    }, { once: true });
  }
  
}

export function loadstart(config) {
  console.log('LOADEDSTART');
  if (config.showAds && config.autoPlay) {
    config.videoTag.pause();
    teardownAds(config);
    ads(config);
    return;
  }

  tryAutoplay(config);
}

export function canplay(config) {
  console.log('CANPLAY', config);
  bindNativeAttributes(config);
  config.errorScreen.style.display = 'none';
  showLoader(config, false);
  config.controls.scrubberEl.updateAriaAttributes(config, config.videoTag.currentTime, config.videoTag.duration);
}

export function play(config, event) {
  config.controls.playButton.play();
  bindNativeAttributes(config);
}

export function playing(config) {
  console.log('PLAYING');
  config.adsTimer.style.display = 'none';
  // hideControls(config, false);
  showLoader(config, false);
  setRootAttribute(config,'playing', true); 
  config.controls.playButton.play();
}

export function pause(config) {
  console.log('PAUSE');
  config.controls.playButton.pause();
  setRootAttribute(config,'playing', false);
}

export function volumechange(config) {
  config.videoTag.muted ? config.controls.muteButton.unmute() : config.controls.muteButton.mute();
}

export function timeupdate(config, event) {
  console.log('TIME UPDATE', event, config.live);

  config.maxSeekableTime = config.videoTag.duration;
  config.minSeekableTime = 0;
;
  if (config.live) {
    config.minSeekableTime = getLiveBuffer(config).bufferStart;
    config.maxSeekableTime = getLiveBuffer(config).bufferEnd
  }

  config.controls.durationEl.isLive(config.live);
  config.controls.durationEl.setTime(config.videoTag.currentTime, config.maxSeekableTime, 333);

  config.controls.scrubberEl.setTime(config.minSeekableTime, config.maxSeekableTime, config.videoTag.currentTime, 888);  
  config.controls.scrubberEl.updateAriaAttributes(config, config.videoTag.currentTime, config.videoTag.duration);
}

export function progress(config) {
  console.log('PROGRESS');
  config.controls.scrubberEl.setBuffer(config);
}

export function durationchange(config, event) {
  console.log('DURATION CHANGE');
}

export function error(config, event, data) {
  console.log('HTML5 ERROR', event, data);
  
  // Check error type
  const errorType = event.target.error ? event.target.error.code : -1;
  
  // Fatal errors (stop playback)
  const isFatal = [
    HTMLMediaElement.MEDIA_ERR_SRC_NOT_SUPPORTED,  // Unsupported format
    HTMLMediaElement.MEDIA_ERR_DECODE,            // Decoding error
    HTMLMediaElement.MEDIA_ERR_NETWORK,           // Network error
    HTMLMediaElement.MEDIA_ERR_DECRYPT            // DRM error
  ].includes(errorType);
  
  if (isFatal) {
    // Show error screen and stop playback
    config.errorScreen.style.display = 'grid';
    showLoader(config, false);
    config.videoTag.pause();
    
    // Optionally try to recover
    if (errorType === HTMLMediaElement.MEDIA_ERR_NETWORK) {
      setTimeout(() => {
        config.videoTag.load();
      }, 5000); // Try to reload after 5 seconds
    }
  } else {
    // Non-fatal errors (continue playing if possible)
    console.warn('Non-fatal error occurred. Attempting to continue playback.');
    showLoader(config, false);
  }
}

export function seeking(config) {
  showLoader(config, true);
  console.log('SEEKING');
}

export function waiting(config) {
  showLoader(config, true);
  console.log('BUFFERING');
}

export function seeked(config) {
  showLoader(config, false);
  console.log('SEEKED');
}

export function bindEvents(config){
  const events = {
    canplay,
    play,
    pause,
    volumechange,
    timeupdate,
    error,
    seeking,
    waiting,
    seeked,
    loadstart,
    playing,
    durationchange,
    loadedmetadata,
    progress,
    ended
  }
  Object.keys(events).forEach((event) => {
    config.videoTag.addEventListener(event, events[event].bind(this, config));
  });

}