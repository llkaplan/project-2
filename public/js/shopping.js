var total = [];
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

  //making ajax call for tax rates
  $("#submitInfo").on("click",function(){
    var city=$("#city").val().trim();
    var state=$("#state").val().trim();
    var queryURL ="https://trial.serviceobjects.com/FT/web.svc/json/GetTaxInfoByCityState?City="+city+"&State="+state+"&TaxType=sales&LicenseKey=WS19-QUN4-BKY4";
    console.log(queryURL);
    $(".price").each(function() {
      var priceHtml = $(this).text();
      var splitHtml = priceHtml.split("$");
      var price = splitHtml[1];
      console.log(price);
      total.push(parseFloat(price));
    });
    console.log(total);
    var totalsum=0;
    for(var i =0;i<total.length;i++){
      totalsum=totalsum+total[i];
    }
    console.log(totalsum);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){

      var beforeTax = totalsum;
      var tax = response.Results[0].TotalTaxRate.toFixed(2);
      console.log(tax);
      var ordertotal = ((totalsum*tax)+totalsum).toFixed(2);
      var orderDiv =$("<div>");
      var orderP =$("<h5> Total before tax: $" + beforeTax + "</h5>");
      var taxP = $("<h5> Estimated Tax to be collected: $" + tax + "</h5>");
      var totalOrder = $("<h5> Order total after tax: $" + ordertotal + "</h5>");

      orderDiv.append(orderP);
      orderDiv.append(taxP);
      orderDiv.append(totalOrder);

      $(".order-summary").append(orderDiv);

    });



  });
});
