(function () {

   window.pml = window.pml || {};

   // ------ OPTIONS BLOCK BEGIN ------
   window.pml._options = {};
   // ------ OPTIONS BLOCK END ------

   var pmlScriptElement = document.currentScript;
   var namespace = pmlScriptElement.dataset["namespace"] || (pmlScriptElement.dataset["namespace"] = "pml");
   pmlScriptElement.id = "pml-sdk-bootstrap";

   function appendScript (src, scriptType, loadedCallback, errorCallback) {
      var scriptElement = document.createElement("script");
      if (scriptType) {
         scriptElement.type = scriptType;
      }
      scriptElement.onload = loadedCallback;
      scriptElement.onerror = errorCallback;
      scriptElement.src = src;
      return document.body.appendChild(scriptElement);
   }

   function initSDK (element, config) {
      var mergedConfig = Object.assign({}, window.pml._options, {"namespace": namespace}, config);
      var scriptPath = config["scriptPath"] || config["pmleFilename"] || "pmle.js";
      var scripPathPmleIndex = scriptPath.indexOf("pmle.js");
      if (scripPathPmleIndex > -1) {
         scriptPath = scriptPath.substring(0, scripPathPmleIndex);
      }
      var testScriptElement = document.createElement("script");
      var supportsModules = "noModule" in testScriptElement;
      var scriptType = supportsModules ? "module" : "";
      var sdkFilename = (supportsModules ? "pmle.js" : "pmle-compat.js");
      var useRemoteSdk = false;
      var localSdkPath = scriptPath + "/" + sdkFilename;
      var remoteSdkPath = "https://syndication-stage.puzzlerdigital.uk/testing/inews-new-sdk/" + sdkFilename;
      var sdkLoaded = function sdkLoaded  () {
         if (!window[namespace].__init) {
            alert("Unable to load SDK");
            return;
         }
         window[namespace].__init(element, mergedConfig);
      };
      var sdkLoadError = function (event) {
         var sdkElement = document.getElementById(element);
         var errorMessage = document.createElement("span");
         errorMessage.textContent = "An error occurred while trying to load the PML Syndication SDK (" + event.target.src + ")";
         sdkElement.appendChild(errorMessage);
      };
      var loadLocalSDK = function loadLocalSDK (event) {
         this.remove();
         appendScript(localSdkPath, scriptType, sdkLoaded, sdkLoadError)
      }
      if (useRemoteSdk) {
         appendScript(remoteSdkPath, scriptType, sdkLoaded, loadLocalSDK);
      } else {
         appendScript(localSdkPath, scriptType, sdkLoaded, sdkLoadError);
      }
   }

   window[namespace] = {

      //
      // External event identifiers
      //

      // This event is sent to the eventCallback once the puzzle has loaded and the game code
      // is running.
      "EVENT_CANVAS_ACTIVE": "CANVAS_ACTIVE",

      // This event is sent when the user presses the 'exit' button, or selected 'exit' from
      // a game menu.  It means they want to leave the puzzle and return to the invoking
      // application
      "EVENT_EXIT_REQUESTED": "EXIT_REQUESTED",

      // This event is sent once after the first frame of a game is rendered
      "EVENT_GAME_RENDERED": "GAME_RENDERED",
      
      // This event is sent when a puzzle has been successfully completed.
      "EVENT_GAME_COMPLETED": "GAME_COMPLETED",

      // Event sent when player opens the hint menu.
      "EVENT_HINT_MENU_SHOWN": "GAME_HINT_MENU_SHOWN",

      // Event sent when player used a hint function.
      "EVENT_GAME_HINT_USED": "GAME_HINT_USED",

      // Event sent when puzzle has been reset.
      "EVENT_GAME_RESET": "GAME_RESET",
      
      // Event sent when user leaves the puzzle via the menu button.
      "EVENT_GAME_EXIT": "GAME_EXIT",
      
      // Event sent when SDK is beginning transition to a new screen.
      "EVENT_TRANSITION_BEGIN": "TRANSITION_BEGIN",
      
      // Event sent when SDK has completed transition to a new screen.
      "EVENT_TRANSITION_END": "TRANSITION_END",

      // Event sent when player used a hint function.
      "EVENT_UPSELL_CONFIRM": "UPSELL_CONFIRM",

      // Event sent when player used a hint function.
      "EVENT_UPSELL_CANCEL": "UPSELL_CANCEL",

      /** Intialises the SDK */
      initSDK: initSDK,

      /** Alias for initSDK, to facilitate legacy deployments */
      startGame: function () {
         if (console && console.warn) {
            console.warn("[pml-warning] Legacy initialisation function called, please update this integration to use initSDK");
         }
         initSDK.apply(null, arguments);
      }

   };

})();

