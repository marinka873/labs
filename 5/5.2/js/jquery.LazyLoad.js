(function ($) {
    'use strict';

    $.fn.LazyLoad = function () {
        let loadAPI = 'https://jsonplaceholder.typicode.com/photos';
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            dataType: "json",
            success: function (image){
                alert('loading API success');
            }
        });


        console.log(loadAPI);
        console.log('Plugin Lazy work');
    };
})(jQuery);

$('.content-page').LazyLoad();