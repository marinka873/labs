var arr = [1, 33454544, 5, 6567, 4343, 123, -90, 78, 8];

var arrFilter = arr.filter(function (number) {
    return number > 10;
});
console.log('Output number > 10 :',arrFilter);

function filter (arr, callback) {
    var resultFilter = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback( arr[i], i, arr)) {
            resultFilter.push(arr[i]);
        }
    }
    return resultFilter;
}

var filterArr = filter(arr, function(ArrValue) {
    return ArrValue >= 10;
});

console.log('Output filter number > 10 :', filterArr);