/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

$(document).ready(function () {
    // fade in
    const name_fade_in_id = document.getElementById("name_fade_in");
    const desc_fade_in_id = document.getElementById("desc_fade_in")
    const about_button = document.getElementById("about_button")
    name_fade_in_id.classList.add("show");

    setTimeout(() => {
        desc_fade_in_id.classList.add("show");
    }, 1000); 

    setTimeout(() => {
        about_button.classList.add("show");
    }, 1500); 
            
    function initColorPicker() {
        var canvas_list = document.querySelectorAll('.colour-canvas')

        canvas_list.forEach(function(canvas) {
            // var canvas = document.getElementById('colorCanvas');
            var canvasContext = canvas.getContext('2d');
            var width = canvas.width;
            var height = canvas.height;
            var radius = Math.min(width, height) / 2;
            
            var gradient = canvasContext.createConicGradient(0, width / 2, height / 2);
        
            // Add color stops to the conic gradient for a full color spectrum (red, yellow, green, etc.)
            gradient.addColorStop(0, 'hsl(0, 100%, 50%)');     // Red
            gradient.addColorStop(0.166, 'hsl(60, 100%, 50%)'); // Yellow
            gradient.addColorStop(0.333, 'hsl(120, 100%, 50%)');// Green
            gradient.addColorStop(0.5, 'hsl(180, 100%, 50%)'); // Cyan
            gradient.addColorStop(0.666, 'hsl(240, 100%, 50%)');// Blue
            gradient.addColorStop(0.833, 'hsl(300, 100%, 50%)');// Magenta
            gradient.addColorStop(1, 'hsl(360, 100%, 50%)');   // Red again to complete the cycle
        
            // Fill the canvas with the conic gradient
            canvasContext.fillStyle = gradient;
            canvasContext.fillRect(0, 0, width, height);  
        
            let brightnessGradient = canvasContext.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                radius
            );
            brightnessGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            brightnessGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
            brightnessGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            canvasContext.fillStyle = brightnessGradient;
            canvasContext.fillRect(0, 0, width, height);
        
            // Detect color on click
            canvas.onclick = function (e) {
                var imgData = canvasContext.getImageData(
                    (e.offsetX / canvas.clientWidth) * canvas.width,
                    (e.offsetY / canvas.clientHeight) * canvas.height,
                    1,
                    1
                );
                var rgba = imgData.data;
                var color = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
                var color_rgb = `${rgba[0]}, ${rgba[1]}, ${rgba[2]}`;
                document.documentElement.style.setProperty('--secondary-colour', color);
                document.documentElement.style.setProperty('--secondary-colour-rgb', color_rgb);
                console.log(color);
            };
        });
    }

    
    initColorPicker();
    


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

    // const colour_picker = document.getElementById("colour_picker")

    // colour_picker.addEventListener("input", (event) => {
    //     const selectedColor = event.target.value;
    //     document.documentElement.style.setProperty('--secondary-colour', selectedColor);
    // });

    // const colour_wheel = document.getElementById("colour_wheel")

    // colour_wheel.onclick = function(e) {
    //     console.log("hi")
    //     console.log()

    //     var canvas = document.getElementById('colour_wheel');
    //     var canvasContext = canvas.getContext('2d');
    //   var imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
    //   var rgba = imgData.data;
    //   var color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
    //   document.documentElement.style.setProperty('--secondary-colour', color);
    // }


});

