(function ($) {
    'use strict';

    $.fn.LazyLoad = function () {
        let image = $('<img class=".content-page__image-get">').appendTo('.content-page__image');
        let loadAPI = 'https://jsonplaceholder.typicode.com/photos';


        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            dataType: "json",
            success: function (){
                console.log('loading API success');
            }
        });


        $.getJSON(loadAPI, function (data) {
            let imagesGet = [];
            $.each(data, function (key, value) {
                $('<img>').attr('src', value).appendTo('.content-page__image');
            });
        });


        console.log(loadAPI);
    };
})(jQuery);

$('.content-page').LazyLoad();