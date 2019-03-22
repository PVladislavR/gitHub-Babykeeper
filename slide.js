var i = 0, allItems = $('.text').length;
$('.text').eq(i).css({display: 'block'});

$('.item_1').bind('click', function () {
    i++;
    if(i==allItems){i=0}
    $('.text').eq(i).css({display: 'block', left: 100 + '%'})
    $('.text').eq(i).animate({ left: 0 + '%'}, 500);
    $('.text').eq(i-1).animate({ left: -100 + '%'}, 500);
});
$('.item_3').bind('click', function () {
    i--;
    if(i==(allItems * (-1))){i=0}
    $('.text').eq( i ).css({display: 'block', left: -100 + '%'});
    $('.text').eq( i ).animate({ left: 0 + '%'}, 500);
    $('.text').eq( i + 1 ).animate({ left: 100 + '%'}, 500);
});