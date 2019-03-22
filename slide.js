var i = 0, allItems = $('.text').length;
$('.text').eq(i).css({display: 'flex'});

$('.item_1').bind('click', function () {
    i++;
    if(i==allItems){i=0}
    $('.text').eq(i).css({display: 'flex', left: 100 + '%'})
    $('.text').eq(i).animate({ left: 0 + '%'}, 1000);
    $('.text').eq(i-1).animate({ left: -100 + '%'}, 1000);
});
$('.item_3').bind('click', function () {
    i--;
    if(i==(allItems * (-1))){i=0}
    $('.text').eq( i ).css({display: 'flex', left: -100 + '%'});
    $('.text').eq( i ).animate({ left: 0 + '%'}, 1000);
    $('.text').eq( i + 1 ).animate({ left: 100 + '%'}, 1000);
});