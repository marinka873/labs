"use strict";

var array = ["1", "90", "-76", "8", "12", "3", "5"];

function shellSort(arr){

    var len  = array.length;
    var gapSize =  Math.floor(len/2);

    while(gapSize > 0){
        for(var i = gapSize; i < len; i++) {

            var temp = arr[i];
            var j = i;

            while(j >= gapSize && arr[j - gapSize] > temp) {
                arr[j] = arr[j - gapSize];
                j -= gapSize;
            }
            arr[j] = temp;
        }
        gapSize = Math.floor(gapSize/2);
    }
    return array;
}

var mySortedArray = shellSort(array);

console.log('Shell sort',mySortedArray);