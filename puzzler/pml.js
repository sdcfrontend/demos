/*!
 * PML Syndication Puzzle App Front End
 * Copyright (c) 2014 Puzzler Media Limited - All Rights Reserved.
 * Unauthorized copying this code, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Created by Steve Longhurst <steve [at] finblade.com> 2014
 */

//
// Define a 'pml' namespace which exposes some init/run and other util functions
// for the Puzzle Canvas.
//
// Specifically:
//
//   pml.startGame (canvas, options)
//   pml.resizeGame (width, height)
//
window.pml = window.pml || {};

// ------ OPTIONS BLOCK BEGIN ------
window.pml._options = {
   "custom_background": false,
   "allow_hints": true,
   "allow_timer": true,
   "allow_dates": true,
   "allow_reset": true,
   "bundle_grid_images": false,
   "bundle_solution_images": false,
   "bundle_clue_text": false,
   "outline_grid": true,
   "outline_cells": true,
   "suppress_trivial": false,
   "clue_rendering": "crossword",
   "item_starts": "Unmarked",
   "localStorage_prefix": "pws_media_288",
   "mediaid": 288,
   "paletteName": "default",
   "useAudio": true,
   "forceNewSDK": true,
   "useRemoteSDK": true,
   "remoteSDKPath": "https://sdk.puzzlerdigital.uk/demo/sky/",
   "synServerUrl": "https://syndication-stage.puzzlerdigital.uk",
   "hasSmartphoneSDK": true,
   "useNewMenu": true
};
// ------ OPTIONS BLOCK END ------

window.pml.palettes = {
    "default": {
        'colour_paper': "ffffff",
        'colour_ink': "000000",
        'colour_highlight': "00ff88",
        'colour_error': "ff0000",
        'colour_errorCell': "ffffff",
        'colour_revealed': "007700",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells': 165,
        'alpha_text': 255,
        'alpha_highlightCell': 127,
        'alpha_selectedCell': 255,
        'alpha_subtext': 180,
        'systemColour_paper': "000000",
        'systemColour_ink': "ffffff"
    },
    "xray":{
        'colour_paper':"002E25",
        'colour_ink':"C9FFF3",
        'colour_highlight':"00E8BA",
        'colour_error':"FF0000",
        'colour_errorCell':"FFFFFF",
        'colour_revealed':"00FF00",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells':170,
        'alpha_text':255,
        'alpha_highlightCell':127,
        'alpha_selectedCell':255,
        'alpha_subtext':180,
        'systemColour_ink':"000000",
        'systemColour_paper':"FFFFFF"
    },
    "manilla":{
        'colour_paper':"EBD59B",
        'colour_ink':"031854",
        'colour_highlight':"FFFFFF",
        'colour_error':"AB1327",
        'colour_errorCell':"FFFFFF",
        'colour_revealed':"48820D",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells':120,
        'alpha_text':255,
        'alpha_highlightCell':127,
        'alpha_selectedCell':255,
        'alpha_subtext':180,
        'systemColour_ink':"000000",
        'systemColour_paper':"FFFFFF"
    },
    "ocean":{
        'colour_paper':"D4FFF9",
        'colour_ink':"1668BA",
        'colour_highlight':"5CFFCE",
        'colour_error':"FF684A",
        'colour_errorCell':"FFFFFF",
        'colour_revealed':"00A854",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells':152,
        'alpha_text':255,
        'alpha_highlightCell':127,
        'alpha_selectedCell':255,
        'alpha_subtext':180,
        'systemColour_ink':"000000",
        'systemColour_paper':"FFFFFF"
    },
    "strawberry":{
        'colour_paper':"FFEEDB",
        'colour_ink':"AB1200",
        'colour_highlight':"FF5036",
        'colour_error':"330510",
        'colour_errorCell':"FFFFFF",
        'colour_revealed':"41B000",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells':165,
        'alpha_text':255,
        'alpha_highlightCell':127,
        'alpha_selectedCell':255,
        'alpha_subtext':180,
        'systemColour_ink':"000000",
        'systemColour_paper':"FFFFFF"
    },
    "berry":{
        'colour_paper':"FFC4E0",
        'colour_ink':"99004D",
        'colour_highlight':"C054FF",
        'colour_error':"C70035",
        'colour_errorCell':"FFFFFF",
        'colour_revealed':"72A300",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells':147,
        'alpha_text':255,
        'alpha_highlightCell':127,
        'alpha_selectedCell':255,
        'alpha_subtext':180,
        'systemColour_ink':"000000",
        'systemColour_paper':"FFFFFF"
    },
    "lime":{
        'colour_paper':"E7FFC7",
        'colour_ink':"2E9900",
        'colour_highlight':"A0FF70",
        'colour_error':"B50030",
        'colour_errorCell':"FFFFFF",
        'colour_revealed':"6ED97D",
        'colour_correctCell': "8def86",
        'colour_correctCellHighlight': "c8ffbe",
        'alpha_defaultCells':174,
        'alpha_text':255,
        'alpha_highlightCell':127,
        'alpha_selectedCell':255,
        'alpha_subtext':180,
        'systemColour_ink':"000000",
        'systemColour_paper':"FFFFFF"
    },
};


(function (scope) {

    function getValueForKeyPath (obj, key) {
       var value = obj, paths = key.split("."), pathCount = paths.length;
       for (var i = 0; i < pathCount; i++) {
          value = value[paths[i]];
          if (value == undefined) {
             break;
          }
       }
       return value;
    }

    function getValueForKeyOfType (obj, key, type, fallback) {
       if (!(obj && key)) {
          return fallback;
       }
       if (type === undefined) {
          type = "any";
       }
       var value = key.indexOf(".") > -1 ? getValueForKeyPath(obj, key) : obj[key];
       return value !== undefined && (type === "any" || typeof value === type) ? value : fallback;
    }

    function shouldLoadSmartphone () {
       var hasSmartphoneSDK = scope._options["hasSmartphoneSDK"] ? true : false;
       if (!hasSmartphoneSDK) {
          return false;
       }
       if (scope._options.shouldLoadSmartphone && typeof scope._options.shouldLoadSmartphone === "function") {
          var loadSmartphone = false;
          try {
             loadSmartphone = scope._options.shouldLoadSmartphone() ? true : false;
          } catch (e) {
             if (console && console.log) {
                console.log("Error calling 3rd-party shouldLoadSmartphone function: " + e);
             }
          }
          return loadSmartphone;
       }
       if (window.matchMedia) {
          var threshold = "500px";
          var maxWidth = "(max-device-width: " + threshold + ")";
          var maxHeight = "(max-device-height: " + threshold + ")";
          return window.matchMedia(maxWidth + ", " + maxHeight).matches ? true : false;
       }
       return false;
    }

    function appendScript (src, scriptType, loadedCallback, errorCallback) {
       var scriptElement = document.createElement("script");
       scriptElement.setAttribute("type", "text/javascript");
       if (scriptType) {
          scriptElement.type = scriptType;
       }
       scriptElement.onload = loadedCallback;
       scriptElement.onerror = errorCallback;
       scriptElement.src = src;
       return document.body.appendChild(scriptElement);
    }
    
    function generatePathForSDK (path, filename) {
      if (path === "") {
         return filename;
      }
      return path[path.length - 1] === "/" ? path + filename : path + "/" + filename;
    }
    
    //
    // Internal init function for minified version
    //
    var _initMin = function (element) {
    
        var testScriptElement = document.createElement("script");
        var supportsModules = "noModule" in testScriptElement;
        var scriptType = "";
        
        var namespace = "pml", filename = "pmle.js";
        var sdkOptions = window.pml._options || {};
        var config = document["ccConfig"];
        var startingPuzzle = config["starting_puzzle"];
        var puzzleAbbr = (startingPuzzle && startingPuzzle["abbr"]) || "";
        var newSDKOptions = sdkOptions["newSDKOptions"] || {};
        var newSDKAbbrs = newSDKOptions["enabledAbbreviations"] || sdkOptions["newSDKAbbreviations"] || [];
        var useNewSDK = getValueForKeyOfType(sdkOptions, "forceNewSDK", "boolean", newSDKAbbrs.indexOf(puzzleAbbr) > -1);
        var newSDKBasename = newSDKOptions["basename"] || "pmle-next";
        
        if (useNewSDK) {
           filename = supportsModules ? newSDKBasename + ".js" : newSDKBasename + "-compat.js";
        } else if (shouldLoadSmartphone()) {
           filename = "pmle-smartphone.js";
        }

        var useRemoteSDK = useNewSDK && sdkOptions["remoteSDKPath"] && getValueForKeyOfType(sdkOptions, "useRemoteSDK", "boolean", false);
        var remoteSDKPath = useRemoteSDK ? generatePathForSDK(sdkOptions["remoteSDKPath"] || "", filename) : "";
        var defaultSDKPath = generatePathForSDK(config["scriptPath"], filename);

        var sdkLoaded = function sdkLoaded () {
           if (window[namespace].__init) {
              window[namespace].__init(element, sdkOptions);
           }
        };
        
        var loadDefaultSDK = function loadLocalSDK (event) {
           this.remove();
           appendScript(defaultSDKPath, scriptType, sdkLoaded, null)
        }
        
        if (useRemoteSDK) {
           appendScript(remoteSDKPath, scriptType, sdkLoaded, loadDefaultSDK);
        } else {
           appendScript(defaultSDKPath, scriptType, sdkLoaded, null);
        }
        
    };

    //
    // Internal init function for un-minified version (development use only)
    //
    var _initDev = function(canvas) {
        var mainFunc = function() {
            var mainScript = document.createElement('script');
            mainScript.setAttribute('type', 'text/javascript');
            mainScript.setAttribute('src', '../node_modules/cocos2d-html5/lib/cc.js');
            document.getElementsByTagName('head')[0].appendChild(mainScript);
        };

        var onLoaded = function(script, toCall) {
            if (script.addEventListener) {
                script.addEventListener('load', toCall, false);
            }
            // IE triggers this event when the file is loaded
            else if (script.attachEvent) {
                script.attachEvent('onreadystatechange', function() {
                    if (script.readyState == 'complete' || script.readyState == 'loaded') {
                        toCall();
                    }
                });
            }
        };

        var loadScript = function (src, callAfter) {
           var aScript = document.createElement('script');
           aScript.setAttribute('type', 'text/javascript');
           aScript.setAttribute('src', src);
           document.getElementsByTagName('head')[0].appendChild(aScript);
           onLoaded (aScript, callAfter);
        };


        loadScript ('jszip.js', function () {
           loadScript ('baseCfg.js', mainFunc);
        });
    };

    var _cloneObject = function(x) {
        if (x === null || x === undefined)
            return x;
        if (x.clone)
            return x.clone();
        if (x.constructor == Array) {
            var r = [];
            for (var i = 0, n = x.length; i < n; i++)
                r.push(clone(x[i]));
            return r;
        }
        return x;
    };

    var shallowMerge = function () {
       if (Object.assign) {
         return Object.assign.apply(Object, arguments);
       }
       var target = arguments[0], sources = Array.prototype.slice.call(arguments, 1);
       sources.forEach(function (source) {
         Object.keys(source).forEach(function (key) {
            target[key] = source[key];
         });
       });
       return target;
    }
    
    var createPMLCompetitionStylesheet = function () {
    
       var styleId = "pml-syndication-competition-css";
       var style = document.getElementById(styleId);
       var head;
       
       if (!style) {    
       
          var css = ".full-width{width:100%}.full-height{height:100%}.no-height{height:0}#_webview{margin:auto;background-color:#fcfcfc;position:absolute;width:95%;max-width:600px;overflow:scroll;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);border-radius:10px;-webkit-transition:opacity .3s ease-out;transition:opacity .8 ease-out}@media (min-width:320px){#_webview{font-size:17px}}@media (min-width:350px){#_webview{font-size:19px}}@media (min-width:400px){#_webview{font-size:20px}}@media (min-width:600px){#_webview{font-size:24px}}@media (min-width:500px) and (orientation:landscape){#_webview{overflow:auto;max-height:500px;max-width:600px}#comp-upsell-image-wrapper{float:left;width:50%;height:100%;border-bottom-left-radius:10px}#right-column{width:50%}}@media (orientation:portrait){#upsell-img-wrapper{width:100%;border-top-right-radius:10px}#_webview{overflow:initial}}#container{margin:0}.pml-modal{margin:.8em;font-family:Arial}.pml-modal p{margin:.75em 0}.pml-modal label{display:inline-block;width:auto!important;margin-right:10px;white-space:nowrap}.pml-modal-header{display:table;color:#404040}.pml-modal-header>div{display:table-cell;vertical-align:middle}.pml-modal-content{font-size:.8em;line-height:1.2;color:#505050}.pml-transition-fade{transition:opacity .8s ease-out;opacity:1}.pml-transparent{opacity:0}.pml-modal .form-table{display:table;width:100%;border-spacing:0 .4em}.pml-modal .form-table-row{display:table-row}.pml-modal .form-table-row>div{display:table-cell;vertical-align:middle}#errorDiv{background-color:#fde6e7;font-size:.8em;margin:10px 0;padding:10px 5px;display:none}#alertImage{margin:0 10px}#messageDiv{width:100%;height:auto}.pml-modal h3{margin:0;padding:0;font-size:1.13em;line-height:1.1}.pml-modal .error{border-color:#f5a5a7;border-style:solid;color:#c12108}#submitbtn{margin-left:1%}.pml-modal input[type=email],.pml-modal input[type=text]{width:100%;font-size:.8em;padding:5px;box-sizing:border-box;border:1px solid #aaa}body,html{padding:0;margin:0;background-color:#fff}.btn-keyboard{background:#6a6e70;background-image:-webkit-linear-gradient(top,#fafafa,#d1d1d1);background-image:-moz-linear-gradient(top,#fafafa,#d1d1d1);background-image:-ms-linear-gradient(top,#fafafa,#d1d1d1);background-image:-o-linear-gradient(top,#fafafa,#d1d1d1);background-image:linear-gradient(to bottom,#fafafa,#d1d1d1);-webkit-border-radius:6;-moz-border-radius:6;border-radius:6px;-webkit-box-shadow:0 1px 3px #6e6e6e;-moz-box-shadow:0 1px 3px #6e6e6e;box-shadow:0 1px 3px #6e6e6e;font-family:Arial;color:#000;font-size:1em;padding:10px 2px;text-decoration:none;display:inline-block;text-align:center}.btn-keyboard:active{background:#b0b0b0;background-image:-webkit-linear-gradient(top,#b0b0b0,#525252);background-image:-moz-linear-gradient(top,#b0b0b0,#525252);background-image:-ms-linear-gradient(top,#b0b0b0,#525252);background-image:-o-linear-gradient(top,#b0b0b0,#525252);background-image:linear-gradient(to bottom,#b0b0b0,#525252);text-decoration:none}#upsell-img-wrapper{width:100%;border-top-left-radius:10px;background:#85c1ab;background:-moz-linear-gradient(-45deg,#85c1ab 0,#6fc6a0 17%,#48af84 33%,#007f4e 67%,#005631 83%,#002b21 100%);background:-webkit-linear-gradient(-45deg,#85c1ab 0,#6fc6a0 17%,#48af84 33%,#007f4e 67%,#005631 83%,#002b21 100%);background:linear-gradient(135deg,#85c1ab 0,#6fc6a0 17%,#48af84 33%,#007f4e 67%,#005631 83%,#002b21 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#85c1ab', endColorstr='#002b21', GradientType=1 )}#upsell-img{display:block;width:100%;box-sizing:border-box}";
          
          head = document.head || document.getElementsByTagName('head')[0];
          style = document.createElement('style');
          style.id = styleId;
          style.type = 'text/css';
          
          if (style.styleSheet){
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
          
          head.appendChild(style);
       }
       
       style = null;
       head = null;
       
    };

    var setupPalette = function (customPalette) {
       var defaultPalette = {
          "colour_paper": "ffffff",
          "colour_ink": "000000",
          "colour_ink_highlight": "000000",
          "colour_highlight": "7fffc3",
          "colour_selected": "00ff88",
          "colour_error": "ff0000",
          "colour_errorCell": "ffffff",
          "colour_revealed": "007700",
          "colour_correctCell": "8def86",
          "colour_correctCellHighlight": "c8ffbe",
          "alpha_defaultCells": 165,
          "alpha_text": 255,
          "alpha_highlightCell": 127,
          "alpha_selectedCell": 255,
          "alpha_subtext": 180,
          "systemColour_paper": "000000",
          "systemColour_ink": "ffffff",
          "systemButton_paper": "FFFFFF",
          "systemButton_ink": "000000",
          "grid_inkcolor_override": null,
          "grid_papercolor_override": null,
          "menuCard_papercolor_override": null,
          "list_inkcolor_override": null,
          "sudoku_inkcolor_override": null,
          "sudoku_highlight_override": null,
          "sudoku_mode_highlight": "00ff88"
       };
       return shallowMerge({}, defaultPalette, customPalette);
    }
    
    var applyLegacyFallbacksToPalette = function (palette) {
       if (!palette) {
          return null;
       }
       var fallbacks = [
          {key: "colour_selected", fallback: "colour_highlight"},
          {key: "colour_correctCellHighlight", fallback: "colour_correctCell"},
          {key: "sudoku_mode_highlight", fallback: "colour_highlight"}
       ];
       for (var i = 0; i < fallbacks.length; i++) {
          var data = fallbacks[i];
          var key = data.key, fallbackValue = palette[data.fallback];
          if (!palette[key] && fallbackValue) {
             palette[key] = fallbackValue;
          }
       }
       return palette;
    }

    var handleNamedPalette = function (paletteName) {

      if (!paletteName) {
         console.log("Palette name not provided, will ignore");
         return null;
      }

      var bwIndexStart = paletteName.length - 3;
      var isBW = paletteName.substring(bwIndexStart) == "_bw";
      if (isBW) {
         paletteName = paletteName.substring (0, bwIndexStart);
      }

      if (paletteName && !scope.palettes[paletteName]) {
         console.log("Unknown palette name '" + paletteName + "', using 'default' instead.");
         paletteName = "default";
      }

      var selectedPalette = scope.palettes[paletteName];
      var overrides = !isBW ? null : {
         "grid_inkcolor_override": "000000",
         "grid_papercolor_override": "FFFFFF",
         "menuCard_papercolor_override": "FFFFFF",
         "menuCard_inkcolor_override": "000000",
         "list_inkcolor_override": "000000",
         "sudoku_inkcolor_override": "000000",
         "sudoku_highlight_override": "222222",
         "alpha_defaultCells": 255
      };

      return shallowMerge({}, selectedPalette, overrides);

    }

    var getDarkModeMediaQuery = function () {
       return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)") || null;
    };

    var getSystemColorScheme = function (mediaQueryOrEvent) {
       if (!mediaQueryOrEvent) {
          mediaQueryOrEvent = getDarkModeMediaQuery();
       }
       return mediaQueryOrEvent && mediaQueryOrEvent.matches ? "dark" : "light";
    };

    var getColorSchemePreference = function () {
       return scope._options["colorSchemePreference"] || scope._options["colorSchemePreference"] || "light";
    }

    var setupColorSchemeListener = function (darkModeQuery) {
       if (!darkModeQuery) {
          return;
       }
       var debouncedCallbackId = null, eventCallback = function (event) {
          if (debouncedCallbackId !== null) {
             window.clearTimeout(debouncedCallbackId);
          }
          debouncedCallbackId = setTimeout(function () {
             var schemePreference = getColorSchemePreference();
             if (schemePreference !== "system") {
                return;
             }
             var newColorScheme = getSystemColorScheme(event);
             var oldPalette = document.ccConfig["palette"];
             var newPalette = scope._options["resolved_palette"][newColorScheme];
             if (newPalette !== oldPalette) {
                scope.resetPalette(newPalette);
             }
          }, 500);
       };
       if (darkModeQuery.addEventListener) {
          darkModeQuery.addEventListener("change", eventCallback);
       } else if (darkModeQuery.addListener) {
          darkModeQuery.addListener(eventCallback);
       }
    }

    // Reference to a callback event handler function
    var _eventCallback = null, _analyticsCallback = null;

    // Intialise the ccConfig settings needed by the Cocos2d engine,
    // along with settings specific to our game canvas code
    var _ccConfig = function (canvas, options) {

        // Defaults
        canvas = canvas || "gameCanvas";
        options = options || {};

        // Merge in the customisation options (these can't be overridden for safety)
        for (var i in scope._custom) {
           options[i] = scope._custom [i];
        }

        // Merge in the invoking options (passed to startGame)
        for (var i in options) {
            scope._options[i] = options[i];
        }
        
        var touchSupported = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        var deviceType = scope._options.deviceType || (touchSupported ? "mobile" : "web");

        // Externally, we switched from using 'mobile' to 'tablet', which is more appropriate
        if (deviceType === "tablet") {
           deviceType = "mobile";
        }

        // Determine default startup orientation
        var canvasE = document.getElementById(canvas);
        
        // If deviceType is set to mobile, update canvas size to reflect the parent node, with a fallback
        // of using the window measurements. This allows 3rd parties more control over the initial size of
        // the canvas.
        if (deviceType === "mobile" && canvasE.parentElement) {
           var parentElement = canvasE.parentElement;
           canvasE.width = parentElement.clientWidth ? parentElement.clientWidth : window.innerWidth;
           canvasE.height = parentElement.clientHeight ? parentElement.clientHeight : window.innerHeight;
        }
        
        // Get orientation
        var alignment = "landscape";
        if (canvasE.width < canvasE.height) {
            alignment = "portrait";
        }

        console.log("Dimension: width: " + canvasE.width + " height: " + canvasE.height);
        console.log("Alignment: " + alignment);
        var _loadSmartphone = shouldLoadSmartphone();

        if (scope._options.palette && scope._options.palette.name) {
            scope.palettes [scope._options.palette.name] = _cloneObject (scope._options.palette);
            scope._options ['paletteName'] = scope._options.palette.name;
        }
        
        var resize_pending = false;
        
        // Create a temporary resize handler to track resize events until the SDK is loaded.
        function resize (event) {
           resize_pending = true;
        }

        window.addEventListener('resize', resize, false);
        
        scope["isResizePending"] = function () {
           return resize_pending;
        }
        
        scope["clearResizePendingFlag"] = function () {
           resize_pending = false;
        }
        
        scope["removeResizeListener"] = function () {
           window.removeEventListener("resize", resize);
        };
        
        function isBrandingEnabled (options) {
           return options['brandingEnabled'] &&
                  options['branding_non-retina_landscape'] &&
                  options['branding_non-retina_portrait'] &&
                  options['branding_retina_landscape'] &&
                  options['branding_retina_portrait'] && 
                  options['branding_web'] ? true : false;
        }

        var fallbackPalette = applyLegacyFallbacksToPalette(scope._options["palette"]) || handleNamedPalette(scope._options["paletteName"]);
        scope._options["resolved_palette"] = {
           "light": setupPalette(applyLegacyFallbacksToPalette(scope._options["paletteLight"]) || fallbackPalette),
           "dark": setupPalette(applyLegacyFallbacksToPalette(scope._options["paletteDark"]) || fallbackPalette)
        };

        var schemePreference = getColorSchemePreference();
        var darkModeQuery = getDarkModeMediaQuery();
        setupColorSchemeListener(darkModeQuery);

        var currentColorScheme = schemePreference === "system" ? getSystemColorScheme(darkModeQuery) : schemePreference;
        var _palette = scope._options["resolved_palette"][currentColorScheme];
        var autoFocusConfig = scope._options["autoFocus"];
        var autoFocusEnabled = getValueForKeyOfType(autoFocusConfig, "enabled", "boolean", true);
        var autoFocusPreventScroll = getValueForKeyOfType(autoFocusConfig, "preventScroll", "boolean", false);

        var scriptPath = getValueForKeyOfType(scope._options, "scriptPath", "string", "");
        var legacyScriptPath = getValueForKeyOfType(scope._options, "pmleFilename", "string", "").replace("pmle.js", "");
        if (scriptPath.length === 0 && legacyScriptPath.length > 0) {
           scriptPath = legacyScriptPath;
           console.warn("\"pmleFilename\" option is deprecated, please use \"scriptPath\" with the value \"" + scriptPath + "\"");
        }

        document['ccConfig'] = {
            //
            // Cocos2d config
            //
            "autoFocus": {"enabled": autoFocusEnabled, "preventScroll": autoFocusPreventScroll},
            'palette': _palette,
            'starting_puzzle':scope._options['starting_puzzle']?scope._options['starting_puzzle']:undefined,
            'puzzles': scope._options['puzzles'],
            'branding_non-retina_landscape': scope._options['branding_non-retina_landscape'] ? scope._options['branding_non-retina_landscape'] : null,
            'branding_non-retina_portrait': scope._options['branding_non-retina_portrait'] ? scope._options['branding_non-retina_portrait'] : null,
            'branding_retina_landscape': scope._options['branding_retina_landscape'] ? scope._options['branding_retina_landscape'] : null,
            'branding_retina_portrait': scope._options['branding_retina_portrait'] ? scope._options['branding_retina_portrait'] : null,
            'branding_web': scope._options['branding_web'] ? scope._options['branding_web'] : null,
            'brandingEnabled': isBrandingEnabled(scope._options),
            
            'popupGreyout': scope._options['popupGreyout'] ? scope._options['popupGreyout'] : "#FFFFFF7F",
            'custom_background': scope._options['custom_background'] ? scope._options['custom_background'] : false,
            'font': scope._options['font'] ? scope._options['font'] : {
               'default': "Arial",
            },
            'localStorage_prefix': scope._options['localStorage_prefix'] ? scope._options['localStorage_prefix'] : "_puzzlerMediaLimited",
            'allow_hints': scope._options['allow_hints'] != null ? scope._options['allow_hints'] : true,
            'allow_timer': scope._options['allow_timer'] != null ? scope._options['allow_timer'] : true,
            'allow_dates': scope._options['allow_dates'] != null ? scope._options['allow_dates'] : true,
            'useAllPuzzles': scope._options['useAllPuzzles'] != null ? scope._options['useAllPuzzles'] : false,
            'resizeWithBrowserSize': scope._options['resizeWithBrowserSize'] != null ? scope._options['resizeWithBrowserSize'] : true,
            'stopAllEventPropagation': typeof scope._options['stopAllEventPropagation'] === 'boolean' ? scope._options['stopAllEventPropagation'] : true,

            'scriptPath': scriptPath,
            'puzzleZipName': scope._options['puzzleZipName'] != null ? scope._options['puzzleZipName'] : "puzzles.zip",
            'resourceZipName': scope._options['resourceZipName'] != null ? scope._options['resourceZipName'] : "res.zip",
            'resourcePath': scope._options['resourcePath'] != null ? scope._options['resourcePath'] : "res",
            'puzzleImagePath': scope._options['puzzleImagePath'] != null ? scope._options['puzzleImagePath'] : "",
            'audioLocation': scope._options['audioLocation'] != null ? scope._options['audioLocation'] : "Audio",
            'useAudio': scope._options['useAudio'] != null ? scope._options['useAudio'] : true,
            'limitResourceLoading': scope._options['limitResourceLoading'] != null ? scope._options['limitResourceLoading'] : null,

            'mediaid': typeof scope._options['mediaid'] !== 'undefined' ? scope._options['mediaid'] : 0,

            // Optional override to allow hiding of keyboard for all resolutions.
            'forceKeyboardHidden': scope._options['forceKeyboardHidden'] || false,

            // Allow clue numbers to be rendered separately from the corresponding clue.
            'separatedClueNumbering': scope._options['separatedClueNumbering'] || true,

            // Cell flourish animations on/off (words entered, puzzles solved, etc.)
            'cellFlourishAnimations': typeof scope._options['cellFlourishAnimations'] === 'boolean' ? scope._options['cellFlourishAnimations'] : true,

            // Allow customisation of the date format string used in the menu tiles.
            'menuDateFormat': typeof scope._options['menuDateFormat'] === 'string' ? scope._options['menuDateFormat'] : "dddd DD/MM/YY",
            
            // Allow overriding the scale of the first tile in the menu.
            'menuFirstTileScale': typeof scope._options['menuFirstTileScale'] === 'number' ? Math.max(1, scope._options['menuFirstTileScale']) : 1,

            // Show the MENU button on the keyboard (to return to the puzzle chooser menu)
            'showMenuButton': typeof scope._options['showMenuButton'] === 'boolean' ? scope._options['showMenuButton'] : true,

            // Show the ? help button
            'showHelpButton': typeof scope._options['showHelpButton'] === 'boolean' ? scope._options['showHelpButton'] : true,

            // Show the EXIT button on the main menu
            'showExitButton': typeof scope._options['showExitButton'] === 'boolean' ? scope._options['showExitButton'] : false,

            // Enable mouse over highlights (used to be the default true for the desktop build, false for mobile)
            'showMouseHighlights': typeof scope._options['showMouseHighlights'] === 'boolean' ? scope._options['showMouseHighlights'] : (deviceType == "web"),

            // Use a wide button with MENU on it, that functions the same as the ? button
            // Temporarily forced off, as it causes problems with other options
            'altHelpMenuButton': false, //typeof scope._options['altHelpMenuButton'] === 'boolean' ? scope._options['altHelpMenuButton'] : false,

            // Enable the various XW keys on the keyboard. letter skip, A/D and < > nav arrows
            'crosswordKeyboardKeys': typeof scope._options['crosswordKeyboardKeys'] === 'boolean' ? scope._options['crosswordKeyboardKeys'] : true,

            // Make label numbers in empty XW and CC cells larger, and they contract when letters are entered in
            'expandedCellLabels': typeof scope._options['expandedCellLabels'] === 'boolean' ? scope._options['expandedCellLabels'] : true,

            // Expand cell labels my multiplying the font size by this value.  1.0 means no scale
            'expandedCellLabelScale': typeof scope._options['expandedCellLabelScale'] === 'number' ? scope._options['expandedCellLabelScale'] : 1.5,

            // Allow hide/reveal keyboard in XW and CC
            'keyboardHidingEnabled': typeof scope._options['keyboardHidingEnabled'] === 'boolean' ? scope._options['keyboardHidingEnabled'] : false,

            // Optional override for the CSS applied to the "greyout" overlay.
            'overlayCSS': scope._options['overlayCSS'] != null ? scope._options['overlayCSS'] : {
               "position" : "absolute",
               "top" : "0px",
               "left" : "0px",
               "width" : "100%",
               "height" : "100%",
               "backgroundColor" : "rgba(32,32,32,0.9)",
               "transition": "opacity 300ms"
            },

            // Options for competition puzzles, default to empty object to fail early.
            'competitionOptions': scope._options['competitionOptions'] != null ? scope._options['competitionOptions'] : {},

            // Instruction settings
            'instructionOptions': scope._options['instructionOptions'] != null ? scope._options['instructionOptions'] : {},

            //crossword is rendering we have now, skeleton is like (two words) and supress trivial turns it off
            'clue_rendering':scope._options['clue_rendering'] != null ? scope._options['clue_rendering'] : "crossword",
            'supress_trivial':scope._options['supress_trivial'] != null ? scope._options['supress_trivial'] : false,
            // Fixed options
            'canvasPositionStyle': typeof scope._options['canvasPositionStyle'] === "string" ? scope._options['canvasPositionStyle'] : "absolute",
            'frameRate': 30,
            'renderMode': 1,
            'pmlScope':scope,
            'outline_cells':scope._options['outline_cells']!=null?scope._options['outline_cells']:true,
            'outline_grid':scope._options['outline_grid']!=null?scope._options['outline_grid']:false,
            
            // Per-genre opt-in for grid rendering overrides where supported. Unsupported genres are ignored.
            'gridConfiguration': scope._options['gridConfiguration'] ? scope._options['gridConfiguration'] : {
               "KK": {"floating": true, "applyCellSpacing": true}
            },
            
            // Todays date
            'todays_date': scope._options['todays_date'] || (new Date),

            // Can be overridden
            'tag': canvas || "gameCanvas",
            'COCOS2D_DEBUG': scope._options['COCOS2D_DEBUG'] || 0,
            'showFPS':scope._options['showFPS'] || false,
            'maxDPR': scope._options['maxDPR'],
            'forceDevicePixelRatioScaling': scope._options['forceDevicePixelRatioScaling'],
            'onDemandRendering': typeof scope._options['onDemandRendering'] === "boolean" ? scope._options['onDemandRendering'] : true,
            
            // Custom alpha value for clue / word list greyouts.
            'listGreyoutAlpha' : typeof(scope._options['listGreyoutAlpha']) === "number" ? scope._options['listGreyoutAlpha'] : 127,

            // Sudoku crosshair toggle option visibility
            'sudokuCrosshairOptionVisible': typeof scope._options['sudokuCrosshairOptionVisible'] === 'boolean' ? scope._options['sudokuCrosshairOptionVisible'] : true,
            'sudokuButtonsOnControlBar': typeof scope._options['sudokuButtonsOnControlBar'] === 'boolean' ? scope._options['sudokuButtonsOnControlBar'] : false,
            'sudokuPencilDeleteMode': scope._options['sudokuPencilDeleteMode'] || "hide",

            // Defaults
            'timerEnabledDefault': typeof scope._options['timerEnabledDefault'] === 'boolean' ? scope._options['timerEnabledDefault'] : true,
            'timerAutostartDefault': typeof scope._options['timerAutostartDefault'] === 'boolean' ? scope._options['timerAutostartDefault'] : true,
            'crosswordsClueSkipDefault': typeof scope._options['crosswordsClueSkipDefault'] === 'boolean' ? scope._options['crosswordsClueSkipDefault'] : true,
            'sudokuCrosshairOptionDefault': typeof scope._options['sudokuCrosshairOptionDefault'] === 'boolean' ? scope._options['sudokuCrosshairOptionDefault'] : true,

            // Game options
            'useZipPuzzles': typeof scope._options['useZipPuzzles'] === 'boolean' ? scope._options['useZipPuzzles'] : true,
            'useZipResources': typeof scope._options['useZipResources'] === 'boolean' ? scope._options['useZipResources'] : true,
            'showPuzzleSolution': typeof scope._options['showPuzzleSolution'] === 'boolean' ? scope._options['showPuzzleSolution'] : void 0,
            'nextClueKeyImage': scope._options['nextClueKeyImage'] ?  scope._options['nextClueKeyImage'] : null,
            'prevClueKeyImage': scope._options['prevClueKeyImage'] ?  scope._options['prevClueKeyImage'] : null,
            'adToggleAcrossKeyImage': scope._options['adToggleAcrossKeyImage'] ?  scope._options['adToggleAcrossKeyImage'] : null,
            'adToggleDownKeyImage': scope._options['adToggleDownKeyImage'] ?  scope._options['adToggleDownKeyImage'] : null,
            'backspaceKeyDecal': scope._options['backspaceKeyDecal'] ?  scope._options['backspaceKeyDecal'] : null,
            'penKeyDecal': scope._options['penKeyDecal'] ?  scope._options['penKeyDecal'] : null,
            'pencilKeyDecal': scope._options['pencilKeyDecal'] ?  scope._options['pencilKeyDecal'] : null,
            'deviceType': deviceType,
            'deviceAlignment': scope._options.deviceAlignment || alignment,
            'embedded': scope._options.embedded ? scope._options.embedded : false,
            
            // Allow disabling the asynchronous loading of grid data to speed up loading.
            'asyncGridLoading': typeof scope._options['asyncGridLoading'] === 'boolean' ? scope._options['asyncGridLoading'] : true,
            
            'synServerUrl': typeof scope._options['synServerUrl'] === 'string' ? scope._options['synServerUrl'] : "",
            
            // Allow save data expiration offset to be customised by SDK configuration
            'puzzleExpiry': {
               'standardOffset': scope._options['puzzleExpiry'] && typeof scope._options['puzzleExpiry']['standardOffset'] === "number" ? scope._options['puzzleExpiry']['standardOffset'] : 30
            }
            
        };
        
        if (_loadSmartphone) {
            var config = document["ccConfig"];
            config["project_type"] = "javascript";
            config["id"] = canvas || "gameCanvas";
            if (scope._options.dev) {
                config["engineDir"] = "frameworks/cocos2d-html5";
                config["modules"] = ["core", "menus", "shape-nodes", "audio", "gui"];
                config["jsList"] = [
                    "lib/moment.js",
                    "src/resource.js",
                    "src/managers/storage_manager.js",
                    "src/strings/strings.js",
                    "src/utils/constants.js",
                    "src/utils/sound.js",
                    "src/utils/utils.js",
                    "src/utils/random.js",
                    "src/utils/test_data.js",
                    "src/utils/screen_template.js",
                    "src/utils/game_template.js",
                    "src/components/component_template.js",
                    "src/components/linear_layout.js",
                    "src/components/menu_bar.js",
                    "src/components/timer.js",
                    "src/components/grid.js",
                    "src/components/image_view.js",
                    "src/components/list_view.js",
                    "src/components/theme_bar.js",
                    "src/components/hangman_gallows.js",
                    "src/components/hangman_grid.js",
                    "src/components/sudoku_input.js",
                    "src/components/qwerty_keyboard.js",
                    "src/components/clue_view.js",
                    "src/misc/popups.js",
                    "src/nodes/line_node.js",
                    "src/nodes/round_rect.js",
                    "src/games/crossword.js",
                    "src/games/hangman.js",
                    "src/games/jigsaw.js",
                    "src/games/splitwords.js",
                    "src/games/sudoku.js",
                    "src/games/wordsearch.js"
                ];
            }
        }
        

        // Frame size is optional
        // Frame size, to use if resizeWithBrowserSize is false
        if (scope._options['frameWidth'] || scope._options['frameHeight']) {
           document['ccConfig']['frameWidth']  = scope._options['frameWidth'] ? scope._options['frameWidth'] : 960;
           document['ccConfig']['frameHeight'] = scope._options['frameHeight'] ? scope._options['frameHeight'] : 640;
        }
    };

    //
    // External event identifiers
    //

    // This event is sent to the eventCallback once the puzzle has loaded and the game code
    // is running.
    scope['EVENT_CANVAS_ACTIVE'] = "CANVAS_ACTIVE";

    // This event is sent when the user presses the 'exit' button, or selected 'exit' from
    // a game menu.  It means they want to leave the puzzle and return to the invoking
    // application
    scope['EVENT_EXIT_REQUESTED'] = "EXIT_REQUESTED";

    // This event is sent once after the first frame of a game is rendered
    scope['EVENT_GAME_RENDERED'] = "GAME_RENDERED";
    
    // This event is sent when a puzzle has been successfully completed.
    scope['EVENT_GAME_COMPLETED'] = "GAME_COMPLETED";

    // Event sent when player opens the hint menu.
    scope['EVENT_HINT_MENU_SHOWN'] = "GAME_HINT_MENU_SHOWN";

    // Event sent when player used a hint function.
    scope['EVENT_GAME_HINT_USED'] = "GAME_HINT_USED";

    // Event sent when puzzle has been reset.
    scope['EVENT_GAME_RESET'] = "GAME_RESET";
    
    // Event sent when user leaves the puzzle via the menu button.
    scope['EVENT_GAME_EXIT'] = "GAME_EXIT";
    
    // Event sent when SDK is beginning transition to a new screen.
    scope['EVENT_TRANSITION_BEGIN'] = "TRANSITION_BEGIN";
    
    // Event sent when SDK has completed transition to a new screen.
    scope['EVENT_TRANSITION_END'] = "TRANSITION_END";

   // Event sent when player used a hint function.
   scope['EVENT_UPSELL_CONFIRM'] = "UPSELL_CONFIRM";

   // Event sent when player used a hint function.
   scope['EVENT_UPSELL_CANCEL'] = "UPSELL_CANCEL";
    
    //
    // Invoke the event callback function
    //
    scope['eventCallback'] = function(name, data) {
       try {
          scope["analyticsCallback"](name, data);
          var shouldSwallow = _eventCallback ? _eventCallback(name, data) : false;
          return shouldSwallow ? true : false;
       } catch (err) {
          console.log("Error invoking eventCallback: " + err)
       }
    };

    scope['analyticsCallback'] = function (name, data) {
       if (!_analyticsCallback) {
          return;
       }
       var evtName = "";
       switch (name) {
          case pml.EVENT_GAME_RENDERED: {
             evtName = data["menu"] ? "MenuLoaded" : "PuzzleLoaded";
             break;
          }
          case pml.EVENT_HINT_MENU_SHOWN: {
             evtName = "MorePuzzleInfo";
             break;
          }
          case pml.EVENT_GAME_HINT_USED: {
             evtName = "PuzzleHintUsed";
             break;
          }
          case pml.EVENT_GAME_COMPLETED: {
             evtName = "PuzzleCompleted";
             break;
          }
          case pml.EVENT_GAME_RESET: {
             evtName = "PuzzleReset";
             break;
          }
          case pml.EVENT_GAME_EXIT: {
             evtName = "PuzzleExited";
             break;
          }
          case pml.EVENT_UPSELL_CONFIRM:
          case pml.EVENT_UPSELL_CANCEL: {
             evtName = "UpsellPanel"
             break;
          }
       }
       if (evtName === "") {
          return;
       }
       var evt = {"event": evtName};
       var remappedProperties = [
          {"srcKey": "date", "dstKey": "puzzleDate"},
          {"srcKey": "puzzle_id", "dstKey": "puzzleID"},
          {"srcKey": "name", "dstKey": "genre"},
          {"srcKey": "abbr", "dstKey": "genreAbbreviation"},
          {"srcKey": "plevel", "dstKey": "difficultyLevel"},
          {"srcKey": "custom_level", "dstKey": "difficultyLevelCustomName"},
          {"srcKey": "successful", "dstKey": "puzzleCorrect"},
          {"srcKey": "timer_value", "dstKey": "timerValue"},
          {"srcKey": "hint_level", "dstKey": "hintLevel"},
          {"srcKey": "custom_data", "dstKey": "customData"}
       ];
       remappedProperties.forEach(function (keyData) {
          var value = data[keyData["srcKey"]];
          if (value !== undefined) {
             evt[keyData["dstKey"]] = value;
          }
       });
       _analyticsCallback(evt);
    };
    
    (function setupSuspendResume() {
       var suspended = false;
       scope['isSuspended'] = function () {
          return suspended;
       }
       scope['suspend'] = function () {
          if (scope._suspend) {
             scope._suspend();
             suspended = true;
          }
       }
       scope['resume'] = function () {
          if (scope._resume) {
             scope._resume();
             suspended = false;
          }
       }
    })();
    
    //
    // External 'start' function.
    //
    // Takes 2 parameters;
    //
    // canvas: is the id/name of the canvas element (defaults to 'gameCanvas')
    // options: is an options object (currently unused)
    //
    scope ['startGame'] = function (canvas, options) {
        if (get_browser() == 'MSIE' && parseInt(get_browser_version()) < 10) {
            if (document.getElementById("ie111")) {
                document.getElementById("ie111").src = getBase64UncompatibleString(0);
            }
            if (document.getElementById("ie112")) {
                document.getElementById("ie112").src = getBase64UncompatibleString(1);
            }
            if (document.getElementById("ie113")) {
                document.getElementById("ie113").src = getBase64UncompatibleString(2);
            }
                document.getElementById(canvas).parentNode.removeChild(document.getElementById(canvas));

            if (document.getElementById("click-here")) {
                document.getElementById("click-here").parentNode.removeChild(document.getElementById("click-here"));
            }
            if (document.getElementById("date-div")) {
                document.getElementById("date-div").parentNode.removeChild(document.getElementById("date-div"));
            }
        } else {
            if (document.getElementById("ie111")) {
                document.getElementById("ie111").parentNode.removeChild(document.getElementById("ie111"));
            }
            if (document.getElementById("ie112")) {
                document.getElementById("ie112").parentNode.removeChild(document.getElementById("ie112"));
            }
            if (document.getElementById("ie113")) {
                document.getElementById("ie113").parentNode.removeChild(document.getElementById("ie113"));
            }

            // Add all the cocos2d config options
            _ccConfig(canvas, options);

            // Check for an analyticsCallback function and store it
            if (scope._options.analyticsCallback && (typeof scope._options.analyticsCallback === 'function')) {
               _analyticsCallback = scope._options.analyticsCallback;
           }

            // Check for an eventCallback function and store it
            if (scope._options.eventCallback && (typeof scope._options.eventCallback === 'function')) {
                _eventCallback = scope._options.eventCallback;
            }
            
            createPMLCompetitionStylesheet();
            
            // Use an option setting to invoke the minified (published) version, or full dev version
            if (scope._options.dev) {
                _initDev(canvas);
            } else {
                _initMin(canvas);
            }
        }
    };

    //
    // External 'resize' function
    //
    // Force the game canvas to resize and re-layout to a new resolution.  Although the underlying
    // canvas code does attempt to handle browser 'resize' events, this can be unreliable in complex
    // page environments, and under different browser versions and platforms, so this method can be
    // invoked to force a resize.
    //
    // Takes 2 optional parameters:
    //
    // width: new canvas width
    // height: new canvas height
    //
    // If either (or both) parameters are undefined, 0 or negative, the code will use gameCanvas.width
    // and gameCanvas.height values.
    //
    scope ['resizeGame'] = function (width, height) {
       if (scope._resizeFrame) {
          scope._resizeFrame (width, height);
       }
    };
    
    scope ['resetCurrentPuzzle'] = function () {
       if (scope._resetCurrentPuzzle) {
          scope._resetCurrentPuzzle ();
       }
    };
    
    scope['loadPuzzle'] = function (data) {
       if (scope._loadPuzzle) {
          scope._loadPuzzle(data);
       }
    };

    scope['getPuzzleStatus'] = (function () {
       function getLocalStorageValue (key) {
          var value = null;
          try {
             value = window.localStorage.getItem(key);
          } catch (e) {
             console.log("pml.js - getLocalStorageValue - Error retrieving value for " + key + " from localStorage: " + e);
          }
          return value;
       }
       function parseJSON (str) {
          var parsedValue = null;
          if (str) {
             try {
                parsedValue = JSON.parse(str);
             } catch (e) {
                console.log("pml.js - parseJSON - Error parsing string: " + e);
             }
          }
          return parsedValue;
       }
       return function (puzzleID) {
          var storagePrefix = scope._options['localStorage_prefix'] || "";
          var data = parseJSON(getLocalStorageValue(storagePrefix + puzzleID));
          return data && data["gameState"] || "UNSTARTED";
       }
    })();

    //
    // External 'restart' function
    //
    // Used mainly for testing purposes when the palette is changed
    //
    scope ['restartGame'] = function (options) {
       if (options) {
          _ccConfig (document['ccConfig']['tag'], options);
       }
       scope._restartGame ();
    };

    //
    // External 'getGameDetails' function
    //
    // Used to get the details (including completion status) of the current puzzle being played.  If the
    // user is on the main menu when this is called, some information may be missing.
    //
    scope['getGameDetails'] = function () {
       if (scope._getGameDetails) {
          return scope._getGameDetails.apply (scope, arguments);
       }
    };

    //
    // External 'resetPalette' function
    //
    // Used mainly for testing purposes along with restartGame above
    //
    
    scope['resetPalette'] = function (paletteOrName) {
       var fallbackPalette = typeof paletteOrName === "string" ? handleNamedPalette(paletteOrName) : paletteOrName;
       document["ccConfig"]['palette'] = setupPalette(fallbackPalette);
       scope.restartGame();
    };

    //
    // External overlay (popup) cancel function, for competition submission
    //
    scope['notifyCancel'] = function () {
       if (scope._notifyCancel) {
          scope._notifyCancel.apply (scope, arguments);
       }
    };

    //
    // External overlay (popup) submit function, for competition submission
    //
    scope['notifySubmit'] = function () {
       if (scope._notifySubmit) {
          scope._notifySubmit.apply (scope, arguments);
       }
    };

    //
    // External function, called when competition submission is confirmed
    //
    scope['confirmSubmit'] = function () {
       if (scope._confirmSubmit) {
          scope._confirmSubmit.apply (scope, arguments);
       }
    };


}) (window.pml);

//
// Some other functions
//

var get_browser = function() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
            return 'Opera ' + tem[1];
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0];
}

var get_browser_version = function() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
            return 'Opera ' + tem[1];
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[1];
}

//
// Base64 encoded images for use on incompatible browsers
//
var getBase64UncompatibleString = function(image) {
    var imageData = [];
    imageData.push("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");
    imageData.push("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");
    imageData.push("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wyw0884/qvkogmsiiqugmsgpAlv72483mvmolmguuomgrvN/7yw89/37/wD+v/veN/cZq7777477556rY6qr7b+//wDvTDDzzL22+6uy2U4If+//AP8A/wD/AC4wzxy4684hwpnvvvvvvvvvpoHLFkmpy289/wDv/wD/ADz0lrloitstrlionvvrsz37917210gBLnvvvvvvvvvrlPPNMmlmj/173/y089trgrolgkALOGHmpg+1kkuO3MuC/kt5gNPPugnvvtuhDOGo+ujio7926783+yhrvjjto/vx701+6/8APMt//wBBDf7G22nuk48Aq++CA08g73Cqa/8A/wD9cPP9vP8AHPT/AK//AP8AOzP3/X/7BOyXLzvP/rzXKGqruy0EsAAY08iaa2AW7Dz/AP8APtcqZvNf+/8Az73Xej//AP3/AP8ADfDfDDjf/wD/AP8A/iCfj+egc8AgcgeDhcce/wD/AP8A/j/DiiDf/wD/AP8ADffj/8QAGBEBAQADAAAAAAAAAAAAAAAAEUBQcJD/2gAIAQMBAT8Q4YgDCzuDAB2YB//EABsRAQABBQEAAAAAAAAAAAAAABFQADFAYHCA/9oACAECAQE/EPcYAAtwUAAAxAmghBS20P/EACkQAQACAQMEAgEFAQEBAAAAAAEAESExQVEQYXGBIJGhMLHB4fDR8UD/2gAIAQEAAT8Q6izhFQx0zzO740jaJyHW+zNBpn8TblKGhGXBI3Pt/EQyv7RS2rfmcELVF2v4nvL6M4luWW5eh9pyR3Q83C7e4oALpyUm+v4mEDYAmqwYSMVlBvdD7mXM125YrrhmFG93fox/wMiBNK9TT5xY1vGnbC8cG+ZUE6ioF5aOBctd8ADzd/8AWyUDhXcCwfYQ6wizYga6L8RZShjA/mEaPYOMa2yfqCmsgGjnPCRiRKxamzra4qG25xpEQvJnaHeADsV9zZyJaZWu6td8wBgxJp+4ue2OaCPToAaUFQzesHjlAA8BgirA1NTKg8FjzfeXUlA1ut9sK30mjBbsC0JtdkkWqqAaGhrNUYusQ1kEHJ6MS40ty1A2tETsc9IObAMppiGBTFqtpUUmy1YA5WHcREWvceMZqKIteauReAzvT5jo5HN24rzGUE6Mj5LesHCw1lDziwXA4JZSUCcib7wVd1gADmNG7S7EFetudsdAIIlGMway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");
    return "data:image/jpeg;base64," + imageData[image];
}
