// Reference to the creative's various properties and elements.
var creative = {};
var dynamicBuilder = {};
dynamicBuilder.data = [];

// Looping functionaltiy variables
var loopInterval, 
currLoop = 0,
durationLimit = 30000,
loopPause = 1500;

/**
 * Called on the window load event.
 */
function preInit() {
  // live
  if (Enabler.isInitialized()) {
    // check if parent page has loaded
    if (Enabler.isPageLoaded()) {
      politeLoad();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.PAGE_LOADED,
        politeLoad
      );
    }
  } else {
    // if local emulate polite load
    Enabler.addEventListener(studio.events.StudioEvent.INIT, preInit);
  }
}

/**
 * load required scripts
 */
function politeLoad() {
  Enabler.loadScript("https://s0.2mdn.net/creatives/assets/1951882/dynamicBuilder.min.js",init);
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  initializeDynamicData();
}

/**
 * Setup the creative data obj here
 */
function initializeDynamicData() {
  creative.data = {};
  creative.data.url = dynamicContent.Quickbooks_ADYLIC_DCO_Feed[0].JSON;
  creative.exit = {};
  creative.exit.url = dynamicContent.Quickbooks_ADYLIC_DCO_Feed[0].Exit_URL.Url
  buildData();
}

function buildData() {
  var xobj = new XMLHttpRequest();
  var url = creative.data.url;
  xobj.overrideMimeType("application/json");
  xobj.open("GET", url, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      var data = xobj.responseText;
      dynamicBuilder.data = JSON.parse(data);
      buildDOM(".dynamicAdvertContainer", dynamicBuilder.data);
      filterBuildData(dynamicBuilder.data);
      setupDom();
      // if ad is visible
      if (Enabler.isVisible()) {
        show();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
      }
    }
  };
  xobj.send(null);
}

/**
 * Collect information from dynamicBuilder for use in looping functionality.
 */
function filterBuildData(data){
  var duration = 0;
  var loop;
  for(var i = 0; i < data.length; i++){
   if(data[i].d){
     duration += parseInt(data[i].d);
   }else if(data[i].c == 'data-layer'){
     var str = data[i].h;
     var str2 = str.split("<div data-loop='");
     var str3 = str2[1].split("'></div>");
     loop = str3[0];
   }
  }
  // Add enough time that the last frame info can be viewed before starting the loop
  duration += loopPause;
  creative.duration = duration;
  if(loop == "true") {
    creative.loop = true;
  }else{
    creative.loop = false;
  }
}
/**
 * Run the loop.
 */

function handleLoop(){
  // If loop option is turn on in template
  if(creative.loop && creative.duration < durationLimit){
    // Work out how many loops can happen in duration limit
    var numOfLoops = Math.floor(durationLimit / creative.duration) -1;
    // Restrict number of loops to 2 even if it can loop more than 2
    if(numOfLoops > 2){
      numOfLoops = 2;
    }
    loopInterval = setInterval(loopAd, creative.duration, numOfLoops);
  }
  // Run the loop by deleteing the creative and rebuilding it
  function loopAd(numOfLoops){
    if(currLoop != numOfLoops){
      creative.dom.mainContainer.innerHTML = '';
      currLoop++;
      buildData();
      startAnimation(0);
    }else{
      // When the max number of loops is hit stop looping
      clearInterval(loopInterval);
    }

  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.querySelector(".dynamicAdvertContainer");
  addListeners();
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  // If ORCA creative then comment out below
  // creative.dom.mainContainer.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  handleLoop();
  creative.dom.mainContainer.style.display = "block";
  startAnimation(0);
}

function exitClickHandler() {
  Enabler.exitOverride("DynamicExit", creative.exit.url);
}

/**
 *  Main onload handler
 */
window.addEventListener("load", preInit);