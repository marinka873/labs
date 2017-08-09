(function ($) {
    'use strict';

    $.fn.LazyLoad = function () {
        let loadAPI = 'https://jsonplaceholder.typicode.com/photos';
        let image = document.getElementsByTagName('img');
        let imageGet = document.getElementsByClassName('.content-page__image0get');


        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            dataType: "json",
            success: function (){
                console.log('loading API success');
            }
        });


        $.getJSON(loadAPI, function (data) {
            $.each(data, function (key, value) {
                $('<img class=".content-page__image-get">').attr('src', value.url,'base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=').attr('data-src', value.thumbnailUrl).appendTo('.content-page__image');
            });
        });

        function LazyLoadImage (){
            for (let i=0; i< imageGet; i++){
                if (imageGet[i].getAttribute('data-src')){
                    imageGet[i].setAttribute('src', imageGet[i].getAttribute('data-src') );
                    imageGet[i].removeAttribute('data-src');
                }
            }
        }

        image.on('sroll', scrollPage);

        function scrollPage(){
            let currentHeigth = $(this).children('.content-page__image').height();

            if ($(this).scrollTop >= currentHeigth - $(this).height() - 100){
                $(this).unbind('scroll');
            }
        }

        // $(document).ready(function(){
        //     $(window).scroll(function(){
        //
        //         if($(window).scrollTop() + $(window).height() >= $(document).height){
        //             image.slideDown.show();
        //         }
        //     });
        // });



LazyLoadImage();
};
})(jQuery);

$('.content-page').LazyLoad();

