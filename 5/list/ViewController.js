$(document).ready(function () {
  updateList();
  $("button").click(addPerson);
});

var listModel = new ListModel();
registerListeners();

function addPerson() {
  listModel.addItem($("input").val());
}

function registerListeners() {
  listModel.addNewListener(updateList);
}

function updateList() {
  $("#list").html("");
  $.each(listModel.allItems, function (index, value) {
    $("#list").append("<br><br>" + value);
  });
}