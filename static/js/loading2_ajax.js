$(document).ready(function () {
    $('.album').submit(function (event) { 
        var aid_val = $(document.activeElement).val();
        $.get("/searching_details", {aid: aid_val}).done(function (data) {
            document.getElementById("loading-gif2").style.display = "none";
            document.getElementById("details-box").style.display = 'block';

            var a_name = data.name;
            var a_birthday = data.birthday;
            var a_deadthday = data.deathday;
            var a_nationality = data.nationality;
            var a_biography = data.biography;
            var htmlCode = '';

            htmlCode = htmlCode + 

                    `
                    <div class="atitle">
                        <p class="ap1">${a_name} (${a_birthday} - ${a_deadthday})</p>
                        <p class="ap2">${a_nationality}</p>
                    </div>
                    <p><a id="a-bio"></a></p>
                    `;
            
            var details_box = document.querySelector('.details-box');
            details_box.innerHTML = htmlCode;
            $('#a-bio').text(a_biography).show();
        });
    
        event.preventDefault();
        
    });
});