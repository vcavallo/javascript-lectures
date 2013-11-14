$(document).ready(function(){

	// declare a few variables to accept values from my inputs!
	var x,y,z; //declaring vars w/o giving them a value (initializing)
	
	//change() method is used when values are changed in inputs
	
	/* The change event is sent to an element when its value changes. This event is limited to <input> elements, <textarea> boxes and <select> elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus. */
	
	
	$("#addition").change(function(){
		
		//find() allows me to go into a wrapped set to find
		//the matching selector and update the set
		x = $(this).find("input:eq(0)").val(); //val() pulls value out of inputs
		y = $(this).find("input:eq(1)").val();
		
		x = parseFloat(x); //parsefloat coverts the form input to a floating point number (decimal) it reurns NaN (Not a Number) when you try to give it a letter like 'a'.
		y = parseFloat(y);
		
		//equation
		z = x + y;
		
		$(this).find("input:eq(2)").val(z); //val() with a param, adds that param to the input
		
	});
	
	
	$("#subtraction").change(function(){
		
		x = $(this).find("input:eq(0)").val();
		y = $(this).find("input:eq(1)").val();
		
		x = parseFloat(x); 
		y = parseFloat(y);
		
		z = x - y;
		
		$(this).find("input:eq(2)").val(z); //val() with a param, adds that param to the input
		
	});
	
	
	$("#multiplication").change(function(){
		
		x = $(this).find("input:eq(0)").val();
		y = $(this).find("input:eq(1)").val();
		
		x = parseFloat(x); 
		y = parseFloat(y);
		
		z = x * y;
		
		$(this).find("input:eq(2)").val(z); //val() with a param, adds that param to the input
	
	});
	
	
	$("#division").change(function(){
		
		x = $(this).find("input:eq(0)").val();
		y = $(this).find("input:eq(1)").val();
		
		x = parseFloat(x); 
		y = parseFloat(y);
		
		z = x / y;
		
		$(this).find("input:eq(2)").val(z); //val() with a param, adds that param to the input
		
	});
	
	
	$("#modulus").change(function(){ // modulus gives you the left over remainder after dividing.
		
		x = $(this).find("input:eq(0)").val();
		y = $(this).find("input:eq(1)").val();
		
		x = parseFloat(x); 
		y = parseFloat(y);
		
		z = x % y;
		
		$(this).find("input:eq(2)").val(z); //val() with a param, adds that param to the input
	
	});

});