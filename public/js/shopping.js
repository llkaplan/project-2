
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

