(function ($){
    'use strict';



    $.fn.registrationPage = function () {
        var selectImage = document.getElementsByClassName('container-select__image--drop');
        var dropArea = document.getElementsByClassName('container-dropzone');
        var registrationPage = {

            uploadImage: function () {
                var getImage = document.getElementsByClassName('dropImage');
                if (getImage.file.length !== 0){
                    var imageRead = new FileReader();
                    imageRead.onload = function(x){
                        var image = document.getElementsByClassName('imageResultDrag');
                        image.src = x.target.result;
                        console.log(image.src);
                    }
                }

            }
        };

        console.log(dropArea);
        console.log(selectImage);

        console.log('Jquery plugin is work!');
    };
})(jQuery);

$('container-select__image--drop').registrationPage();