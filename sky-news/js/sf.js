(function () {

  window.slides = document.querySelectorAll('[data-role="slide"]');

  function registerSlide(slide, style, func) {
    if (!slide.length) {
      slide = [slide];
    }

    slide.forEach(function (item) {
      item[style] = func;
    })
  }

  function triggerSlide(slide) {

    var dims = slide.getBoundingClientRect();
    if (dims.top < (window.innerHeight / 2)) {
      return 'middle';
    }

    if (dims.top < (window.innerHeight)) {
      return 'in';
    }

    return false;
  }

  function trackSlide(slide) {
    var dims = slide.getBoundingClientRect();
    var height = dims.height;

    if (dims.top < window.innerHeight && dims.top > (height * -1)) {
      return Math.floor((100 / window.innerHeight) * dims.top);
    }

    return null;
  }

  function tick() {
    for (var i = -1; ++i < slides.length;) {

      var type = slides[i].getAttribute('data-type');
      if (!type) {
        return;
      }

      if (type === 'trigger' && slides[i].trigger) {
        var tol = triggerSlide(slides[i]);
        if (tol) {
          slides[i].trigger(tol);
        }
      }

      if (type === 'track' && slides[i].track) {
        if (trackSlide(slides[i]) !== null) {
          slides[i].track(trackSlide(slides[i]))

        }
      }
    }


    requestAnimationFrame(tick);

  }

  window.registerSlide = registerSlide;

  tick();


})();

// register slides
registerSlide(document.querySelector('#workforce-map'), 'track', function (val) {

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }
  });

  var key = this.querySelector('.sdc-site-charts__chart-key-list');
  if (key.getBoundingClientRect().top < window.innerHeight) {
    key.removeAttribute('data-trigger');
  }
})

registerSlide(document.querySelectorAll('.sdc-sf-fact__icon[data-animate]'), 'trigger', function (val) {
  this.removeAttribute('data-animate');
});

registerSlide(document.querySelector('#workforce-icons'), 'track', function (val) {

  this.querySelectorAll('.sdc-sf-grid-icons').forEach(function (item, index) {

    var h = window.innerHeight;
    var top = item.getBoundingClientRect().top;

    if (top < h) {
      item.querySelectorAll('[data-animate]').forEach(function (icon, delay) {
        icon.style.transitionDelay = 50 + (delay * 20) + 'ms';
        icon.removeAttribute('data-animate');
      });

    }

  });
})


registerSlide(document.querySelector('#workforce-chart'), 'track', function (val) {

  this.querySelectorAll('.sdc-site-charts[data-url]').forEach(function (chart) {
    if ((val) < 100) {
      if (chart.start && !chart.init) {
        chart.start();
        chart.init = true;
      }
    }
  });
});

registerSlide(document.querySelector('#treatments-cost'), 'track', function (val) {

  this.querySelectorAll('[data-trigger]').forEach(function (bar, index) {

    var h = window.innerHeight;
    var top = bar.getBoundingClientRect().top;

    if (top < h) {
      setTimeout(function () {
        bar.removeAttribute('data-trigger');
      }, index * 200)
    }

  });

})


registerSlide(document.querySelector('#patient-numbers'), 'track', function (val) {

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }
  });

  this.querySelectorAll('[data-animate]').forEach(function (icon, index) {

    var h = window.innerHeight;
    var top = icon.getBoundingClientRect().top;

    if (top < h) {
      icon.style.transitionDelay = 50 + (index * 20) + 'ms';
      icon.removeAttribute('data-animate');
    }

  });
});

registerSlide(document.querySelector('#patient-cancer'), 'track', function (val) {

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }
  });

  this.querySelectorAll('.sdc-site-charts[data-url]').forEach(function (chart) {
    if ((val) < 100) {
      if (chart.start && !chart.init) {
        chart.start();
        chart.init = true;
      }
    }
  });
});

registerSlide(document.querySelector('#patient-lifespan'), 'track', function (val) {

  var bargroup = this.querySelector('.sdc-sf-chart-bar-group');

  var h = window.innerHeight;
  var top = bargroup.getBoundingClientRect().top;

  if (top < h && !bargroup.init) {

    this.querySelectorAll('[data-trigger]').forEach(function (group, index) {

      bargroup.init = true;

      setTimeout(function () {
        group.removeAttribute('data-trigger');
      }, index * 200)
    });

  }

  this.querySelectorAll('[data-animate]').forEach(function (icon, index) {

    var h = window.innerHeight;
    var top = icon.getBoundingClientRect().top;

    if (top < h) {
      icon.style.transitionDelay = 50 + (index * 20) + 'ms';
      icon.removeAttribute('data-animate');
    }

  });

});

registerSlide(document.querySelector('#patients-treatments'), 'track', function (val) {
  this.querySelectorAll('[data-animate]').forEach(function (icon, index) {

    var h = window.innerHeight;
    var top = icon.getBoundingClientRect().top;

    if (top < h) {
      icon.style.transitionDelay = 50 + (index * 20) + 'ms';
      icon.removeAttribute('data-animate');
    }

  });
})


registerSlide(document.querySelector('#treatments-admission'), 'track', function (val) {

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }
  });

  var bargroup = this.querySelector('.sdc-sf-chart-bar-group');

  var h = window.innerHeight;
  var top = bargroup.getBoundingClientRect().top;

  if (top < h && !bargroup.init) {

    this.querySelectorAll('.sdc-sf-chart-bar-group').forEach(function (group, index) {

      bargroup.init = true;

      setTimeout(function () {
        group.removeAttribute('data-trigger');
      }, index * 200)
    });

  }

});

registerSlide(document.querySelector('#treatments-admissions-breakdown'), 'track', function (val) {

  this.querySelectorAll('.sdc-site-charts[data-url]').forEach(function (chart) {
    if ((val) < 100) {
      if (chart.start && !chart.init) {
        chart.start();
        chart.init = true;
      }
    }
  });
});

registerSlide(document.querySelector('#finances-budget'), 'track', function (val) {

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }
  });

  this.querySelectorAll('.sdc-site-charts[data-url]').forEach(function (chart) {

    var h = window.innerHeight;
    var top = chart.getBoundingClientRect().top;

    if (top < h) {
      if (chart.start && !chart.init) {
        chart.start();
        chart.init = true;
      }
    }

  });

});

registerSlide(document.querySelector('#finances-infographic'), 'track', function (val) {

  var bargroup = this.querySelector('.sdc-sf-chart-bar-group');

  var h = window.innerHeight;
  var top = bargroup.getBoundingClientRect().top;

  if (top < h && !bargroup.init) {

    this.querySelectorAll('.sdc-sf-chart-bar-group').forEach(function (group, index) {

      bargroup.init = true;

      setTimeout(function () {
        group.removeAttribute('data-trigger');
      }, index * 200)
    });

  }

  this.querySelectorAll('[data-animate]').forEach(function (icon, index) {

    var h = window.innerHeight;
    var top = icon.getBoundingClientRect().top;

    if (top < h) {
      icon.style.transitionDelay = 50 + (index * 20) + 'ms';
      icon.removeAttribute('data-animate');
    }

  });

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }
  });

});

registerSlide(document.querySelector('#workforce-shortfalls'), 'track', function (val) {

  this.querySelectorAll('[data-trigger]').forEach(function (bar, index) {

    var h = window.innerHeight;
    var top = bar.getBoundingClientRect().top;

    if (top < h) {
      setTimeout(function () {
        bar.removeAttribute('data-trigger');
      }, index * 200)
    }

  });

  var counter = this.querySelector('[data-role="number-counter"]');

  if ((val) < 100) {
    if (!counter.init) {
      triggerCounters([counter]);
      counter.init = true;
    }
  }



});


registerSlide(document.querySelectorAll('.sdc-sf-title-header'), 'track', function (val) {

  var image = this.querySelector('.sdc-sf-title-header__image');
  var title = this.querySelector('.sdc-sf-title-header__headline');

  var offset = -100;
  if (this.getAttribute('data-offset')) {
    offset = 0
  }

  var dims = image.getBoundingClientRect();
  var top = Math.max(offset, (dims.top * -1) / 20).toFixed(2);

  image.style.cssText = "transform: translateY(" + top + "%)";
  title.style.cssText = "transform: translateY(" + top + "%)";
});


registerSlide(document.querySelector('#resources-gps'), 'track', function (val) {

  this.querySelectorAll('[data-role="number-counter"]').forEach(function (counter) {
    if ((val) < 100) {
      if (!counter.init) {
        triggerCounters([counter]);
        counter.init = true;
      }
    }

  })

  this.querySelectorAll('[data-animate]').forEach(function (icon, index) {

    var h = window.innerHeight;
    var top = icon.getBoundingClientRect().top;

    if (top < h) {
      icon.style.transitionDelay = 50 + (index * 20) + 'ms';
      icon.removeAttribute('data-animate');
    }

  });

});

registerSlide(document.querySelector('#resources-size'), 'track', function (val) {

  this.querySelectorAll('[data-animate]').forEach(function (icon, index) {

    var h = window.innerHeight;
    var top = icon.getBoundingClientRect().top;

    if (top < h) {
      icon.style.transitionDelay = 50 + (index * 20) + 'ms';
      icon.removeAttribute('data-animate');
    }

  });

});



//profiles
(function () {

  function close(profiles, links, index) {
    links[index].removeAttribute('aria-selected');
    profiles[index].setAttribute('aria-hidden', true);
  }

  var profiles = document.querySelectorAll('.sdc-sf-profiles');

  profiles.forEach(function (profile) {

    var items = profile.querySelectorAll('.sdc-sf-profile-text');
    var links = profile.querySelectorAll('.sdc-sf-profile');
    var closebuttons = profile.querySelectorAll('.sdc-sf-profile-text__close');

    links.forEach(function (link, index) {

      closebuttons[index].onclick = function (event) {
        event.preventDefault();
        close(items, links, index)
      }

      link.onclick = function (event) {

        event.preventDefault();

        if (this.hasAttribute('aria-selected')) {
          close(items, links, index);
          return;
        }

        for (var i = items.length; --i > -1;) {
          close(items, links, i);
        }

        this.setAttribute('aria-selected', true);
        items[index].setAttribute('aria-hidden', false);
      }
    })
  })
})();


document.querySelectorAll('[data-role="number-counter"][data-click]').forEach(function (item) {
  item.onclick = function () {
    triggerCounters([this]);
    this.onclick = null;
    this.removeAttribute('data-click');
  }
});

(function () {
  var open = false;
  var sticky = document.querySelector('.sdc-sf-sticky-info');
  var head = sticky.querySelector('.sdc-sf-sticky-info__head');
  var value = sticky.querySelector('.sdc-sf-sticky-info__value');

  var multiplier = 4597;
  var counter = 0;

  setInterval(function () {
    counter += 459;
    requestAnimationFrame(function () {
      value.textContent = counter.toLocaleString('en');
    })
  }, 100)

  sticky.onclick = function () {
    if (!open) {
      open = true;
    }
    sticky.classList.toggle('sdc-sf-sticky-info--open');
  }

  document.body.addEventListener('click', function (ev) {
    if (!sticky.contains(ev.target)) {
      sticky.classList.remove('sdc-sf-sticky-info--open');
    }
  })

  window.addEventListener('scroll', function () {
    if (!open) {
      return;
    }

    sticky.classList.remove('sdc-sf-sticky-info--open');
    open = false;

  })

})();

(function () {
  // sticky nav
  var navpoints = document.querySelectorAll('[data-role="localnav-item"]');
  var navitems = document.querySelectorAll('.sdc-site-localnav li[data-role="nav-item"] a');
  var selected = 0;
  var currentnav = document.querySelector('.sdc-site-localnav__current-section-name');

  function navtick() {
    for (var i = -1; ++i < navpoints.length;) {
      if (navpoints[i].getBoundingClientRect().top < 100) {
        selected = i;
      }
    }

    currentnav.textContent = navpoints[selected].textContent;
    navitems.forEach(function (item) {
      item.removeAttribute('aria-current');
    })

    navitems[selected].setAttribute('aria-current', true);

    setTimeout(function () {
      requestAnimationFrame(navtick);
    }, 200);

  }

  navtick();

})();
