NodeList.prototype.forEach = Array.prototype.forEach,
    function() {
        var t = document.querySelectorAll("[data-track]");

        function e() {
            var t = 100 / window.innerHeight * (this.offsetTop - window.pageYOffset); - 110 < t && t < 110 && this.style.setProperty("--vptop", t)
        }
        t.forEach(function(t) {
            t.track = e
        }), window.addEventListener("scroll", function() {
            requestAnimationFrame(function() {
                t.forEach(function(t) {
                    t.track()
                })
            })
        }, {
            passive: !0
        })
    }(),
    function() {
        var e = new IntersectionObserver(function(t, r) {
            t.forEach(function(t) {
                var e = .25;
                t.target.getAttribute("data-trigger").length && (e = parseInt(t.target.getAttribute("data-trigger"), 10) / 100), (t.isIntersecting || 0 < t.intersectionRatio) && t.target.hasAttribute("data-trigger") && t.intersectionRatio >= e && (t.target.start && !t.target.init && t.target.start(), t.target.playpause && (.1 < t.intersectionRatio ? t.target.playpause(t.target.querySelector("video"), !0) : t.target.playpause(t.target.querySelector("video"), !1)), t.target.hasAttribute("data-animate-in-view") && (r.unobserve(t.target), t.target.removeAttribute("data-animate-in-view")))
            })
        }, {
            rootMargin: "18px",
            threshold: [0, .25, .5, .75, 1]
        });
        setTimeout(function() {
            document.querySelectorAll("[data-trigger]").forEach(function(t) {
                e.observe(t)
            })
        }, 100)
    }(), document.querySelectorAll('[data-role="gunsales-gfx"]').forEach(function(t) {
        t.start = function() {
            t.init = !0, this.removeAttribute("data-role"), this.querySelectorAll("animate").forEach(function(t) {
                t.beginElement && t.beginElement()
            })
        }
    }), document.querySelectorAll(".sf-mini-quiz").forEach(function(s) {
        var u = s.querySelectorAll(".sf-mini-quiz__answer"),
            f = s.querySelector(".sf-mini-quiz__desc"),
            l = ["Correct!", "Wrong!"],
            d = s.getAttribute("data-id").split("|");
        d = parseInt(d[0], 10) / parseInt(d[1], 10), d -= 10;
        var g = !1;
        u.forEach(function(t, c) {
            t.onclick = function(t) {
                var a, e, r, n, o, i;
                t.preventDefault(), g || (s.setAttribute("data-answered", !0), this.setAttribute("data-answer", !0), u[d].setAttribute("data-correct", !0), l = d === c ? l[0] : l[1], f.textContent = [l, (a = f.getAttribute("data-text"), e = 1, r = ["e", "a", "r", "i", "o", "t", "n", "s", "l", " ", "3", "1"], n = ["∑", "∞", "¿", "∃", "¢", "†", "⅔", "√", "≠", "∂", "=", "@"], o = r, i = n, 1 === e && (o = n, i = r), o.forEach(function(t, e) {
                    var r = new RegExp(t, "g");
                    a = a.replace(r, i[e])
                }), a)].join(" "), g = !0)
            }
        })
    })
    var data = [
      {
        "dem": -35,
        "rep": 10
      },
      {
        "dem": -22,
        "rep": 3
      },
      {
        "dem": -60,
        "rep": 32
      }
    ]
  
    var dems = document.querySelectorAll('.sf-venn__circle--dem');
    var reps = document.querySelectorAll('.sf-venn__circle--rep');
    var links = document.querySelectorAll('.sf-venn__nav a');
  
    function render(da) {
      dems.forEach(function (dem) {
        dem.style.cssText = "transform: translateX(" + da.dem + "%);";
      });

      reps.forEach(function (rep) {
        rep.style.cssText = "transform: translateX(" + da.rep + "%)"
      });
    }

    function setRenderTimeout(i) {
      setTimeout(function(){
          render(data[i]);
          links.forEach(function (item) {
            item.removeAttribute('aria-current');
          })
          links[i].setAttribute('aria-current', true)
      },i*666);
    }

    function cycleCharts() {
      for (var i = 0; i < data.length; i++) {
        setRenderTimeout(i);
      }
    }
  
    links.forEach(function (link, index) {
      link.onclick = function (e) {
        links.forEach(function (item) {
          item.removeAttribute('aria-current');
        })
        link.setAttribute('aria-current', true);
        e.preventDefault();
        render(data[index]);
      }
    });

    var venn = document.querySelector('[data-role="sf-venn"]');
    

    venn.start = function () {
      venn.init = true;
      cycleCharts();
    }
    ;