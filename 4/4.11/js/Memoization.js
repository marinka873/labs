function memoization(func) {
    return function (x) {
        func.memoization = func.memoization || {};
        if (x in func.memoization){
            func.memoization[x] = func(x);
        } else {
            func.memoization[x] = func(x);
        }
    }
}

// function cacheMemoization(x) {
//     return x*x;
// }

var memoizationValue = memoization(function (y){
    return y*y;
});

// var memoizationValue = cacheMemoization(4);

console.log('First call memoization cached', memoizationValue);
console.log('Second call memoization cached', memoizationValue);

console.log('First call memoization:',memoizationValue(9));
console.log('Second call memoization',memoizationValue(9));

