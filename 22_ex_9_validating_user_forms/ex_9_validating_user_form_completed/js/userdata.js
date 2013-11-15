$(document).ready(function(){

	//CREATE OBJECT (using Literal Notation)
	var user = {
		name : '',
		age : '',
		phone : '',
		email : ''
	};
		
	//DOM SEL
	var userNameInput = $('#user_name'),
		userAgeInput = $('#user_age'),
		userPhoneInput = $('#user_ph'),
		userEmailInput = $('#user_email'),
		userNameError = $('#user_name_error'),
		userAgeError = $('#user_age_error'),
		userPhoneError = $('#user_ph_error'),
		userEmailError = $('#user_email_error'),
		addUserDataForm = $('#add_user_data'),
		displayData = $('#display_data');
		
	$('span').hide(); //initially hide errors	

	//DISPLAY LIST FUNCTION
	function display() {
	
		displayData.html(''); // blank out the list
	
		$.each(user, function(prop, value){ //each iterates over all properties in the object one by one.	
			displayData.append('<li>'+prop+': '+value+'</li>'); //display each piece of data.
		});
	
	}
	
	//EVENT ADD_USER FORM SUBMIT 
	addUserDataForm.submit(function(){
	
		//get values from user inputs
		var userNameVal = userNameInput.val();
		var userAgeVal = userAgeInput.val();
		var userPhoneVal = userPhoneInput.val();
		var userEmailVal = userEmailInput.val();
				
		function validateName() {
			if(userNameVal.length < 3) {
				userNameError.show();
				return false;
			}
			else {
				userNameError.hide();
				return true;
			}
		}
		
		function validateAge() {
			if(userAgeVal == '' || isNaN(userAgeVal)) {
				userAgeError.show();
				return false;
			}
			else {
				userAgeError.hide();
				return true;
			}
		}
		
		function validatePhone() {
			var p = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;
			if(p.test(userPhoneVal)) {
				userPhoneError.hide();
				return true;
			}
			else {
				userPhoneError.show();
				return false;
			}
		}
		
		function validateEmail() {
			var e = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
			if(e.test(userEmailVal)) {
				userEmailError.hide();
				return true;
			}
			else {
				userEmailError.show();
				return false;
			}
		}
		
		if(validateName() & validateAge() & validatePhone() & validateEmail()) {
			user.name = userNameVal; //update name
			user.age = parseInt(userAgeVal); //update age
			user.phone = userPhoneVal; //update phone
			user.email = userEmailVal; //update email
			display();
		}
		
		return false; //stops form from processing (page reload)
	});
	
	//Clear the object
	$('#clear').click(function(){
		user.name = ''; //clear name
		user.age = ''; //clear age
		user.phone = ''; //clear phone
		user.email = ''; //clear email
		display();
	});
		
});