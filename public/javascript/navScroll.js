$(document).ready(function() {

    $(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {

        $("nav").slideDown(500);
    } else {
        $("nav").slideUp(500);
    }
    this.previousTop = currentTop;
});
    $('.parallax').parallax();

     
});
