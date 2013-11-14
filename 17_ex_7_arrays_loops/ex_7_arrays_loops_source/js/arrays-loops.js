$(document).ready(function(){

	/*======= Javascript Array Object =======
	Arrays are list-like objects, simmilar to a bookshelf that has slots to store different books (elements) in a single shelf. Books can be fetched by identifying their (index) shelf position.
	*/
	
	//declaring an empty array using the Array constructor.
	// var myArr = new Array();
	
	//declaring an empty array using literal notation.
	
	
	//Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];
	//Elements can be strings, numbers, or boolean.
	
	
	//If you leave a blank spot in an array it creates a blank shelf space (undefined) placeholder.
	
	//Array elements can be fetched by their index number (starts from 0).
	
	
	
	//If you leave a blank spot in an array it creates a blank shelf space (null) placeholder.
	
	//We can insert new values into any space in the array using the positions index.
	
	
	
	//Associative arrays allow us to define the index as a string
	
	
	
	
	//We can overright all the elements of an array simply by giving the array new values. Or passing one array into another.
	
	
	
	
	//What if I would like to know how long my array is (how many elements)?
	
	
	
	// to gets its the last elemnts index position I can subtract one (remember indexes start with zero instead of one).
	
	
	
	
	
	//We can insert on to the end of an Array simply by using the push method.
	
	
	
	
	//you can pull the last element off the end using the pop method.	
	
	
	
	//We can use splice method to insert content at a given position or to remove content from a given position. splice(index, how many elements to remove, optional content to add);
	
	
	
	
    //lets say we needed to remove the second to last item, but we do not know how long the array is... We can use negative numbers to go to end of array and index from end to beginning.
    

    
	
	
	//Let's remove Lion from the 3rd index position using splice
	
	
	
	
	//For many more Array methods see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array
	
	/* LOOPS */
	
	//A loop is a set of commands that executes repeatedly until a specified condition is met. JavaScript supports the for, do while, and while loop statements.
	
	//A for loop repeats until a specified condition evaluates to false.
	
	//SYNTAX: for ([initialExpression]; [condition]; [incrementExpression]) {statement}
	
	
	
		
	
		
	
	
	//A while statement executes its statements as long as a specified condition evaluates to true.
	
	//SYNTAX: do {statement} while (condition);
	
	
	
	
	 
	
	
	//SYNTAX: while (condition){statement}
	
	
	
	
	
	
	
	//more on loop statements at: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements
	
	//jQuery each method
	
	//SYNTAX: .each( function(index, Element) ) { statement }
	
	
	
			
				
	
		
	//jQuery grep method for filtering an array
	
	//SYNTAX: jQuery.grep( array, function(elementOfArray, indexInArray) [, invert] )
	
	
	
	
	
	
});