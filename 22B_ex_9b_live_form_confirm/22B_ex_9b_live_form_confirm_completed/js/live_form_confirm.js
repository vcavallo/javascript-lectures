$(document).ready(function() {

	var emailInputs = $('#email, #email_confirm'),
	emailInput = $('#email'),
	emailConfInput = $('#email_confirm'),
    messageArea = $('#msg'),
    positiveMsg = "Nice emails match!",
    negativeMsg = "Put down the beer and concentrate, they are not matched yet!";

    //Put this here is you wish to initially show the negative message.
	messageArea.text(negativeMsg).addClass('neg');

	emailInputs.keyup(function() {

    	var emailVal = emailInput.val(),
        	emailConfVal = emailConfInput.val();

    	// console.log('email: '+emailVal);
    	// console.log('confirm: '+emailConfVal);

    	if(emailConfVal === '' || emailVal === '') {
    		messageArea.text(negativeMsg).removeClass('pos').addClass('neg');
    	} else if (emailConfVal === emailVal) {
    		messageArea.text(positiveMsg).removeClass('neg').addClass('pos');
    	} else {
    		messageArea.text(negativeMsg).removeClass('pos').addClass('neg');
    	}

	});

});