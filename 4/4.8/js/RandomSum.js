var array = new Array(),
    sum = 0;



var randomArray = function (){
    for (var i=0; i <10; i++){
        array[i] = Math.round(Math.random()*10);
    }
};
var foldLinear = function (array, callback, initialValue) {
    var result = initialValue;
    for (var i=0; i < array.length; i++){
        result = callback.call(null, result, array[i]);
    }
    return result;
};
var a = randomArray();
console.log(a);



var sumArray = foldLinear(a, function (x, y) {
    return x+y
});




// console.log('Random array:', randomArray(array));
console.log('Random array',array);
console.log('Sum of array:', sum);
console.log('sum', sumArray);