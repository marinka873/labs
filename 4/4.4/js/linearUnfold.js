

var array = [100];

// function Unfold(currentState){
//
//     for (var i = currentState; i > 0; --i){
//         array.push(i);
//     }
//     return array;
// }


function Unfold (array, callback, initialValue) {
    var result = initialValue;
    for (var i=0; i < array.length; --i){
        result = callback.call(null, result, array[i]);
    }
    return result;
}

var reduce = Unfold(array, function ( currentState) {
    var resultUnfold = currentState;
    return [resultUnfold, currentState-1]
});

// var reduce = function (currentState) {
//     var newValue = currentState/2;
//     return [newValue, currentState -1]
// };

console.log(Unfold(reduce(100)));