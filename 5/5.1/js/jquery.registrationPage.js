(function ($){
    'use strict';


    $.fn.registrationPage = function () {
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

            var files = element.target.files || (element.dataTransfer && element.dataTransfer.files);
            if (files) {
                uploadFiles(files[0]);
            }
            else {
                alert("Error file upload");
            }
        });
        //
        //
        // function uploadImage(getFile) {
        //     for (let i=0; i < getFile.length; i++){
        //         let file = new getFile[i];
        //         let typeImage = /^image\//;
        //         let previewImage = document.querySelector('img');
        //         $('container-dropzone').appendChild(img);
        //
        //
        //         let readFile = new FileReader();
        //         readFile.onload(function (aImg) {
        //             return function(element){
        //                 aImg.src= element.target.result;
        //             }
        //         })(img);
        //         readFile.readAsDataURL(file);
        //     }
        // }


        function uploadFiles(files) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var imageType = /^image\//;

                if (!imageType.test(file.type.match)) {
                    continue;
                }

                var img = document.createElement("img");
                img.classList.add("obj");
                img.file = file;
                $('container-dropzone').appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

                var reader = new FileReader();
                reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
                reader.readAsDataURL(file);
            }
        }

        // console.log(dropArea);
        console.log('Jquery plugin is work!');
    };
})(jQuery);

$('container-select__image--drop').registrationPage();


function postRequest () {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result");
        }, 3000);
    });

    promise.then(result => {
        alert("You`ve been successfully registered to the website!");
    });
}



function loadImage() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}