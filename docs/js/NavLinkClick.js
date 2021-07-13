$(document).ready(function(){
  $(".nav-link").click(function(e) {
    e.preventDefault();
    $(".nav-link").attr("class","nav-link");
    $(this).attr("class","nav-link active");
  });
});
