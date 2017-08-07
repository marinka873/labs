(function ($){
    'use strict';


    $.fn.registrationPage = function () {
        let buttonPost = $('.container__button');
        let dropArea = $('.container-dropzone');

        dropArea.on('dragover', function (element) {
            element.stopPropagation();
            element.preventDefault();
            $(this).css('border', '2px solid #dc143c');
        });

        dropArea.on('dragenter', function (element) {
            element.stopPropagation();
            element.preventDefault();
            $(this).css('border', '2px solid');
        });

        dropArea.on('drop', function(element){
            element.stopPropagation();
            element.preventDefault();

            let files = event.dataTransfer.files;
            console.log(files);

            uploadFiles(files);
        });

        function uploadFiles(files) {
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                let imageType = /^image\//;
                let previewImage = document.getElementsByClassName('.container-dropzone');

                if (!imageType.test(file.type.match)) {
                    continue;
                }

                let readerImage = new FileReader();
                readerImage.onloadend = (function () {
                    previewImage.src = readerImage.result;
                });
                if (file){
                    readerImage.readAsDataURL(file);
                } else{
                    previewImage.src = "";
                }
            }
        }

        console.log('Jquery plugin is work!');
    };
})(jQuery);

$('.container-dropzone').registrationPage();


function postRequest () {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result");
        }, 2000);
    });

    promise.then(result => {
        alert("You`ve been successfully registered to the website!");
    });
}






function loadImage() {
    let image = document.querySelector('img');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
        image.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        image.src = "";
    }
}