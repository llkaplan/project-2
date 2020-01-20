<<<<<<< HEAD

$(document).ready(function () {

  $(".item").on("click", function () {
    var itemPage = ($(this).attr("id"));
    document.location.href = "/item/" + itemPage;
  });

  $("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var newReview = {
      name: $("#name").html(),
      comment: $("#comment").html(),
    };
    console.log("this is taking in the onclick event");
    console.log(newReview);








    // // Send an AJAX POST-request with jQuery
    // $.post("/api/new", newChirp)
    //   // On success, run the following code
    //   .then(function() {

    //     var row = $("<div>");
    //     row.addClass("chirp");

    //     row.append("<p>" + newChirp.author + " chirped: </p>");
    //     row.append("<p>" + newChirp.body + "</p>");
    //     row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

    //     $("#chirp-area").prepend(row);

    //   });

    // Empty each input box by replacing the value with an empty string
    // $("#name").val("");
    // $("#comment").val("");
  });



});

=======
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
>>>>>>> da34ee0e159e2081565683b7968e3d3b897f5686
