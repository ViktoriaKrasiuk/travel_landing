$(function(){
    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });

    $(".owl-carousel").owlCarousel({
        loop:true,

        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            650:{
                items:3
            },
            900:{
                items:4
            },
            1140:{
                items:5
            }
        }
    });
      
});