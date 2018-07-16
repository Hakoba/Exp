import './sass/base.sass';
//import 'bootstrap/scss/bootstrap-grid.scss';
import $ from 'jquery';
import cl from './js/main.js';
import img from './img/favicon.ico';

// <меню на мобильных>
$("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass('active');
});

// двигающийся <header img>
/*let winWidth = $(window).width();
$('header').mousemove(function(e){
 let moveX = (($(window).width()/2)- e.pageX)*0.009;
 //let moveY = (($(window).height()/2)- e.pageY)*0.1;
 $('.content').css('margin-left', moveX + 'px');
 //$('.content').css('margin-top', moveX + 'px');
})*/

// Сворачивание <nav> при прокрутке вниз
let prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    let currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos){
        document.querySelector('nav').style.top = "0"
    }else{
        document.querySelector('nav').style.top = "-52px"
    }
    prevScrollpos = currentScrollpos;
}

$(window).scroll(function(){
    let winTop = $(window).scrollTop(),
        docHeigth = $(document).height(),
        winHeight  = $(window).height();
    let scrolled = (winTop/(docHeigth-winHeight))*100;
    //console.log(scrolled);
    $('.scrollIndicator').css('width', (scrolled + '%'));


})