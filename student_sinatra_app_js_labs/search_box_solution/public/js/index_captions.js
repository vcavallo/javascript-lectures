$(window).load(function() { //run when window is ready

	$('#students').on('mouseover', '.avatar', function() {
		$(this).parents('.student').find('.ballon_caption').show();
	});

	$('#students').on('mouseout', '.avatar', function() {
		$(this).parents('.student').find('.ballon_caption').hide();
	});

	//The code below works until we use AJAX to insert new elements into the DOM. These new elements do not have the event binding attached to them. Thus we use on() to detect bubling in the dom from children up to a parent element that can reapply event listeners to new children within.

	/*
		$('.avatar').hover(function() {
			$(this).parents('.student').find('.ballon_caption').show();
		}, function() {
			$(this).parents('.student').find('.ballon_caption').hide();
		});
	*/
});