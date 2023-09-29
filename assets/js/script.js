$(document).ready(function() {
    // header section
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header .navbar").toggleClass("expand");
    });

    // hero section
    $(".services_slider").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false, 
        smartSpeed: 3000, 
        slideTransition: 'linear', 
        responsive:{
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
        
    });

});
$(window).on('load', function(){
    if(typeof AOS !== 'undefined'){
        AOS.init({
            easing: 'ease',
            duration: 1000
        });
    }
});
