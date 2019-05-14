var defaultClickURL = 
[

	{
		productLabel: 	"intro",
		productURL: 	"https://www.diy.com/departments/painting-decorating/paint-wood-treatments/interior-emulsion-paint/DIY1620272.cat?utm_source=wavemaker_blis&utm_campaign=national&utm_medium=display-prospecting&utm_content=sp19_convert_wk11_wrindoor_intro_wavemaker_blis_display-prospecting&utm_term="
	}

];

var introText = 
[
	{
		text: 			"paint it your way\nwith our range\nof quality brands",
		size: 			32,
		lineHeight: 	-6,
		colour1: 		"#FF6600",
		colour2: 		"#FFFFFF",
		colourOrder: 	[1,2,2]
	}
]

var products = 
[

	{
		productLabel: 		"product1",
		description: 		"All GoodHome\nstandard coloured\nemulsion 5L\n£3.60 per L",  
		price: 				"18",
		wasPrice: 			"",
		badge: 				"new",		
		arrangeImage: 		"behind",
		productURL: 		"https://www.diy.com/departments/painting-and-decorating/paint-and-wood-treatments/interior-emulsion-paint/wall-and-ceiling-paint/goodhome/_/N-nymZ1z0mkzo?utm_source=wavemaker_blis&utm_campaign=national&utm_medium=display-prospecting&utm_content=sp19_convert_wk11_wrindoor_goodhome_wavemaker_blis_display-prospecting&utm_term="
	},
	{
		productLabel: 		"product2",
		description: 		"All Dulux\nstandard coloured\nemulsion 5L",
		price: 				"20",
		wasPrice: 			"23",
		badge: 				"",
		arrangeImage: 		"behind",
		productURL: 		"https://www.diy.com/departments/painting-and-decorating/paint-and-wood-treatments/interior-emulsion-paint/wall-and-ceiling-paint/dulux/5/_/N-nymZ1z13xfbZ1z0ni0z?utm_source=wavemaker_blis&utm_campaign=national&utm_medium=display-prospecting&utm_content=sp19_convert_wk11_wrindoor_dulux_wavemaker_blis_display-prospecting&utm_term=",
	},
	{
		productLabel: 		"product3",
		description: 		"Premium blend\nV700 walls &\nceilings paint and\nprimer in one 5L\n£9 per L",
		price: 				"45",
		wasPrice: 			"",
		badge: 				"",		
		arrangeImage: 		"behind",
		productURL: 		"https://www.diy.com/valspar?utm_source=wavemaker_blis&utm_campaign=national&utm_medium=display-prospecting&utm_content=sp19_convert_wk11_wrindoor_valspar_wavemaker_blis_display-prospecting&utm_term="
	}

];

var config = (function ()
{

var module = {};

/*	THIS VAR DECIDES WHETHER OR NOT THE FIRST PRODUCT IMAGE SHOULD ALREADY 
	BE IN PLACE WHEN THE FRAME ANIMATES DOWN TO REVEAL THE HOUSE SHAPE */

module.reveal_first_product_immeditately = true;

/*	SET THE COLOURS FOR THE SVG GRADIENT BACKGROUND */

module.gradientColour1 = "#FF6600";
module.gradientColour2 = "#EFA500";

return module;
})();