/*global $ , console , alert , document, window */
$(document).ready(function () {
    'use strict';

	$(window).scroll(function () {
	$(".navbar").addClass('fixed-top').toggle
    $(".content").css("opacity",0.5)
    var currentScroll = $(this).scrollTop();

    if(currentScroll===0){
        $(".navbar").removeClass('fixed-top').toggle
        $(".content").css("opacity",1)

    }
	});

    $(".count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                now = Number(Math.ceil(now)).toLocaleString('en');
                                      $(this).text(now);
              },
            }
          );
      });
      
      $("#myBtn").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        if($(document.scrollTop>20)){
          $('#mybtn').css("dispay","block")
        }else{
          $('#mybtn').css("dispay","none")
        }
        $("html, body").animate({scrollTop: 0}, 1000);
     });

     $('#works').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 10,
        autoplay: true,
        dots:true,
        rtl:true,
        nav:true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            nav:false,
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
  })
  $('#team').owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 10,
    autoplay: true,
    dots:true,
    rtl:true,
    nav:true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        nav:false,
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 4
      }
    }
})

$(".owl-carousel1").owlCarousel({
  loop: true,
  center: true,
  margin: 0,
  responsiveClass: true,
  nav: false,
  rtl:true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    680: {
      items: 2,
      nav: false,
      loop: false
    },
    1000: {
      items: 3,
      nav: true
    }
  }
});
$(".filter-button").click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  
  var value = $(this).attr('data-filter');
  $(this).css('display',"inline-block")
  if(value == "all")
  {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
  }
  else
  {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');
      
  }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});

