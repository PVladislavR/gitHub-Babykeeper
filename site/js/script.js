$(document).ready(function(){ 
    /* Header animate */
    $(window).scroll(function(){
        var wScroll=$(this).scrollTop();
        if(wScroll > 20){
            $('.header__nav').addClass('active');
        }
        
        else{
            $('.header__nav').removeClass('active');
        }
    });
    
    /* Scrolling */
    
    $('.link').on('click', function() {
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top},700);
       return false;
    });
     
    /* Mobile nav */
    
    $('.header__nav_menu').on('click', function(e){
        e.preventDefault();
        $('.header__nav_mobile').toggleClass('active');
    });
    /* click outside mobile-nav-menu
     function outsideClick(){
            $(document).mouseup(function (e){
                if (!$('.header__nav_mobile').is(e.target) && $('.header__nav_mobile').has(e.target).length === 0) {
                    $('.header__nav_mobile').removeClass('active');
                } 
            });
     }
     */
    
    //click on the cross
    $('.header__nav_mobile-close').on('click', function(e){
        e.preventDefault();
        $('.header__nav_mobile').removeClass('active');
    });
    
   
    
    
    
    //SLIDER jQUERY none animation
    
    var item = document.getElementsByClassName('section-sixth__slider_item');
    var dot = document.getElementsByClassName('section-sixth__slider_dot');
    var i = 1;
    
    $('#section-sixth__slider_btn-next').on('click', function(){
        $(dot[i]).removeClass('active');
        $(item[i]).removeClass('active');
        i++;
        if(i == item.length){
            i=0;
        }
        $(dot[i]).addClass('active');
        $(item[i]).addClass('active');н
    });
    
    $('#section-sixth__slider_btn-prev').on('click', function(){
        $(dot[i]).removeClass('active');
        $(item[i]).removeClass('active');
        i--;
        if(i < 0){
            i=item.length-1;
        }
        $(item[i]).addClass('active');
        $(dot[i]).addClass('active');
    });
    
    $('.section-sixth__slider_dot').on('click', function(e){
        e.preventDefault();
        $(item[i]).removeClass('active');
        $(dot[i]).removeClass('active');
        i=$(this).index();
        $(dot[i]).addClass('active');
        $(item[i]).addClass('active');
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
    
    
    
    
    
    
    /*SLIDER
    var btnNext=document.getElementById('section-sixth__slider_btn-next').onclick=onBtnNextClick;
    var btnPrev=document.getElementById('section-sixth__slider_btn-prev').onclick=onBtnPrevClick;
    
    var line=document.getElementById('section-sixth__slider_line');
    var item=document.getElementsByClassName('section-sixth__slider_item');
    
    var dot=document.getElementsByClassName('section-sixth__slider_dot');
    
    
    
    var left= -600;
    var i=1;
    
    function onBtnNextClick(){
        left-=600;
        if(left < -1200){
            left=0;
        }
        line.style.left= left+'px';
        
        item[i].classList.remove('active');
        dot[i].classList.remove('active');
        i+=1;
        if(i > item.length-1){
            i=0;
        }
        item[i].classList.add('active');
        dot[i].classList.add('active');
    }
    function onBtnPrevClick(){
        left+=600;
        if(left > 0){
            left=-1200;
        }
        line.style.left= left+'px';
        
        item[i].classList.remove('active');
        dot[i].classList.remove('active');
        i-=1;
        if(i<0){
            i=item.length-1;
        }
        item[i].classList.add('active');
        dot[i].classList.add('active');
    }
    */
    
    
    
    

    
    
    
    /* SLIDER IT'S WORK!
    var n=1;
    var item=document.getElementsByClassName('section-sixth__slider_item');
    var btnNext=document.getElementById('section-sixth__slider_btn-next').onclick=onBtnNextClick;
    var btnPrev=document.getElementById('section-sixth__slider_btn-prev').onclick=onBtnPrevClick;
    
    function onBtnNextClick(){
        item[n].classList.remove('active');
        n+=1;
        if(n == 3){
            n=0;
        }
        item[n].classList.add('active');
    }
    
    function onBtnPrevClick(){
        item[n].classList.remove('active');
        n-=1;
        if(n<0){
            n=2;
        }
        item[n].classList.add('active');
    }
*/
    
    
    
    /*Slider new
    
    var btnNext=document.getElementById('section-sixth__slider_btn-next').onclick=onBtnNextClick;
    var btnPrev=document.getElementById('section-sixth__slider_btn-prev').onclick=onBtnPrevClick;
    var left= -600;
    var sliderItem=document.getElementById('section-sixth__slider_polosa');
    sliderItem.style.left=-600+'px';
    function onBtnPrevClick(){
        left=left-600;
        if(left < -1200){
            left=0;
        }
        sliderItem.style.left=left+'px';
    }  
    function onBtnNextClick(){
        left=left+600;
        if(left = 0){
            btnNext.disable=true;
        }
        if(left > 1200){
            left=0;
        }
        sliderItem.style.left=left+'px';
    }
    */
    
    
    
    /* slider
    
    var btnPrev = document.getElementById('section-sixth__slider_btn-prev');
    var btnNext = document.getElementById('section-sixth__slider_btn-next');
    var slideImage = document.getElementById('section-sixth__slider_img');
    
    btnPrev.addEventListener('click', onBtnPrevClick);
    btnNext.addEventListener('click', onBtnNextClick);
    
    var imagesUrls = new Array();
    
    imagesUrls[0] = new Image();
    imagesUrls[0].src= 'image/user1.jpg'; 
    
    imagesUrls[1] = new Image();
    imagesUrls[1].src= 'image/user2.jpg';  
    
    imagesUrls[2] = new Image();
    imagesUrls[2].src= 'image/user3.jpg'; 
    
    var currentImageIndex=0;
    slideImage.src = imagesUrls[currentImageIndex].src;
    
    function onBtnNextClick(e){
        e.preventDefault();
        if(currentImageIndex < imagesUrls.length-1){
            currentImageIndex++;
            slideImage.src=imagesUrls[currentImageIndex].src;
            btnPrev.disable = false;
        }
    }

    function onBtnPrevClick(e){
        e.preventDefault();
        if(currentImageIndex > 0){
            currentImageIndex--;
            slideImage.src=imagesUrls[currentImageIndex].src;
            btnNext.disable = false;
        }
    }
    Slider */
}); 