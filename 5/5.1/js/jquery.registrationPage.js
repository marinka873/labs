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
                let img = $('img');
                let readerImage = new FileReader();

                if (file && file.type.match('image.*')) {
                    readerImage.readAsDataURL(file);
                } else {
                    img.attr('src', '');
                }
                readerImage.onloadend = (function (e) {
                    img.attr('src', readerImage.result);
                });
            }
        }
        dropArea.on('change', uploadFiles, false);

};
})(jQuery);

$('.container').registrationPage();


function postRequest () {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result");
        }, 2000);

    });

    promise.then(result => {

        alert(document.getElementById("login").value);
        alert("You`ve been successfully registered to the website!");

    });
}