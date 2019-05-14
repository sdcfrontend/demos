_satellite.pushBlockingScript(function(event, target, $variables){
  /*
* DTM-Type: Sequential Javascript
* DTM-Name: SkyTags Namespace
*/

var skyTags = window.skyTags = window.skyTags || {};
    skyTags.queue = skyTags.queue || [];
    skyTags.snippetVersion = '1.4-DTM';
    skyTags.emitter = skyTags.emitter || {
        registry: {},
        on: function on(event, handler) {
            var eventRegistry = this.registry;
            var existingHandlers = eventRegistry[event];

            if (existingHandlers) {
                eventRegistry[event].push(handler);
            } else {
                eventRegistry[event] = [handler];
            }
        }
    };

window.dtmAnalyticsLoaded = false;

var flattenObject = function(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object') {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;
                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
};

var clearVars = function(){
    try{
      _satellite.getToolsByType('sc')[0].getS().clearVars();
      return true;
    }catch(e){
      return true;
    }
};

var getEventType = function(event) {
    if(event.type == 'action'){
        return 'skytags-' + event.type + '-' +event.action.type
    }
    return 'skytags-' + event.type;
};

var dispatchCustomEvent = function(event){
    var dispatchTypeName = getEventType(event);

    _satellite.notify("Dispatching Custom Event for: " + dispatchTypeName);
    if ( !document.getElementById("dtmEvent") ){
        var div = document.createElement("div");
        div.setAttribute('id', 'dtmEvent')
        document.body.appendChild(div);
    }

    var custEvent;

    try{
        custEvent = new CustomEvent(dispatchTypeName, { "detail": event });
    }catch(err){
        custEvent = document.createEvent("CustomEvent");
        custEvent.initCustomEvent(dispatchTypeName, false, false, { detail: event });
    }
    document.getElementById("dtmEvent").dispatchEvent(custEvent);
};

var dispatchDirectCallEvent = function(event) {
    var dispatchTypeName = getEventType(event);
    _satellite.notify("Dispatching Direct Call for: " + dispatchTypeName);
    _satellite.track(dispatchTypeName);
};

var processEvent = function(event) {
    var dispatchTypeName = getEventType(event);
    _satellite.notify("SkyTags DTM Process Event Type: " + dispatchTypeName);
    var now = new Date();
    event.timestamp = {
        datetime: now,
        iso: now.toISOString()
    };

    if(clearVars()){
        _satellite.notify("SkyTags DTM Clear Vars Success.")
    } else {
        _satellite.notify("SkyTags DTM Clear Vars Failed.")
    }

    window.dtm = event;
    window.dtmFlat = flattenObject(event);

    return event;
};

var dispatchAllEventTypes = function(event) {
    var mutatedEvent = processEvent(event);
    dispatchCustomEvent(mutatedEvent);
    dispatchDirectCallEvent(mutatedEvent);
};

var saveEvent = function(event) {
    var dispatchTypeName = getEventType(event);
    _satellite.notify("SkyTags DTM Saving Event Type: " + dispatchTypeName);
    skyTags.dtmSavedEvents = skyTags.dtmSavedEvents || [];
    skyTags.dtmSavedEvents.push(event);
};

skyTags.dtmPublishSavedEvents = skyTags.dtmPublishSavedEvents || function() {
    if( skyTags.dtmSavedEvents ) {
        skyTags.dtmSavedEvents.forEach(function(event, index){
            var dispatchTypeName = getEventType(event);
            _satellite.notify("SkyTags DTM Publishing previous saved event type: " + dispatchTypeName);
            dispatchAllEventTypes(event);
        });
        skyTags.dtmSavedEvents = [];
    }
};

skyTags.emitter.on("event", function(event) {
  if( !window.dtmAnalyticsLoaded ) {
      saveEvent(event);
  } else {
      dispatchAllEventTypes(event);
  }

});

});
