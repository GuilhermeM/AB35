/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 $('.announce_slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  });

  $('#toggle-pause').click(function(){
    $('.mineBtn').addClass('hide');
    $('#toggle-play').removeClass('hide');
    $('.announce_slider').slick('slickPause');
  });

  $('#toggle-play').click(function(){
    $('.mineBtn').addClass('hide');
    $('#toggle-pause').removeClass('hide');
    $('.announce_slider').slick('slickPlay');
  });
function iframmove(){
  if ($(window).width() < 1009) {
    $('.template-product .video-embed.product_mobile_media').append($('.Product__Gallery .video-embed.desktop_media iframe'));
  }
  else {
    $('.Product__Gallery .video-embed.desktop_media').append($('.template-product .video-embed.product_mobile_media iframe'));
  }
}
iframmove();
$(window).resize(function(){
  iframmove();
});

$(document).ready(function(){
    // Enter keydown event
    const $skipButton = $('.accessibly-app-skip-link');
    const $logoLink = $('.Header__LogoLink');
    $('body').on('keydown', '.Header__LogoLink', function (e) {
      if (e.key === 'Enter' || e.which === 13) {
        e.preventDefault();
        $logoLink.focus(); // Optional: also move actual focus
      }
    });

    // Click event
    $('body').on('click', '.accessibly-app-skip-link', function () {
      $logoLink.focus(); // Optional
    });

  $('.Modal__Close.RoundButton').attr("aria-label", "Close dialog");
  if ($(window).width() > 1008) {
    $('.artical--tab').click(function(){
      var articleTab = $(this).data('tab');
      $('.category__articles--list .artical--tab').removeClass('is-active');
      $(this).addClass('is-active');
      $('.category__articles--detail').removeClass('is-active');
      $('.category__articles--detail[data-content='+ articleTab +']').addClass('is-active');
    });
  } else{
    $('.articles__selector').on('change', function(){
      var selectorValue= $(this).val();
      console.log(selectorValue);
      $('.category__articles--detail').removeClass('is-active');
      $('.category__articles--detail[data-content='+ selectorValue +']').addClass('is-active');
    })
  }
  $('.category__selector').on('change', function() {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
  $('.Styles__PaymentProvider').click(function(e){
    e.preventDefault(); 
    var getId = $(this).attr('title');
    var gerURL = $(this).attr('href')
    window.location = `${gerURL}#${getId}`;
  })
  setTimeout(function(){
    if(window.location.hash != ''){
      var gethash = window.location.hash;
      $(gethash).click();
      window.scrollTo(0,0);
    }
    if(window.location.pathname){
      $('#categories').val(window.location.pathname);
    }
  },100);
})

$(document).ready(function () {
  setTimeout(function(){
    $('#rich-text-01JNVJ30779G7DX9R3SSB3X74R p').wrapAll('<h2 class="mineTitle"></h2>');
  }, 10000);

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 400,
    resistanceRatio: 0,
    loop: false,
    threshold: 30,
    slidesPerGroup: 1,         // Critical: ensures 1 slide per swipe
    allowTouchMove: true,
    longSwipes: true,
    longSwipesRatio: 0.3,
    longSwipesMs: 300,
    touchRatio: 1,
    followFinger: true,
    simulateTouch: true,
    touchStartPreventDefault: true,
  
    on: {
      touchStart: function () {
        this.isTouched = true;
        this.allowSlideNext = true;
        this.allowSlidePrev = true;
      },
      slideChangeTransitionStart: function () {
        this.allowTouchMove = false; // disable touch during transition
      },
      slideChangeTransitionEnd: function () {
        this.allowTouchMove = true;  // re-enable touch
        var index = this.activeIndex;
        var $section = $(this.el).closest('.mobileImageSection');
        $section.find('.swiperBar .range').removeClass('active');
        $section.find('.swiperBar .range[data-id="' + index + '"]').addClass('active');
      }
    }
  });


  
  setInterval(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 400,
      resistanceRatio: 0, // Prevent overscroll flicking
      loop: false,
      threshold: 20,         // Minimum distance to be swiped before it counts
      touchRatio: 1,         // Sensitivity of swiping (1 is default)
      touchAngle: 45,        // Angle allowed before it's considered swipe
      followFinger: true,    // Ensure finger follows transition
      allowTouchMove: true,  // Keep touch enabled
      longSwipesRatio: 0.5,  // Minimum swipe distance (percentage of slide) to trigger change
      longSwipesMs: 300,     // Swipe must last at least this ms to count as long swipe
      on: {
        slideChange: function () {
          var index = this.activeIndex;
          var $section = $(this.el).closest('.mobileImageSection');
          $section.find('.swiperBar .range').removeClass('active');
          $section.find('.swiperBar .range[data-id="' + index + '"]').addClass('active');
        }
      }
    });
  }, 1500);
  
  $('body').on('click', '.filter-menu-js', function(){
    setTimeout(function(){
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 400,
        resistanceRatio: 0, // Prevent overscroll flicking
        loop: false,
        threshold: 20,         // Minimum distance to be swiped before it counts
        touchRatio: 1,         // Sensitivity of swiping (1 is default)
        touchAngle: 45,        // Angle allowed before it's considered swipe
        followFinger: true,    // Ensure finger follows transition
        allowTouchMove: true,  // Keep touch enabled
        longSwipesRatio: 0.5,  // Minimum swipe distance (percentage of slide) to trigger change
        longSwipesMs: 300,     // Swipe must last at least this ms to count as long swipe
        on: {
          slideChange: function () {
            var index = this.activeIndex;
            var $section = $(this.el).closest('.mobileImageSection');
            $section.find('.swiperBar .range').removeClass('active');
            $section.find('.swiperBar .range[data-id="' + index + '"]').addClass('active');
          }
        }
      });
    }, 1500);
  });

  
 
  
  varaint_image();	
  $('body').on('change','.ColorSwatch__Radio',function(){	
    varaint_image();	
  });	
  function varaint_image(){	
    if($('.Product__SlideItem').length){	
      if($('.ColorSwatch__Radio').length){	
        var color= $('.ColorSwatch__Radio:checked').val();
        if (!color) return;
        color=color.replace(" ", "-");	
        if($('.pimage_'+color).length || $('.pimage_showall').length){	
          $('.Product__SlideItem').attr("style", "display: none !important");	
        }	
        if($('.pimage_'+color).length){	
          $('.pimage_'+color).attr("style", "display: block !important");	
        }	
        if($('.pimage_showall').length){	
            $('.pimage_showall').attr("style", "display: block !important");	
        }	
      }	
    }	
  }

  
});
const card = document.getElementById("eg-card");
const overlay = document.getElementById("eg-overlay");
const closeIcon = document.getElementById("eg-close-icon");
const closeText = document.getElementById("eg-close-text");
card.addEventListener("click", () => {
  overlay.style.display = "flex";
});
closeIcon.addEventListener("click", () => {
  overlay.style.display = "none";
});
closeText.addEventListener("click", () => {
  overlay.style.display = "none";
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

