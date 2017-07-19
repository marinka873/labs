"use strict";

var array = ["3", "10", "9", "-7", "1", "5"];

function QuickSort(array) {
    if (array.length <=1){
        return array;
    }
    var arrayLength = array.length;
    var position = Math.floor(arrayLength /2);
    var value = array[position];
    var less = [],
        more = [],
        same = [];
    for (var i=0; i < arrayLength; i++){
        if (array[i] === value){
            same.push(array[i]);
        }
        else if (array[i] < value){
            less.push(array[i]);
        }
        else if (array[i] > value){
            more.push(array[i]);
        }
    }
    return QuickSort(less).concat(same, QuickSort(more));
}

console.log('Quick sort',QuickSort(array));