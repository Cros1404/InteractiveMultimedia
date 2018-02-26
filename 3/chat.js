var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com');

connection.onopen = function () {
    document.getElementsByTagName("body")[0].innerHTML += "<p>Connected</p>";
};

connection.onmessage = function (e) {
    document.getElementById("chat").innerHTML += "<p>" + e.data + "</p>";
};

function send() {
    connection.send(document.getElementById("message-input").value);
    document.getElementById("message-input").value = "";
}