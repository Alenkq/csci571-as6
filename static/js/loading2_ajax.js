$(document).ready(function () {
    $('.album').submit(function (event) { 
        var aid_val = $(document.activeElement).val();
        $.get("/searching_details", {aid: aid_val}).done(function (data) {
            document.getElementById("loading-gif2").style.display = "none";
            $('#aaaaaa').text(data).show();
        });
    
        event.preventDefault();
        
    });
});