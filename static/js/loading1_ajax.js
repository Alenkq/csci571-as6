$(document).ready(function () {
    $('.searching').submit(function (event) { 
        $.get("/searching", {info: $('#search-info').val()}).done(function (data) { 

            document.getElementById("album").style.display = "flex";
            document.getElementById("loading-gif2").style.display = "none";
            document.getElementById("loading-gif1").style.display = "none";
            // $('#aaaaaa').text(data._embedded.results.length).show();
            var searching_results = data._embedded.results;
            var results_length = Object.keys(searching_results).length;
            var signal = 0;

            for (var i = 0; i < results_length; i++) {
                var check_value = searching_results[i];

                if (check_value.og_type == "artist") {
                    signal = 1;
                }
            };

            if (results_length == 0 || signal == 0) {
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

                // var htmlCode = '';
                var count = 0;

                var album_origin = document.getElementById('album');
                
                while (album_origin.firstChild) {
                    album_origin.removeChild(album_origin.firstChild);
                };

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

                    // htmlCode = htmlCode + 

                    // `
                    // <div class="card" id="${count_c}">
                    //     <button type="submit" name="aid" id="${count_s}" value="${aid}" onclick="set_card_color(this);">
                    //         <div class="button-box">
                    //             <img src="${img_link}">
                    //             <div class="card-title">
                    //                 ${element[0]}
                    //             </div>
                    //         </div>
                    //     </button>
                    // </div>`;

                    var card_div = document.createElement("div");
                    card_div.className = "card";
                    card_div.setAttribute("id", count_c);

                    var card_button = document.createElement("button");
                    card_button.type = "submit";
                    card_button.name = "aid";
                    card_button.id = count_s;
                    card_button.value = aid;
                    card_button.onclick = function (){
                        var id = $(this).attr("id");
                        var id = "#" + id;
                        var child_array = [];
                
                        $("#album > div").each((index, element) => {
                            // element == this
                            child_array.push(element.id);
                        });
                
                        for (var card_id of child_array) {
                            card_id = "#" + card_id + " >  button"
                            $(card_id).each((index, eleme) => {
                                // element == this
                                elem_id = '#' + eleme.id;
                                var button_color = $(elem_id).css("background-color");
                
                                if (button_color == "rgb(17, 43, 60)") {
                                    $(elem_id).css("background-color", "#205375");
                                    // $(elem_id).mouseenter(function () { 
                                    //     $(this).css("background-color", "#112B3C");
                                    // }).mouseleave(function () {
                                    //     $(this).css("background-color", "#205375");
                                    // });
                                }
                            });
                        };
                
                        $(id).css("background-color", "#112B3C");
                    }

                    var button_box = document.createElement("div");
                    button_box.className = "button-box";

                    var card_img = document.createElement("img");
                    card_img.src = img_link;

                    var card_title = document.createElement("div");
                    card_title.className = "card-title";
                    var title_node = document.createTextNode(element[0]);

                    card_title.appendChild(title_node);
                    button_box.appendChild(card_img);
                    button_box.appendChild(card_title);
                    card_button.appendChild(button_box);
                    card_div.appendChild(card_button);

                    var album = document.getElementById('album');
                    album.appendChild(card_div);

                    count = count + 1;

                }
                
                // var album = document.querySelector('.album');
                // album.innerHTML = htmlCode;
                // $('#aaaaaa').text(results_filter).show();
            };
         });

        event.preventDefault();
        
    });
});