"use strict";

 var array = ["12", "1", "-5", "78", "37", "3", "0", "17"];



function BubbleSort(array)
{
    var swap;
    var n = array.length-1;
    var j = 0;
    var x = array;
    do {
        swap = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}

console.log('Bubble sort',BubbleSort(array));
