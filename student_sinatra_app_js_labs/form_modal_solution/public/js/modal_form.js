$(function() { //run when document is ready and jQuery is known.

	// $('#blanket, #edit_box').hide(); // use css to hide #blanket supports graceful degradation

	//add css styles to build modal for browsers running JavaScript
	$('#edit_box').addClass('edit_box_js_active'); //formats the modal box (see style.css)
	$('#close_modal').show(); //show the close x


	//gather current student data
	var id = $('.student').data('student-id');
	var name = $('.name').text();
	var position = $('.position').text();
	var quote = $('.quote').text();

	//insert the current data into the form fields for editing
	$('#edit_box form').attr('action','/students/'+id);
	$('#f_name').val(name);
	$('#f_position').val(position);
	$('#f_quote').val(quote);

	//initially load the hidden form with the correct number of site input fields
	$('.site').each(function(i, s) {
		var site = $(s).text(); //grab the text from the link
		//construct the input code and place the text link in teh value/
		var content = '<input type="text" class="f_sites" name="sites[]" value="'+site+'"><span class="error">URLs must start with http://</span>';
		$(content).appendTo('#sites'); //insert into the form.
	});

	//open modal
	$('#open_modal').click(function() {
		$('#blanket, #edit_box').fadeTo(200, 1); //fade in edit_box and form
	});

	//close modal
	$('#close_modal, #blanket').click(function() {
		$('#blanket, #edit_box').fadeTo(200, 0).hide();
	});

	//clone personal site links in form
	$('#add_sites').click(function() {
		var new_site = '<input type="text" class="f_sites" name="sites[]"><span class="error">Must be a proper full URL with http://</span>';
		$(new_site).appendTo('#sites');
	});

	$('.error').hide(); //initially hide errors

	//site validation
	$('#sites').on('keyup', '.f_sites', function() {
		var site_value = $(this).val();
		var s_compare = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		if (s_compare.test(site_value)) {
			$(this).next('.error').hide();
		} else {
			$(this).next('.error').show();
		}
	});
});