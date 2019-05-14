var onov = (window.location.href.indexOf("http://ocean") == 0 || window.location.href.indexOf("https://ocean") == 0);
var weLocal = window.location.protocol === "file:" || window.location.hostname == "localhost";

var useDefaultClickThrough = true,
	useDynamicExit = false,

	WID = 300,
	HEI = 250,

	UI_disabled = true,
	UI_touched = false,

	product_count = 3,
	current_product = 0,

	direction = "right",

	firstProduct, config,

	keylineConfig = {colour: "#000000", thickness: 1},

	defaultClickURL = [{ productLabel:"intro", productURL:"https://www.diy.com/" }];

function setExits()
{
	Enabler.exit('default');  Enabler.exit('intro');  Enabler.exit('product1');  Enabler.exit('product2');  Enabler.exit('product3');
}

function startBanner() 
{
    loadJS(getConfigAssetPath(),loadBQ);
}

/*\       $$$$$$\   $$$$$$\  $$$$$$$\
$$ |     $$  __$$\ $$  __$$\ $$  __$$\
$$ |     $$ /  $$ |$$ /  $$ |$$ |  $$ |
$$ |     $$ |  $$ |$$$$$$$$ |$$ |  $$ |
$$ |     $$ |  $$ |$$  __$$ |$$ |  $$ |
$$ |     $$ |  $$ |$$ |  $$ |$$ |  $$ |
$$$$$$$$\ $$$$$$  |$$ |  $$ |$$$$$$$  |
\________|\______/ \__|  \__|\______*/


function loadBQ()
{
	if (weLocal)
	{
		loadJS('../../../_global/BQ2019.js', loadScripts);
	}
	else if(onov)
	{
		loadJS('../../../../../../_bannerGlobals/bq/_global/BQ2019.js', loadScripts);
	}
	else
	{
		loadJS(getGlobalAssetPath('BQ2019.js'), loadScripts);
	}
}

function getConfigAssetPath()
{
	if(weLocal || onov)
	{
		logging = true;
		return "config.js";
	}
	else
	{
		return dc["asset_config"].Url; 
	}
}

function loadScripts()
{
	if(weLocal || onov)
    {   
		loadSvgs();
	}
	else
	{
		loadJS([getAsset('asset_config')], loadSvgs);
	}
}

function loadSvgs()
{    
	if(weLocal || onov)
	{
		fbf.loadSvgs(setupAd); 
	}
	else
	{
		fbf.loadSvgs(setupAd,getAsset("dir_assets/svg.gz.js"));
	}
}

function reportConfig()
{
	for (key in config) {if(config.hasOwnProperty(key))log(key+" : "+config[key])};
}

/*$$$$$\  $$$$$$$$\ $$$$$$$$\ $$\   $$\ $$$$$$$\
$$  __$$\ $$  _____|\__$$  __|$$ |  $$ |$$  __$$\
$$ /  \__|$$ |         $$ |   $$ |  $$ |$$ |  $$ |
\$$$$$$\  $$$$$\       $$ |   $$ |  $$ |$$$$$$$  |
 \____$$\ $$  __|      $$ |   $$ |  $$ |$$  ____/
$$\   $$ |$$ |         $$ |   $$ |  $$ |$$ |
\$$$$$$  |$$$$$$$$\    $$ |   \$$$$$$  |$$ |
 \______/ \________|   \__|    \______/ \_*/

function setupAd() 
{
	logging = fbf.isLocal();
	reportConfig();
	log(fbf.logDom(_root));
	fbf.clean(_root);
	fbf.replaceSVGDefs();
	fbf.displayBlock(_root);
	_root.buttonMode = true;
	_root.style.cssText += "overflow:hidden;";
	//_root.style.cssText += "width: 1000px;";
	var keyline = addKeylineTo(_root, WID, HEI, keylineConfig.colour, keylineConfig.thickness);
	setup();
}

function setup()
{
	arrangeSections();
	hideSections();
	bq.setListeners(_root);
	startFlow();
}

function arrangeSections()
{
	var intro_text = mc_intro_text,
		intro_text_width = intro_text._width,
		intro_text_height = intro_text._height;

	TweenMax.set(intro_text, {x: (WID*0.5)-(intro_text_width*0.5)-10});

	bq.createGradientBackground(mc_background, config.gradientColour1, config.gradientColour2);	
	bq.setupIntroText(mc_intro_text);
	setupDescriptions();
	setupPrices();
	bq.setupProductImages();
	setupPipsAndArrows();
	setupProducts();
	bq.hideBadges();
}

function hideSections()
{
	fbf.hide(mc_pips_and_arrows, mc_button, mc_badges);
	fbf.hide(mc_badges.children);	
}

/*$$$$$$\ $$\       $$$$$$\  $$\      $$\ 
$$  _____|$$ |     $$  __$$\ $$ | $\  $$ |
$$ |      $$ |     $$ /  $$ |$$ |$$$\ $$ |
$$$$$\    $$ |     $$ |  $$ |$$ $$ $$\$$ |
$$  __|   $$ |     $$ |  $$ |$$$$  _$$$$ |
$$ |      $$ |     $$ |  $$ |$$$  / \$$$ |
$$ |      $$$$$$$$\ $$$$$$  |$$  /   \$$ |
\__|      \________|\______/ \__/     \_*/

function startFlow()
{
	animateIntro(3);
}

function animateIntro(delay)
{
	bq.extendFrame(mc_frame, WID, HEI);

	var intro_text_lines = mc_intro_text.getElementsByTagName('g');

	for (var i = intro_text_lines.length - 1; i >= 0; i--)
	{
		var line = intro_text_lines[i];		
		TweenMax.from(line, 0.75, {y: '+=10', alpha: 0, delay: i*0.25})
	}

	TweenMax.to(mc_intro_text, 0.5, {alpha: 0, delay: delay});
	TweenMax.set(mc_frame, {y: -(HEI-5), x: -(HEI-5)});
	TweenMax.delayedCall(delay+0.1, animateProductElements);

	TweenMax.to(mc_tagline, 0.5, {alpha: 0, delay: delay});

	if(config.reveal_first_product_immeditately)
	{
		TweenMax.delayedCall(delay+0.5, bringInProducts);
	}
	else
	{
		TweenMax.delayedCall(delay+0.75, bringInProducts);
	}
}

function animateProductElements()
{
	fbf.show(mc_pips_and_arrows, mc_button, mc_badges);
	TweenMax.to(mc_frame, 0.75, {y: 0, x: 0, ease:Expo.easeInOut});

	if(config.reveal_first_product_immeditately)
	{
		TweenMax.from(mc_pips_and_arrows, 0.5, {alpha: 0, delay: 1.25, ease:Expo.easeInOut, onComplete:function()
		{
		    bq.detectSwipe(document, bq.onSwipe);        
		}});

		TweenMax.from(mc_button, 0.5, {alpha: 0, delay: 1.25, ease:Expo.easeInOut});
	}
	else
	{
		TweenMax.from(mc_pips_and_arrows, 0.5, {alpha: 0, delay: 2, ease:Expo.easeInOut, onComplete:function()
		{
		    bq.detectSwipe(document, bq.onSwipe);        
		}});

		TweenMax.from(mc_button, 0.5, {alpha: 0, delay: 2, ease:Expo.easeInOut});
	}	
}

/*$$$$$\  $$$$$$$\   $$$$$$\  $$$$$$$\  $$\   $$\  $$$$$$\ $$$$$$$$\  $$$$$$\
$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |  $$ |$$  __$$\\__$$  __|$$  __$$\
$$ |  $$ |$$ |  $$ |$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ /  \__|  $$ |   $$ /  \__|
$$$$$$$  |$$$$$$$  |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |        $$ |   \$$$$$$\
$$  ____/ $$  __$$< $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |        $$ |    \____$$\
$$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$\   $$ |   $$\   $$ |
$$ |      $$ |  $$ | $$$$$$  |$$$$$$$  |\$$$$$$  |\$$$$$$  |  $$ |   \$$$$$$  |
\__|      \__|  \__| \______/ \_______/  \______/  \______/   \__|    \______*/

var product_image_section_width = 184;

function setupProducts()
{
	TweenMax.set(mc_nom_1_details, {x: 290, alpha: 0});
	TweenMax.set(mc_nom_2_details, {x: 290, alpha: 0});
	TweenMax.set(mc_nom_3_details, {x: 290, alpha: 0});

	arrangeProducts();
}

function bringInProducts()
{
	console.log("\nbringInProducts (first run)\n\n");	

	useDefaultClickThrough = false;
	UI_disabled = false;

	var delay = 3;

	if(current_product < product_count && !UI_touched)
	{
		current_product++;

		bq.disableUI();

		if(current_product==1)
		{
			firstProduct = true;
			productIn();
		}
		else
		{
			firstProduct = false;
			productIn();
		}		

		if(current_product != product_count)
		{
			TweenMax.delayedCall(delay, productOut);
		}

		TweenMax.delayedCall(delay, bringInProducts);
	}
}

function productIn()
{
	bq.hideBadges();

	var current_nom_image 	= 'mc_nom_'+current_product+'_image';
	var current_nom_details	= 'mc_nom_'+current_product+'_details';

	updatePips();

	if(direction == "right")
	{
		if(firstProduct&&config.reveal_first_product_immeditately)
		{
			TweenMax.to(current_nom_image, 1, {x: 0, ease:Expo.easeInOut});
		}
		else
		{
			TweenMax.to(current_nom_image, 1, {x: 0, ease:Expo.easeInOut});
		}		
	}
	else
	{
		TweenMax.to(current_nom_image, 1, {x: 0, ease:Expo.easeInOut});
	}

	TweenMax.to(current_nom_details, 1, {alpha: 1, ease:Expo.easeOut, delay: 0.5});

	var badge_to_show = products[current_product-1].badge;

	if(badge_to_show == "none")
	{
		TweenMax.set(current_nom_details, {y: 50});
	}

	TweenMax.delayedCall(0.5, bq.showBadge, [badge_to_show]);
}

function productOut()
{
	var current_nom_image = 'mc_nom_'+current_product+'_image';

	var current_nom_details	= 'mc_nom_'+current_product+'_details';

	bq.disableUI();

 	if(direction == "right")
 	{
	    TweenMax.to(current_nom_image, 1, {x: -product_image_section_width, ease:Expo.easeInOut, onComplete: bq.enableUI});
	}
	else
	{
	    TweenMax.to(current_nom_image, 1, {x: product_image_section_width, ease:Expo.easeInOut, onComplete: bq.enableUI});
	}

	TweenMax.to(current_nom_details, 0.75, {alpha: 0, ease:Expo.easeOut});

	arrangeProducts();
}

function arrangeProducts()
{
	if(current_product==0)
	{
		if(config.reveal_first_product_immeditately)
		{
			// SET PRODUCT ELEMENTS IN PLACE
			TweenMax.set(mc_nom_1_image, {x: 0});
			TweenMax.set(mc_nom_2_image, {x: product_image_section_width});
			TweenMax.set(mc_nom_3_image, {x: product_image_section_width});
		}
		else
		{
			// SET PRODUCT ELEMENTS IN PLACE
			TweenMax.set(mc_nom_1_image, {x: product_image_section_width});
			TweenMax.set(mc_nom_2_image, {x: product_image_section_width});
			TweenMax.set(mc_nom_3_image, {x: product_image_section_width});
		}
	}

	if(current_product==1)
	{
		// SET PRODUCT ELEMENTS IN PLACE
		TweenMax.set(mc_nom_2_image, {x: product_image_section_width});
		TweenMax.set(mc_nom_3_image, {x: -product_image_section_width});
	}

	if(current_product==2)
	{
		// SET PRODUCT ELEMENTS IN PLACE
		TweenMax.set(mc_nom_1_image, {x: -product_image_section_width});
		TweenMax.set(mc_nom_3_image, {x: product_image_section_width});
	}

	if(current_product==3)
	{
		// SET PRODUCT ELEMENTS IN PLACE
		TweenMax.set(mc_nom_2_image, {x: -product_image_section_width});
		TweenMax.set(mc_nom_1_image, {x: product_image_section_width});
	}
}

/*$$$$$\ $$$$$$\ $$$$$$$\   $$$$$$\         $$$\               
$$  __$$\\_$$  _|$$  __$$\ $$  __$$\       $$ $$\              
$$ |  $$ | $$ |  $$ |  $$ |$$ /  \__|      \$$$\ |             
$$$$$$$  | $$ |  $$$$$$$  |\$$$$$$\        $$\$$\$$\           
$$  ____/  $$ |  $$  ____/  \____$$\       $$ \$$ __|          
$$ |       $$ |  $$ |      $$\   $$ |      $$ |\$$\            
$$ |     $$$$$$\ $$ |      \$$$$$$  |       $$$$ $$\           
\__|     \______|\__|       \______/        \____\__|          
                                            
 $$$$$$\  $$$$$$$\  $$$$$$$\   $$$$$$\  $$\      $$\  $$$$$$\  
$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ | $\  $$ |$$  __$$\ 
$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ /  $$ |$$ |$$$\ $$ |$$ /  \__|
$$$$$$$$ |$$$$$$$  |$$$$$$$  |$$ |  $$ |$$ $$ $$\$$ |\$$$$$$\  
$$  __$$ |$$  __$$< $$  __$$< $$ |  $$ |$$$$  _$$$$ | \____$$\ 
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$$  / \$$$ |$$\   $$ |
$$ |  $$ |$$ |  $$ |$$ |  $$ | $$$$$$  |$$  /   \$$ |\$$$$$$  |
\__|  \__|\__|  \__|\__|  \__| \______/ \__/     \__| \______*/ 

function setupPipsAndArrows()
{
	bq.showUpToRoot(mc_pips_and_arrows);

	var left_arrow = mc_left_arrow.getElementsByTagName('svg')[0];
	var right_arrow = mc_right_arrow.getElementsByTagName('svg')[0];

	left_arrow.addEventListener("click", arrowLeftClick);
	right_arrow.addEventListener("click", arrowRightClick);

	mc_pip_hit_area.addEventListener("click", clickBehindPips);

	var pip_hit_area = mc_pip_hit_area.getElementsByTagName('svg');
	TweenMax.set(pip_hit_area, {alpha: 0});

	createExtraPips();
}

function createExtraPips()
{
	var original_pip = mc_pip_1;
	var required_pips = product_count-1;

	var pip_width = mc_pip_1._width;

	mc_pip_1.addEventListener("click", pipClick);

	for (var i = 0; i < required_pips; i++)
	{
		var a = i+1;
    	var pip_clone = original_pip.cloneNode(true);
			pip_clone.id = "mc_pip_"+(i+2);

		mc_pips.appendChild(pip_clone);

		var pip_spacing = pip_width*(a)+(a*9);

		TweenMax.set(pip_clone, {x: pip_spacing});

		pip_clone.addEventListener("click", pipClick);
	}

	var width_of_all_pips = pip_width*product_count;

	TweenMax.set(mc_pips, {x: -(width_of_all_pips*0.5+3)});
}

function updatePips()
{
	for (var i = 0; i < product_count; i++)
	{
		if(i==current_product-1)
		{
			TweenMax.set(mc_pips.children[i], {alpha: 1});
		}
		else
		{
			TweenMax.set(mc_pips.children[i], {alpha: 0.5});
		}
	}
}

function pipClick(event)
{
	event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	var target = event.target || event.srcElement;
	var phase = event.eventPhase;

	var pip = this.id.split('mc_pip_')[1];
	var pip_number = parseInt(pip, 10);

	if (UI_disabled == false)
	{
		bq.disableUI();
		KillTweens();

		var product_currently_showing = 'mc_nom_'+current_product+'_image';
		console.log("\nproduct_currently_showing: "+product_currently_showing+"\n\n");

		var product_to_show = 'mc_nom_'+pip_number+'_image';
		console.log("\nproduct_to_show: "+product_to_show+"\n\n");

		if(product_currently_showing!=product_to_show) /* IF THEY HAVEN'T CLICKED THE PIP IT'S ALREADY ON */
		{
			direction = "right";

			productOut();

			current_product = pip_number;

			updatePips();			

			if(product_currently_showing=="mc_nom_1_image")
			{
				// SET PRODUCT ELEMENTS IN PLACE
				TweenMax.set(mc_nom_2_image, {x: WID});
				TweenMax.set(mc_nom_3_image, {x: WID});
			}

			if(product_currently_showing=="mc_nom_2_image")
			{
				// SET PRODUCT ELEMENTS IN PLACE
				TweenMax.set(mc_nom_1_image, {x: WID});
				TweenMax.set(mc_nom_3_image, {x: WID});
			}

			if(product_currently_showing=="mc_nom_3_image")
			{
				// SET PRODUCT ELEMENTS IN PLACE
				TweenMax.set(mc_nom_2_image, {x: WID});
				TweenMax.set(mc_nom_1_image, {x: WID});
			}

			productIn();
		}

		TweenMax.delayedCall(0.75, bq.enableUI);

		UI_touched = true;
	}
}

function clickBehindPips(event)
{
	event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	var target = event.target || event.srcElement;
	var phase = event.eventPhase;
}

function arrowLeftClick(event)
{   
	event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	var target = event.target || event.srcElement;
	var phase = event.eventPhase;

	if (UI_disabled == false)
	{
		bq.disableUI();
		KillTweens();
		direction = "left";

		productOut();
		current_product--;

		if(current_product < 1)
		{
			current_product = product_count;
		};

		//TweenMax.delayedCall(0.5, productIn);
		productIn();
		TweenMax.delayedCall(0.75, bq.enableUI);

		UI_touched = true;
	}
}

function arrowRightClick(event)
{
	event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	var target = event.target || event.srcElement;
	var phase = event.eventPhase;

	console.log("arrowRightClick "+UI_disabled)

	if (UI_disabled == false)
	{
		bq.disableUI();
		KillTweens();
		direction = "right";

		productOut();
		current_product++;

		if(current_product > product_count)
		{
			current_product = 1;
		};

		//TweenMax.delayedCall(0.3, productIn);
		productIn();
		TweenMax.delayedCall(0.75, bq.enableUI);

		UI_touched = true;
	}
}

function KillTweens()
{
	TweenMax.killAll();
	TweenMax.killTweensOf(mc_products_and_frame);
	TweenMax.killChildTweensOf(mc_products_and_frame);
}

/*$$$$$\ $$\     $$\ $$\   $$\  $$$$$$\  $$\      $$\ $$$$$$\  $$$$$$\  
$$  __$$\\$$\   $$  |$$$\  $$ |$$  __$$\ $$$\    $$$ |\_$$  _|$$  __$$\ 
$$ |  $$ |\$$\ $$  / $$$$\ $$ |$$ /  $$ |$$$$\  $$$$ |  $$ |  $$ /  \__|
$$ |  $$ | \$$$$  /  $$ $$\$$ |$$$$$$$$ |$$\$$\$$ $$ |  $$ |  $$ |      
$$ |  $$ |  \$$  /   $$ \$$$$ |$$  __$$ |$$ \$$$  $$ |  $$ |  $$ |      
$$ |  $$ |   $$ |    $$ |\$$$ |$$ |  $$ |$$ |\$  /$$ |  $$ |  $$ |  $$\ 
$$$$$$$  |   $$ |    $$ | \$$ |$$ |  $$ |$$ | \_/ $$ |$$$$$$\ \$$$$$$  |
\_______/    \__|    \__|  \__|\__|  \__|\__|     \__|\______| \_____*/ 

function setupDescriptions()
{
	var description_1_div = mc_nom_1_description,
		description_2_div = mc_nom_2_description,
		description_3_div = mc_nom_3_description;

	var description_1 = products[0].description;
	var description_2 = products[1].description;
	var description_3 = products[2].description;

	bq.dynamicDescription(description_1_div, description_1);
	bq.dynamicDescription(description_2_div, description_2);
	bq.dynamicDescription(description_3_div, description_3);
}

function setupPrices()
{
	var price_1_div = mc_nom_1_price,
		price_2_div = mc_nom_2_price,
		price_3_div = mc_nom_3_price;

	var price_1 = products[0].price;
	var price_2 = products[1].price;
	var price_3 = products[2].price;

	bq.dynamicPrice(price_1_div, price_1);
	bq.dynamicPrice(price_2_div, price_2);
	bq.wasPrice(mc_nom_2_price, "£"+products[1].wasPrice, {fontsize: 15, strikethrough: true, yPos: 0, strikethroughY: 13});
	
	TweenMax.set(document.getElementById("mc_nom_2_price_tf"), {y: '+=18'});

	
	bq.dynamicPrice(price_3_div, price_3);

	adjustPricePositions();
}

function adjustPricePositions()
{
	var gap_between_description_and_price = 10;

	var price_1_div = mc_nom_1_price,
		price_2_div = mc_nom_2_price,
		price_3_div = mc_nom_3_price;	

	var description_1_height = mc_nom_1_description.children[0]._height;
	TweenMax.set(mc_nom_1_price, {y: description_1_height+gap_between_description_and_price});

	var description_2_height = mc_nom_2_description.children[0]._height;
	TweenMax.set(mc_nom_2_price, {y: description_2_height+gap_between_description_and_price});

	var description_3_height = mc_nom_3_description.children[0]._height;
	TweenMax.set(mc_nom_3_price, {y: description_3_height+gap_between_description_and_price});
}

/*$$$$$\   $$$$$$\  $$\      $$\ 
$$  __$$\ $$  __$$\ $$$\    $$$ |
$$ |  $$ |$$ /  $$ |$$$$\  $$$$ |
$$ |  $$ |$$ |  $$ |$$\$$\$$ $$ |
$$ |  $$ |$$ |  $$ |$$ \$$$  $$ |
$$ |  $$ |$$ |  $$ |$$ |\$  /$$ |
$$$$$$$  | $$$$$$  |$$ | \_/ $$ |
\_______/  \______/ \__|     \_*/

var _root = $('root');
	var mc_background = $('mc_background');
	var mc_products_and_frame = $('mc_products_and_frame');
		var mc_nom_1_image = $('mc_nom_1_image');
		var mc_nom_2_image = $('mc_nom_2_image');
		var mc_nom_3_image = $('mc_nom_3_image');
		var mc_frame = $('mc_frame');
		var mc_nom_1_details = $('mc_nom_1_details');
			var mc_nom_1_description = $('mc_nom_1_description');
			var mc_nom_1_price = $('mc_nom_1_price');
		var mc_nom_2_details = $('mc_nom_2_details');
			var mc_nom_2_description = $('mc_nom_2_description');
			var mc_nom_2_price = $('mc_nom_2_price');
		var mc_nom_3_details = $('mc_nom_3_details');
			var mc_nom_3_description = $('mc_nom_3_description');
			var mc_nom_3_price = $('mc_nom_3_price');
	var mc_intro_text = $('mc_intro_text');
	var mc_footer = $('mc_footer');
		var mc_bq_logo = $('mc_bq_logo');
		var mc_tagline = $('mc_tagline');
	var mc_pips_and_arrows = $('mc_pips_and_arrows');
		var mc_pip_hit_area = $('mc_pip_hit_area');
		var mc_left_arrow = $('mc_left_arrow');
		var mc_right_arrow = $('mc_right_arrow');
		var mc_pips = $('mc_pips');
			var mc_pip_1 = $('mc_pip_1');
	var mc_button = $('mc_button');
	var mc_badges = $('mc_badges');
		var mc_badge_NEW = $('mc_badge_NEW');
		var mc_badge_WHEN_ITS_GONE = $('mc_badge_WHEN_ITS_GONE');