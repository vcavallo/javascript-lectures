$(function(){

	$('#sort_menu').show(); //show sort menu if JS exists.

	var students = []; //create an empty array to hold a list of all the students.

	//gather all student data
	$('.student').each(function(index) {
		var student = {}; //create an empty object (hash) to hold a single student.
		student.avatar = $(this).find('.avatar').attr('src'); //grab the src path to their image location.
		student.name = $(this).find('.name').text(); //grab the text in h2 and store as their name.
		student.position = $(this).find('.position').text(); //grab the text in posiiton and store as their position title.
		student.quote = $(this).find('.quote').text(); //grab text in excerpt ans tsore as quote.
		student.id = $(this).data("student-id");
		student.sites = [];
		student.site = $(this).find('.display_sites a').each(function(index, site) {
			current_site = $(site).text();
			student.sites.push(current_site);
		});
		students.push(student); //add to the students array.
	});

	//display
	function display() {
		$('#students').empty(); //empty out current students.

		//fill students back in based on their index position within the array.
		$.each(students, function(index, student) {
			var sites =''; //create a local var as a placeholder.
			$.each(student.sites, function(i, site) { //create a link and concatenate it to any previous links for that student.
        sites += '<a class="site" href="'+site+'">'+site+'</a>';
			});
			var insert = '<div class="student" data-student-id="'+student.id+'"><a href="/students/'+student.id+'"><img class="avatar" src="'+student.avatar+'" alt="'+student.name+'"></a><a href="/students/'+student.id+'"><h2 class="name">'+student.name+'</h2></a><p class="position">'+student.position+'</p><div class="ballon_caption"><span class="tail"></span><span class="quote">'+student.quote+'</span></div><p class="display_sites">'+sites+'</p></div>';
			$('#students').append(insert);
		});
	}

	//sort by alphabetical order
	function sort_by_alpha() {
		students.sort(function(a, b) {
   			return (a.name > b.name) ? 1 : -1;
		});
		display();
	}

	//sort by most said
	function sort_by_most() {
		students.sort(function(a, b) {
   			return (a.quote.length < b.quote.length) ? 1 : -1;
		});
		display();
	}

	//sort by least said
	function sort_by_least() {
		students.sort(function(a, b) {
   			return (a.quote.length > b.quote.length) ? 1 : -1;
		});
		display();
	}

	//sort by id
	function sort_by_id() {
		students.sort(function(a, b) {
   			return (a.id > b.id) ? 1 : -1;
		});
		display();
	}

	//event listener for select menu
	$('#sort_menu select').change(function() {
		var sort_val = $('#sort_menu select').val(); //gather the selected sort menu value.
		//console.log(sort_val);

		//decide which sort function to run.
		switch (sort_val) {
			case 'alpha': sort_by_alpha();
			break;
			case 'most': sort_by_most();
			break;
			case 'least': sort_by_least();
			break;
			case 'id': sort_by_id();
			break;
			default: sort_by_id();
		}
	});

});