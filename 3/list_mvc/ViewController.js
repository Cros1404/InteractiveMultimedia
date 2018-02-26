
var listModel = new ListModel();
registerListeners();

function addPerson() {
  var name = document.getElementById("name-input").value;
  listModel.addItem(name);
}

function registerListeners() {
  listModel.addNewListener(updateList);
}

function updateList() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  listModel.allItems.forEach(function (element) {
    list.innerHTML += "<br><br>" + element;
  });
}