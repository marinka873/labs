"use strict";

 var array = ["1", "-9", "4", "8", "0", "12"];

function InsertSort(array)
{
    for (var i = 1; i < array.length; i++)
    {
        if (array[i] < array[0])
        {
            //move current element to the first position
            array.unshift(array.splice(i,1)[0]);
        }
        else if (array[i] > array[i-1])
        {
            //leave current element where it is
            continue;
        }
        else {
            //find where element should go
            for (var j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j])
                {
                    //move element
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
    return array;
}


console.log('InsertSort',InsertSort(array));