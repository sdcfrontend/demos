_satellite.pushBlockingScript(function(event, target, $variables){
  //Script to listen for events from the Wayin iFrame and print to console
(function(){
	window.addEventListener('message',function(evt){
		try {
			// Get the content from the message
			var evtStr = evt.data;
			// Check if the event was raised by the Experiences platform
			if(evtStr.substring(0,5)==="_NGX_"){
				// Convert the event data to a JSON object
				var msgData = JSON.parse(evtStr.substring(5));
				// Only work on event messages
				if(msgData.action==="event"){
					var _eventData = msgData.event.split(':');
                    wayin = _eventData;
                    _satellite.notify("Dispatching WayIn Event " +  _eventData[0] + "_" + _eventData[1]);
                    _satellite.track("WayIn-"+_eventData[0] + "_" + _eventData[1]);
          console.log(_eventData);
				}
			}
		} catch(error){
			// Error handler
		}
	});
}());
});
