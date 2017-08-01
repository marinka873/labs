function Unfold(InitialValue, callback){
    var resultUnfold = [];
    var initialState = InitialValue;
   return  function (currentState){
        var array = [];
        if (currentState === true){
            array = callback(currentState);
            for (var i=0; i < array.length; i++){
                initialState = array[i];
                currentState = array [i+1];
            }
            resultUnfold.push(InitialValue);
            return resultUnfold;
        }
       
    }
}

var reduce = function (newState){
    var newValue = newState * 2;
    return [newValue, newState];
};

console.log('Result reduce:',Unfold(reduce, 20));
