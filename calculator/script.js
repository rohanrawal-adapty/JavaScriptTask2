var numberOne=0;
var numberTwo=0;
var operations='';
var ifResult = false;

function addOne(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '1';
}

function addTwo(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '2';
}

function addThree(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '3';
}

function addFour(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '4';
}

function addFive(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '5';
}

function addSix(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '6';
}

function addSeven(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '7';
}

function addEight(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '8';
}

function addNine(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value += '9';
}

function addZero(){
    if(ifResult){
        calculator.display.value = '';
        ifResult=false;
    }
    calculator.display.value +='0';
}

function addZeroClear(){
    calculator.display.value = '';
}

function addition(){
    numberOne = calculator.display.value;
    calculator.display.value='';
    operations  = "additions";
}

function multiplication(){
    numberOne = calculator.display.value;
    calculator.display.value='';
    operations  = "multiplication";
}

function division(){
    numberOne = calculator.display.value;
    calculator.display.value='';
    operations  = "division";
}

function subtraction(){
    numberOne = calculator.display.value;
    calculator.display.value='';
    operations  = "subtraction";
}
function result(){
    numberTwo = calculator.display.value;
    
    if(operations.localeCompare('additions')==0){
        calculator.display.value = parseInt(numberOne)+parseInt(numberTwo);
    }else if(operations.localeCompare('multiplication')==0){
        calculator.display.value = parseInt(numberOne)*parseInt(numberTwo);
    }else if(operations.localeCompare('division')==0){
        calculator.display.value = parseInt(numberOne)/parseInt(numberTwo);
    }else if(operations.localeCompare('subtraction')==0){
        calculator.display.value = parseInt(numberOne)-parseInt(numberTwo);
    }
    ifResult = true;
}

