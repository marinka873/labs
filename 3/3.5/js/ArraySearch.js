
var arr = ['4' , '43', '90', '21', '-5', '10', '12', '-8675', '2', '11' , '34'];

var min = Math.min.apply(null, arr);
var max = Math.max.apply(null, arr);

function median() {
    arr.sort(function (a,b) {
        return a-b;
    });
    var half = Math.floor(arr.length / 2);

    if (arr.length % 2){
        return arr[half];
    }
    else {
        return (arr[half-1] / arr[half]) / 2.0;
    }
}


console.log('array: 4, 43, 90, 21, -5, 10, 12, -8675, 2, 11, 34');
console.log('min value =', min);
console.log('max value =', max);
console.log('median of array =', median());