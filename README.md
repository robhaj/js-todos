# Simple ToDo App

A ToDo list is a "standard" example people use when learning a new language. It is often the next step after a "Hello World" sample app. In this exercise you'll build a basic ToDo list using just HTML5 and JS.

Let's start with the basic html boilerplate

## todo.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
</head>
<body>
<input id="task"><button id="add">Add</button>
<hr>
<div id="todos"></div>
<script src="todo.js"></script>
</body>
</html>
```

Let's quickly discuss the contents of our HTML file

We specified our language as english, the character encoding to utf-8 and have the necessary elements to be valid html

We then see we've added a input field with an id of "task", an adjacent button with and id of 'add', and an empty div where our todo's will be listed.

Lastly we link our yet to be created todo.js file, where we will handle the logic for our list.


Let's get to the JS!

- Create a new file called todos.js
- Think about what our js file might look like.

## todos.js

This first thing we might want to add is a place to store our todo information.
Let's create an empty array and assign it to a variable called todos.
```js
var todos = [];
```

Next, how might we add a new todo to our array. Let's create an add function to serve that purpose.

```js
function add() {
  var task = document.getElementById('task').value;
}
```

To grab the value of what was typed into our input box we can use the document's method `getElementById`, pass in our element's Id, "task", and then assign its value property to a variable task.

Next, let's use the Array method `push()` to get that value into our array.
```js
function add() {
  var task = document.getElementById('task').value;
  todos.push(task);
}
```

Now that we have the ability to add todo names into an array, how can we show that on the page? Let's define a show function.

```js
function show() {
  var html = '<ul>';
  for(var i=0; i<todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
  };
  html += '</ul>';
  document.getElementById('todos').innerHTML = html;
}
```

We're looping over our array of todos and constructing a variable called html made up of li's for each of our todo items. We've also included a button to remove them when we get to that step. Let's go back to our add function and call our show function after adding a new todo. This way whenever a new item is added, our show function will loop over the items getting the most up to date information.

Open the page in your browser and see what happens. What does our add button do currently? Nothing! To prove that our functions work you can open up DevTools (cmd+opt+i on mac) and call them. Try putting some text in the input and then call `add()`. You should see the todo show up. Let's add that function invocation to an event listener on our Add button.
```js
document.getElementById('add').addEventListener('click', add);
```
When you reload the page again, you should see that now clicking on our Add button works as expected.

Now, let's define that remove function we discussed earlier. We have to know which x was clicked so we leverage the this keyword.

```js
function remove() {
    var id = this.getAttribute('id');
    todos.splice(id, 1);
    show();
}
```

Once again, the function has been defined but we have to attach it to each X button. The only difference is we have multiple X buttons instead of just one Add button. Let's go back to our show function and add a loop that will add an event listener to each X that fires our remove function.

```js
function show() {
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
```
