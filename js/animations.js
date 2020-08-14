$(document).ready(function(){
  $("#cart").click(function(){
    $("#icon-container").toggle();
  });
});

$(document).ready(function(){
  $("#user").click(function(){
    $("#user-log").toggle();
  });
});

/* $(document).ready(function(){
  $("#user").hover(function () {
    $("#user-log").show(0).delay(5000);
  }, 
  function () {
    $("#user-log").hide(0);
  });
}); */

$(document).ready(function(){
  $("#products").click(function(){
  $("#icon-container").show();
  });
});