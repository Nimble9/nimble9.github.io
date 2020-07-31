$(document).ready(function(){
    $("#area_first").on("change", function() {
        var first_seq= $(this).val();
        var url = "/front/event/get_second?first_seq="+first_seq;

        jQueryAjaxView(url, $('#area_second'));
    });
});

function jQueryAjaxView(url, obj) {
    $.get(url,function(data,status){
        if (status == "success") {
            obj.html(data);
        } else {
            alert("Error occured!");
        }
    });
}