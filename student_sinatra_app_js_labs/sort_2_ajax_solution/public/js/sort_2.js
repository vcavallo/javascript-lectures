$(function() { //run when document is ready and jQuery is known.

  $('#sort_menu').show(); //show sort menu if JS exists.

	function request(url) {

		$.ajax({
    		url: url,
    		dataType: 'json',
    		async: true,
    		beforeSend: function(request) {
        	//console.log('making AJAX request: '+request);
    		},
    		success: function(data) {
          debugger
    			//console.log('success!');
          //console.log(data);
          $('#students').empty(); //empty out current students
				  //write each student back based on the JSON list order
				  $.each(data.students, function(index, student) {
  					var site =''; //create a local var as a placeholder.
  					$.each(student.sites, function(i, s) { //create a link and concatenate it to any previous links for that student.
              site += '<a class="site" href="'+s.site.url+'">'+s.site.url+'</a>';
  					});
  					//build the code block for each student.
  					var insert = '<div class="student" data-student-id="'+student.id+'"><a href="/students/'+student.id+'"><img class="avatar" src="'+student.avatar+'" alt="'+student.name+'"></a><a href="/students/'+student.id+'"><h2 class="name">'+student.name+'</h2></a><p class="position">'+student.position+'</p><div class="ballon_caption"><span class="tail"></span><span class="quote">'+student.quote+'</span></div><p class="display_sites">'+site+'</p></div>';
  					//insert each student into the layout.
  					$('#students').append(insert); //append each into the layout.
  				});
    		},
    		error: function(request, status, error) {
        	console.log('request: '+request+', status: '+status+', error: '+error);
        }
    	});
	}

	//event listener for select menu
	$('#sort_menu select').change(function() {
		var sort_val = $('#sort_menu select').val(); //gather the selected sort menu value.

		//decide which request URL to GET the appropriate JSON back.
		switch (sort_val) {
			case 'alpha': request('/students/?sort_by=name&order=asc');
			break;
			case 'most': request('/students/?sort_by=quote_length&order=desc');
			break;
			case 'least': request('/students/?sort_by=quote_length');
			break;
			case 'id': request('/students/?sort_by=id');
			break;
			default: request('/students/?sort_by=id');
		}
	});
});