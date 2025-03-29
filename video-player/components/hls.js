import { setRootAttribute } from './attributes';
import { setCaptionsState } from './captions';
import { showLoader } from './ui';

export function initHls(config) {
    if (Hls.isSupported()) {
        config.hls = new Hls({ 
            liveSyncDurationCount: 3, 
            enableCEA708Captions: true, 
            enableWebVTT: true,
            startLevel: -1 
        });

        config.hls.on(Hls.Events.MEDIA_ATTACHED, function (event, data) {
            console.log('MEDIA_ATTACHED', data)
            config.hlsMinBuffer = 0;
            config.hlsMaxBuffer = data.mediaSource.duration || 1000;
            config.controls.scrubberEl.setTime(config.hlsMinBuffer, config.hlsMaxBuffer, config.videoTag.currentTime, 888);
            // config.controls.durationEl.setTime(config.videoTag.currentTime, config.maxSeekableTime);
            console.log('MEDIA_ATTACHED', data.mediaSource, 'video and hls.js are now bound together !', data);
        });

        config.hls.on(Hls.Events.ERROR, (event, data) => {
            console.log('HLS ERROR', data);
            
            // Error types from HLS.js
            const { type, details, fatal } = data;
            
            if (fatal) {
                // Fatal errors stop playback
                config.errorScreen.style.display = 'grid';
                config.loader.style.display = 'none';
                config.videoTag.pause();
                
                // Attempt recovery for network errors
                if (type === Hls.ErrorTypes.NETWORK_ERROR && 
                    (details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR || 
                     details === Hls.ErrorDetails.LEVEL_LOAD_ERROR)) {
                    
                    console.log('Attempting to recover from network error...');
                    setTimeout(() => {
                        config.hls.startLoad();
                    }, 5000);
                }
            } else {
                // Non-fatal errors continue playback
                console.warn('Non-fatal HLS error occurred:', data);
                config.loader.style.display = 'block';
                showLoader(config, true);
                
                // Handle specific non-fatal errors
                if (type === Hls.ErrorTypes.NETWORK_ERROR && 
                    details === Hls.ErrorDetails.FRAG_LOAD_ERROR) {
                    console.log('Fragment load error - continuing playback');
                }
            }
        });

        config.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
            console.log('MANIFEST_PARSED', event, data);
           setCaptionsState(config, data);
            config.hls.once(Hls.Events.LEVEL_LOADED, (event, data) => {

                config.hlsLive = data.details.live;
                setRootAttribute(config,'live', config.hlsLive);
               
                if (config.hlsLive) {
                    console.log('LIVE', data, config.hls, config.videoTag.duration);
                    const lastFragment = data.details.fragments[data.details.fragments.length - 1];
                    console.log('FRAGS1', data.details.fragments[0]);
                    config.hlsMinBuffer = Math.ceil(data.details.fragments[0].start);
                    config.hlsMaxBuffer = lastFragment.start + lastFragment.duration;
                    config.controls.durationEl.isLive(true);
                   
                    config.controls.scrubberEl.setTime(config.minSeekableTime, config.maxSeekableTime, config.maxSeekableTime);
                    config.controls.durationEl.setTime(config.maxSeekableTime, config.maxSeekableTime, 444);
                }

            })
        });

        config.hls.on(Hls.Events.LEVEL_UPDATED, (event, data) => {

            config.hlsLive = data.details.live;
            setRootAttribute(config,'live', config.hlsLive);
            
            if (config.hlsLive) {
                const fragments = data.details.fragments;
                if (fragments && fragments.length > 0) {
                    console.log('FRAGS2', fragments[0]);
                    config.hlsMinBuffer = Math.ceil(fragments[0].start); // Earliest fragment start time
                    config.hlsMaxBuffer = config.hls.liveSyncPosition;

                    config.controls.scrubberEl.setTime(config.hlsMinBuffer, config.hlsMaxBuffer, config.videoTag.currentTime, 999);
                    config.controls.durationEl.isLive(true);
                    config.controls.durationEl.setTime(config.videoTag.currentTime, config.hlsMaxBuffer, 111);
                }
            }
        });

    }
}