import './sass/base.sass';
//import 'bootstrap/scss/bootstrap-grid.scss';
import $ from 'jquery';
import  './js/main.js';
import img from './img/favicon.ico';
import Rellax from 'rellax';
import {lory} from 'lory.js';
import ScrollReveal from 'scrollreveal'
// <меню на мобильных>

function toggleMenu() {
    $(this).toggleClass('on');
    $("#resize").toggleClass('active');
    $("nav").toggleClass('bgc-zero');
    $(".scrollIndicator").toggleClass('bgc-zero');
}
$("#toggle").click(toggleMenu);
$(".menu").click(toggleMenu);

// двигающийся <header img>
/*let winWidth = $(window).width();
$('header').mousemove(function(e){
 let moveX = (($(window).width()/2)- e.pageX)*0.009;
 //let moveY = (($(window).height()/2)- e.pageY)*0.1;
 $('.content').css('margin-left', moveX + 'px');
 //$('.content').css('margin-top', moveX + 'px');
})*/

$(document).ready(function(){
    
    let
     images = document.images,
     allImages = images.length,
     loadedImages = 0,
     preloader =  document.querySelector('.preloader'),
     h1Display = document.querySelector('.preloadCount')

     for( let i = 0; i  < allImages; i++){
       let imageClone      = new Image;
        imageClone.onload  = imageLoaded;
        imageClone.onerroe = imageLoaded;
        imageClone.src     = images[i].src
     }
     function imageLoaded() {
        
          loadedImages++;
          console.log(loadedImages + "loadedImages")
          h1Display.innerHTML = (( (100 / allImages) * loadedImages) << 0 )+'%'
            if(loadedImages>=allImages)
            {
                setTimeout(() => {
                    if(!preloader.classList.contains('done'))
                    {
                        preloader.classList.add('done')
                    }
            }, 200);
            }

     }
    
	$(".menu").on("click","a", function (event) {	
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
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
