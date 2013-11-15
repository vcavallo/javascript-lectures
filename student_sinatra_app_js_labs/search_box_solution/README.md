# Student Site Setup

1. Bundle gems

```
bundle
```

2. Seed the db

```
rake db:seed
```

3. Run Rackup 

```
rackup
```

You should now have the site running on localhost:9292

# -- Lab Instructions --

# Student Sinata App: JS - Search Box

## Objective

Add JavaScript Behavior to your existing Sinatra App. You will be adding the functionality to allow users to type search term into an input field and click a button to search the students page and highlight content.

## Steps

1. First use git to create a new feature branch called search-box. Checkout this branch and use it to build the serach box feature.

2. In your index page that lists all students create a text input and button to allow users to search the list of students using specific terms.

```
 <!-- SEARCH -->
<div id="search">
  <label>search: </label>
  <input id="" type="text">
  <button id="">find</button>
</div><!-- #search -->
```

3. Set the input field and button id attributes with a semantic name that you can use to select them with later on using jQuery.

4. Create an 'app.js' file in your ./public/js/app.js folder and make sure to link to it from your index.erb file.

5. Prepare the app.js file using document ready statement you have learned.

6. Use jQuery to create an event listener [click()](http://api.jquery.com/click/)that runs whenever the search button is clicked.

7. The search function mentioned above should get the input from the search_input field.

8. After gathering the users search term, insert it into a jQuery selector statement to look for all students that match the search term. Hint: Make use of jQuery's [:contains()](http://api.jquery.com/contains-selector/) and [:not()](http://api.jquery.com/not-selector/) selectors.

9. For all the matching terms in the search apply a jQuery effect or css change of your choice. For example you could highlight the search term or the students div using CSS or yu could apply an animation or fade effect to light up the selected student. Have fun!

10. Bonus: If you complete all of the above try making an alternate solution using jQuery's [keyup()](http://api.jquery.com/keyup/) to get the search to trigger and update as they type in the serach input field.

Other Useful Resources:

[JavaScript Reference - Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)








