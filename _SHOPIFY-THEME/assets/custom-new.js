// Start Customar Video Play Off

$(document).ready(function() {
    $('.customar-video-card__img').on('click', function() {
        var $videoContainer = $(this); 
        var $video = $videoContainer.find('video'); 
        var $playBtn = $videoContainer.find('.customar-video-card__playbtn'); 
        var isPlaying = $video.attr('playsinline') !== undefined;
        if (isPlaying) {
            $video[0].pause();
            $video.removeAttr('playsinline');
            $video.removeAttr('loop');
            $playBtn.show();
        } else {
            $('.customar-video-card__img').each(function() {
                var $otherVideo = $(this).find('video');
                var $otherPlayBtn = $(this).find('.customar-video-card__playbtn');
                if ($otherVideo.attr('playsinline') !== undefined && $otherVideo[0] !== $video[0]) {
                    $otherVideo[0].pause();
                    $otherVideo.removeAttr('playsinline');
                    $otherVideo.removeAttr('loop');
                    $otherPlayBtn.show();
                }
            });
            $video.attr('playsinline', 'playsinline');
            // $video.attr('loop', 'false'); 
            $video[0].play(); 
            $playBtn.hide(); 
        }
        $video.off('ended').on('ended', function() {
            $playBtn.show();
            $video.removeAttr('playsinline');
        });
    });
    $('.customar-video-card__playbtn').on('click', function(e) {
        e.stopPropagation();
        $(this).closest('.customar-video-card__img').trigger('click');
    });


    
});

// Start Customar Video Slider

if ($(Window).width() < 768) {
    $('.customar__video-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
    });
}

// Start Review Slider
if ($(Window).width() < 768) {
    $('.reviews__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
}

// Text Read More Hide show
  $(document).on('click', '.reviews-card__readmore', function(e){
    e.preventDefault();
    var $a = $(this);
    var $p = $a.closest('p');
    var expanded = $p.data('expanded');
    if (!expanded) {
      if (!$p.data('short')) {
        var html = $p.html();
        var idx = html.indexOf('<a');
        var short = idx > -1 ? html.substring(0, idx).trim() : html;
        $p.data('short', short);
      }
      $p.html( $p.attr('data-fullhtml') + ' <a href="#" class="reviews-card__readmore">Read less...</a>' );
      $p.data('expanded', true);
    } else {
      $p.html( $p.data('short') + ' <a href="#" class="reviews-card__readmore">Read more...</a>' );
      $p.data('expanded', false);
    }
  });