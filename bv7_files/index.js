// Register PIXI to the Pixi Plugin
PixiPlugin.registerPIXI(PIXI)
// Register the Pixi plugin to gsap to be able to animate pixi properties
gsap.registerPlugin(PixiPlugin)

// helper function to generate the hit area for the exit
// created using pixi js

// const exit = document.getElementById("exit")
// exit.addEventListener("click", () => {
//   Enabler.exit("exit")
// })



/* const getVideo = (resources, videoId) => {
  const video = document.getElementById(videoId)
  const source = document.createElement('source')
  source.src = resources[videoId].data.children[0].src
  source.type = resources[videoId].data.children[0].type
  video.appendChild(source)
  return video
} */

const start = () => {

  const bannerWidth = 728
  const bannerHeight = 90

  // while the loader is showing we preload all the assets
  const politeLoading = () => {
    const stage = document.getElementById('stage')

    // create a gsap timeline and pause it
    // here just to show you the use of repeat: -1 in conjunction with yoyo: true
    // to play a timeline back and fort forever and the use of repeatDelay, which stops the timeline
    // at the beginning and at the end for 2 seconds before it goes back or fort.
    const timeline = gsap.timeline({ paused: true })

    // this is set to avoid having circle shapes with less points, just in case
    // you use shapes.
    PIXI.GRAPHICS_CURVES.adaptive = false

    // create a PIXI application
    const app = new PIXI.Application({
      view: stage,
      width: bannerWidth,
      height: bannerHeight,
      sharedLoader: false,
      // backgroundColor: 0xFFFFFF,
      transparent: true,
      resolution: window.devicePixelRatio,
      autoDensity: true
    })

    // root path where the assets are served
    // with Pixi js you have to run a local server to load the images
    // live-server is one easy to use but you need node.js installed to run it
    // or install the plugin of vscode
    let basepath
  
    if(Enabler.isServingInLiveEnvironment()) {
      basepath = 'assets/'
    } else {
      basepath = 'http://localhost:8080/4K-Trading/728x90/assets/'
    }


    // array containing all the names of the files
    const assets = [
      'intro-tv-1.jpg',
      'intro-tv-2.jpg',
      'main-tv-1.jpg',
      'tv-split-1.png',
      'tv-split-2.png',
      'tv-split-3.png',
      'text1.png',
      'text2.png',
      'text3.png',
      'text4.png',
      'text5.png',
      'text6.png',
      'cta.png',
      'legals-more-blue.png',
      'legals-more-white.png'
      //'video.mp4'
    ]

    console.log('Starting loading assets...')

    // Preload all the assets
    const assetsLoader = new PIXI.Loader()
    assetsLoader.onComplete.add(handleAssetsComplete)
    assetsLoader.onError.add(() => console.log('Error loading assets.'))
    assetsLoader.onLoad.add((_, resource) => console.log(`Assets ${resource.url} has been loaded.`))

    // run a loop to add all the assets to the loader
    for(let i = 0; i < assets.length; i++) {
      const asset = assets[i]
      // here i split the filename in an array containing
      // the part before the '.' and after, taking only the name of the image
      // to use it as a key in the assets object for the loader (check PIXI js docs for more info on the Loader class)
      const assetKey = asset.split('.')[0]
      assetsLoader.add(assetKey, basepath + asset)
    }

    // load the assets
    assetsLoader.load()

    // when all the assets are loaded, you can use them.
    // They become textures that you can use to create Pixi sprites to use on the canvas.
    function handleAssetsComplete() {
      console.log('Assets loaded...')
      // Assets are ready, and the polite loading is ended
      // now you can show the banner and start the animation,
      // so we can hide the loader.
      const loader = document.getElementById('loader')
      const ctaGlinter = document.getElementById('ctaGlinter')
      const closelegals = document.getElementById('closelegals')

      // SHOW / HIDE LEGALS
      const legalstext = document.getElementById('legalstext')
      const legalsbtnshow = document.getElementById('legalsbtnshow')
      legalsbtnshow.addEventListener("click", () => {
        gsap.to(legalstext, 0.5, { y:-90, ease: Power1.easeOutIn, delay:0 })
        gsap.to(closelegals, 0, { delay:0, y:0 })
        gsap.to(closelegals, 0.5, { delay:0.5, opacity:1 })
      }
      )

      const legalsbtnhide = document.getElementById('legalsbtnhide')
      legalsbtnhide.addEventListener("click", () => {
        gsap.to(legalstext, 0.5, { y:0, ease: Power1.easeOutIn })
        gsap.to(closelegals, 0, { delay:0, opacity:0 })
        gsap.to(closelegals, 0, { delay:0, y:90 })
      }
      )
      
      //document.getElementById('loader').style.opacity = '0'
      // store the textures in a variable
      const resources = assetsLoader.resources
      
      // if you use double size images do the below
      // logo.scale.set(0.5)
      // gsap.to(logo, 1, { scale: 0.51 })

      // create all your sprites
      const introtv1 = new PIXI.Sprite(resources['intro-tv-1'].texture)
      const introtv2 = new PIXI.Sprite(resources['intro-tv-2'].texture)
      const maintv1 = new PIXI.Sprite(resources['main-tv-1'].texture)
      const tvsplit1 = new PIXI.Sprite(resources['tv-split-1'].texture)
      const tvsplit2 = new PIXI.Sprite(resources['tv-split-2'].texture)
      const tvsplit3 = new PIXI.Sprite(resources['tv-split-3'].texture)
      const text2 = new PIXI.Sprite(resources['text2'].texture)
      const text3 = new PIXI.Sprite(resources['text3'].texture)
      const text4 = new PIXI.Sprite(resources['text4'].texture)
      const text5 = new PIXI.Sprite(resources['text5'].texture)
      const text6 = new PIXI.Sprite(resources['text6'].texture)
      const text1 = new PIXI.Sprite(resources['text1'].texture)
      const cta = new PIXI.Sprite(resources['cta'].texture)
      const legalsmoreblue = new PIXI.Sprite(resources['legals-more-blue'].texture)
      const legalsmorewhite = new PIXI.Sprite(resources['legals-more-white'].texture)
      //const video = getVideo(resources, 'video')
      // const exit = createExit(bannerWidth, bannerHeight)

      // now you can set properties before you begin to animate
      
      // here we need to resize the sprite since is a 2x
      introtv1.width *=  0.55
      introtv1.height *=  0.55
      introtv2.width *=  0.55
      introtv2.height *=  0.55
      maintv1.width *=  0.5
      maintv1.height *=  0.5
      tvsplit1.width *=  0.5
      tvsplit1.height *=  0.5
      tvsplit2.width *=  0.5
      tvsplit2.height *=  0.5
      tvsplit3.width *=  0.5
      tvsplit3.height *=  0.5
      text2.width *=  0.5
      text2.height *=  0.5
      text3.width *=  0.5
      text3.height *=  0.5
      text4.width *=  0.5
      text4.height *=  0.5
      text5.width *=  0.5
      text5.height *=  0.5
      text6.width *=  0.5
      text6.height *=  0.5
      text1.width *=  0.5
      text1.height *=  0.5
      cta.width *=  0.5
      cta.height *=  0.5
      legalsmoreblue.width *=  0.5
      legalsmoreblue.height *=  0.5
      legalsmorewhite.width *=  0.5
      legalsmorewhite.height *=  0.5

      // hiding the sprites
      maintv1.alpha = 0
      text2.alpha = 0
      text3.alpha = 0
      text4.alpha = 0
      text5.alpha = 0
      text6.alpha = 0
      cta.alpha = 0
      legalsmoreblue.alpha = 0
      legalsmorewhite.alpha = 0
      maintv1.alpha = 0

      // set the position on the stage of the intro elements
      introtv1.x = -20
      introtv1.y = -30
      introtv2.x = 364
      introtv2.y = -50
      maintv1.x = 0
      maintv1.y = -100
      text1.y = 0
      tvsplit1.y =-150
      tvsplit2.y =-150
      tvsplit3.y =-150

      const introFrame = new PIXI.Container()
      introFrame.addChild(text1)
      introFrame.alpha = 1

      //const introFrame = [aso,tt,tx]

      // then animate the sprites adding the animations to the timeline
      // the params for the following are timeline.add(gsap.to(target, duration, properties), globalStartingPointInTheTimeline)
      // i suggest you to use the global timing instead of relative, cause if you just use gsap.to
      // the animations will run in sequence, instead use the global time (last parameter in timeline.add) to 
      // have simultaneous animations if you need.


      // FRAME 1 / INTRO
      timeline.add(gsap.to(loader, 1, { alpha:0 }), 0)

      timeline.add(gsap.to(ctaGlinter, 0, { alpha:0 }), 0)

      timeline.add(gsap.to(introtv1, 2, { pixi: { x:0, y:-30, ease: Power1.easeOutIn } }), 0)
      timeline.add(gsap.to(introtv2, 2, { pixi: { x:364, y:-40, ease: Power1.easeOutIn } }), 0)

      timeline.add(gsap.to(introtv1, 3, { pixi: { scale:0.5, ease: Power1.easeOutIn } }), 0)
      timeline.add(gsap.to(introtv2, 3, { pixi: { scale:0.5, ease: Power1.easeOutIn } }), 0)

      timeline.add(gsap.to(text1, 2, { pixi: { alpha: 1 } }), 0)

      timeline.add(gsap.to(introtv1, 2, { pixi: { x:-320, y:-50, ease: Power1.easeInOut } }), 3)
      timeline.add(gsap.to(introtv2, 2, { pixi: { x:480, y:50, ease: Power1.easeInOut } }), 3)
      timeline.add(gsap.to(introtv1, 0.5, { pixi: { alpha: 0 } }), 3)
      timeline.add(gsap.to(introtv2, 0.5, { pixi: { alpha: 0 } }), 3)
      timeline.add(gsap.to(tvsplit1, 0.75, { pixi: { x:0, y:-25, ease: Power1.easeInOut } }), 3.25)
      timeline.add(gsap.to(tvsplit2, 0.75, { pixi: { x:0, y:-25, ease: Power1.easeInOut } }), 3.25)
      timeline.add(gsap.to(tvsplit3, 0.75, { pixi: { x:0, y:-25, ease: Power1.easeInOut } }), 3.25)

      timeline.add(gsap.to(text1, 0.75, { pixi: { alpha: 0 } }), 3)



      // FRAME 2
      timeline.add(gsap.to(text2, 1, { pixi: { alpha: 1 } }), 3.75)
      
      timeline.add(gsap.to(cta, 1, { pixi: { alpha: 1 } }), 4)
      timeline.add(gsap.to(ctaGlinter, 0, { alpha:0.75 }), 4)
      timeline.add(gsap.to(ctaGlinter, 3, { x:470, ease: Power1.easeOutIn }), 4.5)
      
      timeline.add(gsap.to(legalsbtnshow, 0.1,  { opacity: 1 } ), 4.5)
      timeline.add(gsap.to(legalsmoreblue, 1, { pixi: { alpha: 1 } }), 4.5)

      timeline.add(gsap.to(ctaGlinter, 0, { x:-200, ease: Power1.easeOutIn }), 7.5)

      timeline.add(gsap.to(tvsplit1, 1, { x:-50, ease: "expo.inOut" }), 4.25)
      timeline.add(gsap.to(tvsplit3, 1, { x:50, ease: "expo.inOut" }), 4.25)
      timeline.add(gsap.to(tvsplit1, 1, { x:0, ease: "expo.inOut" }), 6.5)
      timeline.add(gsap.to(tvsplit2, 1, { x:0, ease: "expo.inOut" }), 6.5)
      timeline.add(gsap.to(tvsplit3, 1, { x:0, ease: "expo.inOut" }), 6.5)
      timeline.add(gsap.to(text2, 1, {  alpha: 0  }), 7)


      
      


      // FRAME 3
      timeline.add(gsap.to(ctaGlinter, 3, { x:470, ease: Power1.easeOutIn }), 7.5)
      timeline.add(gsap.to(ctaGlinter, 0, { x:-200, ease: Power1.easeOutIn }), 10.5)

      timeline.add(gsap.to(maintv1, 0.5, {  alpha: 1 }), 7.5)
      timeline.add(gsap.to(maintv1, 0.75, { pixi: { x:0, y:0, ease: Power1.easeInOut } }), 7.5)
      timeline.add(gsap.to(tvsplit1, 0.75, { pixi: { y:150, ease: Power1.easeInOut } }), 7.5)
      timeline.add(gsap.to(tvsplit2, 0.75, { pixi: { y:150, ease: Power1.easeInOut } }), 7.5)
      timeline.add(gsap.to(tvsplit3, 0.75, { pixi: { y:150, ease: Power1.easeInOut } }), 7.5)
      timeline.add(gsap.to(tvsplit1, 0.25, { pixi: { alpha: 0 } }), 7.5)
      timeline.add(gsap.to(tvsplit2, 0.25, { pixi: { alpha: 0 } }), 7.5)
      timeline.add(gsap.to(tvsplit3, 0.25, { pixi: { alpha: 0 } }), 7.5)
      timeline.add(gsap.to(text3, 1, {  alpha: 1  }), 8)
      
      timeline.add(gsap.to(legalsmoreblue, 0.5, { pixi: { alpha: 0 } }), 7.5)
      timeline.add(gsap.to(legalsmorewhite, 0.5, { pixi: { alpha: 1 } }), 7.75)
      


      // // FRAME 4
      timeline.add(gsap.to(ctaGlinter, 3, { x:470, ease: Power1.easeOutIn }), 11)
      timeline.add(gsap.to(ctaGlinter, 0, { x:-200, ease: Power1.easeOutIn }), 14)
      timeline.add(gsap.to(text3, 0.25, { pixi: { alpha: 0 } }), 11)
      timeline.add(gsap.to(text4, 1, { pixi: { alpha: 1 } }), 11.25)
      timeline.add(gsap.to(text4, 0.5, { pixi: { alpha: 0 } }), 14)
      

      // FRAME 5
      timeline.add(gsap.to(text5, 1, { pixi: { alpha: 1 } }), 14.25)
      timeline.add(gsap.to(text6, 1, { pixi: { alpha: 1 } }), 14.5)

      

      // FRAME 6
      timeline.add(gsap.to(ctaGlinter, 3, { x:470, ease: Power1.easeOutIn }), 15)
      timeline.add(gsap.to(ctaGlinter, 0, { x:-400, ease: Power1.easeOutIn }), 19)
      timeline.add(gsap.to(ctaGlinter, 3, { x:470, ease: Power1.easeOutIn }), 20)
      timeline.add(gsap.to(ctaGlinter, 0, { x:-400, ease: Power1.easeOutIn }), 23)
      timeline.add(gsap.to(ctaGlinter, 3, { x:470, ease: Power1.easeOutIn }), 25)

      

   








      // TIMER / BRUTAL WAY TO KILL ALL TIMELINES
        gsap.delayedCall(30, () => timeline.pause());
        //gsap.delayedCall(30, () => flashspacedustTimeline.pause());


      
      // TIMER / KILL ALL
      // NOT WORKING !!!!!!
      // const KillAll = () => {
      //   //console.log(flash1.alpha)
      //   console.log(timeline.time())
      //   if (timeline.time() >= 10) {
      //     timeline.pause()
      //     smoke1Timeline.pause()
      //   }
      // }
      // timeline.eventCallback("onUpdate", KillAll);



      // your elements
      
      const HTML5_Background_Clickthrough = document.getElementById("exit")
      HTML5_Background_Clickthrough.addEventListener("click", () => {
        Enabler.exit("HTML5_Background_Clickthrough")
        // IF WE NEED TO STOP VIDEO OR ANIMATIONS DO IT HERE
          //smoke1Timeline.pause()
      })
    

     
      
      
 



      // render the sprites on the stage (canvas)
      // here the order matters from top to bottom means from back to front.
      app.stage.addChild(maintv1)
      app.stage.addChild(introtv1)
      app.stage.addChild(introtv2)
      app.stage.addChild(tvsplit1)
      app.stage.addChild(tvsplit2)
      app.stage.addChild(tvsplit3)
      app.stage.addChild(text1)
      app.stage.addChild(text2)
      app.stage.addChild(text3)
      app.stage.addChild(text4)
      app.stage.addChild(text5)
      app.stage.addChild(text6)
      app.stage.addChild(cta)
      app.stage.addChild(legalsmoreblue)
      app.stage.addChild(legalsmorewhite)

      // don't forget to add the exit to the stage on top of everything
      // app.stage.addChild(exit)

      // play the timelines
      timeline.play()
      //smoke1Timeline.play()
      console.log('Animation is playing...')
    }

  }

  // If the page is loaded start polite loading of the assets
  if(Enabler.isPageLoaded()) politeLoading()
  else Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, () => politeLoading())
}

// if the enabler lib is ready, start
if (Enabler.isInitialized()) start(PIXI, gsap)
else Enabler.addEventListener(studio.events.StudioEvent.INIT, () => start(PIXI, gsap))

