$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});
$('.slider').slick({
    slidesToShow: 2,
    arrows: false,
    infinite: true,
});

var handleMatchMedia = function(mediaQuery) {
    if (mediaQuery.matches) {
        $(document).ready(function(){
            $('#btn1').on("click", function(){
                $('#text1').toggle();
                $('#btn1').toggleClass('active1');
            });
        });
        $(document).ready(function(){
            $('#btn2').on("click", function(){
                $('#text2').toggle();
                $('#btn2').toggleClass('active2');
            });
        });
        $(document).ready(function(){
            $('#btn3').on("click", function(){
                $('#text3').toggle();
                $('#btn3').toggleClass('active3');
            });
        });
        $(document).ready(function(){
            $('#btn4').on("click", function(){
                $('#text4').toggle();
                $('#btn4').toggleClass('active4');
            });
        });
    } else {
        $('#btn1').off('click');
        $('#btn2').off('click');
        $('#btn3').off('click');
        $('#btn4').off('click');
    }
},
mql = window.matchMedia('all and (max-width: 768px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia);