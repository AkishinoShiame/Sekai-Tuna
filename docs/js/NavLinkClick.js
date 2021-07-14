$(document).ready(function(){
  $(".nav-link").click(function(e) {
    e.preventDefault();
    $(".nav-link").attr("class","nav-link");
    $(this).attr("class","nav-link active");

    var chkid = $(this).attr("id");
    switch(chkid){
      case "koumoku01":
        $("#mono01").show();
        $("#mono02").hide();
        $("#mono03").hide();
        $("#mono04").hide();
        break;
      case "koumoku02":
        $("#mono01").hide();
        $("#mono02").show();
        $("#mono03").hide();
        $("#mono04").hide();
        break;
      case "koumoku03":
        $("#mono01").hide();
        $("#mono02").hide();
        $("#mono03").show();
        $("#mono04").hide();
        break;
      case "koumoku04":
        $("#mono01").hide();
        $("#mono02").hide();
        $("#mono03").hide();
        $("#mono04").show();
        break;
      default:
        $("#mono01").show();
        $("#mono02").show();
        $("#mono03").show();
        $("#mono04").show();
        $(".nav-link").attr("class","nav-link");
        $("#koumoku01").attr("class","nav-link active");
        window.location.replace("");
    }

  });
});
