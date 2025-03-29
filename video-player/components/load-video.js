import { setRootAttribute } from './attributes';
import { thumbnails } from './thumbnails';
import { updateTitle } from './ui';
import { showLoader } from './ui';
import { removeTextTracks } from './captions';

export function loadManifest(config, videoId) {

    const manifestUrl = config.manifestUrl.replace('${accountId}', config.accountId).replace('${videoId}', videoId);

    fetch(manifestUrl, { headers: { 'Accept': `application/json;pk=${config.policyKey}` } })
    .then(response => response.json())
    .then(data => {
        console.log('VIDEO DATA', data);
        const thumbs = data.text_tracks.find(track => track.label === 'thumbnails' && track.src.match('https'));
        const video = data.sources.length === 1 ? data.sources[0] : data.sources.find((item) => item.codecs === 'avc1,mp4a' && item.src.match('https'));
        loadHls(config, video.src, {
            thumbs,
            title: data.name,
            description: data.description
        });
    });
}

export function loadHls(config, videoUrl, { thumbs, title, description } = {}) {

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

    removeTextTracks(config.videoTag);
    showLoader(config, true);

    if(config.hls){
        config.hls.detachMedia(config.videoTag);
        config.hls.subtitleTrack = -1;
        console.log('PLAY URL', videoUrl);
        config.hls.attachMedia(config.videoTag);
        config.hls.loadSource(videoUrl);
        config.controls.playButton.play();
        updateTitle(config, title, description);
        if(thumbs && thumbs.src){
            thumbnails(config, thumbs);
        }
    }
    else {
        config.videoTag.src = videoUrl;
        config.videoTag.load();
    }

    setRootAttribute(config,'autoPlay', true);  
    updateTitle(config, title, description);
    thumbnails(config, thumbs);
}

export function loadVideo(config, videoUrl) {
  config.videoTag.src = videoUrl;
  config.videoTag.load();
  updateTitle(config, null, null);
}

export function selectSourceAndLoad(config) {

if (config.autoPlay) {
if (config.m3u8Url) {
    loadHls(config, config.m3u8Url);
} else {
    loadManifest(config, config.videoId);
}
} else {
    clickPosterToPlay(config).then(() => {
if (config.m3u8Url) {
    loadHls(config, config.m3u8Url);
} else {
    loadManifest(config);
}
});
}
}

export function loadSource(
    config,
    manifestId,
    videoUrl
) {
    // Clear existing text tracks before loading new video
    removeTextTracks(config.videoTag);

    config.hls.detachMedia(config.videoTag);
    config.hls.subtitleTrack = -1;
    config.subtitleLang = '';
    console.log("LOAD SOURCE", config, manifestId, videoUrl);
    setRootAttribute(config,'autoPlay', true);
    const playbackUrl = `https://edge.api.brightcove.com/playback/v1/accounts/${config.accountId}/videos/${manifestId}`;

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

    config.loader.style.display = 'block';

    if(videoUrl){
        console.log('PLAY URL', videoUrl);
        config.hls.attachMedia(config.videoTag);
        config.hls.loadSource(videoUrl);
        config.controls.playButton.play();
        config.controls.videoTitle.update(null, null);
        thumbnails(config, null);
    }

    else {
        console.log('PLAY MANIFEST', manifestId);
        // config.controls.hideControls(config, false);
        fetch(playbackUrl, { headers: { 'Accept': `application/json;pk=${config.policyKey}` } })
            .then(response => response.json())
            .then(data => {
                console.log('VIDEO DATA', data);
                config.controls.videoTitle.update(data.name || '', data.description || '');
                config.videoTitle = data.name;
                config.videoDescription = data.description;
                const thumbs = data.text_tracks.find(track => track.label === 'thumbnails' && track.src.match('https'));
                if(thumbs && thumbs.src){
                    thumbnails(config, thumbs);
                }
                const video = data.sources.length === 1 ? data.sources[0] : data.sources.find((item) => item.codecs === 'avc1,mp4a' && item.src.match('https'));
                config.hls.attachMedia(config.videoTag);
                config.hls.loadSource(video.src);
                config.controls.playButton.play();
        });
    }
}
