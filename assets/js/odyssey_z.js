var crossBrowsingEvent = (function (window) {
    if (window.addEventListener) {
        return function(fn) {
            document.addEventListener("DOMContentLoaded", fn);
        };
    } else if (window.attachEvent) {
        return function(fn) {
            window.attachEvent("onload", fn);
        };
    } else {
        return function(fn) {
            window.onload = fn;
        }
    }
}(window));

crossBrowsingEvent(function() {
    (function($) {

        var $window = $(window);
        var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, $st = null;
        var slideEl = function (elem) {
            return elem.find(".t_content");
        };
        var responsiveImg = function (w) {
            var $figure = $(".c_figure"), $img = $(".responsive_img"), device, obj, media;
            if (w <= 720) {
                device = "src-mobile";
            }
            else if (w > 720 && w < 1025) {
                device = "src-tablet";
            }
            else {
                device = "src-pc";
            }
            for (var i = 0; i < $figure.length; i++) {
                obj = $img.eq(i);
                media = obj.parent($figure).data(device);
                if ($figure.data(device)) {
                    obj.attr('src', media);
                }
            }
        };
        var tabFocus = function (el) {
            el.on("focus", function () {
                el.addClass("hover");
            });
            el.on("blur", function () {
                el.removeClass("hover");
            });
        };
        var pad = function (number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };
        var PreloadImages = /** @class */ (function () {
            function PreloadImages(first, last, image, url, format, digit) {
                this.first = first;
                this.last = last;
                this.image = image;
                this.url = url;
                this.format = format;
                this.digit = digit;
            }
            PreloadImages.prototype.init = function () {
                for (var i = this.first; i < this.last + 1; i++) {
                    this.image[i] = new Image();
                    this.image[i].src = this.url + pad(i, this.digit) + "." + this.format;
                }
            };
            return PreloadImages;
        }());
        var SeqImg = /** @class */ (function () {
            function SeqImg(elem, url, count, max, sec) {
                this.elem = elem;
                this.url = url;
                this.count = count;
                this.max = max;
                this.sec = sec;
            }
            SeqImg.prototype.start = function (el) {
                var _this = this;
                setInterval(function () {
                    if (el.hasClass("active")) {
                        if (_this.count < _this.max) {
                            _this.count++;
                            _this.elem.attr("src", _this.url + pad(_this.count, 2) + ".jpg");
                        }
                    }
                    else {
                        return _this.count = 0;
                    }
                }, 1000 / this.sec);
            };
            return SeqImg;
        }());
        var SequenceImg = /** @class */ (function () {
            function SequenceImg(elem, count, max, select, size, sec) {
                this.elem = elem;
                this.count = count;
                this.max = max;
                this.select = select;
                this.size = size;
                this.sec = sec;
            }
            SequenceImg.prototype.start = function (el) {
                var _this = this;
                setInterval(function () {
                    if (el.hasClass("active")) {
                        if (!_this.elem.hasClass("end")) {
                            if (_this.count < _this.max) {
                                _this.count++;
                                _this.elem.find(_this.select).css("background-position-y", -_this.size * _this.count);
                            }
                            else {
                                // this.elem.addClass("end");
                            }
                        }
                        else {
                            if (_this.count < _this.max) {
                                _this.count++;
                                _this.elem.find(_this.select).css("background-position-y", -_this.size * _this.count);
                            }
                        }
                    }
                    else {
                        return _this.count = 0;
                    }
                }, 1000 / this.sec);
            };
            return SequenceImg;
        }());
        var SeamlessVisuals = /** @class */ (function () {
            function SeamlessVisuals(elem, init, max, speed, afterImage) {
                this.elem = elem;
                this.init = init;
                this.max = max;
                this.speed = speed;
                this.afterImage = afterImage;
            }
            SeamlessVisuals.prototype.start = function (el) {
                var _this = this;
                setInterval(function () {
                    if (el.hasClass("active")) {
                        if (_this.init < _this.max) {
                            var n_1 = _this.init++;
                            if (_this.afterImage) {
                                setTimeout(function () {
                                    _this.elem.eq(n_1 - 1).removeClass("on");
                                }, 100);
                                _this.elem.eq(n_1).addClass("on");
                            }
                            else {
                                // this.elem.eq(n-1).removeClass("on");
                                // this.elem.eq(n).addClass("on");
                                _this.elem.addClass("on");
                                // this.elem.removeClass("car1-"+n-1);
                            }
                        }
                        else {
                        }
                    }
                    else {
                        return _this.init = 0;
                    }
                }, this.speed);
            };
            return SeamlessVisuals;
        }());
        var CreateCar = /** @class */ (function () {
            function CreateCar(elem, cls, count, pst, num, itv) {
                this.elem = elem;
                this.cls = cls;
                this.count = count;
                this.pst = pst;
                this.num = num;
                this.itv = itv;
            }
            CreateCar.prototype.start = function () {
                for (var i = 0, j = this.num; i < this.count; i++, j = j + this.itv) {
                    $(this.elem).append("<span class='box_car " + this.cls + " " + this.cls + "-" + (i + 2) + "' style='" + this.pst + ":" + j + "%'>");
                }
            };
            return CreateCar;
        }());
        var ScrollSpot = /** @class */ (function () {
            function ScrollSpot(st, el, add, remove) {
                this.st = st;
                this.el = el;
                this.add = add;
                this.remove = remove;
            }
            ScrollSpot.prototype.elTop = function (elem) {
                var $el = $(elem), $top = $el.offset().top, result = $top;
                return result;
            };
            ScrollSpot.prototype.elBottom = function (elem) {
                var $el = $(elem), $top = $el.offset().top, $height = $el.find(".f_container").height(), result = $top + $height - ($window.height() / 1.2);
                return result;
            };
            ScrollSpot.prototype.start = function () {
                var $windowH = $window.height();
                if (this.st > this.elBottom(this.el) && this.st < this.elBottom(this.el) + $windowH) {
                    this.add(this.el);
                }
                else if (this.st < this.elTop(this.el) - $windowH) {
                    this.remove(this.el);
                }
                else if (this.st > this.elBottom(this.el) + $windowH + (windowH / 2) && this.st < this.elBottom(this.el) + $windowH * 2) {
                    this.remove(this.el);
                }
            };
            return ScrollSpot;
        }());
        var delInHeader = function (w, el) {
            if (w <= 720) {
                el.find(".f_header").removeClass("in_header");
            }
            else {
                el.find(".f_header").addClass("in_header");
            }
        };
        var preLoad = function (el, max) {
            var init = 0;
            var last = max;
            var src = el.find(".c_seq_preload").attr("src");
            var count = "";
            var result = "";
            setInterval(function () {
                if (init < last) {
                    init++;
                    count = pad(init, 2);
                    result = src.replace(src.match(/01/g), count);
                    el.find(".c_seq_preload").attr("src", result);
                }
            }, 80);
        };
        var ie8 = false;
        if (window.navigator.userAgent.toLowerCase().indexOf("msie 8.0") > -1) {
            ie8 = true;
        }
        $(function () {
            var $wrapper = $(".odysseyz-wrapper"), $kv = $(".f_key-visual"), $movieSection = $(".f_movie-section"), $design = $(".f_design"), $optimized = $(".f_optimized"), $graphic = $(".f_graphic"), $performance = $(".f_performance"), $speeds = $(".f_speeds"), $seamless = $(".f_seamless"), $keyboard = $(".f_keyboard"), $keyCap = $(".f_keyCap"), $hotKey = $(".f_hotKey"), $display = $(".f_display"), ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            var createCar2 = new CreateCar(".box2", "car2", 10, "left", -40, 10);
            createCar2.start();
            var f_kv = {
                scroll: function () {
                    var scrolled_kv = new ScrollSpot($st, $kv, function (el) {
                        el.find(".c_image").css({
                            transform: "translate3d(0," + ($st - el.find(".c_image").offset().top) * 0.05 + "px , 0)"
                        });
                    }, function (el) {
                    });
                    scrolled_kv.start();
                }
            };
            var f_design = {
                $video: $design.find(".c_video").get(0),
                trigger: true,
                endEvt: function () {
                    f_design.$video.onended = function (e) {
                        var $elem = $(e.target);
                        $elem.parent().siblings(".c_mask").addClass("peel_mask");
                        $elem.parent().removeClass("peel_height");
                        $elem.css({
                            visibility: "hidden",
                            opacity: 0
                        });
                        $elem.siblings("figcaption").css({
                            visibility: "hidden",
                            opacity: 0
                        });
                        setTimeout(function () {
                            $design.find(".active").addClass("end");
                        }, 1500);
                    };
                },
                scroll: function () {
                    var scrolled_design = new ScrollSpot($st, $design, function (el) {
                        el.find(".c_figure").addClass("active");
                        if (f_design.$video.readyState !== 0 && el.find(".c_figure").hasClass("active") && f_design.trigger) {
                            if (!ios && !ie8) {
                                f_design.$video.play();
                            }
                            f_design.trigger = false;
                        }
                    }, function (el) {
                    });
                    scrolled_design.start();
                },
                resize: function () {
                    return window.onresize = function () {
                        windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        delInHeader(windowW, $design);
                    };
                }
            };
            var f_movieSection = {
                $vidElem: $movieSection.find(".c_video").get(0),
                $vidBtn: $movieSection.find(".vid_btn"),
                click: function () {
                    var $vid = f_movieSection.$vidElem, $ctrl = $movieSection.find(".vid_ctrls"), $btn = f_movieSection.$vidBtn, $img = $movieSection.find(".c_image");
                    $btn.find("a").click(function (e) {
                        var $btn = $(e.currentTarget).parent();
                        if ($btn.hasClass("vid_play")) {
                            $vid.play();
                        }
                        else {
                            $vid.pause();
                        }
                    });
                    $vid.onplay = function () {
                        $btn.eq(0).addClass("hide");
                        $btn.eq(1).removeClass("hide");
                        $ctrl.addClass("played");
                        $img.removeClass("visible");
                        $btn.eq(1).find("a").blur();
                    };
                    $vid.onpause = function () {
                        $btn.eq(0).removeClass("hide");
                        $btn.eq(1).addClass("hide");
                        $ctrl.removeClass("played");
                    };

                    $btn.find("a").focus(function () {
                        $btn.parent().addClass("show");
                    });
                    $btn.find("a").blur(function () {
                        $btn.parent().removeClass("show");
                    });
                    if (ie8) {
                        // $btn.css("display", "none");
                        $movieSection.css("display", "none");
                    }
                }
            };
            var f_optimized = {
                trigger: true,
                seq: {
                    unit: windowW <= 1440 ? windowW / 1440 : 1,
                    width: windowW <= 1440 ? windowW : 1440,
                    height: function () {
                        return window.onresize = function () {
                            windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                            var reUnit = windowW <= 1440 ? windowW / 1440 : 1;
                            var reHeight = windowW < 1440 ? 800 * reUnit : 800;
                            return reHeight;
                        };
                    },
                    count: 0,
                    max: 29,
                    elem: $optimized.find(".c_seq")
                },
                seqSize: function (el, fn) {
                    var unit = windowW <= 1440 ? windowW / 1440 : 1;
                    var heightSize = windowW < 1440 ? 800 * unit : 800;
                    el.find(".s_image").css({
                        width: windowW <= 1440 ? windowW : 1440,
                        height: heightSize,
                        backgroundPositionY: windowW <= 1440 ? -heightSize * fn.count : -heightSize * fn.count
                    });
                },
                slide: function () {
                    slideEl($optimized).slick({
                        accessibility: false,
                        infinite: false,
                        arrows: false,
                        dots: false
                    });
                },
                click: function () {
                    var $bgi = $(".bg_hover .h_img");
                    var $tit_btn = $(".d_tit_btn");
                    var $m_button = $(".m_button");
                    var $m_section = $(".modal-content .m_section");
                    var $m_inside = $(".m_btn-inside");
                    var $m_open = $m_inside.find(".m_open");
                    var $m_close = $(".m_close_btn button");
                    var $bg_btn = $(".bg_btn-area");
                    var $elem, $idx, $scrolled, $openBtn;
                    var cache;
                    $bg_btn.find("a").on("mouseenter focus", function (e) {
                        $elem = $(e.currentTarget).parent();
                        $idx = $elem.index();
                        $tit_btn.eq($idx).addClass("hover");
                        $bgi.eq($idx).addClass("on");
                    }).on("mouseleave blur", function (e) {
                        $elem = $(e.currentTarget).parent();
                        $idx = $elem.index();
                        $tit_btn.eq($idx).removeClass("hover");
                        $elem.removeClass("hover");
                        $bgi.eq($idx).removeClass("on");
                    });
                    $bg_btn.find("a").click(function (e) {
                        $elem = $(e.currentTarget).parent();
                        $idx = $elem.index();
                        $scrolled = $optimized.find(".f_container").offset().top;
                        $wrapper.addClass("modal-interaction");
                        $(".modal-interaction").addClass("modal_layer_type1");
                        $wrapper.find(".modal-content").css("position", "relative");
                        $m_section.eq($idx).addClass("visible");
                        $("html, body").animate({
                            scrollTop: 0
                        }, 0);
                        $openBtn = undefined;
                        $m_close.focus();
                        if ($idx === 1) {
                            $(".modal-content .m_section2 .m_content").addClass("on");
                            $m_close.removeClass("close_type1");
                            $m_close.addClass("close_type2");
                        }
                        else {
                            $m_close.removeClass("close_type2");
                            $m_close.addClass("close_type1");
                        }
                        cache = $elem;
                    });
                    $m_open.click(function () {
                        $m_button.toggleClass("active");
                        $m_button.siblings(".m_container").toggleClass("visible");
                        if ($m_button.hasClass("active")) {
                            $m_open.attr("title", "Close all detail page");
                            $(".m_txt").text("Close all detail page");
                        }
                        else {
                            $m_open.attr("title", "view all detail page");
                            $(".m_txt").text("View all detail page");
                        }
                        if ($m_open.parent().parent().hasClass("active")) {
                            $("html, body").animate({
                                scrollTop: $(".all_content").offset().top
                            }, 1000, "easeInOutQuart");
                        }
                    });
                    $m_close.focus(function () {
                        $(this).keydown(function (e) {
                            if (e.keyCode === 9 || e.keyCode === 16) {
                                return false;
                            }
                        });
                    });
                    $m_close.click(function () {
                        $wrapper.find(".modal-content").css("position", "fixed");
                        if ($openBtn !== undefined) {
                            // $wrapper.find(".modal-content").css("position", "fixed");
                        }
                        else {
                            // $wrapper.find(".modal-content").css("position", "relative");
                            $wrapper.removeClass("modal-interaction modal_layer_type1");
                        }
                        $(".odysseyz-wrapper .odyssey-feature").removeClass("invisible");
                        setTimeout(function () {
                            if ($openBtn !== undefined) {
                                $(".modal_layer_type2").find(".modal-content").removeClass("visible");
                                $openBtn.focus();
                            }
                            else {
                                $elem.find("button").focus();
                                // $wrapper.find(".modal-content").css({
                                //       position: "fixed"
                                // });
                            }
                        }, 250);
                        setTimeout(function () {
                            $wrapper.removeClass("modal-interaction modal_layer_type2");
                            $wrapper.find(".modal-content").css({
                                top: "inherit"
                            });
                        }, 500);
                        $("html, body").animate({
                            scrollTop: $scrolled
                        }, 0);
                        $m_section.removeClass("visible");
                        cache.find("a").eq(0).focus();
                    });
                    setInterval(function () {
                        $(".m_effect").addClass("wave");
                        setTimeout(function () {
                            $(".m_effect").removeClass("wave");
                        }, 750);
                    }, 1500);
                },
                scroll: function () {
                    var sq = {
                        elem: f_optimized.seq.elem,
                        count: f_optimized.seq.count,
                        max: f_optimized.seq.max,
                        width: f_optimized.seq.width,
                        height: f_optimized.seq.height()
                    };
                    var scrolled_optimized = new ScrollSpot($st, $optimized, function (el) {
                        el.find(".c_seq").addClass("active");
                        var seqImg = el.find(".c_seq_img");
                        if (sq.elem.hasClass("active") && f_optimized.trigger) {
                            // const seqOptimized = new SequenceImg(sq.elem, sq.count, sq.max, ".s_image", sq.height(), 25);
                            f_optimized.trigger = false;
                            // f_optimized.seqSize(el, seqOptimized);
                            // seqOptimized.start(el.find(".c_seq"));
                            setInterval(function () {
                                if (sq.count < 29) {
                                    if (sq.count > 20) {
                                        el.find(".m_detail").addClass("on");
                                        el.find(".bg_btn-area").addClass("on");
                                    }
                                }
                                if (sq.count < 30) {
                                    sq.count++;
                                    seqImg.eq(sq.count).addClass("on");
                                }
                            }, 1000 / 25);
                        }
                    }, function (el) {
                    });
                    scrolled_optimized.start();
                    var $m_section2 = $(".all_content ").find(".m_section2 .m_content");
                    if ($(".m_container").hasClass("visible") && $st > ($m_section2.offset().top - windowH / 2)) {
                        // console.log("test");
                        $(".m_container.visible").find(".m_content").addClass("on");
                    }
                }
            };
            var f_graphic = {
                trigger: true,
                scroll: function () {
                    var scrolled_graphic = new ScrollSpot($st, $graphic, function (el) {
                        el
                            .find(".f_dynamic")
                            .addClass("active");
                        el
                            .find(".c_graph")
                            .addClass("active");
                        var graphic_count = [{ count: 0 }, { count: 0 }];
                        if ($graphic.find(".f_dynamic").hasClass("active")) {
                            el.find(".f_dynamic")
                                .css("transform", "translate3d(0," + ($st - el.find(".f_dynamic").offset().top) * 0.05 + "px,0)");
                        }
                        if (el.find(".c_graph").hasClass("active") && f_graphic.trigger) {
                            setInterval(function () {
                                if (graphic_count[0].count < 2.9) {
                                    graphic_count[0].count = graphic_count[0].count + 0.1;
                                    $graphic.find(".bar_count").eq(0).text(graphic_count[0].count.toFixed(1));
                                }
                                else if (graphic_count[0].count > 110) {
                                    graphic_count[0].count = 110;
                                    $graphic.find(".bar_count").eq(0).text(graphic_count[0].count);
                                }
                                if (graphic_count[1].count < 1.8) {
                                    graphic_count[1].count = graphic_count[1].count + 0.1;
                                    $graphic.find(".bar_02 .bar_highlight .bar_count").text(graphic_count[1].count.toFixed(1));
                                }
                            }, 1000 / 15);
                            f_graphic.trigger = false;
                        }
                    }, function (el) {
                        el.find(".f_dynamic").removeClass("active");
                        el.find(".c_graph").removeClass("active");
                        f_graphic.trigger = true;
                    });
                    scrolled_graphic.start();
                }
            };
            var f_performance = {
                trigger: true,
                scroll: function () {
                    var scrolled_performance = new ScrollSpot($st, $performance, function (el) {
                        el.find(".c_graph").addClass("active");
                        var performance_count = [{ count: 0 }, { count: 0 }];
                        if (el.find(".c_graph").hasClass("active") && f_performance.trigger) {
                            setInterval(function () {
                                if (performance_count[0].count < 123) {
                                    performance_count[0].count = performance_count[0].count + 2;
                                    $performance.find(".bar_count").eq(0).text(performance_count[0].count);
                                }
                                else if (performance_count[0].count > 123) {
                                    performance_count[0].count = 123;
                                    $performance.find(".bar_count").eq(0).text(performance_count[0].count);
                                }
                                if (performance_count[1].count < 100) {
                                    performance_count[1].count = performance_count[1].count + 2;
                                    $performance.find(".bar_count").eq(1).text(performance_count[1].count);
                                }
                            }, 1000 / 30);
                            f_performance.trigger = false;
                        }
                    }, function (el) {
                        el.find(".c_graph").removeClass("active");
                        f_performance.trigger = true;
                    });
                    scrolled_performance.start();
                }
            };
            var f_speeds = {
                trigger: true,
                slide: function () {
                    var $slider = $speeds.find(".t_content")
                        .on('init', function (slick) {
                            $speeds.find(".slick-dots li").attr("aria-hidden", 'false');
                        }).slick({
                            accessibility: false,
                            infinite: false,
                            arrows: true,
                            fade: true,
                            speed: 0,
                            dots: true,
                            nextArrow: '<button type="button" class="slick-next">Go to the DDR4 page.</button>',
                            prevArrow: '<button type="button" class="slick-prev">See the PCIe NVMe SSD page.</button>',
                            customPaging: function (e, i) {
                                var txt = i === 0 ? "Extra-rapid Read/Write Speeds" : "Up Your Workrate";
                                return '<button>' + 'slide' + (i + 1) + ': ' + txt + '</button>';
                            }
                        });
                    return $slider;
                },
                click: function () {
                    // let $slider = f_speeds.slide();
                    $speeds.find(".t_content").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                        var $herder = $(this).parent().siblings();
                        $(this).find(".c_graph ").removeClass("active");
                        if (nextSlide === 0) {
                            $speeds.find(".g_group_1 .bar_01 .bar_count").text(100);
                            $speeds.find(".g_group_1 .bar_02 .bar_count").text(10);
                            $speeds.find(".g_group_1 .bar_03 .bar_count").text(10);
                        }
                        else {
                        }
                        $speeds.find(".f_header").css({
                            opacity: 0,
                            visibility: "hidden",
                            transition: "none"
                        });
                    });
                    $speeds.find(".t_content").on("afterChange", function (event, slick, currentSlide) {
                        $(this).find(".c_graph ").addClass("active");
                        var speeds_count = [{ count: 100 }, { count: 10 }, { count: 10 }, { count: 0 }, { count: 0 }, { count: 0 }];
                        var countSet = function (idx, num, sum, sel) {
                            if (speeds_count[idx].count < num) {
                                speeds_count[idx].count = speeds_count[idx].count + sum;
                                $speeds.find(sel + " .bar_count").text(speeds_count[idx].count);
                            }
                        };
                        f_speeds.trigger = true;
                        $speeds.find(".f_header").css({
                            opacity: 1,
                            visibility: "visible",
                            transition: "all .5s"
                        });
                        if (currentSlide === 0) {
                            $speeds.find(".f_tit").text("Extra-rapid Read/Write Speeds");
                            $speeds.find(".f_tit2").text("PCIe NVMe SSD");
                            $speeds.find(".f_desc").text("With PCIe NVMe SSD storage, the Odyssey Z provides you with remarkable read speeds of up to 2,800MB per second ― some 5.2 times faster than SATA3-type SSDs with speeds of up to 530MB per second. You can also enjoy write speeds of up to 1,100MB per second, almost twice as fast as SATA3-type SSDs. Two PCIe NVMe SSD slots provide you with yet more storage options.");
                            $speeds.find(".f_dis").html("*SATA3 interface limits have lower SSD speeds. However, with PCIe NVMe SSD storage, faster SSD speeds are available.<br>*Adobe product screenshot reprinted with permission from Adobe Systems Incorporated.");
                            if ($speeds.find(".c_graph").hasClass("active") && f_speeds.trigger) {
                                setInterval(function () {
                                    countSet(0, 2800, 100, ".g_group_1 .bar_01");
                                    countSet(1, 530, 20, ".g_group_1 .bar_02");
                                    countSet(2, 150, 10, ".g_group_1 .bar_03");
                                }, 1000 / 15);
                                f_speeds.trigger = false;
                            }
                        }
                        else {
                            $speeds.find(".f_tit").text("Up Your Workrate");
                            $speeds.find(".f_tit2").text("DDR4 2400Mhz");
                            $speeds.find(".f_desc").text("The Samsung Notebook Odyssey Z supports the latest DDR4 memory, with a bandwidth of 2,400MHz, allowing for lightning-fast speeds of up to 37.5GB/s. That means you can enjoy a boost of around 50% in performance speed when compared to previous-generation 1,600MHz-bandwidth DDR3 memory units (25.0GB/s).");
                            $speeds.find(".f_dis").text("*Autodesk screen shots reprinted courtesy of Autodesk,Inc");
                            if ($speeds.find(".c_graph").hasClass("active") && f_speeds.trigger) {
                                setInterval(function () {
                                    countSet(3, 37.5, 1, ".g_group_2 .bar_01");
                                    countSet(4, 33.3, 1, ".g_group_2 .bar_04");
                                    countSet(5, 25, 1, ".g_group_2 .bar_06");
                                    if (speeds_count[3].count === 38) {
                                        speeds_count[3].count = 37.5;
                                        $speeds.find(".g_group_2 .bar_01 .count").text(speeds_count[3].count);
                                    }
                                    if (speeds_count[4].count === 34) {
                                        speeds_count[4].count = 33.3;
                                        $speeds.find(".g_group_2 .bar_04 .count").text(speeds_count[4].count);
                                    }
                                }, 1000 / 30);
                                f_speeds.trigger = false;
                            }
                        }
                        $(".slick-dots").find("li").attr("aria-hidden", "false");
                    });
                    // tabFocus($(".slick-arrow"));
                },
                scroll: function () {
                    var scrolled_speeds = new ScrollSpot($st, $speeds, function (el) {
                        el.find(".c_graph").addClass("active");
                        var speeds_count = [{ count: 100 }, { count: 10 }, { count: 10 }, { count: 0 }, { count: 0 }, { count: 0 }];
                        var countSet = function (idx, num, sum, sel) {
                            if (speeds_count[idx].count < num) {
                                speeds_count[idx].count = speeds_count[idx].count + sum;
                                $speeds.find(sel + " .bar_count").text(speeds_count[idx].count);
                            }
                        };
                        if (el.find(".c_graph").hasClass("active") && f_speeds.trigger) {
                            setInterval(function () {
                                countSet(0, 2800, 100, ".g_group_1 .bar_01");
                                countSet(1, 530, 20, ".g_group_1 .bar_02");
                                countSet(2, 150, 10, ".g_group_1 .bar_03");
                            }, 1000 / 15);
                            setInterval(function () {
                                countSet(3, 37.5, 1, ".g_group_2 .bar_01");
                                countSet(4, 33.3, 1, ".g_group_2 .bar_04");
                                countSet(5, 25, 1, ".g_group_2 .bar_06");
                                if (speeds_count[3].count === 38) {
                                    speeds_count[3].count = 37.5;
                                    $speeds.find(".g_group_2 .bar_01 .count").text(speeds_count[3].count);
                                }
                                if (speeds_count[4].count === 34) {
                                    speeds_count[4].count = 33.3;
                                    $speeds.find(".g_group_2 .bar_04 .count").text(speeds_count[4].count);
                                }
                            }, 1000 / 30);
                            f_speeds.trigger = false;
                        }
                    }, function (el) {
                        el.find(".c_graph").removeClass("active");
                        f_speeds.trigger = true;
                    });
                    scrolled_speeds.start();
                }
            };
            var f_seamless = {
                sq: {
                    width: windowW <= 1156 ? windowW : 1156,
                    height: 603,
                    count: 1,
                    max: 12,
                    elem: $seamless.find(".c_seq_img"),
                    url: ""
                },
                trigger: true,
                tabTrigger1: false,
                tabTrigger2: true,
                car: [$(".car1"), $(".car2")],
                init: 1,
                max: 11,
                currentSlide: 0,
                seqSize: function (el, fn) {
                    // let unit = windowW<=1440?(windowW-284)/1156:1;
                    // let heightSize = windowW<1440?603*unit:603;
                    var resizeW = (windowW * 80.27777777777778) / 100;
                    var resizeH = (windowW * 41.875) / 100;
                    el.find(".s_img_2").css({
                        // width: windowW<=1440?resizeW:1156,
                        // height: windowW<=1440?resizeH:603,
                        backgroundPositionY: windowW <= 1440 ? -resizeH * fn.count : -603 * fn.count
                    });
                    if (windowW <= 1440) {
                        console.log((windowW * 80.27777777777778) / 100, (windowW * 41.875) / 100, fn.count);
                    }
                },
                height: function () {
                    return window.onresize = function () {
                        windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        var reHeight = windowW <= 1440 ? (windowW * 41.875) / 100 : 603;
                        return reHeight;
                    };
                },
                slide: function () {
                    var $slider = $seamless.find(".t_content")
                        .on('init', function (slick) { }).slick({
                            accessibility: false,
                            infinite: false,
                            arrows: false,
                            fade: true,
                            speed: 150
                        });
                    return $slider;
                },
                click: function () {
                    var $slider = f_seamless.slide();
                    $seamless.find("button").click(function (e) {
                        var $li = $(e.currentTarget).parent().parent();
                        var $idx = $li.index();
                        var $img = $seamless.find(".c_image");
                        var $desc = $seamless.find(".f_desc");
                        var seqH = f_seamless.height();
                        var count = 0;
                        var last = 12;
                        var itv;
                        $slider.slick("slickGoTo", $idx);
                        $li
                            .addClass("on")
                            .siblings()
                            .removeClass("on");
                        $li
                            .find(".tab-select")
                            .addClass("selected");
                        $li
                            .siblings()
                            .find(".tab-select")
                            .removeClass("selected");
                        f_seamless.currentSlide = $slider.slick("slickCurrentSlide");
                        if (f_seamless.currentSlide === 0) {
                            if ($img.hasClass("active") && f_seamless.tabTrigger1) {
                                $seamless.find(".s_img_2").css("background-position", "0 0");
                                var car1 = new SeamlessVisuals(f_seamless.car[0], f_seamless.init, f_seamless.max, 200, false);
                                var car2 = new SeamlessVisuals(f_seamless.car[1], f_seamless.init, f_seamless.max, 200, true);
                                car1.start($img.eq(0));
                                car2.start($img.eq(0));
                                $img.removeClass("active");
                                $img.eq(0).addClass("active");
                                $seamless.find(".c_seq_img").removeClass("on");
                                f_seamless.sq.count = 1;
                            }
                            f_seamless.tabTrigger1 = false;
                            f_seamless.tabTrigger2 = true;
                        }
                        else {
                            if (f_seamless.tabTrigger2) {
                                var seamlessSec = new SeqImg(f_seamless.sq.elem, "/assets/img/odyssey_z/f_seamless_02_seq_", f_seamless.sq.count, f_seamless.sq.max, 10);
                                var seqSeamless = new SequenceImg(f_seamless.sq.elem, f_seamless.sq.count, f_seamless.sq.max, ".s_img_2", seqH(), 7);
                                f_seamless.car[0]
                                    .removeClass("on")
                                    .eq(0)
                                    .addClass("on");
                                f_seamless.car[1]
                                    .removeClass("on")
                                    .eq(0)
                                    .addClass("on");
                                $seamless.find(".car1").removeClass("on");
                                $img.removeClass("active");
                                $img.eq(1).addClass("active");
                                setInterval(function () {
                                    count++;
                                    if ($seamless.find(".c_seq_img").hasClass("active")) {
                                        if (count <= last) {
                                            $seamless.find(".c_seq_img").eq(count).addClass("on");
                                        }
                                    }
                                    else {
                                        // $seamless.find(".c_seq_img").attr( "src", "/assets/img/odyssey_z/f_seamless_02_seq_01.jpg");
                                    }
                                }, 1000 / 7.5);
                            }
                            else {
                                console.log("test");
                            }
                            f_seamless.tabTrigger1 = true;
                            f_seamless.tabTrigger2 = false;
                        }
                        $slider.on("afterChange", function (a, b, c) {
                            if (c === 0) {
                                $desc.text("With a 120Hz refresh rate, scene-changes are breathtakingly quick, and images look sharper than ever. With an ultra-fast display, you can enjoy an amazingly smooth and responsive gaming experience – enough to give you the winning edge!");
                            }
                            else {
                                $desc.text("A variable overdrive eliminates ghosting artifacts, by predicting the next frame and adjusting the parameters of the LCD overdrive. The G-SYNC HDR display, with wide color gamut and intense brightness, ensures you get to see the most vivid graphics every time – with every image coming to life in glorious color.");
                            }
                        });
                    });
                },
                scroll: function () {
                    var scrolled_seamless = new ScrollSpot($st, $seamless, function (el) {
                        el.find(".t_content").addClass("active");
                        var $img = $seamless.find(".c_image");
                        // let seamless_count = [{count: 10}, {count: 20}];
                        if (el.find(".t_content").hasClass("active") && f_seamless.trigger) {
                            if ($(".c_seq.slick-active").index() === 0) {
                                if ($img.hasClass("active")) {
                                    var car1 = new SeamlessVisuals(f_seamless.car[0], f_seamless.init, f_seamless.max, 200, false);
                                    var car2 = new SeamlessVisuals(f_seamless.car[1], f_seamless.init, f_seamless.max, 200, true);
                                    car1.start($img.eq(0));
                                    car2.start($img.eq(0));
                                }
                            }
                            else {
                            }
                            f_seamless.trigger = false;
                        }
                    }, function (el) {
                    });
                    scrolled_seamless.start();
                }
            };
            var f_keyboard = {
                btnTrg: true,
                click: function () {
                    $keyboard.find("a").click(function (e) {
                        var $li = $(e.currentTarget).parent().parent();
                        var $idx = $li.index();
                        var $btn1 = $($keyboard).find(".btn_1");
                        var $btn2 = $($keyboard).find(".btn_2");
                        if (windowW > 720) {
                            if (!$li.hasClass("on") && $li.hasClass("btn_2")) {
                                $btn1.removeClass("on");
                                $btn2.addClass("on");
                                $btn1.find(".tab-select").removeClass("selected");
                                $btn2.find(".tab-select").addClass("selected");
                                $keyboard.find(".f_header").addClass("e_hide");
                                setTimeout(function () {
                                    $keyboard.find(".f_header").removeClass("e_hide");
                                }, 1200);
                            }
                            else if (!$li.hasClass("on") && $li.hasClass("btn_1")) {
                                $btn2.removeClass("on");
                                $btn1.addClass("on");
                                $btn2.find(".tab-select").removeClass("selected");
                                $btn1.find(".tab-select").addClass("selected");
                                $keyboard.find(".f_header").addClass("e_hide");
                                setTimeout(function () {
                                    $keyboard.find(".f_header").removeClass("e_hide");
                                }, 1200);
                            }
                            if ($idx === 0) {
                                $keyboard.find(".t_content").removeClass("e_content_left");
                                $keyboard.find(".e_fade").removeClass("in");
                                $keyboard.find(".e_fade:last-child").removeClass("end");
                                setTimeout(function () {
                                    // $keyboard.find(".f_tit2").text("Stay-cool Gaming Experience");
                                    $keyboard.find(".f_desc").text("Most other gaming notebooks have keyboard placed above the CPU and GPU, which turn up the heat on gamers in all the wrong ways! More heat often means sweaty hands, and imprecise gameplay during longer sessions. However, the Odyssey Z’s keyboard is located at the bottom of the device – helping you beat the heat and get your game on in greater comfort.");
                                    $keyboard.find(".f_header").removeClass("e_text_right");
                                }, 500);
                            }
                            else {
                                $keyboard.find(".t_content").addClass("e_content_left");
                                $keyboard.find(".e_fade").addClass("in");
                                $keyboard.find(".e_fade:last-child").addClass("end");
                                setTimeout(function () {
                                    // $keyboard.find(".f_tit2").text("Comfortable and Ergonomic Gameplay");
                                    $keyboard.find(".f_desc").text("Unlike most gaming notebooks, whose touchpads are located on the palm rest below the keyboard, the Odyssey Z's touchpad is on the right of the keyboard ― for a more convenient, seamless, desktop gaming computer-like experience. ");
                                    $keyboard.find(".f_header").addClass("e_text_right");
                                }, 500);
                            }
                        }
                        else {
                            if (!$li.hasClass("on") && $li.hasClass("btn_2")) {
                                $btn1.removeClass("on");
                                $btn2.addClass("on");
                                $btn1.find(".tab-select").removeClass("selected");
                                $btn2.find(".tab-select").addClass("selected");
                            }
                            else if (!$li.hasClass("on") && $li.hasClass("btn_1")) {
                                $btn2.removeClass("on");
                                $btn1.addClass("on");
                                $btn2.find(".tab-select").removeClass("selected");
                                $btn1.find(".tab-select").addClass("selected");
                            }
                            if ($idx === 0) {
                                $keyboard.find(".t_content").removeClass("e_content_left");
                                $keyboard.find(".e_fade").removeClass("in");
                                $keyboard.find(".e_fade:last-child").removeClass("end");
                                $keyboard.find(".f_desc").text("Most other gaming notebooks have keyboard placed above the CPU and GPU, which turn up the heat on gamers in all the wrong ways! More heat often means sweaty hands, and imprecise gameplay during longer sessions. However, the Odyssey Z’s keyboard is located at the bottom of the device – helping you beat the heat and get your game on in greater comfort.");
                                $keyboard.find(".f_header").removeClass("e_text_right");
                            }
                            else {
                                $keyboard.find(".t_content").addClass("e_content_left");
                                $keyboard.find(".e_fade").addClass("in");
                                $keyboard.find(".e_fade:last-child").addClass("end");
                                $keyboard.find(".f_desc").text("Unlike most gaming notebooks, whose touchpads are located on the palm rest below the keyboard, the Odyssey Z's touchpad is on the right of the keyboard ― for a more convenient, seamless, desktop gaming computer-like experience. ");
                                $keyboard.find(".f_header").addClass("e_text_right");
                            }
                        }
                        if (!$li.hasClass("on")) {
                            $li
                                .find(".tab-select")
                                .addClass("selected");
                            $li
                                .siblings()
                                .find(".tab-select")
                                .removeClass("selected");
                        }
                    });
                },
                scroll: function () {
                    var scrolled_keyboard = new ScrollSpot($st, $keyboard, function (el) {
                        // el.find(".e_fade").addClass("in");
                        // el.find(".fade:last-child").addClass("end");
                    }, function (el) {
                        // el.find(".e_fade").removeClass("in end")
                    });
                    scrolled_keyboard.start();
                },
                resize: function () {
                    // let btnGroup = $keyboard.find(".f_header .t_header").clone();
                    return window.onresize = function () {
                        windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        delInHeader(windowW, $keyboard);
                        if (windowW <= 720) {
                            $keyboard.find(".f_container .t_header").addClass("t_center");
                        }
                        else {
                            $keyboard.find(".f_container .t_header").removeClass("t_center");
                        }
                    };
                },
                on: function () {
                    if (windowW <= 720) {
                        $keyboard.find(".f_container .t_header").addClass("t_center");
                    }
                }
            };
            var f_keyCap = {
                scroll: function () {
                    var scrolled_keyCap = new ScrollSpot($st, $keyCap, function (el) {
                        el.find(".e_fade").addClass("in");
                    }, function (el) {
                        el.find(".e_fade").removeClass("in");
                    });
                    scrolled_keyCap.start();
                }
            };
            var f_hotKey = {
                $video1: $hotKey.find(".c_vid1").get(0),
                $video2: $hotKey.find(".c_vid2").get(0),
                $video3: $hotKey.find(".c_vid3").get(0),
                clickTrg: true,
                scrollTrg: true,
                currentSlide: 0,
                slide: function () {
                    var $slider = $hotKey.find(".t_content")
                        .on('init', function (slick) { }).slick({
                            accessibility: false,
                            infinite: false,
                            arrows: false,
                            fade: true,
                            speed: 0,
                            swipe: false
                        });
                    return $slider;
                },
                click: function () {
                    var $slider = f_hotKey.slide();
                    var playCtrl = function (elStart, elEnd) {
                        elEnd[0].pause();
                        elEnd[1].pause();
                        elEnd[0].currentTime = 0;
                        elEnd[1].currentTime = 0;
                        elStart.play();
                    };
                    $hotKey.find("button").click(function (e) {
                        var $li = $(e.currentTarget).parent();
                        var $idx = $li.index();
                        var $c_figure = $hotKey.find(".c_figure");
                        var $t_desc = $hotKey.find(".t_desc");
                        var $t_dis = $hotKey.find(".t_dis");
                        var descCopy = [
                            "Capture your most prized gaming moments, and never let your most famous victories go unrecorded! The Odyssey Z lets you take instantaneous screen captures – saving screen action as image files with just a touch of a button.",
                            "Recording gameplay just got a whole lot easier. Synced with Windows 10 gaming features, the  Odyssey Z lets you record your gameplay, upload it to your social media pages, and share it with the rest of the gaming community in moments.",
                            "Want to play, work, browse or watch videos in a quieter location? If so, just toggle Silent Mode to adjust your CPU and GPU power usage, and slow your fan speed enough to keep your device’s noise levels to a mere 22dB, just a touch above the sound level of rustling leaves.",
                            "Beast Mode maximizes performance through heat control with Samsung’s innovative power management technology and Z AeroFlow Cooling System, with the latest Intel processor and Nvidia graphics. It can boost performance by up to 17%."
                        ];
                        var disCopy = [
                            "",
                            "",
                            "*May vary depending on usage environment.",
                            "*This is a simulated image."
                        ];
                        $slider.slick("slickGoTo", $idx);
                        f_hotKey.currentSlide = $slider.slick("slickCurrentSlide");
                        $t_desc.text(descCopy[$idx]);
                        $t_dis.text(disCopy[$idx]);
                        $li
                            .addClass("on")
                            .siblings()
                            .removeClass("on");
                        $li.siblings().find(".tab-select").removeClass("selected");
                        $li.find(".tab-select").addClass("selected");
                        if (f_hotKey.currentSlide === 3) {
                            $hotKey.find(".t_dis").addClass("on");
                        }
                        else {
                            $hotKey.find(".t_dis").removeClass("on");
                        }
                        f_hotKey.clickTrg = true;
                        // if(!ios) {
                        //
                        // }
                        $slider.on("afterChange", function (a, b, c) {
                            if (f_hotKey.clickTrg) {
                                if (c === 0) {
                                    playCtrl(f_hotKey.$video1, [f_hotKey.$video2, f_hotKey.$video3]);
                                }
                                else if (c === 1) {
                                    playCtrl(f_hotKey.$video2, [f_hotKey.$video1, f_hotKey.$video3]);
                                }
                                else if (c === 3) {
                                    playCtrl(f_hotKey.$video3, [f_hotKey.$video1, f_hotKey.$video2]);
                                }
                                f_hotKey.clickTrg = false;
                            }
                        });
                    });
                },
                scroll: function () {
                    var scrolled_hotKey = new ScrollSpot($st, $hotKey, function (el) {
                        var $vid = el.find(".slick-slide.slick-current").find(".c_video").get(0);
                        var $idx = el.find(".slick-slide.slick-current").index();
                        if (f_hotKey.scrollTrg && el.find(".slick-slide.slick-current") && !ie8) {
                            $vid.play();
                            // if(!ios) {
                            // }
                            f_hotKey.scrollTrg = false;
                        }
                    }, function (el) {
                    });
                    scrolled_hotKey.start();
                }
            };
            var f_display = {
                slide: function () {
                    var $slider = $display.find(".t_content")
                        .on('init', function (slick) { }).slick({
                            accessibility: false,
                            infinite: false,
                            arrows: false,
                            fade: true,
                            speed: 150,
                            swipe: false
                        });
                    return $slider;
                },
                click: function () {
                    var $slider = f_display.slide();
                    $display.find("a").click(function (e) {
                        var $li = $(e.currentTarget).parent();
                        var $idx = $li.index();
                        $slider.slick("slickGoTo", $idx);
                        f_hotKey.currentSlide = $slider.slick("slickCurrentSlide");
                        $li
                            .addClass("on")
                            .siblings()
                            .removeClass("on");
                        $li.find(".tab-select").addClass("selected");
                        $li.siblings().find(".tab-select").removeClass("selected");
                    });
                }
            };
            var odysseyInit = function () {
                f_design.endEvt();
                f_movieSection.click();
                f_optimized.click();
                f_speeds.slide();
                f_speeds.click();
                f_seamless.click();
                f_keyboard.on();
                f_keyboard.click();
                f_hotKey.click();
                f_display.click();
                $window.scroll(function () {
                    // didScroll = true;
                    $st = ($(this).scrollTop() || $("body").scrollTop());
                    f_kv.scroll();
                    f_design.scroll();
                    f_optimized.scroll();
                    f_graphic.scroll();
                    f_performance.scroll();
                    f_speeds.scroll();
                    f_seamless.scroll();
                    f_keyboard.scroll();
                    f_hotKey.scroll();
                    f_keyCap.scroll();
                });
            };
            odysseyInit();
            responsiveImg(windowW);
            delInHeader(windowW, $design);
            delInHeader(windowW, $keyboard);
            setTimeout(function () {
                $speeds.find(".t_content").get(0).slick.setPosition();
                $seamless.find(".t_content").get(0).slick.setPosition();
                $hotKey.find(".t_content").get(0).slick.setPosition();
                $display.find(".t_content").get(0).slick.setPosition();
            }, 250);
            $window.resize(function () {
                windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                responsiveImg(windowW);
                var designResize = f_design.resize();
                designResize();
                var keyboardResize = f_keyboard.resize();
                keyboardResize();
            });
        });


    }(jQuery));
});