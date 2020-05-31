/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
    const sweetScroll = new SweetScroll({
        offset: 0, // in pixels
    });
}, false)

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 84) { // << here '+ 84' instead of '- 20'
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }

}).scroll();