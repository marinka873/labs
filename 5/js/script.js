(function (){
    var dropzone = document.getElementsByClassName('container-dropzone');
    
    
    dropzone.ondragover = function (){
        this.className = 'dropzone ondragover';
        return false;
    }
}());