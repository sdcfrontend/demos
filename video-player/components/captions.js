import { setRootAttribute } from "./attributes";

export function captions(config) {

    // Clear any existing captions
    config.captionsEl.innerHTML = '';
    if(config.disableCaptions) {
        console.log('Captions disabled');
        setRootAttribute(config, 'captionsAvailable', 'false');
        return;
    }

    // Get the priority array based on live/VOD status
    const priorityArray = config.live ? config.captionsLanguage.live : config.captionsLanguage.vod;
    console.log('Using priority caption array:', priorityArray);

    // Filter text tracks to only include those that match priority labels
    const filteredTracks = Array.from(config.videoTag.textTracks)
        .filter(track => {
            console.log('caption track:', track);
            if (track.kind !== 'subtitles') {
                return false;
            }
            return priorityArray.some(priorityLabel => 
                track.label.toLowerCase() === priorityLabel.toLowerCase()
            );
        });

    // Add filtered tracks to our textTracks Set
    console.log('Filtered captions:', filteredTracks);

    // Find a track that matches any label in the priority array (case-insensitive)
    let track = null;
    for (const priorityLabel of priorityArray) {
        // Find all tracks with the matching label
        console.log('Checking for track with label:', priorityLabel, Array.from(config.videoTag.textTracks));
        const matchingTracks = Array.from(config.videoTag.textTracks)
            .filter(track => {
                // Track must be of type 'subtitles'
                if (track.kind !== 'subtitles') {
                    return false;
                }
                console.log('Checking track label:', track.label, 'against:', priorityLabel);
                return track.label.toLowerCase() === priorityLabel.toLowerCase();
            });
        
        // If we found any matching tracks
        if (matchingTracks.length > 0) {
            // If there's only one track, select it
            if (matchingTracks.length === 1) {
                track = matchingTracks[0];
            } else {
                // Find the track with the matching language
                const trackWithMatchingLang = matchingTracks.find(track => track.language === config.subtitleLang);
                if (trackWithMatchingLang) {
                    track = trackWithMatchingLang;
                } else {
                    // If no track matches the language, select the first one
                    track = matchingTracks[0];
                }
            }
            console.log('Found matching tracks:', matchingTracks.length, 'Selecting track:', track.label);
            setRootAttribute(config, 'captionsAvailable', 'true');
            break;
        }
    }

    if (!track) {
        console.log('No valid caption track found');
        setRootAttribute(config, 'captionsAvailable', 'false');
        return;
    }

    console.log('TRACK', track);
    console.log('SELECTED TRACK', track.label);

    // Ensure the track is properly initialized
    track.mode = 'showing';
    console.log('CAPTION', track);

    track.oncuechange = function(ev) {
        const activeCues = this.activeCues;
        if (activeCues && activeCues.length > 0) {
            const cue = activeCues[0];
            const text = cue.text;
            
            // Clean the text by removing HTML tags but preserving color classes
            let cleanedText = text
                .replace(/<c\.([a-zA-Z]+)>/g, (match, color) => `<span class="color-${color}">`)
                .replace(/<\/c>/g, '</span>');

            config.captionsEl.innerHTML = cleanedText;
        } else {
            // Clear the div when no subtitles are active
            config.captionsEl.innerHTML = '';
        }
    };

}

export function removeTextTracks(video) {
    let tracks = video.textTracks;
    console.log('TRACKS', tracks);
    for (let i = tracks.length - 1; i >= 0; i--) {
        tracks[i].mode = 'disabled'; // Hide track
        tracks[i].oncuechange = null;
        while (tracks[i].cues && tracks[i].cues.length > 0) {
            tracks[i].removeCue(tracks[i].cues[0]); // Remove all cues
        }
    }

    video.src = '';
    video.load();
}

export function setCaptionsState(config, data) {
    console.log('SET CAPTIONS STATE', data);
    if(data.subtitleTracks.length > 0) {
        config.hls.subtitleTrack = 0;
        config.subtitleLang = data.subtitleTracks.filter(track => track.name === config.captionsLanguage.vod[0])[0].lang;
        config.disableCaptions = false;
    }
    else {
        config.subtitleLang = '';
        config.textTracks.clear();
        config.disableCaptions = true;
    }

    setRootAttribute(config, 'captionsAvailable', config.disableCaptions ? 'false' : 'true');
}