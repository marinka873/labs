var arr = [1, 33454544, 5, 6567, 4343, 123, -90, 78, 8];

var arrFilter = arr.filter(function (number) {
    return number > 10;
});
console.log('Output number > 10 :',arrFilter);


var filterArr =[];
for (var i=0; i < arr.length; i++) {
    if (arr[i] > 10){
        filterArr.push(arr[i]);
    }
}

console.log('Output filter number > 10 :', filterArr);