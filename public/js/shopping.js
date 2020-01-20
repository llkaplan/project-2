$(document).ready(function() {
  var itemPage;

  $(".item").on("click",function(){
    itemPage = ($(this).attr("id"));
    document.location.href = "/item/"+ itemPage;
  });

  $(".home").on("click",function(){
    document.location.href="/";
  });

  $(".cart").on("click",function(){
    document.location.href="/cart";
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
  //displaying all reviews on the item page
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

  //adding item to cart table
  $(".add").on("click",function(event){
    event.preventDefault();
    var uneditedPrice = $(".item-price").text();
    var newPrice = uneditedPrice.replace("$","");
    console.log(newPrice);

    var ItemChosen = {
      name: $(".item-name").text(),
      //price: $(".item-price").text(),
      image: $(".item-image").attr("src"),
      price: newPrice
    };
    console.log(ItemChosen);

    $.post("/api/cart", ItemChosen)
      .then(function(data) {
        console.log(data);
        alert("Added item to cart...");
      });
  });
});
