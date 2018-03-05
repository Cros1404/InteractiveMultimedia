$(document).ready(function () {
  $(".btn").click(function () {
    $.ajax({
      url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
      dataType: "jsonp"
    });
  });
});

function jsonCallback(persons) {
  $("#persons").html("");
  $.each(persons, function (index, person) {
    $("#persons").append(person.name + " email: <a>" + person.email + "</a><br><br>");
  });
}