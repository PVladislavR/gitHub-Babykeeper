/*======= Slider ====================================*/

var i = 0, allItems = $('.text').length, anim=true;

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

$('.text').eq(i).css({display: 'flex'});

$('.item_1').bind('click', function () {
    if(anim) {
        startTime();
        i++;
        if (i == allItems) {
            i = 0
        }
        $('.text').eq(i).css({display: 'flex', left: 100 + '%'});
        $('.text').eq(i).animate({left: 0 + '%'}, 1000);
        $('.text').eq(i - 1).animate({left: -100 + '%'}, 1000);
        stopTime(1000);
    }
});
$('.item_3').bind('click', function () {
    if(anim) {
        startTime();
        i--;
        if (i == (allItems * (-1))) {
            i = 0
        }
        $('.text').eq(i).css({display: 'flex', left: -100 + '%'});
        $('.text').eq(i).animate({left: 0 + '%'}, 1000);
        $('.text').eq(i + 1).animate({left: 100 + '%'}, 1000);
        stopTime(1000);
    }
});

/*===================================================================*/


/*======= Menu =======================================================*/
var butClick = true;

$(document).bind('wheel', function () {
    if(!butClick){
        $('.menu').animate({width: 0 + 'px'}, 1000);
        butClick=true;
    }
});


$('.button-menu').bind('click', function () {
    if(butClick) {
        $('.menu').animate({width: 60 + 'px'}, 1000);
        butClick=false;
    }
    else
    {
        $('.menu').animate({width: 0 + 'px'}, 1000);
        butClick=true;
    }
});


$('.menu-items').hover(function () {
    countItems = $($(this).children(0))[0].children.length;
    $(this).children(0).css({width: 300 + '%'});
    $(this).children(0).animate({height: countItems*100 + '%'}, 500)
    $('.items_in_item_in_item-menu').css({
        height: 100/countItems + '%'
    });
    itemInItemMenu = $(this).children(0);
    $(itemInItemMenu).hover(function () {
        $(this).children(0).css({
            background: 'blue'
        })
    }, function () {
        $(this).children(0).css({
            background: 'aqua'
        })
    })
},
    function () {
        vb = $($(this).children(0))[0].children.length;
        $(this).children(0).css({
            width: 0 + '%',
            height: 0 + '%'
        });
        $('.items_in_item_in_item-menu').css({
            height: 0 + '%'
        })
    });



/*====================================================================*/