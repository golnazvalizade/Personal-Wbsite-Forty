$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 520) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    });

});