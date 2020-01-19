$(document).ready(function() {
  var itemPage;

  $(".item").on("click",function(){
    itemPage = ($(this).attr("id"));
    document.location.href = "/item/"+ itemPage;
  });

  $(".home").on("click",function(){
    document.location.href="/";
  });

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var url = window.location.href;
    var parts = url.split("/");
    var last_part = parts[parts.length-1];

    var newReview = {
      name: $("#name").val().trim(),
      comment: $("#comment").val().trim(),
      itemID: last_part
    };

    console.log(newReview);

    $.post("/api/reviews", newReview)
      .then(function() {
        var row = $("<div>");
        row.addClass("review");

        row.append("<p>" + newReview.name + " : </p>");
        row.append("<p>" + newReview.comment + "</p>");

        $("#review-area").prepend(row);
      });
    $("#author").val("");
    $("#chirp-box").val("");

  });

  var url = window.location.href;
  var parts = url.split("/");
  var last_part = parts[parts.length-1];
  var api_url = "/api/item/" + last_part;
  $.get(api_url, function(data) {
    console.log(data);

    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {

        var row = $("<div>");
        row.addClass("review");

        row.append("<p>" + data[i].name + " said.. </p>");
        row.append("<p>" + data[i].comment + "</p>");

        $("#review-area").prepend(row);

      }

    }
  });
});