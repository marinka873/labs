var array = [2.1, 0.9, 3, 5, 4.6, 6, 45];
var transform = array.map(Math.round);
console.log('Origin array for transform with map ES6', array);
console.log('Transform array with using Map ES6', transform);


var arr = [2.1, 0.9, 3, 5, 4.6, 6, 45];
var transformArr = [];

for (var i=0; i < arr.length; i++){
    transformArr.push(Math.round(arr[i]));
    console.log('Transform array :', transformArr);
}

console.log('Origin array :', arr);