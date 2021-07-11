$(document).ready(function(){
    $('html, body').scrollTop(0);
    $('.btn').click(function(e){
        e.preventDefault();
        var TargetToSmooth = $(this).attr('alt');
        $('html, body').animate({
            scrollTop: $(TargetToSmooth).offset().top
        }, 500);
    });

    $('.err').click(function(e){
        e.preventDefault();
        alert("ごめんなさい、何も撮れなかった。○|￣|_");
    });
});