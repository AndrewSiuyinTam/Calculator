let inputed_numbers = document.getElementById('inputed-numbers');
let numStack = [];
let operatorStack = [];
let boolean = true;
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function operate(operator,num1,num2){
    if(operator === '+'){
       return add(num1,num2);
    }
    else if(operator === '-'){
        return subtract(num1,num2);
     }
     else if(operator === '*'){
        return multiply(num1,num2);
     }
     else if(operator === '/'){
        return divide(num1,num2);
     }
}
function evaluate(rpn) {
    const stack = [];
  
    for (let scanner = 0; scanner < rpn.length; scanner++) {
      const token = rpn[scanner];
  
      if (/[+\-/*^]/.test(token)) {
        stack.push(operate(token, stack));
        continue;
      }
  
      // token is a number
      stack.push(token);
    }
  
    return stack.pop();
  }
  
  function operate(operator, stack) {
    const a = stack.pop();
    const b = stack.pop();
  
    switch (operator) {
      case '+':
        return b + a;
      case '-':
        return b - a;
      case '*':
        return b * a;
      case '/':
        return b / a;
      case '^':
        return Math.pow(b, a);
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }
function display(clicked_id) {
    if(clicked_id === 'delete'){
        inputed_numbers.innerText = inputed_numbers.innerText.substring(0, inputed_numbers.innerText.length - 1);
    }
    else{
        if(boolean == false){
            inputed_numbers.innerText = "";
            boolean = true;
        }
        inputed_numbers.innerText += clicked_id;
        let str = inputed_numbers.innerText;
    }
    
    if(clicked_id === '+' || clicked_id === '-'|| clicked_id === '*'|| clicked_id === '/'){

    }

    numStack.push(clicked_id)
    
}
function parse(str) {
    
    return Function(`'use strict'; return (${str})`)()
  }
  
function clearText(){
    inputed_numbers.innerText = "";
    numStack = [];
}
function pressesEqual(){
    if(inputed_numbers.innerText.includes('/0')){
        inputed_numbers.innerText = "ERROR: Divide by Zero";
    }
   let result =  parse(inputed_numbers.innerText);
   let roundedResult = Math.round(result * 100) / 100;
    inputed_numbers.innerText= roundedResult;
    boolean = false;
}





console.log(document.getElementById('six').value);