export function addContextMenu(config) {
  const menu = document.createElement('div');
  menu.innerHTML = `<div>News Player 0.1</div><a href="#" style="font-size: 12px;color: white;">Report a bug</a>`;
  menu.style.position = 'absolute';
  menu.style.backgroundColor = 'black';
  menu.style.color = 'white';
  menu.style.padding = '0.5em 1em';
  menu.style.borderRadius = '3px';
  menu.style.zIndex = '1000';
  menu.style.display = 'none';
  document.body.appendChild(menu);

  config.rootElement.oncontextmenu = (e) => {
    e.preventDefault();
    menu.style.left = `${e.pageX}px`;
    menu.style.top = `${e.pageY}px`;
    menu.style.display = 'block';
  };

  document.addEventListener('click', () => {
    menu.style.display = 'none';
  });
}

export function clickPosterToPlay(config) {
  return new Promise((resolve) => {
    config.playerPoster.onclick = () => {
      config.autoPlay = true;
      config.videoTag.autoplay = true;
      resolve();
    }
  });
}

export function showLoader(config, show) {
  config.loader.style.display = show ? 'block' : 'none';
}

export function updateTitle(config, title, description) {
  const headline = config.controls.videoTitle.headline;
  console.log('UPDATE TITLE', title, description);
  
  // If no title is provided, use the video source filename
  if (!title) {
    const src = config.videoTag.src;
    const filename = src ? src.split('/').pop().replace(/\.[^/.]+$/, "") : '';
    title = filename;
  }

  document.title = title;
  headline.innerHTML = `<span class="visually-hidden">Video: </span> <span>${title}</span>`;
}