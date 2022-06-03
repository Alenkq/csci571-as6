function loading1(){
    // document.getElementById("details-area").style.display = "none";

    var album_css = getComputedStyle(document.querySelector('.album'));
    var nofound_css = getComputedStyle(document.querySelector('.nofound'));

    if (album_css.display == 'flex' || nofound_css.display == 'block') {
        var detailsbox_css = getComputedStyle(document.querySelector('.details-box'));

        if (detailsbox_css.display == 'none') {
            document.getElementById("loading-gif1").style.display = "block";
        } else {
            document.getElementById("details-box").style.display = "none";
            document.getElementById("loading-gif2").style.display = "block";
        }

    } else {
        document.getElementById("loading-gif1").style.display = "block";
    }
}

function loading2(){
    document.getElementById("details-area").style.display = "block";
    document.getElementById("details-box").style.display = "none";
    document.getElementById("loading-gif2").style.display = "block";
}

function searching_bar_click(){
    document.getElementById("search-bar-box").style.borderColor = "black";

    $(document).ready(function () {
        $(".search-bar-box").focusin(function(){
            $(this).css("border-color", "orange");
          });
    });
}

// function set_card_color(elem){
//     $(document).ready(function () {
//         var id = $(elem).attr("id");
//         var id = "#" + id;
//         var child_array = [];

//         $("#album > div").each((index, element) => {
//             // element == this
//             child_array.push(element.id);
//         });

//         for (var card_id of child_array) {
//             card_id = "#" + card_id + " >  button"
//             $(card_id).each((index, eleme) => {
//                 // element == this
//                 elem_id = '#' + eleme.id;
//                 var button_color = $(elem_id).css("background-color");

//                 if (button_color == "rgb(17, 43, 60)") {
//                     $(elem_id).css("background-color", "#205375");
//                     // $(elem_id).mouseenter(function () { 
//                     //     $(this).css("background-color", "#112B3C");
//                     // }).mouseleave(function () {
//                     //     $(this).css("background-color", "#205375");
//                     // });
//                 }
//             });
//         };

//         $(id).css("background-color", "#112B3C");
//     });
// }
