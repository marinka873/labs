var array = [14, 0, 5, 8, -3, 55];


function some (array, callback){
    for (var i=0; i < array.length; i++){
        if(callback(array[i], array)){
            return false;
        }
    }
    return true;
}

var first = some (array, function (x){
     array[0] = x;
    return x <= 14
});

console.log('Origin array', array);
console.log('First result', first);
