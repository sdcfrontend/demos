# Scroll-based Adjustments

A script to apply css adjustments to elements based on scroll position


## Contents

* [Basic Implementation](#basic-implementation)
* [Advanced Options](#advanced-options)


## Basic Implementation

Minimum requirements to apply a scroll-based adjustment:
  - include the script and css
  - Add data-parallax-role="frame" to the element within which you want the adjustments to take place
  - Add data-parallax-role="subject" to the element(s) you want the adjustment to be applied to

This will apply a vertical translation to the subject based on the scroll position within the frame i.e. a parallax effect.


## Advanced options

### Multiplier

A multiplier can be applied to increase or reduce the amount of adjustment made to a subject. The default value is 1 and can be overridden using the data attribute data-parallax-multiplier. For example:

`data-parallax-multiplier="2"`


### Properties

The css property adjusted by the script can be changed to one of the presets defined in the css, or to one of your own by creating a custom class and calculation.
To override the default property use the data attribute data-parallax-property. For example:

`data-parallax-property="translateX"`

Preset properties that can be selected:

* translateY
* translateX
* rotate
* blur
* blur-reverse
* saturate
* fade

Certain properties, for example blur/blur-reverse, are more resource hungry and can negatively affect the frame rate if used excessively.


### Start Location

Sometimes, depending on the effect you are looking for, you may wish to specify when the adjustments begin. For certain properties you may have to specify that the adjustments begin as soon as the elements enter into view at the bottom of the window.
To do this, use the data attribute data-parallax-start. For example:

`data-parallax-start="bottom"`
