$(document).ready(function () {
    $('.searching').submit(function (event) { 
        $.get("/searching", {info: $('#search-info').val()}).done(function (data) { 

            document.getElementById("album").style.display = "flex";
            document.getElementById("loading-gif2").style.display = "none";
            document.getElementById("loading-gif1").style.display = "none";
            // $('#aaaaaa').text(data._embedded.results.length).show();
            var searching_results = data._embedded.results;
            var results_length = Object.keys(searching_results).length;

            if (results_length == 0) {
                document.getElementById("album").style.display = "none";
                document.getElementById("nofound").style.display = "block";
            } else {
                document.getElementById("nofound").style.display = "none";
                document.getElementById("album").style.display = "flex";

                var results_filter = new Array();

                for (var i = 0; i < results_length; i++) {
                    var searching_value = searching_results[i];

                    if (searching_value.og_type == "artist") {
                        var temp_array = new Array();
                        temp_array.push(searching_value.title);
                        temp_array.push(searching_value._links.self.href);
                        temp_array.push(searching_value._links.thumbnail.href);
                        results_filter.push(temp_array);
                    }
                }

                var htmlCode = '';
                var count = 0;

                for (const element of results_filter) {
                    var img_link = '';
                    var aid = element[1].substring(element[1].lastIndexOf("/") + 1, element[1].length);
                    var count_s = 'aid' + count.toString();
                    var count_c = 'card' + count.toString();

                    if (element[2] == '/assets/shared/missing_image.png') {
                        img_link = img_link + '../static/artsy_logo.svg';
                    } else {
                        img_link = img_link + element[2];
                    }

                    htmlCode = htmlCode + 

                    `
                    <div class="card" id="${count_c}">
                        <button type="submit" name="aid" id="${count_s}" value="${aid}" onclick="set_card_color(this);">
                            <div class="button-box">
                                <img src="${img_link}">
                                <div class="card-title">
                                    ${element[0]}
                                </div>
                            </div>
                        </button>
                    </div>`;

                    count = count + 1;

                }
                
                var album = document.querySelector('.album');
                album.innerHTML = htmlCode;
                // $('#aaaaaa').text(results_filter).show();
            }
         });

        event.preventDefault();
        
    });
});