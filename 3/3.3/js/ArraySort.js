"use strict";

var array = ["1", "45", "6", "12", "4", "42", "8", "23"];


var sorting = {


    //methods
    Bubble: function (array) {
        var swap;
        var x = array;
        do {
            swap = false;
            for (var i=1; i < array.length; i++)
            {
                if (x[i] > x[i+1])
                {
                    var temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swap = true;
                }
            }
            array.length--;
        } while (swap);
        return x;
    }



};


sorting.Bubble();



console.log('initial array:',array);
console.log('Bubble sort:');