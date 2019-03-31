$(document).ready(function(){ 
    /// Header scroll anim 
    $(window).scroll(function(){
        let wScroll=$(this).scrollTop();
        if(wScroll > 20)
            $('.header__nav').addClass('active');
        else
            $('.header__nav').removeClass('active');
    });
    
    // Scrolling 
    $('.scroll').on('click', function() {
        let hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top},1000);
        return false;
    });
     
    // Mobile nav 
    $('.header__nav_menu').on('click', function clickMobileNav(e){
        e.preventDefault();
        $('.header__nav_mobile').toggleClass('active');
        
        
        
        if($('.header__nav_mobile').hasClass('active')){
            $(document).mouseup(function (e){ // событие клика по веб-документу
                $('.header__nav_mobile').removeClass('active');
                var div = $(".header__nav_mobile"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length == 1)  // и не по его дочерним элементам
                $('.header__nav_mobile').removeClass('active');
                else if($('.header__nav_menu').is(e.target))
                    $('.header__nav_mobile').removeClass('active');
                return;
            });
        }
    });
    
    // Click outside mobile-nav-menu
    
    
    // Click on the cross
    $('.header__nav_mobile-close').on('click', function(e){
        e.preventDefault();
        $('.header__nav_mobile').removeClass('active');
    });
    
    // Slider
    var i = 1, 
    item = $('.section-sixth__slider_item'), 
    dot = $('.section-sixth__slider_dot'),
    sectionSixthSliderItem = $('.section-sixth__slider_item'),
    anim=true;
    
    function startTime() {
        timerId = setInterval(function () {
            anim=false;
        }, 1);
    }

    function stopTime(tim) {
        setTimeout(function () {
            clearInterval(timerId);
            anim=true;
        }, tim);
    }
    
    $('.section-sixth__slider_btn-next').on('click', function () {
         if(anim) {
            startTime();
            dot.eq(i).removeClass('active');
            i++;
            if(i == item.length)
                i=0;
            dot.eq(i).addClass('active');
            sectionSixthSliderItem.eq(i).css({left: 100 + '%'});
            sectionSixthSliderItem.eq(i).animate({left: 0 + '%'}, 1000);
            sectionSixthSliderItem.eq(i-1).animate({left: -100 + '%'}, 1000);
            stopTime(900);
         }
    });    
    
    $('.section-sixth__slider_btn-prev').on('click', function () {
         if(anim) {
            startTime();
            dot.eq(i).removeClass('active');
            i--;
            if(i < 0)
                i=2;
            dot.eq(i).addClass('active');
            sectionSixthSliderItem.eq(i).css({left: -100 + '%'});
            sectionSixthSliderItem.eq(i).animate({left: 0 + '%'}, 1000);
            if(i==item.length-1)
                sectionSixthSliderItem.eq(0).animate({left: 100 + '%'}, 1000);
            else
                sectionSixthSliderItem.eq(i+1).animate({left: 100 + '%'}, 1000);
            stopTime(900);
         }
    });
    
    $('.section-sixth__slider_dot').on('click', function(){
        if(anim) {
            startTime();
            dot.eq(i).removeClass('active');
            let j=i;
            i=$(this).index();
            if(i==j)
                ;
            else if(i>j){
                sectionSixthSliderItem.eq(i).css({left: 100 + '%'});
                sectionSixthSliderItem.eq(i).animate({left: 0 + '%'}, 1000);
                sectionSixthSliderItem.eq(j).animate({left: -100 + '%'}, 1000);
            }
            else{
                sectionSixthSliderItem.eq(i).css({left: -100 + '%'});
                sectionSixthSliderItem.eq(i).animate({left: 0 + '%'}, 1000);
                if(i==item.length - 1)
                    sectionSixthSliderItem.eq(0).animate({left: 100 + '%'}, 1000);
                else
                    sectionSixthSliderItem.eq(j).animate({left: 100 + '%'}, 1000);
            }
            dot.eq(i).addClass('active');
            stopTime(900);
         }
    });
    
    // Switch plan
    
    var individual=$('.section-seventh__switch-toggels').find('.section-seventh__select-individual'),
        company=$('.section-seventh__switch-toggels').find('.section-seventh__select-company'),
        planFree=$('.section-seventh__first-plan').find('.section-seventh__first-plan_free'),
        planPro=$('.section-seventh__first-plan').find('.section-seventh__first-plan_pro');
    
    individual.on('click', function(){
        if(anim) {
            startTime();
            $(this).addClass('active');
            company.removeClass('active');
            $('.section-seventh__switch-toggels').removeClass('active');
            $('.section-seventh__second-plan').removeClass('animate');
            $('.section-seventh__first-plan').removeClass('index');
            planFree.animate({right: 0},400);
            planPro.animate({left: 0},400);
            stopTime(1000);
         }
    });
    
    company.on('click', function(){
        if(anim) {
            startTime();
            $(this).addClass('active');
            individual.removeClass('active');
            $('.section-seventh__switch-toggels').addClass('active');
            $('.section-seventh__second-plan').addClass('animate');
            planFree.animate({right: 140+'%'},400);
            planPro.animate({left: 140+'%'},400);
            setTimeout(function (){$('.section-seventh__first-plan').addClass('index')},600)
            stopTime(1000);
        }
    });
    
    // Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
}); 