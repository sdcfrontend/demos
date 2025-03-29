import { getLiveBuffer, isLive } from './live';

export function createButton(label, config) {
  const button = document.createElement('button');
  const tooltip = document.createElement('div');
  tooltip.classList.add('video-player-button-tooltip');
  button.appendChild(tooltip);
  Object.keys(config).forEach((attr) => {
    button[attr] = () => {
      console.log('BUTTON', attr, config[attr])
      // button.textContent = config[attr];
      tooltip.textContent = config[attr];
      button.dataset.active = false;
    }
  })
  console.log(label,config);
  button[config.on] = () => {
    console.log('BUTTON', config.on);
    // button.textContent = config[config.on];
    tooltip.textContent = config[config.on];
    button.dataset.active = true;
  }
  button.classList.add('video-player-button');
  button.dataset.type = label;
  button.default();

  return button;
}

export function shareButton(config) {
  const button = createButton('share', { default: 'Share', on: 'share' });
  button.addEventListener('click', async () => {
    console.log('Share button clicked');
    navigator.share({
      title: config.videoTitle,
      text: config.videoDescription,
      url: location.href
    });
  });

  return button;
}

export function formatTime(seconds) {
  if (isNaN(seconds)) {
    return '';
  }

  const hrs = Math.floor(seconds / 3600); // Hours
  const mins = Math.floor((seconds % 3600) / 60); // Minutes
  const secs = Math.floor(seconds % 60); // Seconds

  // Pad minutes and seconds to 2 digits
  const formattedMins = String(mins).padStart(2, '0');
  const formattedSecs = String(secs).padStart(2, '0');

  // Only include hours if non-zero
  if (hrs > 0) {
    const formattedHrs = String(hrs).padStart(2, '0');
    return `${formattedHrs}:${formattedMins}:${formattedSecs}`;
  }

  return `${formattedMins.replace(/00:/g, '0:')}:${formattedSecs.replace(/00:/g, '0:')}`;
}

export function playBack05(config) {
  const button = createButton('x05', { default: 'x0.5' });
  button.onclick = () => {
    config.videoTag.playbackRate = 0.5;
  }
  return button;
}

export function playBack1(config) {
  const button = createButton('x1', { default: 'x1' });
  button.onclick = () => {
    config.videoTag.playbackRate = 1;
  }
  return button;
}

export function playBack2(config) {
  const button = createButton('x2', { default: 'x2' });
  button.onclick = () => {
    config.videoTag.playbackRate = 2;
  }
  return button;
}

export function skipBack(config) {
  const button = createButton('back', { default: 'Skip back 10 seconds' });
  button.onclick = () => {
    config.videoTag.currentTime = config.videoTag.currentTime - 10;
  }
  return button;

}

export function skipForward(config) {
  const button = createButton('fwd', { default: 'Skip forward 10 seconds' });
  button.onclick = () => {
    config.videoTag.currentTime = config.videoTag.currentTime + 10;
  }
  return button;

}

export function durationEl(config) {
  const el = document.createElement('div');
  el.classList.add('video-player-duration');
  el.setAttribute('aria-hidden', 'true');
  
  // Add ARIA label that will be updated with time
  el.setAttribute('aria-label', 'Video duration');

  el.setTime = (current, duration, log) => {
    // console.log('SETTIME', current, duration, log);
    const time = formatTime(current);
    const total = formatTime(duration);
    
    // Update ARIA label with full English description
    const minutesCurrent = Math.floor(current / 60);
    const secondsCurrent = Math.floor(current % 60);
    const minutesTotal = Math.floor(duration / 60);
    const secondsTotal = Math.floor(duration % 60);
    
    const timeInWords = `${minutesCurrent} minute${minutesCurrent !== 1 ? 's' : ''} and ${secondsCurrent} second${secondsCurrent !== 1 ? 's' : ''} of ${minutesTotal} minute${minutesTotal !== 1 ? 's' : ''} and ${secondsTotal} second${secondsTotal !== 1 ? 's' : ''}`;
    
    if (config.live) {
      el.dataset.isLiveEdge = !((duration - current) > 10);
      el.textContent = `LIVE  -${formatTime(Math.max(0, duration - current))}`;
    }
    else {
      el.innerHTML = `<span>${time}</span> <span>${total}</span>`;
    }
  }

  el.isLive = (isLive) => {
    el.dataset.isLive = isLive;
  }

  el.onclick = () => {
    config.videoTag.currentTime = isLive(config) ? getLiveBuffer(config).bufferEnd : config.videoTag.duration;
    config.videoTag.play();
  }
  return el;
}

export function playButton(config) {
  const button = createButton('play', { default: 'Pause video', play: 'Pause video', pause: 'Play video', on: 'pause' });

  button.addEventListener('click', () => {
    if (config.videoTag.paused) {
      config.videoTag.play().then(() => { });
    }
    else {
      config.videoTag.pause();
    }
  });

  return button;
}

export function muteButton(config) {
  const button = createButton('mute', { default: 'Mute sound', mute: 'Mute sound', unmute: 'Unmute sound', on: 'unmute' });

  button.addEventListener('click', () => {
    config.videoTag.muted = !config.videoTag.muted
  });

  return button;
}

export function captionsButton(config) {
  const button = createButton('cc', { default: 'Open closed captions', captionson: 'Close closed captions', captionsoff: 'Open closed captions', on: 'captionson' });

  button.addEventListener('click', () => {
    toggleCaptions();

  });

  function toggleCaptions() {
    const on = config.captionsEl.style.display === 'block';
    button[on ? 'captionsoff' : 'captionson']();
    config.captionsEl.style.display = on ? 'none' : 'block';
  }

  return { button, toggleCaptions };
}

export function fullscreenButton(config) {
  const button = createButton('fs', { default: 'Enter Full Screen', enterfs: 'Enter Full Screen', exitfs: 'Exit Full Screen', on: 'exitfs' });

  button.addEventListener('click', () => {
    document.fullscreenElement === null ? config.playerBody.requestFullscreen() : document.exitFullscreen();
  });

  return button;
}

export function pipButton(config) {
  const button = createButton('pip', { default: 'Enter Picture-in-picture', enterpip: 'Enter Picture-in-picture', exitpip: 'Exit Picture-in-picture', on: 'exitpip' });

  button.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
      config.videoTag.play();
    } else if (document.pictureInPictureEnabled) {
      config.videoTag.requestPictureInPicture();
    }
  });

  return button;
}

export function videoTitle(config){
  
  const el = document.createElement('div');
  el.className = 'video-player-title';
  
  // Create the title structure with proper nesting
  const titleContainer = document.createElement('div');
  titleContainer.className = 'video-player-title-container';
  
  const headline = document.createElement('span');
  headline.className = 'video-player-title-headline';
  
  titleContainer.appendChild(headline);
  titleContainer.appendChild(shareButton(config));
  el.appendChild(titleContainer);
  return { el, headline };
}

export function scrubberEl(config) {
  const parent = document.createElement('div');
  parent.className = 'video-player-scrubber';

  const input = document.createElement('input');
  input.type = 'range';
  input.min = 0;
  input.value = 0;
  input.max = Math.floor(config.videoTag.duration);
  input.setAttribute('aria-label', 'Video scrubber');
  input.setAttribute('role', 'slider');
 
  function updateAriaAttributes(config, currentTime, duration) {
    const percentage = Math.round((currentTime / duration) * 100);
    
    // Update ARIA attributes
    input.setAttribute('aria-valuemax', Math.floor(duration));
    input.setAttribute('aria-valuenow', percentage);
    input.setAttribute('aria-valuetext', `${percentage}% - ${formatTime(currentTime)} of ${formatTime(duration)}`);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  function handleHover(e) {
    const rect = input.getBoundingClientRect();
    const pos = e.type === 'touchmove' 
      ? (e.touches[0].clientX - rect.left) / rect.width
      : (e.clientX - rect.left) / rect.width;
    const percent = Math.round(pos * 100);
    
    input.style.setProperty('--scrubber-hover-position', `${percent}%`);
    clearTimeout(config.controllerTimeout);
   
  }

  input.addEventListener('mousemove', handleHover);
  input.addEventListener('touchmove', handleHover);

  input.addEventListener('mouseleave', () => {
    input.style.setProperty('--scrubber-hover-position', '0%');
  });

  input.addEventListener('touchend', () => {
    input.style.setProperty('--scrubber-hover-position', '0%');
  });

   // Add keyboard navigation for scrubber
   input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      config.videoTag.currentTime += 10; // Skip forward 10 seconds
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      config.videoTag.currentTime -= 10; // Skip backward 10 seconds
      e.preventDefault();
    }
  });

  input.addEventListener('input', (event) => {
    console.log('SCRUBBER', event);
    const value = parseInt(input.value) / 10;
    
    const max = isLive(config) ? getLiveBuffer(config).bufferEnd : config.videoTag.duration;
    const min = isLive(config) ? getLiveBuffer(config).bufferStart : 0;
    console.log('min:', min, 'max:', max, 'val:', value, 'ct:', Math.min(Math.max(value, min), max));
    config.videoTag.currentTime = Math.min(Math.max(value, min), max);
    input.style.setProperty('--prog', Math.min(100, (100 / max) * value));
  });


  function setTime(min, max, value, log) {
    console.log('set time', min, max, value);
    !isNaN(min) && (input.min = min * 10);
    !isNaN(max) && (input.max = max * 10);
    !isNaN(value) && (input.value = Math.min(max * 10, value * 10));
    input.style.setProperty('--prog', Math.min(100, (100 / max) * value));
  }

  function setBuffer(config) {
    const buffered = config.videoTag.buffered;
    if (buffered.length === 0) {
      input.style.setProperty('--buffer', '0');
      return;
    }

    let totalBuffered = 0;
    for (let i = 0; i < buffered.length; i++) {
      totalBuffered += buffered.end(i) - buffered.start(i);
    }

    const bufferPercentage = Math.min(100, (totalBuffered / config.videoTag.duration) * 100);
    input.style.setProperty('--buffer', `${bufferPercentage}`);
  }

  const thumbs = document.createElement('div');
  thumbs.innerHTML = '<img class="video-player-thumbs-img"/>';
  thumbs.className = 'video-player-thumbs';

  const timeLabel = document.createElement('div')
  timeLabel.classList.add('video-player-scrubber-time');

  parent.appendChild(input);
  parent.appendChild(thumbs);
  parent.appendChild(timeLabel);
  return { input, parent, setTime, setBuffer, thumbs, timeLabel, updateAriaAttributes };
}

export function hideControls(config, hide) {
  console.log('HIDE CONTROLS', hide);
  config.rootElement.style.setProperty('--video-controls-opacity', hide ? '0' : 'unset');
}

export function controls(config) {
  config.controls = {
    hideControls,
    videoTitle: videoTitle(config),
    playButton: playButton(config),
    skipBack: skipBack(config),
    playBack05: playBack05(config),
    playBack1: playBack1(config),
    playBack2: playBack2(config),
    skipForward: skipForward(config),
    muteButton: muteButton(config),
    fullscreenButton: fullscreenButton(config),
    pipButton: pipButton(config),
    durationEl: durationEl(config),
    scrubberEl: scrubberEl(config),
    captionsButton: captionsButton(config)
  };

  const playGroup = document.createElement('div');
  playGroup.classList.add('video-player-play-group');
  playGroup.appendChild(config.controls.playButton);
  playGroup.appendChild(config.controls.skipBack);
  playGroup.appendChild(config.controls.skipForward);

  config.controlsEl.appendChild(config.controls.videoTitle.el);
  config.controlsEl.appendChild(playGroup);
  config.controlsEl.appendChild(config.controls.muteButton);
  config.controlsEl.appendChild(config.controls.captionsButton.button);
  config.controlsEl.appendChild(config.controls.pipButton);
  config.controlsEl.appendChild(config.controls.fullscreenButton);
  config.controlsEl.appendChild(config.controls.durationEl);
  config.controlsEl.appendChild(config.controls.scrubberEl.parent);

  config.controls.hideControls(config, false);
  config.controllerTimeout = setTimeout(() => {
    config.controls.hideControls(config, true);
  }, 5000);

  document.body.addEventListener('click', (e) => {
  
    if(!config.rootElement.contains(e.target)) {
      config.controls.hideControls(config, true);
    }
  });

  config.rootElement.addEventListener('touchstart', (e) => {
    const isHidden = getComputedStyle(config.rootElement).getPropertyValue('--video-controls-opacity') === '0';

    if(isHidden) {
      if(config.controllerTimeout) {
        clearTimeout(config.controllerTimeout);
      }
      config.controls.hideControls(config, false);
      config.controllerTimeout = setTimeout(() => {
        config.controls.hideControls(config, true);
      }, 5000);
      e.preventDefault();
    }

    else {
      if(e.target === config.controlsEl) {
        config.controls.hideControls(config, true);
      }
    }
  });

  config.controlsEl.addEventListener('click', (event) => {
    // Check if device has touch capabilities
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    if( event.target === config.controlsEl) {
     config.videoTag.paused ? config.videoTag.play() : config.videoTag.pause();
    }
  });
}
