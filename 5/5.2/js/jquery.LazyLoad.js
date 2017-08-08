(function ($) {
    'use strict';

    $.fn.LazyLoad = function () {
        let loadAPI = 'https://jsonplaceholder.typicode.com/photos';
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            dataType: "json",
            success: function (message){
                alert('loading API success');
            }
        });

        $.get(loadAPI, function (getImage) {
            $('.content-page__image').append(getImage);
            console.log(getImage);
        });

        let createTagImage = function(){
            $('.content-page__image').prepend('<img>');

        };

        let scrollPage = function(){

        };


        console.log(loadAPI);
        console.log('Plugin Lazy work');
    };
})(jQuery);

$('.content-page').LazyLoad();