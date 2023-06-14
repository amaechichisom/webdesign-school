var values="";
var startValue=0;
var result = 0;
var operatorValue = -1;
var answer = 0;

/* this section contains Arithmetic functions*/
function add(value,value1){return value + value1;}

function sub(value,value1){return value - value1;}

function divide(value,value1){return value / value1;}

function multiply(value,value1){return value * value1;}

function mod(value,value1){return value % value1;}

function square(value){return Math.pow(value,2);}

function squareRoot(value){return Math.sqrt(value);}

function Power(value,power){return Math.pow(value,power);}

function sin(value){return Math.sin(value);}

function cos(value){return Math.cos(value);}

function tan(value){return Math.tan(value);}

function exp(value){return Math.exp(value);}

function log(value){return Math.log10(value);}

function logE(value){return Math.log(value);}

function clear(value){
    var trimValue =value.trim();
    return trimValue.slice(0,trimValue.length -1);
}

function piValue(angle){
    return (angle *2*Math.PI )/360;
}

/* this section contains event handler : numeric indicators*/
function one(){
    //value 1
    values = values+"1";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
    return values;
}
function two(){
    //value 2
    values = values+ "2";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function three(){
    //value 3
    values = values+"3";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function four(){
    //value 4
    values = values+"4";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function five(){
    //value 5
    values =values +"5";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function six(){
    //value 6
    values = values+"6";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function seven(){
    //value 7
    values =values +"7";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function eight(){
    //value 8
    values =values+"8";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function nine(){
    //value 9
    values =values+"9";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function zero(){
    //value 0
    values =values+"0";
    document.getElementById('input').innerHTML=values;
    Calculate(operatorValue);
    document.getElementById('srn').innerHTML=result;
}
function dot(){
    //dot
    if(check(values)==false){
        values=values + ".";           
    }  
    document.getElementById('input').innerHTML=values;
}

/* this section contains event handler : the operators*/
function addition(){
    //add
    operatorValue=1;  
    valueChange();  
    document.getElementById('input').innerHTML=startValue;
}
function substraction(){
    //substraction
    operatorValue=2;  
    valueChange(); 
    document.getElementById('input').innerHTML=startValue;
}

function division(){
    //division
    operatorValue=3;  
    valueChange();  
    document.getElementById('input').innerHTML=startValue;
}
function multiplication(){
    //multiplication
    operatorValue=4;  
    valueChange();  
    document.getElementById('input').innerHTML=startValue;
}
function modulus(){
    //mod
    operatorValue=5;  
    valueChange();           
    document.getElementById('input').innerHTML=startValue;
}
function squareValue(){
    //square
    valueChange();         
    result=square(startValue);
    startValue=result; 
    document.getElementById('srn').innerHTML=result;
}
function squareRootValue(){
    //squareRoot
    valueChange();         
    result=squareRoot(startValue);
    startValue=result; 
    document.getElementById('srn').innerHTML=result;
}
function logBase(){
    //log base 10
    valueChange();         
    result=log(startValue);
    startValue=result;
    document.getElementById('srn').innerHTML=result;
}
function naturalLog(){
    //natural log
    valueChange();         
    result=logE(startValue);
    startValue=result;
    document.getElementById('srn').innerHTML=result;
}
function sinValue(){
    //sin
    valueChange();
    startValue=piValue(startValue);
    result=sin(startValue);
    document.getElementById('srn').innerHTML=result;
}
function cosValue(){
    //cos
    valueChange();
    startValue=piValue(startValue);
    result=cos(startValue);
    document.getElementById('srn').innerHTML=result;
}
function tanValue(){
    //tan
    valueChange();
    startValue=piValue(startValue);
    result=tan(startValue);
    document.getElementById('srn').innerHTML=result;
}
function exponential(){
    //exponential
    valueChange();         
    result=exp(startValue);
    startValue=result;
    document.getElementById('srn').innerHTML=result;
}
function clearValue(){
    //clear
    values=clear(values); 
    document.getElementById('input').innerHTML=values;
}
function clearScreen(){
    //clear screen
        values="";
        result=0;
        startValue=result;
        document.getElementById('input').innerHTML="";
        document.getElementById('srn').innerHTML=result;
        operatorValue=-1;
}
function equalValue(){
    //equal
        values="";
        answer = result;
        document.getElementById('srn').innerHTML=result;
        document.getElementById('input').innerHTML=values;
}
function powerValue(){
    
}

/* this section of function are arithmetic methods*/
function valueChange(){
    if (result==0){
       var nextValue=Number(values);
       result=nextValue;               
    }                      
    startValue=result;            
    values="";        
}

function check (detail){
         var value=false;
         for (var i =0;i<detail.length;i++)  {
             if(detail.charAt(i) == '.'){
               value=true;         
             }
         }
         return value;
}
function Calculate(operator){
          switch (operator) {
               case 1:                   
                   result = add(startValue,Number(values));         
                   break;                   
               case 2:
                    result = sub(startValue,Number(values)); 
                    break;
               case 3:
                   result = divide(startValue,Number(values)); 
                   break;
               case 4:
                   result = multiply(startValue,Number(values)); 
                   break;
               case 5:
                   result = mod(startValue,Number(values)); 
                   break;
               
           }
}
//Validation
//Formatting
