/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

$(document).ready(function () {
    var currentUrl = window.location.href;
    var curItem = $('.navbar .nav-link.active').parent();


    $('.navbar-nav .nav-link').each(function () {
        var link = $(this).attr('href');

        if (currentUrl.includes(link)) {
            $(this).addClass('active');
            curItem = $(this).parent();
            curItem.addClass('active');
        }
    });

    $('.navbar-nav .nav-link').on('click', function () {
        curItem.removeClass('active');
        curItem = $(this).parent();
        curItem.addClass('active');
    });

    $('#about_button').on('click', function () {
        curItem.removeClass('active');
        curItem = $('#about_link').parent();
        curItem.addClass('active');
    });


    $('#portfolio_button').on('click', function () {
        curItem.removeClass('active');
        curItem = $('#portfolio_link').parent();
        curItem.addClass('active');
    });

    $('#default_link').on('click', function () {
        curItem.removeClass('active');
    });

});

