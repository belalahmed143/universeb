$(function() {


    // PRE LOADER
    jQuery(document).ready(function() {

        jQuery(window).load(function() {
            $(".loader").fadeOut(1000);
        });

    });



    // Sticky Menu
    //    ================= SCROLLING PART ============

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.back_to_top').fadeIn(800);
            $('.navbar-toggler i').css({
                'color': 'black'
            });
        } else {
            $('.back_to_top').fadeOut(800);
            $('.navbar-toggler i').css({
                'color': 'white'
            });
        }
    });

    var header = $(this).scrollTop();
    if (header > 1) {
        $(".navbar").addClass('bg');
    } else {
        $(".navbar").removeClass('bg');
    }

    $(window).scroll(function() {
        var headerscroll = $(this).scrollTop();
        if (headerscroll > 1) {
            $(".navbar").addClass('bg');
            $('.navbar .dropdown-menu').addClass('increase_padding');
            $('.navbar .dropdown-menu').removeClass('decrease_padding');
        } else {
            $(".navbar").removeClass('bg');
            $('.navbar .dropdown-menu').removeClass('increase_padding');
            $('.navbar .dropdown-menu').addClass('decrease_padding');
        }
    });

    // NAV BAR
    $(".navigation li").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children("ul").stop().slideDown(300);
        } else {
            $(this).children("ul").stop().slideUp(300);
        }
    });

    // BANNER SLIDER
    $('.banner_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    // Counter Js
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    // Gallery Part
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });






});