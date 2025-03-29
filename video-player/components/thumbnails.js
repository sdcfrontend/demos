export function getAspectRatio(width, height) {
  // Function to calculate GCD using Euclidean algorithm
  function gcd(a, b) {
      while (b !== 0) {
          let temp = b;
          b = a % b;
          a = temp;
      }
      return a;
  }

  // Calculate GCD of width and height
  const divisor = gcd(width, height);
  
  // Calculate simplified ratio
  const ratioWidth = width / divisor;
  const ratioHeight = height / divisor;
  
  // Return in format "width/height"
  return `${ratioWidth}/${ratioHeight}`;
}

export function thumbnails(config, thumbs) {
    console.log('THUMBS', thumbs);
  if(!thumbs || !thumbs.src) {
    config.rootElement.dataset.thumbs = 'false';
    return;
}

config.rootElement.dataset.thumbs = 'true';

  config.rootElement.style.setProperty('--thumb-aspect-ratio', getAspectRatio(thumbs.width, thumbs.height));
  
  // Create the preview container
  const previewContainer = config.controls.scrubberEl.thumbs;
  
  // Create elements for the preview
  const previewImage = previewContainer.querySelector('img');
  
  // Load and parse thumbnails
  let thumbnails = [];

  fetch(thumbs.src)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load thumbnail.vtt');
            }
            return response.text();
        })
        .then(vttContent => {
            const lines = vttContent.split('\n');
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();

                if (!line || line === 'WEBVTT') continue;

                if (line.includes('-->')) {
                    const [start, end] = line.split('-->').map(timeStr => {
                        const [mins, secs] = timeStr.trim().split(':');
                        return parseFloat(mins) * 60 + parseFloat(secs);
                    });
                    
                    // Get the URL from the next line
                    const url = lines[i + 1].trim();
                    if (url.startsWith('http')) {
                        thumbnails.push({
                            start,
                            end,
                            url
                        });
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error loading thumbnails:', error);
        });

    // Handle scrubber hover
    const scrubber = config.controls.scrubberEl.input;
    
    let lastThumbnail = null; // Track the last successfully loaded thumbnail
    
    // Add mousemove event
    scrubber.addEventListener('mousemove', (e) => {
        const rect = scrubber.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const time = pos * config.videoTag.duration;
        
        // Find the appropriate thumbnail
        const thumbnail = thumbnails.find(thumb => 
            time >= thumb.start && time <= thumb.end
        );
        
        if (thumbnail) {
            // Only update if we're showing a different thumbnail
            if (lastThumbnail !== thumbnail) {
                previewImage.src = thumbnail.url;
                lastThumbnail = thumbnail;
            }
            previewContainer.style.display = 'block';
            
            // Position the preview relative to the scrubber
            const parentRect = config.controls.scrubberEl.parent.getBoundingClientRect();
            const x = e.clientX;
            
            // Calculate the maximum allowed x position to prevent overflow
            const previewWidth = previewContainer.offsetWidth;
            const maxPos = parentRect.right - previewWidth;
            
            // Calculate the center position (considering translateX(-50%))
            const centerPos = x;
            // Clamp the center position to stay within bounds
            const clampedCenterPos = Math.max(parentRect.left + previewWidth/2, Math.min(maxPos + previewWidth/2, centerPos));
            
            // Set the left position based on the clamped center position
            previewContainer.style.left = `${clampedCenterPos - parentRect.left - previewWidth/2}px`;
            previewContainer.style.bottom = (rect.height + 10) + 'px';
        } else {
            previewContainer.style.display = 'none';
        }
    });

    // Add touchmove event
    scrubber.addEventListener('touchmove', (e) => {
       
        const rect = scrubber.getBoundingClientRect();
        const pos = (e.touches[0].clientX - rect.left) / rect.width;
        const time = pos * config.videoTag.duration;
        
        // Find the appropriate thumbnail
        const thumbnail = thumbnails.find(thumb => 
            time >= thumb.start && time <= thumb.end
        );
        
        if (thumbnail) {
            // Only update if we're showing a different thumbnail
            if (lastThumbnail !== thumbnail) {
                previewImage.src = thumbnail.url;
                lastThumbnail = thumbnail;
            }
            previewContainer.style.display = 'block';
            
            // Position the preview relative to the scrubber
            const parentRect = config.controls.scrubberEl.parent.getBoundingClientRect();
            const x = e.touches[0].clientX;
            
            // Calculate the maximum allowed x position to prevent overflow
            const previewWidth = previewContainer.offsetWidth;
            const maxPos = parentRect.right - previewWidth;
            
            // Calculate the center position (considering translateX(-50%))
            const centerPos = x;
            // Clamp the center position to stay within bounds
            const clampedCenterPos = Math.max(parentRect.left + previewWidth/2, Math.min(maxPos + previewWidth/2, centerPos));
            
            // Set the left position based on the clamped center position
            previewContainer.style.left = `${clampedCenterPos - parentRect.left - previewWidth/2}px`;
            previewContainer.style.bottom = (rect.height + 10) + 'px';
        } else {
            previewContainer.style.display = 'none';
        }
    });
    
    // Add mouseleave event
    scrubber.addEventListener('mouseleave', () => {
        previewContainer.style.display = 'none';
        lastThumbnail = null;
    });
    
    // Add touchend event
    scrubber.addEventListener('touchend', () => {
        previewContainer.style.display = 'none';
        lastThumbnail = null;
    });
}

export function timeLabel(config){
    const scrubber = config.controls.scrubberEl.input;
    const timeLabel = config.controls.scrubberEl.timeLabel;

    ['mousemove', 'touchmove'].forEach((eventName) => {
        scrubber.addEventListener(eventName, (e) => {
            timeLabel.style.opacity = 1;
            let clientX = eventName === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const rect = config.controls.scrubberEl.input.getBoundingClientRect();
            const pos = (clientX - rect.left) / rect.width;
            
            // Calculate time based on live status
            let time;
            if (config.live) {
                // For live streams, calculate time remaining to live edge
                const currentTime = pos * config.maxSeekableTime;
                const timeRemaining = config.maxSeekableTime - currentTime;
                time = timeRemaining;
            } else {
                // For regular videos, use normal time calculation
                time = Math.min(config.videoTag.duration, pos * config.videoTag.duration);
            }
    
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            
            // Format time string differently for live vs regular videos
            timeLabel.textContent = config.live 
                ? `-${minutes}:${seconds}` 
                : `${minutes}:${seconds}`;
    
            const parentRect = config.controls.scrubberEl.parent.getBoundingClientRect();
            timeLabel.style.left = (clientX - parentRect.left) + 'px';
        });
    });

    ['mouseleave', 'touchend'].forEach((eventName) => {
        scrubber.addEventListener(eventName, (e) => {
            timeLabel.style.opacity = 0;
        });
    });
}