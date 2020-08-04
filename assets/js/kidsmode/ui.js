(function () {
    var windowW = 0;
    var windowH = 0;
    var scrollTop = 0;

	//캐릭터 소개 클릭시 비디오 재생
    $('.charTab li').click(function(){
    	$('.tabCon_vid video').removeAttr('autoplay');
    	var index = $(".charTab li").index(this);
    	var video = window.document.getElementsByTagName("video");
    	for(var i=0;i< video.length;i++){
    		video[i].pause();
    	}  
    	var src = video[index].getAttribute('src');
     	video[index].setAttribute('src',src);
    	video[index].play();
    });

	 // 키비 썸머워터 페이지 이동
    $('.kv_bg_1').click(function(){
    	location.href="http://kidsmode.samsung.com/kr/event.do?seq=9"; 	
    });

    function gnbMobile(){
        $(document).on("click",'header button', function() {
            $(this).toggleClass('close');
            $(this).parent('header').find('.navi').toggleClass('open');
            $('.dimLayer').toggleClass('on');
            $('body').toggleClass('scrollHidden');
        });
    }

    // window width scrollbar
    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }
    var windowH = viewport().height;
    var windowW = viewport().width;
    $(window).on("resize", function() {
        windowH = viewport().height;
        windowW = viewport().width;
        menuChange(scrollTop);
        if (windowW <= 1024) {
            $('header').addClass('mobile');
            gnbMobile();
        }else if ((windowW > 1024)){
            $('header').removeClass("mobile");
            $('.navi').removeClass('open');
            $('.dimLayer').removeClass('on');
            $('header button').removeClass('close');
            $('body').removeClass('scrollHidden');
        }
        if($('header').hasClass('mobile')){
            gnbMobile();
        }
        responsiveImage(windowW);
        snsInstar(); // instar image hover effect
        landscapeMode(); // 랜드스케이프시 메뉴 레이어 관련
        fixGnb(); // fix 클래스 추가 관련 펑션
        manualTab(); // 사용방법 anchor
        charTab(); // 캐릭터 소개 anchor
    });
    if($('header').hasClass('mobile')){
        gnbMobile();
    }
    menuChange(scrollTop);
    gnbMobile();
    windowW = $(window).innerWidth();
    windowH = $(window).innerHeight();

    if (windowW <= 1024) {
        $('header').addClass('mobile');
    }else if ((windowW > 1024)){
        $('header').removeClass("mobile");
    }

    // fix class function
    function fixGnb(){
        var scltop = $(window).scrollTop();
        var header = $('header').height();
        if (scltop >= header){
            $('header').addClass("fix");
        } else{
            $('header').removeClass("fix");
        }
    }

    $(window).scroll(function(){
        fixGnb();
    });

    $(document).ready(function() {
        windowW = $(window).innerWidth();
        windowH = $(window).height();

        scrollTop = $(window).scrollTop();
        menuChange(scrollTop);
    });

    function menuChange(top) {
        if (top > 70) {
            $('header').addClass("fix");
        } else {
            $('header').removeClass("fix");
        }
    }

    $('.dimLayer').on('click', function(){
        if($(this).hasClass('on')){
            $('.navi').removeClass('open');
            $('.dimLayer').removeClass('on');
            $('header button').removeClass('close');
            $('body').removeClass();
        }
    });

    $('.evtBtn').click(function(){
        openLayer();
    });
    $(document).on('click', '.closeLayer', function(){
        closeLayer();
    });

    function openLayer(){
        var evt = $('.evtLayer');
        var evtWid = evt.width();
        var scl = $(window).scrollTop();
        var dim = $('<div class="evtDim" />');
        evt.show().css({
            top:scl,
            marginLeft:-evtWid/2
        });
        $('body').append(dim);
    }
    function closeLayer(){
        var evt = $('.evtLayer');
        var dim = $('.dimLayer');
        evt.hide();
        $('.evtDim').remove();
    }

    function menuSelect(target){
        windowW = window.innerWidth;
        target.find('a').click(function(){
            target.find('a').removeClass('selected');
            $(this).addClass('selected');
        });
    }
    menuSelect($('nav'));
    menuSelect($('.lang'));
    menuSelect($('.manualTab'));
    menuSelect($('.paging'));
    menuSelect($('.toggleTab li'));

    menuSelect($('.charTab'));

    $('.kvImg').slick({
        dots: true,
        speed: 500,
        fade: true,
        slidesToShow : 1,
        cssEase: 'linear',
        arrow : false,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.friendsImg').slick({
        dots: true,
        speed: 500,
        fade: true,
        slidesToShow : 1,
        cssEase: 'linear',
        loop:false,
        infinite: false,
        arrow: false
    });
    $('.evtBanner').slick({
        dots: true,
        speed: 500,
        fade: true,
        slidesToShow : 1,
        cssEase: 'linear',
        arrow : false
    });
    $('.advantageSlide').slick({
        dots: false,
        slidesToShow : 3,
        arrow : false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow : true,
                dots: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
            }
        }]
    });
    $('.prev').click(function () {
        $('.friendsImg').slick('slickPrev');
    });
    $('.next').click(function () {
        $('.friendsImg').slick('slickNext');
    });


    /* 키즈모드 사용방법 탭 */
    function manualTab(){
        $('.manualTab li').click(function(){
            var wid = $(window).innerWidth();
            var menuH = $('header').height()-7;
            var manualScl = $('.manualCon').offset().top;
            $(window).scrollTop(manualScl-menuH);
            if(manualScl <= 120){
                $(window).scrollTop(60);
            }
            $('.tabCon').removeClass('on');
            var i = $(this).index() + 1;
            $('.tabCon_'+i).addClass('on');
        });
        layerBtn('.manualTabCon .layer_closed_btn', '.manualCon');
    }
    manualTab();

    // var isFixed = false;

    function toggleMenu(target){
        target.next().hide();
        target.click(function(){
            if($(this).hasClass('open')){
                $(this).removeClass('open').next().slideUp();
            }else {
                target.removeClass('open').next().slideUp();;
                $(this).addClass('open').next().slideDown();;
            }
        });
    }

    toggleMenu($('.toggleList dt'));

    /* 뉴스 이벤트 탭 */
    $('.toggleTab li').click(function(){
        // $(window).scrollTop(217);
        $('.tabCon').removeClass('on');
        var i = $(this).index() + 1;
        $('.tabCon_'+i).addClass('on');
    });

    //Responsive Image
    function responsiveImage(w) {
        var device = "media-desktop";
        if (w <= 720) {
            device = "media-mobile";
        } else if (w <= 1024) {
            device = "media-tablet";
        } else {
            device = "media-desktop";
        }

        //var img = $('img');
        var img = $('.responsive-image');
        var obj;
        for(var i=0; i<img.length; i++) {
            obj = img.eq(i);
            if (obj.data(device)) {
                //alert(obj.attr('src')+"\n"+obj.data(device));
                obj.attr('src', obj.data(device));
            }
        }
    }

    responsiveImage(windowW);

    function snsInstar(){
        $('.snsInstar ul li a').mouseenter(function(){
            var spanW = $(this).find('img').width() -19;
            var spanH = $(this).find('img').height() -19;
            $(this).find('span').css({
                width:spanW,
                height:spanH,
                display:'block'
            });
        });
        $('.snsInstar ul li a').mouseleave(function(){
            $(this).find('span').css({
                display:'none'
            });
        });
    }
    snsInstar();

    // 레이어 : park working
    function openDim(tab, con) {
        var $tabBtn = $(tab).find('a');
        var idx, el;

        $tabBtn.click(function(){
            $tabBtn.removeClass('selected');
            $(this).addClass('selected');

            if($(this).hasClass("selected") && windowW < 1025) {
                idx = $(this).parent().index();
                el = $(con + " .tabCon").eq(idx).get(0);
                $(".dimLayer").addClass("on");
                $(el).parent().addClass("onLayer");
                $("body").addClass("scrollDisable")
            }

            $(".layer_closed_btn").click(function() {

                $(con).removeClass("onLayer");
                $(".dimLayer").removeClass("on");
                $("body").removeClass("scrollDisable");

            });

            if($('.slide_1')) {
                for(var i = 0; i < $('.slide_1').length; i++) {
                    $('.slide_1').get(i).slick.setPosition();
                }
            }

        });
    }

    openDim('.charTab', ".charTabCon");
    openDim('.manualTab', ".manualTabCon");

    // 캐릭터 소개
    function layerBtn(target, anchor){
        $(target).click(function() {
            var wid = $(window).innerWidth();
            var menuH = $('header').innerHeight();
            var charScl = $(anchor).offset().top;
            $(window).scrollTop(charScl-menuH);
            if(charScl <= 120){
                $(window).scrollTop(60);
            }
        });
    } // 레이어 닫기 버튼 클릭 후 anchor 기능 삽입

    function charTab(){
        $('.charTab li').click(function(){
            var wid = $(window).innerWidth();
            var menuH = $('header').innerHeight()-7;
            var charScl = $('.charCon').offset().top;
            $(window).scrollTop(charScl-menuH);
            if(charScl <= 120){
                $(window).scrollTop(60);
            }
            $('.tabCon').removeClass('on');
            var i = $(this).index() + 1;
            $('.tabCon_'+i).addClass('on');
        });
        layerBtn('.charTabCon .layer_closed_btn', '.charCon');
    }

    charTab();

    $('.coverflow').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1025,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
        ]
    });

    // 사용방법
    $('.slide_1').slick({
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll :1,
        cssEase: 'linear',
        arrow : false,
        loop:false,
        infinite:false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }]
    });

    function landscapeMode(){
        $(document).on('click', '.mobile button', function(){
            var winH = $(window).innerHeight();
            var sclT = $(window).scrollTop();
            if(winH < 480 && sclT >= 0) {
                $('body').removeClass();
                $(window).scrollTop(0);
                $('header.mobile').addClass('landscape');
                $('.mobile button.close').addClass('landscape');
            }
        });
        function removeLandscape (){
            $('header.mobile').removeClass('landscape');
            $('.mobile button.close').removeClass('landscape');
        }
        $(document).on('click', '.mobile button.close', function(){
            removeLandscape();
        });
        $(document).on('click', '.dimLayer', function(){
            removeLandscape();
        });
    }
    landscapeMode();

})();

/* input file design */
;( function ( document, window, index )
{
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}( document, window, 0 ));