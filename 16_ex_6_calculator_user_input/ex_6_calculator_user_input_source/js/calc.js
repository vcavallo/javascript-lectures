/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

//this is a single line comment




$(function() {

  $('#calc').submit(function() {

    var x, y, z;

    x = $(this).find('#addition').find('input:eq(0)').val();
    y = $(this).find('#addition').find('input:eq(1)').val();
    x = parseFloat(x);
    y = parseFloat(y);

    z = x + y;

    $(this).find('#addition').find('input:eq(2)').val(z);

    return false;
  });

});