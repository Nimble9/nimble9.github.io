var crossBrowsingEvent = (function (window) {
    if (window.addEventListener) {
        return function (element, eventName, f, isCapture) {
            element.addEventListener(eventName, f, isCapture);
        };
    } else if (window.attachEvent) {
        return function (element, eventName, f) {
            element.attachEvent("on" + eventName, f);
        };
    } else {
        return function (element, eventName, f) {
            element["on" + eventName] = f;
        };
    }
}(window));

crossBrowsingEvent(window, "load", function() {
    "use strict";

    (function ($) {

        /* user import start */


        /*
* jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
* Open source under the BSD License.
* Copyright © 2008 George McGinley Smith
* All rights reserved.
* https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

        (function (factory) {
            if (typeof define === "function" && define.amd) {
                define(['jquery'], function ($) {
                    return factory($);
                });
            } else if (typeof module === "object" && typeof module.exports === "object") {
                exports = factory(require('jquery'));
            } else {
                factory(jQuery);
            }
        })(function($){

// Preserve the original jQuery "swing" easing as "jswing"
            if (typeof $.easing !== 'undefined') {
                $.easing['jswing'] = $.easing['swing'];
            }

            var pow = Math.pow,
                sqrt = Math.sqrt,
                sin = Math.sin,
                cos = Math.cos,
                PI = Math.PI,
                c1 = 1.70158,
                c2 = c1 * 1.525,
                c3 = c1 + 1,
                c4 = ( 2 * PI ) / 3,
                c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
            function bounceOut(x) {
                var n1 = 7.5625,
                    d1 = 2.75;
                if ( x < 1/d1 ) {
                    return n1*x*x;
                } else if ( x < 2/d1 ) {
                    return n1*(x-=(1.5/d1))*x + .75;
                } else if ( x < 2.5/d1 ) {
                    return n1*(x-=(2.25/d1))*x + .9375;
                } else {
                    return n1*(x-=(2.625/d1))*x + .984375;
                }
            }

            $.extend( $.easing,
                {
                    def: 'easeOutQuad',
                    swing: function (x) {
                        return $.easing[$.easing.def](x);
                    },
                    easeInQuad: function (x) {
                        return x * x;
                    },
                    easeOutQuad: function (x) {
                        return 1 - ( 1 - x ) * ( 1 - x );
                    },
                    easeInOutQuad: function (x) {
                        return x < 0.5 ?
                            2 * x * x :
                            1 - pow( -2 * x + 2, 2 ) / 2;
                    },
                    easeInCubic: function (x) {
                        return x * x * x;
                    },
                    easeOutCubic: function (x) {
                        return 1 - pow( 1 - x, 3 );
                    },
                    easeInOutCubic: function (x) {
                        return x < 0.5 ?
                            4 * x * x * x :
                            1 - pow( -2 * x + 2, 3 ) / 2;
                    },
                    easeInQuart: function (x) {
                        return x * x * x * x;
                    },
                    easeOutQuart: function (x) {
                        return 1 - pow( 1 - x, 4 );
                    },
                    easeInOutQuart: function (x) {
                        return x < 0.5 ?
                            8 * x * x * x * x :
                            1 - pow( -2 * x + 2, 4 ) / 2;
                    },
                    easeInQuint: function (x) {
                        return x * x * x * x * x;
                    },
                    easeOutQuint: function (x) {
                        return 1 - pow( 1 - x, 5 );
                    },
                    easeInOutQuint: function (x) {
                        return x < 0.5 ?
                            16 * x * x * x * x * x :
                            1 - pow( -2 * x + 2, 5 ) / 2;
                    },
                    easeInSine: function (x) {
                        return 1 - cos( x * PI/2 );
                    },
                    easeOutSine: function (x) {
                        return sin( x * PI/2 );
                    },
                    easeInOutSine: function (x) {
                        return -( cos( PI * x ) - 1 ) / 2;
                    },
                    easeInExpo: function (x) {
                        return x === 0 ? 0 : pow( 2, 10 * x - 10 );
                    },
                    easeOutExpo: function (x) {
                        return x === 1 ? 1 : 1 - pow( 2, -10 * x );
                    },
                    easeInOutExpo: function (x) {
                        return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
                            pow( 2, 20 * x - 10 ) / 2 :
                            ( 2 - pow( 2, -20 * x + 10 ) ) / 2;
                    },
                    easeInCirc: function (x) {
                        return 1 - sqrt( 1 - pow( x, 2 ) );
                    },
                    easeOutCirc: function (x) {
                        return sqrt( 1 - pow( x - 1, 2 ) );
                    },
                    easeInOutCirc: function (x) {
                        return x < 0.5 ?
                            ( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
                            ( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
                    },
                    easeInElastic: function (x) {
                        return x === 0 ? 0 : x === 1 ? 1 :
                            -pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
                    },
                    easeOutElastic: function (x) {
                        return x === 0 ? 0 : x === 1 ? 1 :
                            pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
                    },
                    easeInOutElastic: function (x) {
                        return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
                            -( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
                            pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
                    },
                    easeInBack: function (x) {
                        return c3 * x * x * x - c1 * x * x;
                    },
                    easeOutBack: function (x) {
                        return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
                    },
                    easeInOutBack: function (x) {
                        return x < 0.5 ?
                            ( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
                            ( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
                    },
                    easeInBounce: function (x) {
                        return 1 - bounceOut( 1 - x );
                    },
                    easeOutBounce: bounceOut,
                    easeInOutBounce: function (x) {
                        return x < 0.5 ?
                            ( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
                            ( 1 + bounceOut( 2 * x - 1 ) ) / 2;
                    }
                });

        });

        var flip = {} || window.flip;

        flip = function () {
            var args = Array.prototype.slice.call(arguments),
                callback = args.pop(),
                modules = (args[0] && typeof args[0] === "string") ? args : args[0],
                i;

            if (!(this instanceof flip)) {
                return new flip(modules, callback);
            }

            if (!modules || modules === "*" || modules[0] === "*") {
                modules = [];
                for (i in flip.modules) {
                    if (flip.modules.hasOwnProperty(i)) {
                        modules.push(i);
                    }
                }
            }

            for (i = 0; i < modules.length; i += 1) {
                flip.modules[modules[i]](this);
            }

            if (callback !== undefined && typeof callback === "function") {
                callback(this);
            }
        };

        flip(function () {

            window.requestAniFrame = (function () { // reduce CPU consumption, improve performance and make this possible
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            }());

            function getIEVersion() {
                var rv = -1; // Return value assumes failure.
                if (navigator.appName === 'Microsoft Internet Explorer') {
                    var ua = navigator.userAgent;
                    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) !== null)
                        rv = parseFloat(RegExp.$1);
                }
                return rv;
            }

            function responsiveImage(w) {
                var device = "src-pc";
                var wv = w;
                if (wv <= 720) {
                    device = "src-mobile";
                } else if (wv > 720 && wv < 1025) {
                    device = "src-tablet";
                } else {
                    device = "src-pc";
                }

                var img = $('.screen-responsive');
                var obj;

                for (var i = 0; i < img.length; i++) {
                    obj = img.eq(i);

                    if (obj.data(device)) {
                        obj.attr('src', obj.data(device));
                    }
                }
            }

            function getYOffset() { // get distance scrolled from the top
                var pageY;
                if (typeof(window.pageYOffset) === 'number') {
                    pageY = window.pageYOffset;
                } else {
                    pageY = document.documentElement.scrollTop || document.body.scrollTop; // IE
                }
                return pageY;
            }

            function pad(number, length) {
                var str = '' + number;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            }

            function preloadImages(frame, image, total, url, type, n) {
                for (var i = frame; i < total; i++) { // loop for each image in frame
                    image[i] = new Image(); // add image object to array
                    image[i].src = url + pad(i, n) + "." + type; // set the source of the image object
                }
            }

            function changeFrame(img, frame, ctx) {
                var thisFrame = Math.round(frame);
                if (img.length > 0 && img[thisFrame]) { // if the image exists in the array
                    if (img[thisFrame].complete) { // if the image is downloaded and ready
                        ctx.drawImage(img[thisFrame], 0, 0);
                    }
                }
            }

            function changeImages(img, frame, elem) {
                var thisFrame = Math.round(frame);
                if (img.length > 0 && img[thisFrame]) { // if the image exists in the array
                    if (img[thisFrame].complete) { // if the image is downloaded and ready
                        $(elem).attr('src', img[thisFrame].src); // change the source of our placeholder image
                    }
                }
            }

            function isFlatForm(options, callback) {
                var filter = "win16|win32|win64|mac|macintel";
                var viewType = options;

                if (navigator.platform) {
                    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                        if (viewType === "mobile" && typeof viewType === "string") {
                            callback();
                        }
                    } else {
                        if (viewType === "pc" && typeof viewType === "string") {
                            callback();
                        }
                    }
                }
            }

            function screenPosition(elem, opts) {
                if (opts.position === "top") {
                    return Math.floor(elem.offset().top - $stickyMenuHeight);
                } else if (opts.position === "middle") {
                    return Math.floor(elem.offset().top - (windowH - elem.height()) / 2);
                } else if (opts.position === "bottom") {
                    // console.log(windowH);
                    return Math.floor(elem.offset().top - (windowH - elem.height()));
                }
            }

            function vidCtrl(end, start) {
                end.pause();
                end.currentTime = 0;
                start.currentTime = 0;
                start.play();
            }

            function Selector(elem) {
                this.header = elem.find(".f_header");
                this.container = elem.find(".f_container");
                this.text = elem.find(".h_inside");
                this.image = elem.find(".c_image");
                this.top = elem.offset().top;
                this.position = function (el, opts) {
                    return screenPosition(elem || el, opts);
                };
                this.slider = elem.find(".slide_inside");
                this.btn = elem.find(".btn");
                this.vid = function (el) {
                    return elem.find(el).get(0);
                };
                this.frames = this.container.find(".frames").get(0);
            }

            function Sequence(frame, totalFrames, url, elem) {
                this.frame = frame;
                this.totalFrames = totalFrames;
                this.img = [];
                this.url = "images/frames/" + url;
                if (elem.match(/vid/g)) {
                    this.elem = document.getElementById(elem);
                    this.ctx = this.elem.getContext("2d");
                }
            }

            function addIndicateCopy(el, otps) {
                function setSlide(num, elem) {
                    $(elem)
                        .children()
                        .text("slide" + (num + 1) + ": " + otps[num + 1]);
                }

                if (typeof el === "string") {
                    $(el + " " + ".slick-dots li").each(function (n, e) {
                        setSlide(n, e)
                    });
                } else {
                    $(el).find(".slick-dots li").each(function (n, e) {
                        setSlide(n, e)
                    });
                }

            }

            function selectMenu(n) {
                $staticMenu.find("li").eq(n).siblings().removeClass("on");
                $staticMenu.find("li").eq(n).addClass("on");

                $stickyMenu.find("li").eq(n).siblings().removeClass("on");
                $stickyMenu.find("li").eq(n).addClass("on");
            }


            function tabBtn(el) {
                var $select = $(el).data("select");
                $(el).parent().children().siblings().removeClass("on");
                $(el).addClass("on");

                $(el).siblings().children("strong").removeClass("on");
                $(el).children("strong").addClass("on");

                return $select;
            }

            function tabImg(el, cl) {
                var img = tabBtn(el);
                $("." + img).parent().children().siblings().removeClass(cl);
                $("." + img).addClass(cl);
            }


            // left: 37, up: 38, right: 39, down: 40,
            // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
            var windowW = null;
            var windowH = null;
            var responsiveEvent = null;
            var offsetY = null;
            var ie = null;
            var keys = null;
            var didScroll = null;
            var isTablet = null;
            var isMobile = null;

            var $keyVisual = null,
                $menuWrapper = null,
                $menuBtn = null,
                $stickyMenuHeight = null,
                $stickyMenu = null,
                $staticMenu = null,
                $staticTop = null,
                $staticHeight = null,

                $creativity = null,
                $collaboration = null,
                $innovation = null,
                $notation = null,
                $capture = null,
                $navigation = null,
                $connection = null,
                $synchronization = null,
                $presentation = null,
                $distribution = null,
                $touch = null,
                $design = null,
                $design2 = null,
                $display = null,
                $solution2 = null,
                $protection = null,

                _creativity = null,
                _collaboration = null,
                _innovation = null,
                _notation = null,
                _capture = null,
                _navigation = null,
                _connection = null,
                _synchronization = null,
                _presentation = null,
                _distribution = null,
                _touch = null,
                _design = null,
                _design2 = null,
                _display = null,
                _solution2 = null,
                _protection = null,

                notationVid = null,
                captureVid = null,
                navigationVid = null,
                protectionVid = null,
                touchVid = null,
                design2Vid = null,

                $design2Top = null,
                $scrolled = null;

            $(function () {
                windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                ie = getIEVersion();
                if (ie === 8) {
                    $(".flip-wrapper").addClass("ie8");
                }

                didScroll = false;
                keys = {37: 1, 38: 1, 39: 1, 40: 1};

                // menu
                $menuWrapper = $(".flip-menu");
                $menuBtn = $menuWrapper.find("a");
                $staticMenu = $menuWrapper.find(".static-menu");
                $staticTop = $staticMenu.offset().top;
                $staticHeight = $staticMenu.height();
                $stickyMenu = $menuWrapper.find(".sticky-menu");
                $stickyMenuHeight = $stickyMenu.height();

                // kv
                $keyVisual = $(".s_key-visual");
                $creativity = $(".flip-creativity");
                $collaboration = $(".flip-collaboration");
                $innovation = $(".flip-innovation");

                // feature
                $notation = $(".flip-notation");
                $capture = $(".flip-capture");
                $navigation = $(".flip-navigation");
                $protection = $(".flip-protection");
                $connection = $(".flip-connection");
                $synchronization = $(".flip-synchronization");
                $presentation = $(".flip-presentation");
                $distribution = $(".flip-distribution");
                $touch = $(".flip-touch");
                $design = $(".flip-design");
                $design2 = $(".flip-design2");
                $display = $(".flip-display");
                $solution2 = $(".flip-solution2");

                _creativity = new Selector($creativity);
                _collaboration = new Selector($collaboration);
                _innovation = new Selector($innovation);
                _notation = new Selector($notation);
                _capture = new Selector($capture);
                _navigation = new Selector($navigation);
                _protection = new Selector($protection);
                _distribution = new Selector($distribution);
                _touch = new Selector($touch);
                _design = new Selector($design);
                _connection = new Selector($connection);
                _synchronization = new Selector($synchronization);
                _presentation = new Selector($presentation);
                _design2 = new Selector($design2);
                _display = new Selector($display);
                _solution2 = new Selector($solution2);

                notationVid = 1;
                captureVid = 1;
                navigationVid = 1;
                protectionVid = 1;
                touchVid = 1;
                design2Vid = 1;

                isTablet = 1;
                isMobile = 1;

                windowW <= 720 ? isMobile = 1 : isMobile = 0;
                windowW <= 1024 ? isTablet = 1 : isTablet = 0;

                var seqObj1 = $(".flip-solution2").find(".c_solution2-1 .sq_figure img"),
                    seqObj2 = $(".flip-solution2").find(".c_solution2-3 .sq_figure img"),
                    seqObj1_opt = {
                        len: seqObj1.length,
                        count: 0,
                        trg: false
                    },
                    seqObj2_opt = {
                        len: seqObj2.length,
                        count: 0,
                        trg: false
                    };

                responsiveImage(windowW);

                isFlatForm("mobile", function () {
                    $(".c_video video").css("display", "none");
                    $(".c_video .alt-image").css("display", "block");
                });

                if (!isMobile) {
                    $staticMenu.removeClass("off");
                    $stickyMenu.removeClass("fixed");

                    if (offsetY > $staticTop + $staticHeight) {
                        $stickyMenu.removeClass("off");
                    } else {
                        $stickyMenu.addClass("off");
                    }

                } else {
                    $stickyMenu.removeClass("off");
                    $staticMenu.addClass("off");

                    if (offsetY < screenPosition($creativity, {position: "top"})) {
                        $stickyMenu.removeClass("fixed");
                    } else {
                        $stickyMenu.addClass("fixed");
                    }
                }

                $menuBtn.click(function (e) {
                    var $li = $(this).parent();
                    var pattern = /(creativity|collaboration|innovation)/g;
                    var thisClass = $li.attr("class").match(pattern);
                    var $elem = $(".flip-" + thisClass);
                    var $top = $elem.offset().top - $stickyMenuHeight;
                    var $middle = $elem.offset().top - ((windowH - $elem.height()) / 2);

                    function scrollPosition(opts) {
                        if (opts.position === "top") {
                            scrollTop($top);
                        } else if (opts.position === "middle") {
                            scrollTop($middle);
                        }
                    }

                    function scrollTop(val) {
                        $("html, body").animate({
                            scrollTop: val + 5
                        }, 1500, "easeInOutQuart");
                    }

                    if (isMobile) {
                        if ($li.hasClass("n_" + thisClass)) {
                            scrollPosition({position: "top"});
                        }

                    } else {
                        if ($li.hasClass("n_" + thisClass)) {
                            scrollPosition({position: "middle"});
                        }
                    }

                    return false;
                });

                $menuBtn.on("focus", function () {
                    $(this).parent().addClass("hover");
                });

                $menuBtn.on("blur", function () {
                    $(this).parent().removeClass("hover");
                });

                /* kv */
                if (offsetY > _creativity.position(this, {position: "bottom"}) && !_creativity.header.hasClass("active")) {
                    _creativity.header.addClass("active");
                }
                if (offsetY > _collaboration.position(this, {position: "bottom"}) && !_collaboration.header.hasClass("active")) {
                    _collaboration.header.addClass("active");
                }
                if (offsetY > _innovation.position(this, {position: "bottom"}) && !_innovation.header.hasClass("active")) {
                    _innovation.header.addClass("active");
                }

                _navigation.slider.slick({
                    accessibility: false,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    appendDots: $navigation.find(".f_container"),
                    fade: true,
                    speed: 0,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            fade: false,
                            speed: 300
                        }
                    }]
                });

                _protection.slider.slick({
                    accessibility: false,
                    infinite: false,
                    arrows: false,
                    dots: false,
                    fade: true,
                    appendDots: ".flip-protection",
                    speed: 500,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            fade: false,
                            speed: 300
                        }
                    }]
                });

                _connection.slider.slick({
                    accessibility: false,
                    infinite: false,
                    arrows: false,
                    dots: false
                });

                _design2.slider.slick({
                    accessibility: false,
                    infinite: false,
                    dots: true,
                    fade: true,
                    speed: 0,
                    nextArrow: "<button type='button' class='slick-next'>Next</button>",
                    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            fade: false,
                            speed: 300,
                            arrows: false
                        }
                    }]
                });

                _solution2.slider.slick({
                    accessibility: false,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    appendDots: $solution2.find(".f_container")
                });

                _navigation.slider.on("beforeChange", function (a, b, c, d) {
                    _navigation.text.hide();
                    _navigation.text.eq(d).fadeIn();

                    isFlatForm("pc", function () {
                        if (ie !== 8) {
                            if (d === 0) {
                                vidCtrl(_navigation.vid(".vid2"), _navigation.vid(".vid1"));

                            } else {
                                vidCtrl(_navigation.vid(".vid1"), _navigation.vid(".vid2"));
                            }
                        }
                    });
                });

                _protection.slider.on("beforeChange", function (a, b, c, d) {
                    _protection.text.hide();
                    _protection.text.eq(d).fadeIn();

                    tabBtn($(".flip-protection .btn").eq(d));
                    isFlatForm("pc", function () {
                        if (ie !== 8) {
                            if (d === 0) {
                                vidCtrl(_protection.vid(".vid2"), _protection.vid(".vid1"));

                            } else {
                                vidCtrl(_protection.vid(".vid1"), _protection.vid(".vid2"));
                            }
                        }
                    });
                });

                _design2.slider.on("beforeChange", function(a, b, c, d) {
                    var $before = _design2.container.find(".s_contain").eq(c);
                    if($before.find('video').get(0).readyState === 4) {
                        $before.find('video').get(0).pause();
                        $before.find('video').get(0).currentTime = 0;
                        design2Vid = 1;
                    }
                });

                _design2.slider.on("afterChange", function(a, b, c) {
                    var $after =  _design2.container.find(".s_contain").eq(c);
                    if($after.find('video').get(0).readyState === 4) {
                        $after.find('video').get(0).play();
                        design2Vid = 0;
                    }
                });

                _connection.slider.on("beforeChange", function (a, b, c, d) {
                    _connection.btn.removeClass("on");
                    _connection.btn.eq(d).addClass("on");
                    _connection.btn.find("strong").removeClass("on");
                    _connection.btn.eq(d).find("strong").addClass("on");
                    var $slideDescription = _connection.header.find(".slide_description");
                    var $slideDisclaimer = _connection.header.find(".slide_disclaimer");

                    if (d === 0) {
                        $slideDescription.text("Samsung Flip includes a dedicated HDMI port for seamless connectivity with user's personal devices.");
                        $slideDisclaimer.text("");
                    } else if (d === 1) {
                        $slideDescription.text("Samsung Flip users also can enhance inter-device communication through thorough wireless connectivity with the devices supporting the windows 10 operating system.");
                        $slideDisclaimer.text("");
                    } else if (d === 2) {
                        $slideDescription.text("Screen mirroring connectivity also empowers Samsung Flip users to mirror their personal mobile device content directly onto the central screen.");
                        $slideDisclaimer.text("*Samsung Galaxy Note 8 and Galaxy Series devices(2016 or late) with an updated Android O OS support full screen mirroring in portrait mode.");
                    } else {
                        $slideDescription.text("Users can interact the Samsung Flip by linking personal devices through the integrated NFC technology.");
                        $slideDisclaimer.text("*Samsung Galaxy Series devices(2016 or late) with an updated Android O OS can launch screen mirroring via NFC tagging.");
                    }
                });

                _protection.btn.click(function () {
                    var img = tabBtn(this);
                    var $idx = $(this).index();

                    _protection.slider.slick("slickGoTo", $idx);
                    return false;
                });

                _connection.btn.click(function () {
                    var $idx = $(this).index();
                    _connection.slider.slick("slickGoTo", $idx);
                    return false;
                });

                _presentation.btn.click(function () {
                    tabImg(this, "on");
                    return false;
                });

                _solution2.slider.on("afterChange", function (a, b, c) {
                    _solution2.container.find(".c_image").eq(c).siblings().removeClass("on");
                    _solution2.container.find(".c_image").eq(c).addClass("on");

                    if (c !== 0) {
                        seqObj1_opt.count = 0;
                        seqObj1.removeClass("on");
                        seqObj1.eq(seqObj1_opt.count).addClass("on");
                        seqObj1_opt.trg = false;

                    } else {
                        seqObj1_opt.trg = true;

                    }

                    if (c === 2) {
                        seqObj2_opt.trg = true;

                    } else {
                        seqObj2_opt.count = 0;
                        seqObj2.removeClass("on");
                        seqObj2.eq(seqObj2_opt.count).addClass("on");
                        seqObj2_opt.trg = false;
                    }
                });

                _solution2.slider.on("beforeChange", function (a, b, c, d) {
                    $(".c_inner_feature .i_feature").hide();
                    $(".c_inner_feature .i_feature").eq(d).fadeIn();
                });


                $(".flip-wrapper .slick-arrow").each(function (a, b) {
                    if (a === 0) {
                        $(b).text("Previous");
                        $(b).attr("aria-label", "Previous");
                    } else {
                        $(b).text("Next");
                        $(b).attr("aria-label", "Next");
                    }
                });

                /* indicate setting start */
                addIndicateCopy($navigation, {
                    1: "Navigate, with Intuition",
                    2: "Scroll, with Ease"
                });
                addIndicateCopy($protection, {
                    1: "Protect Your Valuable Ideas",
                    2: "Unlock, with Convenience"
                });
                addIndicateCopy($design2, {
                    1: "Ergonomic 4.5º tilt in portrait mode",
                    2: "Advanced pivot for optimal",
                    3: "Convenient pen holder",
                    4: "Sleek gray color",
                    5: "User-friendly composition",
                    6: "Spacious tray"
                });
                addIndicateCopy($solution2, {
                    1: "Hall sensor",
                    2: "Proximity sensor",
                    3: "Accelerometer sensor"
                });

                $navigation.on("breakpoint", function () {
                    $(this)
                        .find(".slick-dots li")
                        .removeAttr("aria-hidden");

                    addIndicateCopy(this, {
                        1: "Navigate, with Intuition",
                        2: "Scroll, with Ease"
                    });
                });
                $protection.on("breakpoint", function () {
                    $(this)
                        .find(".slick-dots li")
                        .removeAttr("aria-hidden");

                    addIndicateCopy(this, {
                        1: "Protect Your Valuable Ideas",
                        2: "Unlock, with Convenience"
                    });
                });
                /* indicate setting end */

                // delete aria-hidden
                (function () {
                    var $dots = $(".slick-dots li");
                    var $slider = $(".slick-slider");
                    var that;
                    $dots.removeAttr("aria-hidden"); // when load remove aria-hidden
                    function del(callback) {
                        var setCount = 0;
                        (function delLoop() {
                            setCount += 1;
                            if (setCount < 7) {
                                callback();
                            }
                            setTimeout(delLoop, 1000 / 50);
                        }());
                    }

                    $slider.on("beforeChange", function () {
                        that = this;
                        del(function () {
                            if ($(that).find($dots).parent().hasClass("slick-dots")) {
                                $(that)
                                    .find($dots)
                                    .removeAttr("aria-hidden");
                            } else {
                                $dots.removeAttr("aria-hidden");
                            }
                        });
                    });
                    $slider.on("afterChange", function () {
                        if ($(this).find($dots).parent().hasClass("slick-dots")) {
                            $(this)
                                .find($dots)
                                .removeAttr("aria-hidden");
                        } else {
                            $dots.removeAttr("aria-hidden");
                        }
                    });
                }());

                setInterval(function () {
                    if(seqObj1_opt.trg) {
                        if (seqObj1_opt.count < seqObj1_opt.len && seqObj1_opt.trg) {
                            seqObj1_opt.count++;
                            seqObj1.eq(seqObj1_opt.count).addClass("on");
                        }
                    }

                    if(seqObj2_opt.trg) {
                        if (seqObj2_opt.count < seqObj2_opt.len && seqObj2_opt.trg) {
                            seqObj2_opt.count++;
                            seqObj2.eq(seqObj2_opt.count).addClass("on");
                        }
                    }
                }, 30);

                $(this).scroll(function (e) {
                    didScroll = true;
                    ie === 8 ? offsetY = $(window).scrollTop() : offsetY = getYOffset();

                    /* menu start */
                    if (!isMobile) {
                        if (offsetY > $staticTop + $staticHeight) {
                            $stickyMenu.removeClass("off");
                            $staticMenu.addClass("off");

                        } else {
                            $staticMenu.removeClass("off");
                            $stickyMenu.addClass("off");
                        }

                        if (offsetY < screenPosition($collaboration, {position: "middle"})) {
                            selectMenu(0);
                        } else if (offsetY > screenPosition($collaboration, {position: "middle"}) && offsetY < screenPosition($innovation, {position: "middle"})) {
                            selectMenu(1);
                        } else {
                            selectMenu(2);
                        }



                    } else {
                        if (offsetY < screenPosition($collaboration, {position: "top"})) {
                            selectMenu(0);
                        } else if (offsetY > screenPosition($collaboration, {position: "top"}) && offsetY < screenPosition($innovation, {position: "top"})) {
                            selectMenu(1);
                        } else {
                            selectMenu(2);
                        }

                        if (offsetY < screenPosition($creativity, {position: "top"})) {
                            $stickyMenu.removeClass("fixed");
                        } else {
                            $stickyMenu.addClass("fixed");
                        }
                    }
                    /* menu end */

                    /* kv */
                    if (offsetY > _creativity.position(this, {position: "bottom"}) && !_creativity.header.hasClass("active")) {
                        _creativity.header.addClass("active");
                    }
                    if (offsetY > _collaboration.position(this, {position: "bottom"}) && !_collaboration.header.hasClass("active")) {
                        _collaboration.header.addClass("active");
                    }
                    if (offsetY > _innovation.position(this, {position: "bottom"}) && !_innovation.header.hasClass("active")) {
                        _innovation.header.addClass("active");
                    }

                    if(!isMobile && !isTablet) {

                        if (ie !== 8) {
                            $design2Top = _design2.container.offset().top;
                            $scrolled = offsetY - $design2Top;

                            if (offsetY > _notation.position(_notation.container, {position: "bottom"}) && notationVid) {
                                if(_notation.vid(".vid").readyState === 4) {
                                    _notation.vid(".vid").play();
                                }
                                notationVid = 0;
                            } else if (offsetY < _notation.container.offset().top - windowH) {
                                if(_notation.vid(".vid").readyState === 4) {
                                    _notation.vid(".vid").pause();
                                    _notation.vid(".vid").currentTime = 0;
                                }
                                notationVid = 1;
                            }

                            if (offsetY > _capture.position(_capture.container, {position: "bottom"}) && captureVid) {
                                if(_capture.vid(".vid").readyState === 4) {
                                    _capture.vid(".vid").play();
                                }
                                captureVid = 0;
                            } else if (offsetY < _capture.container.offset().top - windowH) {
                                if(_capture.vid(".vid").readyState === 4) {
                                    _capture.vid(".vid").pause();
                                    _capture.vid(".vid").currentTime = 0;
                                }
                                captureVid = 1;
                            }

                            if (offsetY > _navigation.position(_navigation.container, {position: "bottom"}) && navigationVid) {
                                if(_navigation.vid(".vid1").readyState === 4 && _navigation.vid(".vid2").readyState === 4) {
                                    _navigation.vid(".vid1").play();
                                    _navigation.vid(".vid2").play();
                                }
                                navigationVid = 0;
                            } else if (offsetY < _navigation.container.offset().top - windowH) {
                                if(_navigation.vid(".vid1").readyState === 4 && _navigation.vid(".vid2").readyState === 4) {
                                    _navigation.vid(".vid1").pause();
                                    _navigation.vid(".vid2").pause();
                                    _navigation.vid(".vid1").currentTime = 0;
                                    _navigation.vid(".vid2").currentTime = 0;
                                }
                                navigationVid = 1;
                            }

                            if (offsetY > _protection.position(_protection.container, {position: "bottom"}) && protectionVid) {
                                if(_protection.vid(".vid1").readyState === 4) {
                                    _protection.vid(".vid1").play();
                                    _protection.vid(".vid2").play();
                                }
                                protectionVid = 0;
                            } else if (offsetY < _protection.container.offset().top - windowH) {
                                if(_protection.vid(".vid1").readyState === 4) {
                                    _protection.vid(".vid1").pause();
                                    _protection.vid(".vid2").pause();
                                    _protection.vid(".vid1").currentTime = 0;
                                    _protection.vid(".vid2").currentTime = 0;
                                }
                                protectionVid = 1;
                            }
                            if (offsetY > _touch.position(_touch.container, {position: "bottom"}) && touchVid) {
                                if(_touch.vid(".vid").readyState === 4) {
                                    _touch.vid(".vid").play();
                                }
                                touchVid = 0;
                            } else if (offsetY < _touch.container.offset().top - windowH) {
                                if(_touch.vid(".vid").readyState === 4) {
                                    _touch.vid(".vid").pause();
                                    _touch.vid(".vid").currentTime = 0;
                                }
                                touchVid = 1;
                            }

                            // flip design
                            var $current = _design2.container.find('.slick-current');
                            var $video = $current.find('video');
                            if($video.get(0).readyState === 4) {
                                if(offsetY > $design2Top && offsetY < $design2Top + windowH) {
                                    if(design2Vid) {
                                        design2Vid = 0;
                                        $video.get(0).play();
                                    }
                                } else if(offsetY < $design2Top - windowH) {
                                    design2Vid = 1;
                                    $video.get(0).pause();
                                    $video.get(0).currentTime = 0;
                                } else if (offsetY > $design2Top + windowH) {
                                    design2Vid = 1;
                                    $video.get(0).pause();
                                    $video.get(0).currentTime = 0;
                                }
                            }


                            if (!isMobile) {
                                //menu bottom fix
                                if (offsetY > ($(".flip-wrapper").offset().top + $(".flip-wrapper").height()) - (windowH / 2) - ($stickyMenuHeight / 2)) {
                                    $stickyMenu.addClass("end");
                                } else {
                                    $stickyMenu.removeClass("end");
                                }
                            } else {
                                if (offsetY > $(".flip-wrapper").height() - $stickyMenuHeight) {
                                    $stickyMenu.addClass("end");
                                } else {
                                    $stickyMenu.removeClass("end");
                                }
                            }
                        }
                    }

                    if (offsetY > _synchronization.position(_synchronization.container, {position: "bottom"})) {
                        $(".touch-wave").addClass("on");
                        _synchronization.image.eq(1).addClass("on");
                    } else {
                        $(".touch-wave").removeClass("on");
                        _synchronization.image.eq(1).removeClass("on");
                    }
                    if (offsetY > _distribution.position(_distribution.container, {position: "bottom"})) {
                        _distribution.image.eq(0).addClass("hide");
                    } else {
                        _distribution.image.eq(0).removeClass("hide");
                    }
                    if (offsetY > _design.position(_design.container, {position: "bottom"})) {
                        _design.image.addClass("active");
                    } else {
                        _design.image.removeClass("active");
                    }
                    if (offsetY > _display.position(_display.container, {position: "bottom"})) {
                        _display.image.eq(1).addClass("show");
                    } else {
                        _display.image.eq(1).removeClass("show");
                    }
                    if (offsetY > _solution2.position(_solution2.container, {position: "bottom"})) {
                        // _solution2.container.find(".c_solution2-1").addClass("on");
                        seqObj1_opt.trg = true;
                    }

                });

            });

            $(window).resize(function () {
                windowW = window.innerWidth;
                windowH = window.innerHeight;
                windowW <= 720 ? isMobile = 1 : isMobile = 0;
                windowW <= 1024 ? isTablet = 1 : isTablet = 0;

                clearTimeout(responsiveEvent);
                responsiveEvent = setTimeout(function () {
                    responsiveImage(windowW);
                    $stickyMenuHeight = $stickyMenu.height();

                    if (!isMobile) {
                        $staticMenu.removeClass("off");
                        $stickyMenu.removeClass("off fixed");

                        if (offsetY > $staticTop + $staticHeight) {
                            $stickyMenu.removeClass("off");
                        } else {
                            $stickyMenu.addClass("off");
                        }
                    } else {
                        $stickyMenu.removeClass("off");
                        $staticMenu.addClass("off");

                        if (offsetY < screenPosition($creativity, {position: "top"})) {
                            $stickyMenu.removeClass("fixed");
                        } else {
                            $stickyMenu.addClass("fixed");
                        }
                    }
                }, 250);

            });


        });

        /* user import end*/

    }(jQuery));
});