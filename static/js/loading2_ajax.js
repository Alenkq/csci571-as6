$(document).ready(function () {
    $('.album').submit(function (event) { 
        var aid_val = $(document.activeElement).val();
        $.get("/searching_details", {aid: aid_val}).done(function (data) {
            document.getElementById("loading-gif2").style.display = "none";

            var a_name = data.name;
            var a_birthday = data.birthday;
            var a_deadthday = data.deathday;
            var a_nationality = data.nationality;
            var a_biography = data.biography;

            
            // $('#aaaaaa').text(data).show();
        });
    
        event.preventDefault();
        
    });
});