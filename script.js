var i = 1, 
    item = document.getElementsByClassName('section-sixth__slider_item'), 
    dot = document.getElementsByClassName('section-sixth__slider_dot'),
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
            $(dot[i]).removeClass('active');
            i++;
            if(i == item.length){
                i=0;
            }
            $(dot[i]).addClass('active');
            $('.section-sixth__slider_item').eq(i).css({left: 100 + '%'});
            $('.section-sixth__slider_item').eq(i).animate({left: 0 + '%'}, 1000);
            $('.section-sixth__slider_item').eq(i-1).animate({left: -100 + '%'}, 1000);
            stopTime(1000);
         }
    });    
    
    $('#section-sixth__slider_btn-prev').on('click', function () {
         if(anim) {
            startTime();
            $(dot[i]).removeClass('active');
            i--;
            if(i < 0){
                i=2;
            }
            $(dot[i]).addClass('active');
            $('.section-sixth__slider_item').eq(i).css({left: -100 + '%'});
            $('.section-sixth__slider_item').eq(i).animate({left: 0 + '%'}, 1000);
            if(i==item.length-1){
                $('.section-sixth__slider_item').eq(0).animate({left: 100 + '%'}, 1000);
            }
            else{
                $('.section-sixth__slider_item').eq(i+1).animate({left: 100 + '%'}, 1000);
            }
            stopTime(1000);
         }
    });
    
    $('.section-sixth__slider_dot').on('click', function(){
        if(anim) {
            startTime();
            $(dot).eq(i).removeClass('active');
            var j=i;
            i=$(this).index();
            if(i>j){ 
                $('.section-sixth__slider_item').eq(i).css({left: 100 + '%'});
                $('.section-sixth__slider_item').eq(i).animate({left: 0 + '%'}, 1000);
                $('.section-sixth__slider_item').eq(j).animate({left: -100 + '%'}, 1000);
            }
            else{
                $('.section-sixth__slider_item').eq(i).css({left: -100 + '%'});
                $('.section-sixth__slider_item').eq(i).animate({left: 0 + '%'}, 1000);
                if(i==item.length-1){
                    $('.section-sixth__slider_item').eq(0).animate({left: 100 + '%'}, 1000);
                }
                else{
                    $('.section-sixth__slider_item').eq(j).animate({left: 100 + '%'}, 1000);
                }
            }
            $(dot).eq(i).addClass('active');
            stopTime(1000);
         }
    });