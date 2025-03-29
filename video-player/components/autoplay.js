export function tryAutoplay(config) {
    if(config.autoplayed) {
        return;
    }
    if (config.videoTag.autoplay && config.videoTag.muted === false) {
        config.controls.playButton.pause();
        setTimeout(() => {
            config.videoTag.play().then((err) => {
                console.log('video autoplays with sound');
                config.autoplayed = true;
            }).catch(() => {
                console.log('video doesnt autoplay with sound, so mute it and try again');
                config.videoTag.muted = true;
                config.videoTag.play().then(() => {
                    config.autoplayed = true;
                }).catch(() => {
                    console.log('ERROR');
                    config.errorScreen.style.display = 'grid';
                    config.videoTag.pause();
                });
            })
        }, 100);
       
    }
}