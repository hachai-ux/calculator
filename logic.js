//error for 0 doesn't work yet
//bug - relation remembers operator

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
	return a / b;
};

function operate(operator, a, b){
    if (operator === "plus"){
        return add(a, b);
    }
    else if(operator === "minus"){
        return subtract(a,b);
    }
    else if(operator === "times"){
        return multiply(a,b);
    }
    else if(operator === "obelus"){
        return divide(a,b);
    }
};

function displayNumber(){
    //click number buttons
    const buttonsNumber = document.querySelectorAll('.btn-number');
    const buttonsOperator = document.querySelectorAll('.btn-operator');
    const buttonRelation = document.querySelector('.btn-relation');
    const display = document.querySelector('.display');
    const buttonClear = document.querySelector('#btn-clear');
    let previousDisplayNumber;
    let currentDisplayNumber
    let operatorIsUsed = false; //clear after operator or relation has been used
    let numberIsUsed = false;
    let relationIsUsed = false;
    let secondNumberIsUsed = false;
    let operator;

    //listen to numbers
    buttonsNumber.forEach((button) => {
        button.addEventListener('click', () => {
            /*
            if (relationIsUsed === true){
                operatorIsUsed = false;
            } */

            if (operatorIsUsed === true){ //display numbers correctly after operator has been used
                display.textContent = '0';
                operatorIsUsed = false;
                previousDisplayNumber = currentDisplayNumber; //make currentNumber to previousNumber if an operator has been used before this click
                secondNumberIsUsed = true;
            }
            if (display.textContent !== '0'){ //add up numbers if no displaying 0
                display.textContent = display.textContent + button.textContent;
                operatorIsUsed = false; 
            }

            else  { 
                display.textContent = button.textContent;
       operatorIsUsed = false; 
                console.log('Hello');
            }
            
            
        
         currentDisplayNumber = display.textContent; //store display value
         numberIsUsed = true;
         relationIsUsed = false;
         
         
                
        });
        //if (button.texContent === '=' && ){
        //display.textContent = operate()
        //}
    
    });

    //listen to operators
    buttonsOperator.forEach((button) => {
        button.addEventListener('click', () => {

        if (typeof previousDisplayNumber === 'undefined'){
            operatorIsUsed = true;
        previousDisplayNumber = currentDisplayNumber;
        
        }

        else { 
            
        //display.textContent = button.textContent; //no need to show signs
        //console.log(previousDisplayNumber);
        //console.log(currentDisplayNumber);
            if (numberIsUsed === true && relationIsUsed === false){
            
             resultNumber = Math.round((operate(operator, parseInt(previousDisplayNumber), parseInt(currentDisplayNumber)))*100000)/100000;
             previousDisplayNumber = currentDisplayNumber;
             currentDisplayNumber = resultNumber;
             display.textContent = currentDisplayNumber;
             operatorIsUsed = true;
             numberIsUsed = false; //avoid duplicate operation
             
            }

           
        

         //first time a number is saved after entering an operator
        //which operator is clicked? get value for operation function 
        }

        if (button.textContent === '+'){
            operator = 'plus';
        }
        else if (button.textContent === '-'){
            operator = 'minus';
        }
        else if (button.textContent === '×'){
            operator = 'times';
        }
        else if (button.textContent === '÷'){
            operator = 'obelus';
        }
        //an operator is entered a second time, so the previous number and the one before that needs to be calculated
     
        });
        

    
    });

    //listen to =
    buttonRelation.addEventListener('click', () => {

        if(numberIsUsed === true && relationIsUsed === false && secondNumberIsUsed === true && currentDisplayNumber === 0 && operator === 'obelus'){
            display.textContent = 'Error';
            previousDisplayNumber = 0;
            currentDisplayNumber = 0;
            operatorIsUsed = false;
            relationIsUsed = false;
            numberIsUsed = false;
            secondNumberIsUsed === false;
        }
        
        if(numberIsUsed === true && relationIsUsed === false && secondNumberIsUsed === true){ 
        resultNumber = Math.round((operate(operator, parseInt(previousDisplayNumber), parseInt(currentDisplayNumber)))*100000)/100000;
        previousDisplayNumber = currentDisplayNumber;
        currentDisplayNumber = resultNumber;
        display.textContent = currentDisplayNumber;
        operatorIsUsed = true; //to clear number when a new number is written

        relationIsUsed = true;
        secondNumberIsUsed = false;
        
        //after relation result make entering a new number reset the result and operators
        
        }
        
        //numbers are shifted after operation

        

    });

    //get value and display number buttons
    //store display value

    buttonClear.addEventListener('click', () => {
        previousDisplayNumber = 0;
        currentDisplayNumber = 0;
        operatorIsUsed = false;
        relationIsUsed = false;
        numberIsUsed = false;
        secondNumberIsUsed === false;
        display.textContent = 0;
      
        });
    
}
displayNumber();