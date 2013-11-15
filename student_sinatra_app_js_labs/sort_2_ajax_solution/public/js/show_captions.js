$(window).load(function () { //run when window is ready

	$('.quote').addClass('quote_js_active'); //ad styling to quotes if javascript is running.

	var image_height = $('.big_avatar').height(); //get the image height
	var image_width = $('.big_avatar').width(); //get the image width
	
	//set caption bloack dimensions to match the image.
	$('.block_caption').height(image_height); 
	$('.block_caption').width(image_width);

	var quote_height = $('.quote').height() + 20;

	//on image hover display the caption to slide up based on its height. 
	$('.big_avatar').hover(function() {
		$('.quote').animate({'bottom':quote_height});
	}, function() {
		$('.quote').animate({'bottom':'0'});
	});

});