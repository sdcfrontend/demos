export const attributes = ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"];

export function bindNativeAttributes(config){
  attributes.forEach((attr) => {
    let val = config.videoTag[attr];
    if(typeof val === 'object') {
        val = JSON.stringify(val);
    }
    config.rootElement.dataset[attr] = val;
  })
}

export function setRootAttribute(config, name, state) {
  config.rootElement.dataset[name] = state;
}