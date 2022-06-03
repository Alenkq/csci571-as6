$(document).ready(function () {
    $('.album').submit(function (event) { 
        var aid_val = $(document.activeElement).val();
        $.get("/searching_details", {aid: aid_val}).done(function (data) {
            document.getElementById("loading-gif2").style.display = "none";
            document.getElementById("details-box").style.display = 'block';

            var a_name = '';
            var a_birthday = '';
            var a_deadthday = '';
            var a_nationality = '';
            var a_biography = '';

            if (data.name) {
                a_name = data.name;
            };

            if (data.birthday) {
                a_birthday = data.birthday;
            };

            if (data.deathday) {
                a_deadthday = data.deathday;
            };

            if (data.nationality) {
                a_nationality = data.nationality;
            };

            if (data.biography) {
                a_biography = data.biography;
            };

            // var htmlCode = '';
            var details_box_origin = document.getElementById('details-box');

            while (details_box_origin.firstChild) {
                details_box_origin.removeChild(details_box_origin.firstChild);
            }

            // htmlCode = htmlCode + 

            //         `
            //         <div class="atitle">
            //             <p class="ap1">${a_name} (${a_birthday} - ${a_deadthday})</p>
            //             <p class="ap2">${a_nationality}</p>
            //         </div>
            //         <p><a id="a-bio"></a></p>
            //         `;

            var title1_str = a_name + ' (' + a_birthday + ' - ' + a_deadthday + ')'; 

            var atitle_div = document.createElement("div");
            atitle_div.className = "atitle";
            
            var p_ap1 = document.createElement("p");
            p_ap1.className = "ap1";
            var title1 = document.createTextNode(title1_str);
            p_ap1.appendChild(title1);

            var p_ap2 = document.createElement("p");
            p_ap2.className = "ap2";
            var title2 = document.createTextNode(a_nationality);
            p_ap2.appendChild(title2)

            var p_3 = document.createElement("p");
            var a_bio = document.createElement("a");
            a_bio.id = "a-bio";
            p_3.appendChild(a_bio);

            atitle_div.appendChild(p_ap1);
            atitle_div.appendChild(p_ap2);

            var details_box = document.getElementById('details-box');
            details_box.appendChild(atitle_div);
            details_box.appendChild(p_3);
            
            // var details_box = document.querySelector('.details-box');
            // details_box.innerHTML = htmlCode;
            $('#a-bio').text(a_biography).show();
        });
    
        event.preventDefault();
        
    });
});