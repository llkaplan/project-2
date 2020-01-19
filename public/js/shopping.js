$(document).ready(function() {

  $(".item").on("click",function(){
    var itemPage = ($(this).attr("id"));
    document.location.href = "/item/"+ itemPage;
  });

});