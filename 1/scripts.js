function addPerson() {
    document.getElementsByTagName("main")[0].innerHTML += "<br>" +
        document.getElementById("name-input").value;
}