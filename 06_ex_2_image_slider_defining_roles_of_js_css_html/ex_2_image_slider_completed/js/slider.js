$(document).ready(function(){

	$("#slide_nav li:eq(0)").addClass("selected"); //hightlight the default li
	
	//how many frames do i have
	var unitQuant = $(".slide_unit").size(); //returns total # of items in wrapped set
	
	var unitWidth = $(".slide_unit").width();//gives the width of the 1st member of the wrapped set
	
	
	var blockWidth = unitWidth * unitQuant;//getting the total width we need for the slide_block
	
	$("#slide_block").width(blockWidth);//with param, width() resizes selected
	
	var liQuant = $("#slide_nav li").size();
	
	var navNumber = 0;//the current # i'm at in navigation
	var slidePos = 0;//the current position I'm at in the slider
	
	//this function is going to move everything based on clicks in the .slide_nav list
	$("#slide_nav li").click(function(){
		$("#slide_nav li").removeClass("selected");
		$(this).addClass("selected");
		navNumber = $("#slide_nav li").index(this);
		slidePos = unitWidth * navNumber;
		$("#slide_block").animate({right:slidePos},400);
	});
	
	//forward clicker
	
	$("#clicker_f").click(function(){
		
		//test if navNumber is less than liQuant-1
		if (navNumber < (liQuant - 1)) {
			navNumber++;//++ is just short hand in programming for adding 1
			slidePos = unitWidth * navNumber;
			$("#slide_block").animate({right:slidePos},400);
			$("#slide_nav li").removeClass("selected");
			$("#slide_nav li").eq(navNumber).addClass("selected");
		} else {
			navNumber = 0;
			slidePos = unitWidth * navNumber;
			$("#slide_block").animate({right:slidePos},1400);
			$("#slide_nav li").removeClass("selected");
			$("#slide_nav li").eq(navNumber).addClass("selected");
		}
		
	});
	
	//reverse clicker
	
	$("#clicker_r").click(function(){
		
		//test if navNumber is less than liQuant-1
		if (navNumber > 0) {
			navNumber--;//-- is just short hand in programming for subracting 1
			slidePos = unitWidth * navNumber;
			$("#slide_block").animate({right:slidePos},400);
			$("#slide_nav li").removeClass("selected");
			$("#slide_nav li").eq(navNumber).addClass("selected");
		} else {
			navNumber = (liQuant - 1);
			slidePos = unitWidth * navNumber;
			$("#slide_block").animate({right:slidePos},1400);
			$("#slide_nav li").removeClass("selected");
			$("#slide_nav li").eq(navNumber).addClass("selected");
		}
		
	});
	
	//hide clickers to start
	$('#clicker_f, #clicker_r').hide();
	
	//show clicker on mouseover
	$('#slide_frame,#clicker_f, #clicker_r ').mouseover(function(){
		$('#clicker_f, #clicker_r').show();
	});
	
	//hide clickers on mouseout
	$('#slide_frame').mouseout(function(){
		$('#clicker_f, #clicker_r').hide();
	});

});