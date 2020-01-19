$(document).ready(function() {

  $(".item").on("click",function(){
    var itemPage = ($(this).attr("id"));
    document.location.href = "/item/"+ itemPage;
  });

  $("#review-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newChirp = {
      author: $("#author").val().trim(),
      body: $("#chirp-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newChirp);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newChirp)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("chirp");
  
        row.append("<p>" + newChirp.author + " chirped: </p>");
        row.append("<p>" + newChirp.body + "</p>");
        row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
  
        $("#chirp-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
  });
});