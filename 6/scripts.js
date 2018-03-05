var row;

$(document).ready(function () {
  $(".btn").click(function () {
    $("#images").html("");
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
      tags: $("input").val(),
      tagmode: "any",
      format: "json"
    })
      .done(function (data) {
        $.each(data.items, function (i, item) {
          var columnDiv = $("<div>").addClass("col-md-4");
          var imgDiv = $("<div>").addClass("img-div");
          $("<img>").attr("src", item.media.m).appendTo(imgDiv);
          imgDiv.appendTo(columnDiv);
          columnDiv.appendTo("#images");
        });
      });
  });
});