 
$(document).ready(function(){ 
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
            $(item[i]).addClass('active');
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
    });