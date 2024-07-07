$(function() {
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.togglelass('scrolled', $(this).scrolltop() > $nav.height());
    });
});

