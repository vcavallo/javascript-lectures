$(function() {

  $('#search').show(); // Show search box if JS is enabled and jQuery exists.

  function search() {

      var term = $('#search_input').val(); // Get the value of the search input and store it.

      if (term !== '') { // If term exists create a new timer

        var yup = $('.student:contains("'+term+'")');
        var nope = $('.student:not(:contains("'+term+'"))');

        yup.fadeTo(100,1); // Fade in students who match the term.
        yup.find('img').stop().animate({'width':'160px'}, 100); // Enlarge selected students images.
        yup.find('h2').css({'font-size':'1.25em'});

        nope.fadeTo(100,.25); // Fade out students that do not match.
        nope.find('img').stop().animate({'width':'80px'}, 100); // Reduce selected students images.   
        nope.find('h2').css({'font-size':'1em'});

      } else { // if term null or an empty string fade in all students.

        var student_all = $('.student');

        student_all.fadeTo(100, 1);
        student_all.find('img').stop().animate({'width':'80px'}, 20); // Reduce selected students images.
        student_all.find('h2').css({'font-size':'1em'});
      }
  }

  $('#search_button').click(search); // Apply event listener to search button.

  $('#sort_menu select').change(search); // Update: covers change on AJAX sort request.

});