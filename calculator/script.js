function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function readOperation(string){
    const a = string.split(' ');
    const num1 = parseInt(a[0]);
    const operation = a[1];
    const num2 = parseInt(a[2]);
    console.log(operate(num1,operation,num2));
}
function operate(a,op,b){
    switch(op) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    }
}