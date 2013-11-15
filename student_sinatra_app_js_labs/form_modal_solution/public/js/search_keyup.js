$(function() {

  $('#search').show(); // Show search box if JS is enabled and jQuery exists.
  $('#search_button').hide(); // No need for button if detecting on keyup.
 
  function search() {

      var term = $('#search_input').val(); // Get the value of the search input and store it.
      var typing_timer; // Declare a var to hold the timer function.
      var delay_time = 1000; // Set time to delay the fading until so many seconds after a key is pressed.

      if (term !== '') { // If term exists create a new timer

        clearTimeout(typing_timer); // Pressing a new key will (reset,) clear out the current typing timer.

        typing_timer = setTimeout(function() { // Delay action to allow time for user to finish typing.

          var yup = $('.student:contains("'+term+'")');
          var nope = $('.student:not(:contains("'+term+'"))');

          yup.fadeTo(100,1); // Fade in students who match the term.
          yup.find('img').stop().animate({'width':'160px'}, 100); // Enlarge selected students images.
          yup.find('h2').css({'font-size':'1.25em'});

          nope.fadeTo(100,.25); // Fade out students that do not match.
          nope.find('img').stop().animate({'width':'80px'}, 100); // Reduce selected students images.   
          nope.find('h2').css({'font-size':'1em'});

        }, delay_time);

      } else { // if term null or an empty string fade in all students.

        var student_all = $('.student');
        
        student_all.fadeTo(100, 1);
        student_all.find('img').stop().animate({'width':'80px'}, 20); // Reduce selected students images.
        student_all.find('h2').css({'font-size':'1em'});
      }
  }

  $('#search_input').keyup(search); // Apply event listener to keyup on search box.

  $('#sort_menu select').change(search); // Update: covers change on AJAX sort request.

});