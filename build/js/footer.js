$( document ).ready(function() {
    console.log( "ready!" );


    // click fa-plus
    // adds/removes animation class  

    $(".action-icon").click(function(){
        $(".locations-container").toggleClass("hide-locations-container");
        $(".action-icon").toggleClass("fa-minus");
    })

});