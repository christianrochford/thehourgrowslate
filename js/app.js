// navigation
$(document).ready(function(){
		
		var menu = $('.icon-angle-right');
		$('nav').hide();
		$(menu).click(function(){
			$('nav').slideToggle('slow', function(){
				if($(menu).hasClass('rotate-on')){
					$(menu).removeClass('rotate-on');
					$(menu).addClass('rotate-off');
				} else if($(menu).hasClass('rotate-off')){
					$(menu).removeClass('rotate-off');
					$(menu).addClass('rotate-on');
				} else {
					$(menu).addClass('rotate-on');
				}
			});
		});
	});


// Resize Video to fill background

 $(document).ready(function(){

var min_width = 300; // minimum video width allowed
var video_initial_width;  // original video dimensions
var video_initial_height;

$(function() { // runs after DOM has loaded
    
    video_initial_width = parseInt($('video').attr('width'));
    video_initial_height = parseInt($('video').attr('height'));
    
    $(window).resize(function () { resizeToCover(); });
    $(window).trigger('resize');
});

function resizeToCover() {
    
    // set the video holder to the window size
    $('#video').width($(window).width());
    $('#video').height($(window).height());

    // use largest scale factor of horizontal/vertical
    var scale_h = $(window).width() / video_initial_width;
    var scale_v = $(window).height() / video_initial_height;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * video_initial_width < min_width) {scale = min_width / video_initial_width;};

    // now scale the video
    $('video').width(scale * video_initial_width);
    $('video').height(scale * video_initial_height);
    // and center it by scrolling the video holder
    $('#video').scrollLeft(($('video').width() - $(window).width()) / 2);
    $('#video').scrollTop(($('video').height() - $(window).height()) / 2);
    
};
	});

// video mute
$('.icon-volume-off').click(function(){
	$('video').prop('muted', true);
	$('.icon-volume-up').toggleClass('active');
});

$('.icon-volume-up').click(function(){
	$('video').prop('muted', false);
	$('.icon-volume-up').toggleClass('active');
});
