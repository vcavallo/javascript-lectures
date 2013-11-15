$(document).ready(function(){

	/*================================================================
	  1. A Javascript object is an unordered collection of properties.
	  2. Properties consist of a name and a value.
	  3. Top level variables are properties of window.
	================================================================*/
								
	//Creating an object
	/*
	var ride = new Object();
	ride.make = 'Yamaha';
	ride.model = 'V-Star Silverado 1100';
	ride.year = 2005;
	ride.purchased = new Date(2005,3,12);
	*/
	//alert(ride.make);
	
	//Object Literal Notation
	/*
	var ride = {
		make: 'Yamaha',
		model: 'V-Star Silverado 1100',
		year: 2005,
		purchased: new Date(2005,3,12),
		owner: 	{
			firstName: 'Spike',
			lastName: 'Spiegel'	
		}
	}
	*/
	//alert(ride.owner.firstName+' '+ride.owner.lastName+' Purchased a '+ride.make+' '+ride.model+' on '+ride.purchased);
		
	//all var are technically properties of the window object.
	//var foo = 'bar';
	//same as
	//window.foo = 'bar';
	
	// function hello() { alert('Hi there!'); }
	//same as
	// var hello = function() { alert('Hi there!'); }
	//same as
	// window.hello = function() { alert('Hi there!'); }
	
	var ride = {
		make: 'Yamaha',
		model: 'V-Star Silverado 1100',
		year: 2005,
		purchased: new Date(2005,3,12),
		owner: 	{
			firstName: 'Spike',
			lastName: 'Spiegel'
		},
		product: function() {
			return this.make+' '+this.model;
		}
	};

	//adding a function inside an object is known as a method of that object. This is how jQuery methods work. The $ is an object representing jQuery and fadeTo is a method of that object. Did I just blow your mind?

	$("input[type=button]").click(function() {
		alert(ride.product());
	});
	
});
