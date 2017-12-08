import '../css/main.scss'
import '../css/animate.scss'
import '../css/font-awesome.scss'
import $ from 'jquery'
import boostrap from 'bootstrap'
import WOW from './wow.min.js'


$(window).on(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('#loginBtn').click(function(){
        window.location.href = 'https://app.aplano.de'
    });
})

//<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400i,700,800' rel='stylesheet' type='text/css'>

console.log('whattt');
