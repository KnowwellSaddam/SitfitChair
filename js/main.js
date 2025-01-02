$(document).ready(function() {
    $('.primery-header').after('<div class="nav-space"/>')
    $(window).scroll(function() {

        if ($(window).scrollTop() > 1) {
            $('.nav-space').css('height', $('.navbar').height());
            $('.site-header nav').addClass('fixed-header');

        } else {

            $('.site-header nav').removeClass('fixed-header');
            $('.nav-space').css('height', '0');
        }

    });

    $(".navbar-toggle").click(function() {
        $(this).toggleClass('open');
    });


    $('.carousel').carousel({
      interval: 4000,
      pause: false
      });

      $(".arrow-left span b").click(function() {
        $('html, body').animate({
           scrollTop: $("#tab_sec").offset().top
       }, 1000);
      });



  //slider tab
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed:800,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    asNavFor: '.slider-nav-thumbnails',
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    arrows: false,
    focusOnSelect: true
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 


 $('.responsive').slick({
  dots: false,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  autoplay: false,
  arrows:true,
  fade:true,
  infinite: false,
  speed:1000,

});

$('.benefit-slider').slick({
  slidesToShow:4,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  arrows:true,
  speed:800,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

});


if($('.wow').length){
  var wow = new WOW({
  mobile:       false
  });
  wow.init();
}


// video js

$(document).ready(function(){
  var video1 = document.getElementById("ban_video");
  video1.currentTime = 0;

   $(".play-bt").click(function(){
    $(".play-bt").hide();
     $(".pause-bt").show();
      var ban_video = document.getElementById("ban_video");
     if($(".stop-bt").hasClass("active")){
       ban_video.currentTime = 0;
     }
      ban_video.play();                                         
   });

   $(".pause-bt").click(function(){
   $(".play-bt").show();
     $(".pause-bt").hide();
     $(".pause-bt").addClass("active");
     $(".stop-bt").removeClass("active");
    var ban_video = document.getElementById("ban_video");
    ban_video.pause();                                         
 });

});	 




// tab--------
    $('.custom-tab li').click(function(){
        $('.custom-tab li').removeClass('active');
        $(this).addClass('active');
        var get_id = $(this).data('id');
        $('.content-tab').hide();
        $('#' + get_id).show();
    
      });
    


jQuery('.navbar-nav > li').has('ul').append('<span class="close-menu"></span>');

jQuery('.close-menu').click(function(){
  jQuery(this).prev().slideToggle();
  jQuery(this).parents('li').siblings('li').children('ul').slideUp();
  jQuery(this).toggleClass('active');
  jQuery(this).parents('li').siblings('li').children('.close-menu').removeClass('active');
});


 AOS.init();

     AOS.init({
      disable: 'mobile'
    });


$('.back-top a').hide();
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('.back-top a').fadeIn();
       } else {
           $('.back-top a').fadeOut();
       }
   });
   $('.back-top a').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 800);
       return false;
   });

// Equal Height Js
 


});

//     $(function() {
//   var $select = $('.js-my-select'),
//       $images =  $('.js-my-image');

//   $select.on('change', function() {
//     var value = '.' + $(this).val();
//     $images.show().not(value).hide();
//   });
// });


// color option

// var colors = [
// 	{
// 		hex: '#00b1cd',
// 	  name: 'Aruba'
//   },
// 	{
// 		hex: '#65d4fc',
// 	  name: 'Azure'
//   },
// 	{
// 		hex: '#000',
// 	  name: 'Black',
//   },
// 	{
// 		hex: '#fe490f',
// 	  name: 'Orange'
//   },
//   {
// 		hex: '#028461',
// 	  name: 'Green'
//   },
//   {
// 		hex: '#fdc004',
// 	  name: 'Yellow'
//   },
//   {
// 		hex: '#cca16c',
// 	  name: 'Toast'
//   }
// ];
// new Vue({
// 	el: '#color-picker',
// 	data: {
// 		active: false,
// 		selectedColor: '',
// 		selectedColorName: '',
// 		colors: colors
// 	},
// 	computed: {
// 		selector: function() {
// 			if(!this.selectedColor) {
// 				return 'Select Color';
// 			}
// 			else {
// 				return '<span style="background: ' + this.selectedColor + '"></span> ' + this.selectedColorName;
// 			}
// 		}
// 	},
// 	methods: {
// 		setColor: function(color, colorName) {
// 			this.selectedColor = color;
// 			this.selectedColorName = colorName;
// 			this.active = false;
// 		},
// 		toggleDropdown: function() {
// 			this.active = !this.active;
// 		},
//   }

// });









