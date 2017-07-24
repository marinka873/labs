"use strict";

var array = ["1", "45", "6", "12", "4", "42", "8", "23"];

var bubble = BubbleSort(array);
var shell = ShellSort(array);
var insert = InsertSort(array);
var quick = QuickSort(array);

function BubbleSort(array)
{
    let swap;
    let n = array.length-1;
    let x = array;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}

function InsertSort(array)
{
    for (let i = 1; i < array.length; i++)
    {
        if (array[i] < array[0])
        {
            array.unshift(array.splice(i,1)[0]);
        }
        else if (array[i] > array.length)
        {
            continue;
        }
        else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j])
                {
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
    return array;
}

function QuickSort(array) {
    if (array.length <=1){
        return array;
    }
    let arrayLength = array.length;
    let position = Math.floor(arrayLength /2);
    let value = array[position];
    let less = [],
        more = [],
        same = [];
    for (let i=0; i < arrayLength; i++){
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

function ShellSort(arr){

    let len  = array.length;
    let gapSize =  Math.floor(len/2);

    while(gapSize > 0){
        for(let i = gapSize; i < len; i++) {

            let temp = arr[i];
            let j = i;

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

console.log('initial array:',array);
console.log('Bubble sort:',bubble);
console.log('Insert sort:',insert);
console.log('Quick sort:', quick);
console.log('Shell sort:',shell);
