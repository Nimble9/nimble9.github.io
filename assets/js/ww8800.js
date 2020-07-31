/**
 * Created by nimble9 on 2017-04-14.
 */

// document.addEventListener("DOMContentLoaded", function() {
//     "use strict";
//
//     (function($) {
//
//     }(jQuery));
//
// });




var WW8800 = {} || window.WW8800;

WW8800 = function(){
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    if(!(this instanceof WW8800)){
        return new WW8800(modules, callback);
    }

    // this.a = 1;
    // this.b = function() {
    //     var c = function() {
    //         alert(this);
    //     };
    //     return c;
    // };

    if(!modules || modules === "*" || modules[0] === "*"){
        modules = [];
        for(i in WW8800.modules){
            if(WW8800.modules.hasOwnProperty(i)){
                modules.push(i);
            }
        }
    }

    for(i = 0; i < modules.length; i += 1) {
        WW8800.modules[modules[i]](this);
    }

    if(callback !== undefined && typeof callback === "function"){
        callback(this);
    }

};

// WW8800.modules = {};
// WW8800.modules.dom = function(box) {
//     box.getName = function() {
//         console.log("hi");
//     };
// };

WW8800(function() {
    var windowW = window.innerWidth;
    var windowH = window.innerHeight;
    // var $ = function(el) {
    //     var dom = document.querySelectorAll(el),
    //         val;
    //
    //     if(dom.length === 0) val = 'undefined';
    //     if(dom.length === 1) val = dom[0];
    //     if(dom.length > 1) val = dom;
    //     return val;
    // };
    // var addClass = function(el, className) {
    //     if(el.classList) {
    //         el.classList.add(className);
    //     } else {
    //         el.className += '' + className;
    //     }
    // };
    // var removeClass = function(el, className) {
    //     var check;
    //     if(el.classList) {
    //         el.classList.remove(className);
    //     } else {
    //         check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    //         el.className = el.className.replace(check, " ").trim();
    //     }
    // };
    // var offset = function(el) {
    //     var rect = el.getBoundingClientRect(),
    //         body = document.body || document.documentElement;
    //
    //     return {
    //         top: rect.top + body.scrollTop,
    //         left: rect.left + body.scrollLeft
    //     }
    // };

    var getIEVersion = function() {
        var rv = -1; // Return value assumes failure.
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    };
    var offsetVal = function(elem, st) {
        var elements = $(elem),
            len = elements.length,
            i;

        for(i = 0; i < len; i++) {
            var element = elements[i],
                elementOffset = offset(elements[i]),
                elementTop = elementOffset.top,
                elementHeight = element.offsetHeight;

            if(st > elementTop && st < elementTop + elementHeight) {
                return {
                    element: element,
                    elementTop: elementTop,
                    elementHeight: elementHeight
                };
            }
        }
    };

    var responsiveImage = function(w){
        var device = "screen-desktop";
        var wv = w;
        if (wv < 721) {
            device = "screen-mobile";
        } else if(wv < 1024) {
            device = "screen-tablet";
        } else {
            device = "screen-desktop";
        }

        var img = $('.screen-responsive');
        var obj;

        for(var i=0; i<img.length; i++) {
            obj = img.eq(i);

            if (obj.data(device)) {
                obj.attr('src', obj.data(device));
            }
        }
    };

    var responsiveEvent;

    var ft02Vid;
    var ft06Vid;
    var ft07Vid;

    $(window).scroll(function() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        var feature1 = (function() {
            var $ft1 = $(".pdp-feature-01");
            var $ft1Top = $($ft1).offset().top;
            var $ft1active = $(".pdp-feature-01 .dynamic-img");
            var $copyArea = $(".pdp-feature-01 .pdp-text-area");
            var $featureTxt = $(".pdp-feature-01 .feature-txt");
            var $maskObj = $(".mask-obj");
            var $graphObj = $(".graph-obj");
            var visibleCopy, mask;

            if(scrollTop > $ft1Top) {
                $($ft1active).addClass("active");

                visibleCopy = setTimeout(function() {
                    $($copyArea).css("opacity", 1);
                    $($featureTxt).css("opacity", 1);
                }, 2000);

                mask = setTimeout(function() {
                    $($maskObj).addClass("shown");
                    $($graphObj).addClass("shown");
                    $($graphObj).addClass("rotated");
                }, 2500);
            }
        }());

        var feature2 = (function() {
            var ft2 = $(".pdp-feature-02");
            var ft2Top = $(ft2).offset().top;
            // var ft2active = $(".pdp-feature-02 .dynamic-img");
            var ft2vid = document.getElementById("feature_2-video");
            var mask1 = $(".mask-1");
            var mask2 = $(".mask-2");
            var mask3 = $(".mask-3");
            var mask4 = $(".mask-4");
            var maskCopy;

            if(scrollTop > ft2Top) {
                // $(ft2active).addClass("active");

                if(ft02Vid === undefined && getIEVersion() !== 8) {
                    ft2vid.play();
                    ft02Vid = false;
                }
                // maskCopy = setTimeout(function() {
                //     $(mask1).css({
                //         transform: "translateX(500px)",
                //         transition: "all ease 4s"
                //     });
                //     $(mask2).css({
                //         transform: "translateX(500px)",
                //         transition: "all ease 4s"
                //     });
                //     $(mask3).css({
                //         transform: "translateX(-500px)",
                //         transition: "all ease 3.5s"
                //     });
                //     $(mask4).css({
                //         transform: "translateX(500px)",
                //         transition: "all ease 3.5s"
                //     });
                // }, 1000);
            }
        }());

        var feature3 = (function() {
            var ft3 = $(".pdp-feature-03");
            var ft3Top = $(ft3).offset().top;
            var dynamic = $(".pdp-feature-03 .dynamic-img");
            var first =  $(".pdp-feature-03 .feature-img:first-child");
            var delay;

            if(scrollTop > ft3Top) {
                delay = setTimeout(function() {
                    $(first).addClass("active-1");
                    $(dynamic).addClass("active-2")
                }, 1000);
            }
            // else {
            //     clearTimeout(delay);
            //     removeClass(first, "active-1");
            //     removeClass(dynamic, "active-2");
            //
            // }
        }());

        var feature4 = (function() {
            var ft4 = $(".pdp-feature-04");
            var ft4Top = $(ft4).offset().top;
            var dynamic = $(".pdp-feature-04 .dynamic-img");
            var delay;

            if(scrollTop > ft4Top) {
                delay = setTimeout(function() {
                    $(dynamic).addClass("active");
                }, 500);
            }
            // else {
            //     removeClass(dynamic, "active");
            // }
        }());

        var feature5 = (function() {
            var ft5 = $(".pdp-feature-05");
            var ft5Top = $(ft5).offset().top;
            var icon = $(".feature-icon-wrapper .feature-icon");
            var showIcon;
            var num = 0;

            if(scrollTop > ft5Top) {
                showIcon = setInterval(function() {

                    $(icon[num]).css({
                        opacity : 1,
                        filter : "alpha(opacity=100)"
                    });

                    num++;
                    if(num > 3) {
                        clearInterval(showIcon);
                    }
                }, 1000);
            }
            // else {
            //     showIcon = setTimeout(function() {
            //         for(num = 0; num < icon.length; num++) {
            //             icon[num].style.opacity = 0;
            //             icon[num].style.filter = "alpha(opacity=0)";
            //         }
            //     }, 500);
            // }
        }());

        var feature6 = (function() {
            var ft6 = $(".pdp-feature-06");
            var ft6Top = $(ft6).offset().top;
            var ft6vid = document.getElementById("feature_6-video");

            if(scrollTop > ft6Top) {

                if(ft06Vid === undefined && getIEVersion() !== 8) {
                    ft6vid.play();
                    ft06Vid = false;
                }
            }
        }());

        var feature7 = (function() {
            var ft7 = $(".pdp-feature-07");
            var ft7Top = $(ft7).offset().top;
            var dynamic = $(".pdp-feature-07 .dynamic-img");
            var ft7vid = document.getElementById("feature_7-video");
            var ft7vidTop = $(ft7vid).offset().top;

            if(scrollTop > ft7Top) {
                $(dynamic).addClass("active");
            }
            if(scrollTop > ft7vidTop) {
                if(ft07Vid === undefined && getIEVersion() !== 8) {
                    ft7vid.play();
                    ft07Vid = false;
                }
            }
            // else {
            //     removeClass(dynamic, "active");
            // }
        }());

        var feature12 = (function() {
            var ft12 = $(".pdp-feature-12");
            var ft12Top = $(ft12).offset().top;
            var handler = $(".ui-slider-handle");
            var overlap = $(".pdp-feature-12 .feature-overlap");

            if(scrollTop > ft12Top) {
                $(handler).addClass("active-1");
                $(overlap).addClass("active-2");
            }
            // else {
            //     removeClass(handler, "active-1");
            //     removeClass(overlap, "active-2");
            //     // overlap.style.width = "50%";
            //     // handler.style.left = "50%";
            // }
        }());

        var feature13 = (function() {
            var ft13 = $(".pdp-feature-13");
            var ft13Top = $(ft13).offset().top;
            var first = $(".pdp-feature-13 .feature-img:first-child");

            if(scrollTop > ft13Top) {
                $(first).addClass("active");
            } else {
                $(first).removeClass("active");
            }
        }());


        //ie8
        var feature5_ie8 = (function() {
            var ie8 = getIEVersion();
            if(ie8 === 8) {
                var ft5 = $(".pdp-feature-05");
                var ft5Top = $(ft5).offset().top;
                var icon = $(".feature-icon-wrapper .feature-icon");
                var showIcon;
                var num = 0;

                if(scrollTop > ft5Top) {
                    showIcon = setInterval(function() {

                        $(icon[num]).css({
                            display : "block"
                        });

                        num++;
                        if(num > 3) {
                            clearInterval(showIcon);
                        }
                    }, 1000);
                }
            }
        }());

    });

    $(function() {
        responsiveImage(windowW);

        // var feature2 = (function($){
        //     var $openBtn = $(".open-layer button");
        //     var $layer = $(".layer-wrapper");
        //     var $vidBtn = $(".vid-btn-wrapper button");
        //     var $vid1 = $(".feature-vid1");
        //     var $vid2 = $(".feature-vid2");
        //     var video1 = document.getElementById("feature_2-video-1");
        //     var video2 = document.getElementById("feature_2-video-2");
        //     var $playBtn = $(".vid-ctrl-wrapper button:first-child");
        //     var $pauseBtn = $(".vid-ctrl-wrapper button:last-child");
        //     var $play1 = $(".vid-ctrl-wrapper .play-btn-1");
        //     var $play2 = $(".vid-ctrl-wrapper .play-btn-2");
        //     var $pause1 = $(".vid-ctrl-wrapper .pause-btn-1");
        //     var $pause2 = $(".vid-ctrl-wrapper .pause-btn-2");
        //
        //     // video area open
        //     $($openBtn).click(function() {
        //         // video init
        //         $($vid1).removeClass("played");
        //         $($vid2).removeClass("played");
        //         $($play1).removeClass("hide");
        //         $($play2).removeClass("hide");
        //
        //         if($($layer).css("display") === "block") {
        //             $($layer).slideUp();
        //             $($openBtn).removeClass("active-btn");
        //             video1.pause();
        //             video2.pause();
        //             $(this).parent().removeClass("off");
        //         } else {
        //             $($layer).slideDown();
        //             $($openBtn).addClass("active-btn");
        //             $(this).parent().addClass("off");
        //         }
        //     });
        //
        //     // video tab click
        //     $($vidBtn).click(function() {
        //         $($vidBtn).removeClass("on");
        //         $(this).addClass("on");
        //
        //         // video init
        //         $($pauseBtn).removeClass("shown");
        //
        //         if($(this).hasClass("vid-btn-1")) { // video first tab click
        //             $($vid1).removeClass("hide");
        //             $($vid2).addClass("hide");
        //             video2.pause();
        //
        //             if(!video1.paused) { // video playing
        //                 $($play1).addClass("hide");
        //                 $($vid1).addClass("played");
        //             } else { // video paused
        //                 $($play1).removeClass("hide");
        //                 $($vid1).removeClass("played");
        //             }
        //         } else { // video second tab click
        //             $($vid2).removeClass("hide");
        //             $($vid1).addClass("hide");
        //             video1.pause();
        //
        //             if(!video2.paused) {
        //                 $($play2).addClass("hide");
        //                 $($vid2).addClass("played");
        //             } else {
        //                 $($play2).removeClass("hide");
        //                 $($vid2).removeClass("played");
        //             }
        //         }
        //     });
        //
        //     // video play click
        //     $($playBtn).click(function() {
        //         if($(this).hasClass("play-btn-1")) { // first video play click
        //             video1.play();
        //             $($vid1).addClass("played");
        //             $(this).addClass("hide");
        //         } else { // second video play click
        //             video2.play();
        //             $($vid2).addClass("played");
        //             $(this).addClass("hide");
        //         }
        //
        //     });
        //
        //     // video pause click
        //     $($pauseBtn).click(function() {
        //         if($(this).hasClass("pause-btn-1")) { // first video pause click
        //             video1.pause();
        //             $(this).removeClass("shown");
        //             $($play1).removeClass("hide");
        //             $($vid1).removeClass("played");
        //         } else { // second video pause click
        //             video2.pause();
        //             $(this).removeClass("shown");
        //             $($play2).removeClass("hide");
        //             $($vid2).removeClass("played");
        //         }
        //     });
        //
        //     // video1 played
        //     video1.onplay = function() {
        //         $($vid1).mouseenter(function() {
        //             if($(this).hasClass("played")) {
        //                 $($pause1).addClass("shown");
        //             }
        //         });
        //         $($vid1).mouseleave(function() {
        //             if($(this).hasClass("played")) {
        //                 $($pause1).removeClass("shown");
        //             }
        //         });
        //
        //         // $($vidBtn).click(function() {
        //         //     $($play1).addClass("hide");
        //         // });
        //     };
        //     // video1 ended
        //     video1.onended = function() {
        //         $($vid1).removeClass("played");
        //         $($play1).removeClass("hide");
        //         $($pauseBtn).removeClass("shown");
        //     };
        //
        //     // video2 played
        //     video2.onplay = function() {
        //         $($vid2).mouseenter(function() {
        //             if($(this).hasClass("played")) {
        //                 $($pause2).addClass("shown");
        //             }
        //         });
        //         $($vid2).mouseleave(function() {
        //             if($(this).hasClass("played")) {
        //                 $($pause2).removeClass("shown");
        //             }
        //         });
        //     };
        //     // video2 ended
        //     video2.onended = function() {
        //         $($vid2).removeClass("played");
        //         $($play2).removeClass("hide");
        //         $($pauseBtn).removeClass("shown");
        //     };
        //
        //     // tab focus
        //     $($pauseBtn).focus(function() {
        //         $(this).addClass("shown");
        //     });
        //     $($pauseBtn).blur(function() {
        //         $(this).removeClass("shown");
        //     });
        //
        // }(jQuery));

        var feature4 = (function($) {
            var ftArea = $(".pdp-feature-04");
            var slide1 = $(".pdp-feature-04 .feature-slide-wrapper .feature-slide-1");
            var slide2 = $(".pdp-feature-04 .feature-slide-wrapper .feature-slide-2");
            var img = $(".pdp-feature-04 .pdp-feature-area .feature-slide-2 .feature-img");
            var delta;
            var scroll = "mousewheel.didScroll DOMMouseScroll.didScroll";
            var disable = function(el) {
                $(el).on(scroll, function(e) {
                    e.preventDefault();
                });
            };


            $(slide1).slick({
                arrows: false,
                infinite: false,
                vertical: true
            });

            $(slide2).slick({
                arrows: false,
                infinite: false,
                dots: true,
                vertical: true,
                // dotsClass: "slide-dots",
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        vertical: false
                    }
                }]
            });


            // indicator click
            $(".pdp-feature-04 .slick-dots li button").click(function(){
                console.log("test");
                var idx = $(this).parent().index();
                if(idx === 0) {
                    $(slide1).slick("slickGoTo", 0);
                } else if(idx === 1) {
                    $(slide1).slick("slickGoTo", 1);
                } else {
                    $(slide1).slick("slickGoTo", 2);
                }
            });

            // height set
            // var h = $(".pdp-feature-04 .feature-slide-2 .slick-list").css("height");
            $(slide1).get(0).slick.setPosition();
            $(slide2).get(0).slick.setPosition();

            if(windowW > 1023) {
                // $(slide2).css("height", h);

                // mouse scroll slide
                $(ftArea).mouseenter(function() {
                    $(this).on("mousewheel DOMMouseScroll", function(e) {
                        var evt = e.originalEvent;
                        var current1 = $(slide1).slick("slickCurrentSlide");
                        var current2 = $(slide2).slick("slickCurrentSlide");
                        evt.detail?delta=evt.detail*-40:delta=evt.wheelDelta;
                        //console.log(delta, current);

                        // scroll down
                        if(delta === -120) {
                            if(current1 === 2 && current2 === 2) {
                                $(this).off(scroll);
                            } else {
                                disable(this);
                                $(slide1).slick("slickNext");
                                $(slide2).slick("slickNext");
                            }

                            // scroll up
                        } else if (delta === 120) {
                            if(current1 === 0 && current2 === 0) {
                                $(this).off(scroll);
                            } else {
                                disable(this);
                                $(slide1).slick("slickPrev");
                                $(slide2).slick("slickPrev");
                            }
                        }
                    });

                    // scroll off
                    disable(this);
                });

                // scroll on
                $(ftArea).mouseleave(function() {
                    $(ftArea).off(scroll);
                });

            } else {
                $(ftArea).off(scroll);
            }

        }(jQuery));

        var feature11 = (function() {
            var copy = $(".pdp-feature-11 .feature-copy");
            var imgDay = $(".img-day-on");
            var btn = $(".button-wrapper button");
            var name;
            //var select = $(".pdp-feature-11 .pdp-feature-area .button-wrapper button span strong");

            for(var i = 0; i < btn.length; i++) {
                $(btn[i]).click(function() {
                    name = this.getAttribute("class");

                    if(name === "btn-day-off") {
                        // removeClass(this.parentNode, "day-on");
                        // addClass(this.parentNode, "day-off");
                        $(this.parentNode).removeClass("day-on");
                        $(this.parentNode).addClass("day-off");

                        // removeClass(copy, "off");
                        // removeClass(imgDay, "active");

                        $(copy).removeClass("off");
                        $(imgDay).removeClass("active");

                        $(this).siblings().find("strong").removeClass("select");
                        $(this).find("strong").addClass("select");
                    } else {
                        // removeClass(this.parentNode, "day-off");
                        // addClass(this.parentNode, "day-on");

                        $(this.parentNode).removeClass("day-off");
                        $(this.parentNode).addClass("day-on");

                        // addClass(copy, "off");
                        // addClass(imgDay, "active");
                        //$(copy).addClass("off");
                        $(imgDay).addClass("active");
                        if(windowW < 1024) {
                            $(copy).removeClass("off");
                        } else {
                            $(copy).addClass("off");
                        }

                        $(this).siblings().find("strong").removeClass("select");
                        $(this).find("strong").addClass("select");
                    }
                });


                // btn[i].addEventListener("click", function() {
                //     name = this.getAttribute("class");
                //
                //     if(name === "btn-day-off") {
                //         removeClass(this.parentNode, "day-on");
                //         addClass(this.parentNode, "day-off");
                //
                //         removeClass(copy, "off");
                //         removeClass(imgDay, "active");
                //     } else {
                //         removeClass(this.parentNode, "day-off");
                //         addClass(this.parentNode, "day-on");
                //
                //         addClass(copy, "off");
                //         addClass(imgDay, "active");
                //     }
                // });
            }

            if(windowW < 1024) {
                $(copy).removeClass("off");
            } else {
                $(copy).addClass("off");
            }
        }());

        var feature12 = (function() {
            $('.feature-overlap .section-figure-item').width($('.pdp-feature-12 .feature-img').width());
            var $handler = $(".pdp-feature-12 .trigger-handler");
            // var $trg = $(".pdp-feature-12 .trigger-handler a");

            $($handler).slider({
                value:50,
                slide: function(event, ui){
                    $('.pdp-feature-12 .feature-overlap').css('width', (100 - ui.value) + "%");
                },
                create : function(){
                    $(this).find('.ui-slider-handle').attr({
                        'data-omni': 'redefined_drag',
                        'title': 'An image showing more details of a rust-free ceramic heater + when scrolling to the left, and showing more details of a rusty ceramic heater when scrolling to the right.',
                        'href': '#none'
                    });
                }
            }).on('mousedown touchstart', function(e){
                $(this).find('a').blur();
                e && e.preventDefault();
            });

            $($handler).find('a').on('click', function(){
                $(this).trigger('click.omni');
            });

        }());


        // ie8
        var ie8 = getIEVersion();
        if(ie8 === 8) {
            // $(".feature-icon-wrapper .feature-icon").css("display", "none");
            $(".pdp-feature-02 .feature-vid img").css("display", "block");

            // $(".pdp-feature-04 .pdp-feature-area .feature-slide-wrapper").css("display", "none");
            // $(".pdp-feature-04 .pdp-feature-area .obj-img").css("display", "none");
            // $(".pdp-feature-04 .pdp-feature-area .feature-slide-wrapper-ie8").css("display", "block");
            // $(".feature-slide-wrapper-ie8").slick({
            //     arrows: false,
            //     infinite: false,
            //     dots: true
            // });

            $(".pdp-feature-05 .pdp-feature-area .feature-icon-wrapper .feature-icon").css("opacity", "1");
            $(".pdp-feature-06 .feature-vid img").css("display", "block");
            $(".pdp-feature-07 .feature-vid img").css("display", "block");




        }
    });

    $(window).resize(function() {
        windowW = window.innerWidth;

        clearTimeout(responsiveEvent);
        responsiveEvent = setTimeout(function() {
            responsiveImage(windowW);

            // feature4
            var feature4 = (function() {
                var ftArea = $(".pdp-feature-04");
                var slide1 = $(".pdp-feature-04 .feature-slide-wrapper .feature-slide-1");
                var slide2 = $(".pdp-feature-04 .feature-slide-wrapper .feature-slide-2");
                var delta;
                var scroll = "mousewheel.didScroll DOMMouseScroll.didScroll";
                var disable = function(el) {
                    $(el).on(scroll, function(e) {
                        e.preventDefault();
                    });
                };

                // indicator click
                $(".pdp-feature-04 .slick-dots li button").click(function(){
                    var idx = $(this).parent().index();
                    if(idx === 0) {
                        $(slide1).slick("slickGoTo", 0);
                    } else if(idx === 1) {
                        $(slide1).slick("slickGoTo", 1);
                    } else {
                        $(slide1).slick("slickGoTo", 2);
                    }
                });



                // height set
                $(slide1).get(0).slick.setPosition();
                $(slide2).get(0).slick.setPosition();
                // var h = $(".pdp-feature-04 .feature-slide-2 .slick-list").css("height");
                if(windowW > 1023) {
                    // $(slide2).css("height", h);

                    // mouse scroll slide
                    $(ftArea).mouseenter(function() {
                        $(this).on("mousewheel DOMMouseScroll", function(e) {
                            var evt = e.originalEvent;
                            var current1 = $(slide1).slick("slickCurrentSlide");
                            var current2 = $(slide2).slick("slickCurrentSlide");
                            evt.detail?delta=evt.detail*-40:delta=evt.wheelDelta;
                            //console.log(delta, current);

                            // scroll down
                            if(delta === -120) {
                                if(current1 === 2 && current2 === 2) {
                                    $(this).off(scroll);
                                } else {
                                    disable(this);
                                    $(slide1).slick("slickNext");
                                    $(slide2).slick("slickNext");
                                }

                                // scroll up
                            } else if (delta === 120) {
                                if(current1 === 0 && current2 === 0) {
                                    $(this).off(scroll);
                                } else {
                                    disable(this);
                                    $(slide1).slick("slickPrev");
                                    $(slide2).slick("slickPrev");
                                }
                            }
                        });

                        // scroll off
                        disable(this);
                    });

                    // scroll on
                    $(ftArea).mouseleave(function() {
                        $(ftArea).off(scroll);
                    });

                } else {
                    $(slide2).css("height", "auto");
                    $(ftArea).off(scroll);
                    $(ftArea).mouseenter(function(e) {
                        e.preventDefault();
                    });
                }

            }());

            // feature11
            var ft11Copy = $(".pdp-feature-11 .feature-copy");
            var ft11DayOn = $(".pdp-feature-11 .img-day-on");
            if(windowW < 1024) {
                $(ft11Copy).removeClass("off");
            } else if(windowW > 1023 && $(ft11DayOn).is(".active")) {
                $(ft11Copy).addClass("off");
            }

            // feature12
            $('.feature-overlap .section-figure-item').width($('.pdp-feature-12 .feature-img').width());

        }, 250);

    });
});
