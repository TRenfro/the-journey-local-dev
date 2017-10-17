// main
$(document).ready(function () {

    $(".action-icon").click(function () {
        toggleLocationsContainer();
    })

});





// Helpers
function toggleLocationsContainer() {

    var activated = $(".action-icon").hasClass("fa-plus");

    $(".locations-container").toggleClass("hide-locations-container");

    if (activated) {

        $(".action-icon").removeClass("fa-plus");
        $(".action-icon").addClass("fa-minus");

    } else {

        $(".action-icon").removeClass("fa-minus");
        $(".action-icon").addClass("fa-plus");

    }
}


//Sticky Locatoins Menu on Scroll
// $(function () {
//     var menu = $('.locations-footer-menu');
//     var hieghtThreshold = $("#footer").offset().top;
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         if (scroll >= hieghtThreshold) {
//             menu.addClass('sticky');
//         } else {
//             menu.removeClass('sticky');
//         }
//     });
// })

$(function() {
    var menu = $('.locations-footer-menu');
    var hieghtThreshold = $("footer").offset().top-500;
    var hieghtThreshold_end  = $("footer").offset().top +$("footer").height() ;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= hieghtThreshold && scroll <=  hieghtThreshold_end ) {
            menu.removeClass('sticky');
        } else {
            menu.addClass('sticky');            
        }
    });
})