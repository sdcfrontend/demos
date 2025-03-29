import { bindEvents } from './components/events';
import { addContextMenu } from './components/ui';
import { controls } from './components/controls';
import { fullscreen } from './components/fullscreen';
import { pip } from './components/pip';
import { initHls } from './components/hls';
import { bindNativeAttributes } from './components/attributes';
import { timeLabel } from './components/thumbnails';
import { selectSourceAndLoad, loadManifest, loadHls, loadVideo } from './components/load-video';

import './style.css';

const init = {
  aspectRatio: '16/9',
  showAds: false,
  autoPlay: true,
  muted: false,
  accountId: '6058004172001',
  videoId: 'ref:0039b167-1664-4dc1-bb91-765f2a147d21',
  policyKey: 'BCpkADawqM3o4nRENnJkSC77aIstiiHQMEaI_dlj2r_TxSpGBXpkF-L6UaPoAQumRNVgcBTN4OJjlKfjV6JQe3eNPmYMGAgUGvNv2Rxu6GX7KzUlKhLuurt5blL_7uhfKB3_xmcku_uW7IV0',
  manifestUrl: 'https://edge.api.brightcove.com/playback/v1/accounts/${accountId}/videos/${videoId}',
  m3u8Url: null,
  live: false,
  captionsLanguage: {
    vod: ['English'],
    live: ['ENG_80_888']
  }
}

const rootElement = document.querySelector('.video-player');
const playerBody = rootElement.querySelector('.video-player-body');
const playerPoster = rootElement.querySelector('.video-player-poster');

playerBody.insertAdjacentHTML('beforeend', `
 
  <video class="video-player-tag" controlsList="nodownload nofullscreen noremoteplayback" playsinline ${init.autoPlay && 'autoplay'} preload="auto"></video>
  <div class="video-player-ads">
    <div class="video-player-ads-time"></div>
    <div class="video-player-ads-container"></div> 
  </div>
  <div class="video-player-loader" data-role="loader"></div>
  <div class="video-player-error">There was an error playing this video</div>
  <div class="video-player-controls"></div>
  <div class="video-player-captions" role="region" aria-label="Closed Captions" aria-live="polite"></div>

`);

const config = Object.assign(init, {
  rootElement,
  adsContainer: rootElement.querySelector('.video-player-ads-container'),
  adsTimer: rootElement.querySelector('.video-player-ads-time'),
  videoTag: rootElement.querySelector('.video-player-tag'),
  playerBody,
  playerPoster,
  loader: document.querySelector('[data-role="loader"]'),
  errorScreen: rootElement.querySelector('.video-player-error'),
  captionsEl: rootElement.querySelector('.video-player-captions'),
  controlsEl: rootElement.querySelector('.video-player-controls'),
  minSeekableTime: 0,
  textTracks: new Set()
});

controls(config);
addContextMenu(config);
fullscreen(config);
pip(config);
bindEvents(config);
initHls(config);
selectSourceAndLoad(config);
bindNativeAttributes(config);
timeLabel(config);

window.config = config;
config.loadVideo = loadVideo.bind(this, config);
config.loadManifest = loadManifest.bind(this, config);
config.loadHls = loadHls.bind(this, config);