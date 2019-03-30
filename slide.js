function startTime() {
    setTime = setInterval(function () {
        anim = false;
    }, 1)
}

function stopTime(tim) {
    setTimeout(function () {
        clearInterval(setTime);
        anim=true;
    }, tim);
}
$('.item').css({ opacity: 1 });
var contentItemId=0, contentItem = $('.contentItem'), anim = true;
$('.content').bind('wheel', function (event) {
    if(event.originalEvent.deltaY >= 0) {
        if (anim) {
            if (contentItem.length != contentItemId+1) {
                $('.item').css({ opacity: 0 });
                startTime();
                contentItem.eq(contentItemId-1).removeClass('state');
                contentItem.eq(contentItemId).removeClass('active activeEarly');
                contentItem.eq(contentItemId+1).removeClass('activeEarly');
                contentItem.eq(contentItemId).addClass('state');
                contentItem.eq(contentItemId+1).addClass('active');
                contentItemId++;
                stopTime(2000);
                setTimeout(function () {
                    $('.item').animate({
                        opacity: 1
                    }, 1000);
                }, 1000);
            }
        }
    }
    else
    {
        if (anim) {
            if (0 != contentItemId) {
                $('.item').css({ opacity: 0 });
                startTime();
                contentItem.eq(contentItemId+1).removeClass('activeEarly state');
                contentItem.eq(contentItemId).addClass('activeEarly');
                contentItem.eq(contentItemId).removeClass('active state');
                contentItem.eq(contentItemId-1).addClass('state');
                contentItemId--;
                stopTime(2000);
                setTimeout(function () {
                    $('.item').animate({
                        opacity: 1
                    }, 1000);
                }, 1000);
            }
        }
    }
});