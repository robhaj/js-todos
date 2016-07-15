var todos = [];

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

function add() {
  var task = document.getElementById('task').value;
  if (!task) {
    return false;
  }
  todos.push(task)
  show();
  document.getElementById('task').value = "";

}

function remove() {
    var id = this.getAttribute('id');
    todos.splice(id, 1);
    show();
}

document.getElementById('add').addEventListener('click', add);
show();
