# Student Site

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

## Sorting

You can sort by any existing property, asc or desc, you can also sort by a
special property, 'quote_length.'

```
/students/?sort_by=name
```

```
/students/?sort_by=quote_length
```

```
/students/?sort_by=name&order=desc
```

```
/students/?order=desc

```

# -- Lab Instructions --

# Student Sinata App: JS - DOM & AJAX Sorting

<!-- covers: DOM injection, jQuery, Conditional Statements, Objects (Hashes), Arrays, Loops, JSON, AJAX -->

## Objective

Create a select drop down menu with options to sort by: alphabetical ordering by full names, longest quote (most characters), shortest quote (least characters).

<!-- example code: javascript_lab_sort_1_dom_injection -->
<!-- example code: javascript_lab_sort_2_ajax -->

## Steps

1. First use git to create a new feature branch called search-box. Checkout this branch and use it to build the serach box feature.

2. In the index.erb view that shows a list of all fellow classmates, insert the code below to create the select menu

```
<!-- SORT MENU -->
<div id="sort_menu">
  <select>
    <option value="" selected>---sort by---</option>
    <option value="alpha">Alphabetical</option>
    <option value="most">Most to Say</option>
    <option value="least">Least to Say</option>
  </select>
</div><!-- #sort_menu -->
```
3. If it does not already exist, create an 'app.js' file in your ./public/js/app.js folder and make sure to link to it from your index.erb file.

5. Prepare the app.js file using document ready statement you have learned if there is not already one present in the file.

6. Use jQuery to create an event listener [change()](http://api.jquery.com/change/) that runs whenever the user changes their selection within the sort menu.

7. On the change event you should get [val()](http://api.jquery.com/val/)the input from the select menu.

8. After gathering the users menu option, Write a [condtional statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FStatements#Conditional_Statements) that will call a function that will make an AJAX request to the correct URI to get back the appropriate JSON data from the Sinatra App. You must allow this function to accept an argument of uri that will pass in the correct URI needed for the sort option that the user selects. See the following pseudo code as an example:

if sort by name then /?sort_by=name&order=asc

if sort by most to say then /?sort_by=quote_length&order=desc

if sort by least to say then /?sort_by=quote_length

Note:
Sorting by alphabetical will return students based on their full name
Sorting by most to say and least to say will return results sorted based on their excerpt (quote)

9. After receiving the JSON of the sorted students you must place them into the DOM. Hints: [empty()](http://api.jquery.com/empty/) and [append()](http://api.jquery.com/append/)
