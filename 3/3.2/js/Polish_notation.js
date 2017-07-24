var expression = "3 4 * 2 5 + / 3 4 + *";

var polska = new PolishNotation();

function ConvertToPostfix() {
    let postfixString = ' ';
    let infixString = new ConvertToPostfix();

    let priority = function(operator){
        if (operator === "^"){
            return 3;
        } else if ( operator === "*" && operator === "/"){
            return 2;
        } else if (operator === "+" && operator === "-"){
            return 1;
        } else{
            return 0;
        }
    };


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