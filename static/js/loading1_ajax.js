$(document).ready(function () {
    $('form').on('submit', function (event) {
        $.ajax({
            type: "POST",
            url: "/searching",
            data: {info: $('#search-info').val()},
        })
        .done(function(data) {
            document.getElementById("loading-gif1").style.display = "none";
            // $('#aaaaaa').text(data._embedded.results.length).show();
            var searching_results = data._embedded.results;
            var results_length = Object.keys(searching_results).length;

            if (results_length == 0) {
                document.getElementById("nofound").style.display = "block";
            } else {
                document.getElementById("nofound").style.display = "none";
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

                // $('#aaaaaa').text(results_filter).show();
            }
        });

        event.preventDefault();
    });
});