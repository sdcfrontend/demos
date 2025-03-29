export function fullscreen(config){
    document.addEventListener("fullscreenchange", (event) => {
        document.fullscreenElement === null ? config.controls.fullscreenButton.enterfs() : config.controls.fullscreenButton.exitfs()
    });
}