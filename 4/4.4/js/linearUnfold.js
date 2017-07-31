

function Unfold(element, callback, initialValue){
    var array =[];

    for (var i=element; i >0; --i){
        array.push(i);
    }
    return array;
}

// var reduce = function (currentState) {
//     var newValue = currentState/2;
//     return [newValue, currentState -1]
// };

console.log(Unfold(100));