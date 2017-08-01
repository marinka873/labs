
var arrStr = ['4' , '43', '90', '21', '5', '10', '12', '-2', '11' , '34'];
var arr = arrStr.slice(0, 100).map(Number);

var minElement = FindMinElement(arr);
var maxElement = FindMaxElement(arr);

function FindMaxElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

function FindMinElement(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

function median() {
    arr.sort(function (a,b) {
        return a-b;
    });
    let half = Math.floor(arr.length / 2);

    if (arr.length % 2){
        return arr[half];
    }
    else {
        return (arr[half-1] / arr[half]) / 2.0;
    }
}


function getMaxSubSumFirst(arr) {
    let maxSupSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumSup = 0;
        for (let j = i; j < arr.length; j++) {
            sumSup += arr[j];
            maxSupSum = Math.max(maxSupSum, sumSup);
        }
    }
    return maxSupSum;
}

function getMaxSubSumSecond(arr) {
    let maxSupSum = 0,
        sumSup = 0;
    for (let i = 0; i < arr.length; i++) {
        sumSup += arr[i];
        maxSupSum = Math.max(maxSupSum, sumSup);
        if (sumSup < 0) sumSup = 0;
    }
    return maxSupSum;
}

console.log('Origin string array', arrStr);
console.log('Origin number array', arr);
console.log('min value =', minElement);
console.log('max value =', maxElement);
console.log('median of array =', median());


console.log('Sum sum first variant',getMaxSubSumFirst([-1, 2, 3, -9]));
console.log('Sum sum first variant',getMaxSubSumFirst([2, -1, 2, 3, -9]));
console.log('Sum sum first variant',getMaxSubSumFirst([-1, 2, 3, -9, 11]));
console.log('Sum sum first variant',getMaxSubSumFirst([-2, -1, 1,2]));
console.log('Sum sum first variant',getMaxSubSumFirst([1,2,3]));
console.log('Sum sum first variant',getMaxSubSumFirst([-1, -2, -3]));


console.log('Sum sum second variant',getMaxSubSumSecond([-1, 2, 3, -9]));
console.log('Sum sum second variant',getMaxSubSumSecond([2, -1, 2, 3, -9]));
console.log('Sum sum second variant',getMaxSubSumSecond([-1, 2, 3, -9, 11]));
console.log('Sum sum second variant',getMaxSubSumSecond([-2, -1, 1,2]));
console.log('Sum sum second variant',getMaxSubSumSecond([1,2,3]));
console.log('Sum sum second variant',getMaxSubSumSecond([-1, -2, -3]));