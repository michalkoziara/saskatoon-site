;(function () {

    'use strict';

    var loaderPage = function() {
        $(".loader").fadeOut("slow");
        $(".carousel-indicators").hide().fadeIn("slow");
        $("nav").hide().slideDown("fast");
    };



    $(function(){
        loaderPage();
    });


}());