function Currying(elementOne) {
    return function (elementTwo) {
        return function (elementThree) {
            return function (elementFour) {
                console.log (elementOne + elementTwo + elementThree + elementFour);
            }
        }
    }
}

Currying(5)(10)(5)(25);
