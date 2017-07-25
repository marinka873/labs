var expression = "3 4 * 2 5 + / 3 4 + *";

var polska = new PolishNotation();

var priority = function(operator){
    if (operator === "^"){
        return 4;
    } else if ( operator === "*" && operator === "/"){
        return 3;
    } else if (operator === "+" && operator === "-"){
        return 2;
    } else if(operator === "(" && operator === ")") {
        return 1;
    } else {
        return 0;
    }
};
function priorityOf(x) {
    return priority[x] || 5;
}

function ConvertToPostfix(expression, dontPrint) {
    let postfixString = ' ';
    let infixString = new ConvertToPostfix();
    let output = [];
    let Stack = [];


    for (let i=1; i< expression.length; i++){
        var x = expression[i];

        if (x == "("){
            Stack.push(x);
        } else if (x == ")"){
            while (Stack.pop() != "("){
                output.push(Stack.pop());
            }
            Stack.pop();
        }
        else {
            while (Stack.length){
                let visitedChar = Stack.pop();

                let visitedCharpriority = priorityOf(visitedChar);
                let currentChar = priorityOf(x);

                if (visitedCharpriority >= currentChar){
                    output.push(Stack.pop());
                } else {
                    break;
                }
            }
            Stack.push(x);
        }
    }
    while (Stack.length){
        output.push(Stack.pop());

        postfixString = output.join('');

        !dontPrint && console.log(expression => postfixString);
    }
    return postfixString;

}


function PolishNotation() {

    this.resultPostfix = function (postfix) {
        let resultStack = [];
        postfix = postfix.split(" ");
        for (let i = 0; i < postfix.length; i++) {
            if (postfix[i].isNumeric()) {
                resultStack.push(postfix[i]);
            } else {
                let a = resultStack.pop();
                let b = resultStack.pop();
                if (postfix[i] === "+") {
                    resultStack.push(parseFloat(a) + parseFloat(b));
                } else if (postfix[i] === "-") {
                    resultStack.push(parseFloat(b) - parseFloat(a));
                } else if (postfix[i] === "*") {
                    resultStack.push(parseFloat(a) * parseFloat(b));
                } else if (postfix[i] === "/") {
                    resultStack.push(parseFloat(b) / parseFloat(a));
                } else if (postfix[i] === "^") {
                    resultStack.push(Math.pow(parseFloat(b), parseFloat(a)));
                }
                 else if (postfix[i] === "(" ){
                    resultStack.push();
                }
                else if (postfix[i] === ")"){
                     resultStack.push();
                }
            }
        }
        if (resultStack.length > 1) {
            return "error";
        } else {
            return resultStack.pop();
        }
    };
    String.prototype.isNumeric = function() {
        return !isNaN(parseFloat(this)) && isFinite(this);
    }
}

console.log(polska.resultPostfix(expression));