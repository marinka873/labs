var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var linearFold = [[1,2], [3,4], [5,6], [7,8], [9,10]].reduce(function (x,y){
    return x.concat(y);
}, []);



var foldLinear = function (array, callback, initialValue) {
    var result = initialValue;
    for (var i=0; i < array.length; i++){
        result = callback.call(null, result, array[i]);
    }
    return result;
};

var arrayConcat = foldLinear(array, function (result, newArray) {
    return result.concat(newArray);
}, []);



console.log('Array', array);
console.log('Concat array with using ES5',linearFold);
console.log('Concat array:', arrayConcat);