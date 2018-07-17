import './sass/base.sass';
//import 'bootstrap/scss/bootstrap-grid.scss';
import $ from 'jquery';
import  './js/main.js';
import img from './img/favicon.ico';
import Rellax from 'rellax';
import {lory} from 'lory.js';
import ScrollReveal from 'scrollreveal'
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

$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
});

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

//
 var rellax = new Rellax('.rellax');
 //
 document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.js_slider');

    lory(slider, {
        infinite: 1,
        enableMouseEvents: true,
        classNameFrame: 'js_frame',
        classNameSlideContainer: 'js_slides',
        classNamePrevCtrl: 'slider-prev',
        classNameNextCtrl: 'slider-next'
    });
});
/// 
window.sr = ScrollReveal();
sr.reveal('.scrollClass', 
{  
    duration: 200,
}); 
sr.reveal('.scrollClass2', 
{  
    duration: 1000,
}); 
sr.reveal('#sites', {
    duration: 50,
    
})
