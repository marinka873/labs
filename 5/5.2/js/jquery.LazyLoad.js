(function ($) {
    'use strict';

    $.fn.LazyLoad = function () {
        let loadAPI = 'https://jsonplaceholder.typicode.com/photos';


        function getImage(){
            let n = 10;
            for(let i=0; i < n; i++){
                $.getJSON(loadAPI, function (data) {
                    $.each(data.slice(0, 4), function (key, value) {
                        $('<img>').addClass('content-page__image-get').attr('src', value.url).appendTo('.content-page__image');
                    });
                });
            }
        }

getImage();

       $('.content-page__image').scroll(function () {
           let currentScroll = $(this)[0].scrollTop();
           let maxScrollValue = $(this)[0].scrollHeight - $(this).height();
           if (currentScroll >= maxScrollValue - 600){
           }

       });

};
})(jQuery);

$('.content-page').LazyLoad();

