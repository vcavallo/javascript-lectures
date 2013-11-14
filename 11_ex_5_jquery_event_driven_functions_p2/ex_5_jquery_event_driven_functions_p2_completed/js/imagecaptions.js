$(document).ready(function(){
	
	//hover1
	$('#hover1').hover(function(){
		$(this).find('.front').slideUp(200);
	},function(){
		$(this).find('.front').slideDown(200);
	});
	
	//hover2
	$('#hover2').hover(function(){
		$(this).find('.front').fadeTo(200,0.2);
	},function(){
		$(this).find('.front').fadeTo(200,1);
	});
	
	//hover3 & hover4
	function mouseOn(){
		var height = $(this).find('.bottom').height() + 35;
		$(this).find('.bottom').animate({bottom:height}, 400);
	}
	
	function mouseOff(){
		$(this).find('.bottom').animate({bottom:0}, 400);
	}
	
	$('#hover3, #hover4').hover(mouseOn,mouseOff);
	
});