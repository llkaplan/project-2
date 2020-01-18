$(document).ready(function() {
  /* global moment */

  // reviewContainer holds all of our reviews
  var itemContainer = $(".item-container");
  var reviewContainer = $(".review-container");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleReviewDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our posts
  var review;

  // The code below handles the case where we want to get blog posts for a specific author
  // Looks for a query param in the url for author_id
  var url = window.location.search;
  var itemId;
  if (url.indexOf("?item_id=") !== -1) {
    itemId = url.split("=")[1];
    getReviews(itemId);
  }


  // This function grabs posts from the database and updates the view
  function getReviews(item) {
    itemId = item || "";
    if (itemId) {
      itemId = "/?item_id=" + itemId;
    }
    $.get("/api/items" + itemId, function(data) {
      console.log("Reviews", data);
      review = data;
      if (!review || !review.length) {
        displayEmpty(item);
      }else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deleteReview(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/reviews/" + id
    })
      .then(function() {
        getReviews(item);
      });
  }



  // This function figures out which post we want to delete and then calls deletePost
  function handleReviewDelete() {
    var currentReview = $(this)
      .parent()
      .parent()
      .data("review");
    deleteReview(currentReview.id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Author #" + id;
    }
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    blogContainer.append(messageH2);
  }

});
