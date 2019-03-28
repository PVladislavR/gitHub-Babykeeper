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
    
    $('#section-sixth__slider_btn-next').on('click', function () {
         if(anim) {
            startTime();
            dot.eq(i).removeClass('active');
            i++;
            if(i == item.length){
                i=0;
            }
            dot.eq(i).addClass('active');
            sectionSixthSliderItem.eq(i).css({left: 100 + '%'});
            sectionSixthSliderItem.eq(i).animate({left: 0 + '%'}, 1000);
            sectionSixthSliderItem.eq(i-1).animate({left: -100 + '%'}, 1000);
            stopTime(900);
         }
    });    
    
    $('#section-sixth__slider_btn-prev').on('click', function () {
         if(anim) {
            startTime();
            dot.eq(i).removeClass('active');
            i--;
            if(i < 0){
                i=2;
            }
            dot.eq(i).addClass('active');
            sectionSixthSliderItem.eq(i).css({left: -100 + '%'});
            sectionSixthSliderItem.eq(i).animate({left: 0 + '%'}, 1000);
            if(i==item.length-1){
                sectionSixthSliderItem.eq(0).animate({left: 100 + '%'}, 1000);
            }
            else{
                sectionSixthSliderItem.eq(i+1).animate({left: 100 + '%'}, 1000);
            }
            stopTime(900);
         }
    });
    
    $('.section-sixth__slider_dot').on('click', function(){
        if(anim) {
            startTime();
            dot.eq(i).removeClass('active');
            var j=i;
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
                if(i==item.length-1){
                    sectionSixthSliderItem.eq(0).animate({left: 100 + '%'}, 1000);
                }
                else{
                    sectionSixthSliderItem.eq(j).animate({left: 100 + '%'}, 1000);
                }
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