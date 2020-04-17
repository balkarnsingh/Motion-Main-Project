$(document).ready(function() {
    // animating switch
    $('#switch').change(function() {
        if ($(this).is(':checked')) {
        $('.overlay').removeClass('light').addClass('dark');
        }else {
            $('.overlay').removeClass('dark').addClass('light');
        }
    });
    // Animating the bird
    function birdAnimate() {
        $('.bird').animate({'left': '+=40%'}, 5000, 'swing', function() {
            $(this).removeClass('right').addClass('left');
        }).animate({'left': '-=40%'}, 5000, 'swing', function() {
            $(this).removeClass('left').addClass('right');
            birdAnimate();
        })
    }
    birdAnimate();


    // Animating the loading screen
    var canvas = document.getElementById("loading_canvas");
    var ctx = canvas.getContext("2d");

    var angle = 0;
    function animateCircle() {
        if(angle >= 6){
            clearInterval(animateInterval);
            $('.loading').remove();
        }
        console.log(angle);
        ctx.beginPath();
        ctx.arc(55, 55, 40, 0, ++angle);
        ctx.lineWidth = 8.0;
        ctx.stroke();
    }
    var animateInterval = setInterval(function(){
        animateCircle();
    }, 200);
});