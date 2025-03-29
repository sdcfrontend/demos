export function pip(config){
    
    document.addEventListener('enterpictureinpicture', () => {
        config.controls.pipButton.exitpip();
    });

    document.addEventListener('leavepictureinpicture', () => {
        config.controls.pipButton.enterpip();
    });
}