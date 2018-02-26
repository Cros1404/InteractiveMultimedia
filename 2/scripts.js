function addPerson() {
  document.getElementsByTagName("main")[0].innerHTML += "<br><br>" +
    document.getElementById("name-input").value;
}