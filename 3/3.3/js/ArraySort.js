var array = document.getElementsByClassName("insert__array").value;
var selectSort = document.getElementsByClassName("sort").value;


function GetArray() {
     var click = function () {

         if (selectSort == select_bubble) {
             var sortArray = bubble;
         }
         else if (selectSort == select_insert) {
             var sortArray = insert;
         }
         else if (selectSort == select_quick) {
             var sortArray = quick;
         }
         else if (selectSort == select_shell) {
             var sortArray = shell;
         }
         document.write(sortArray, selectSort);
         document.getElementsByClassName("show_result").onclick = click();
     };
 }
// var array = [3, -34, 5, 67, 8, 50, 0 ];
// var strArr = array.join(" ");
// console.log('initial array:',array);

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
    for (let i = 0; i < array.length; i++)
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

console.log('Bubble sort:',bubble);
console.log('Insert sort:',insert);
console.log('Quick sort:', quick);
console.log('Shell sort:',shell);
