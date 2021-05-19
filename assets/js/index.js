// navbar function

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// preloader timeout function

setTimeout(function(){
    $('.loader').fadeToggle();
},1000);

// aos initialize for tansitions

AOS.init();