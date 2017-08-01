var callLazy = function (x, y) {
    return x+y;
};

function Lazy(callLazy){
    return callLazy.bind.apply(callLazy,arguments);
}


var a = Lazy(callLazy,10,4);

console.log(a());

