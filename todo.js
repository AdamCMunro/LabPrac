var foundList;

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

window.onload = updateToDoList();


document.getElementById('input').addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
  
  saveItem();
  }
});

function printNothingToDo() {
  nothingtodo = "<div class='container text-center message'><p>THUMBS UP THERE'S NOTHING TO DO!</p></div>";
  document.getElementById('todoBox').innerHTML = nothingtodo;
}

function updateToDoList() {

    todoBox.innerHTML = "";
    if (localStorage.getItem("toDoItems") === null) { //  if array doesnt exist make one
      blankArray = [];
      localStorage.setItem("toDoItems", JSON.stringify(blankArray));
      printNothingToDo();
    } else if (localStorage.getItem("toDoItems") === "[]") { //  if array does exist but is empty
      printNothingToDo();
    } else {
      storedList = JSON.parse(localStorage.getItem("toDoItems")); //get localstorage and turn into array
      storedList.forEach(function(item, index) {
        const div = document.getElementById('todoBox');
        var row = createNode('div');
        var container = createNode('div');
        var p = createNode('p');

    
  row.classList.add('row');
  container.classList.add('container');
  container.classList.add('todo');
  container.setAttribute("id", index);
  container.setAttribute("onClick", "removeTask(" + index + ")" );
  p.innerHTML = (item);

  append(container, p);
  append(row, container);
  append(div, row);
      });
    
      document.getElementById('todoBox').innerHTML = todoBox.innerHTML;
    }
}
function saveItem() {

  storedList = JSON.parse(localStorage.getItem("toDoItems"));
  storedList.push(document.getElementById('input').value);
  localStorage.setItem('toDoItems', JSON.stringify(storedList));
  
  updateToDoList();
  document.getElementById('input').value = "";
}

function getThingsDone(){

  const div = document.getElementById('todoneBox');
  var row = createNode('div');
  var container = createNode('div');
  var p = createNode('p');


row.classList.add('row');
container.classList.add('container');
container.classList.add('todone');
container.classList.add('text-center');
container.classList.add('message');
p.innerHTML = ('TIMES TICKING BETTER GET THINGS DONE!');

append(container, p);
append(row, container);
append(div, row);

}

function updateToDoneList() {

  if (localStorage.getItem("toDoneItems") === null) { //  if array doesnt exist make one
    blankArray = [];
    localStorage.setItem("toDoneItems", JSON.stringify(blankArray));
  }else if (localStorage.getItem("toDoItems") === "[]") { //  if array does exist but is empty
  } 
  else
  {
    getThingsDone();
  storedDoneList = JSON.parse(localStorage.getItem("toDoneItems"));
    storedDoneList = JSON.parse(localStorage.getItem("toDoneItems")); //get localstorage and turn into array
    storedDoneList.forEach(function(item, index) {
      const div = document.getElementById('todoneBox');
      var row = createNode('div');
      var container = createNode('div');
      var p = createNode('p');

  
row.classList.add('row');
container.classList.add('container');
container.classList.add('todone');
container.setAttribute("id", index);
p.innerHTML = (item);

append(container, p);
append(row, container);
append(div, row);
    });
  }
    document.getElementById('todoneBox').innerHTML = todoneBox.innerHTML;
}

function removeTask(index){
  localStorage.setItem('toDoItems', JSON.stringify(storedList));
  storedList = storedList.filter(function(item){
    return item !== storedList[index];
  })
  localStorage.setItem("toDoItems", JSON.stringify(storedList));
  updateToDoList();
}


