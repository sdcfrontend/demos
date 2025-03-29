export function getLiveBuffer(config) {
    const video = config.videoTag;
    const buffered = video.buffered;
    let bufferStart = Number.POSITIVE_INFINITY;
    let bufferEnd = 0;

    // **For HLS Streams (via HLS.js or Safari's Native HLS)**
    if (config.hls) {
        bufferStart = config.hlsMinBuffer ?? (video.seekable.length > 0 ? video.seekable.start(0) : video.currentTime);
        bufferEnd = config.hls.liveSyncPosition ?? config.hlsMaxBuffer ?? (video.seekable.length > 0 ? video.seekable.end(0) : video.currentTime);
        return { bufferStart, bufferEnd };
    }

    // **For Native HTML5 Video Streams**
    if (buffered.length > 0) {
        for (let i = 0; i < buffered.length; i++) {
            bufferStart = Math.min(bufferStart, buffered.start(i));
            bufferEnd = Math.max(bufferEnd, buffered.end(i));
        }
    }

    // **Use `seekable` as a Fallback**
    if (video.seekable.length > 0) {
        bufferStart = Math.min(bufferStart, video.seekable.start(0));
        bufferEnd = Math.max(bufferEnd, video.seekable.end(video.seekable.length - 1));
    }

    // **Ensure Buffer Values Are Valid**
    if (bufferStart === Number.POSITIVE_INFINITY) {
        bufferStart = video.currentTime; // Default to current time if no valid buffer range
    }

    return { bufferStart, bufferEnd };
}

export function isLive(config) {
    return config.hlsLive || config.videoTag.duration === Infinity
}