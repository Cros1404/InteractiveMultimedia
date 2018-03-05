function ListModel() {
  try {
    this.allItems = localStorage.getItem("list").split(" ");
  }
  catch (e) {
    this.allItems = new Array();
  }
  this.changeListeners = new Array();

  this.addItem = function (addable) {
    this.allItems.push(addable);
    var list = localStorage.getItem("list");
    if (list)
      localStorage.setItem("list", list + " " + addable);
    else
      localStorage.setItem("list", addable);
    
    this.notifyChange();
  }

  this.notifyChange = function () {
    $.each(this.changeListeners, function (index, changeListener) {
      changeListener();
    });
  }

  this.addNewListener = function (newListener) {
    this.changeListeners.push(newListener);
  }
}