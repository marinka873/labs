var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var Stringarray = [
    {"name" : "objectName"}
];

var linearFold = array.reduce(function (x, y){
    return x+y;
});
var mulArray = array.reduce(function (x,y) {
    return x*y;
});

var linearFoldVariantTwo = [[1,2], [3,4], [5,6], [7,8], [9,10]].reduce(function (x,y){
    return x.concat(y);
}) ;



console.log('Array', array);
console.log(linearFold);
console.log(mulArray);
console.log(linearFoldVariantTwo);