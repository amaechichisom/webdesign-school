 
function getHistory(){
        return document.getElementById("history-value").innerText;
    }
    function printHistory(num){
        document.getElementById("history-value").innerText =num;
    }
    function getOutput(){
        return document.getElementById("output-value").innerText;
    }
    function printOutput(num){
        
        if(num == ""){
            document.getElementById("output-value").innerText =num;
        }
        else{
            document.getElementById("output-value").innerText = getFormattedNumber(num);   
        }
        
    } 
    
    function getFormattedNumber(num){
        if(num == "-"){
            return "";
        }
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
    }

    function reverseNumberFormat(num){
        return Number(num.replace(/,/g,''));            
    }
    
    var operator= document.getElementsByClassName("operator");
    for(var i=0;i<operator.length;i++){
        operator[i].addEventListener('click',function(){
            prevalue_list=[];
            operator_list=[];
            if(this.id =="clear"){
                printHistory("");
                printOutput("");
            }
            else if(this.id =="delete"){
                var output = reverseNumberFormat(getOutput()).toString();
                if(output){
                    output=output.substr(0,output.length-1);
                    printOutput(output);
                }
            }
            else{
                var output = getOutput();
                var history = getHistory();
                if(output==""&& history!=""){
                    if(isNaN(history[history.length-1])){
                        history =history.substr(0,history.length-1);
                    }
                }
                if(output!="" || history!=""){
                    output= output=="" ? output:reverseNumberFormat(output);
                    prevalue_list.push(output);
                    if(this.id == "+" || this.id == "-" || this.id == "/" ||this.id == "*" ||this.id == "%"){
                        operator_list.push(this.id);
                    }

                    history+=output;
                    if(this.id == "="){
                        // var result;
                        // var operation;
                        // var num1;
                        // var num2;
                        // prevalue_list.push(output);
                        // var list = prevalue_list.length;
                        // while(prevalue_list.length!=0){
                        //     if(prevalue_list.length%2==0){
                        //         operation = operator_list.pop();
                        //         num1=parseFloat(prevalue_list.pop()) ;
                        //         num2= parseFloat(prevalue_list.pop()) ;
                        //         result = equals(num1,operation,num2);
                        //         result += result;
                        //     }
                        //     else{
                        //         operation = operator_list.pop();
                        //         num2= parseFloat(prevalue_list.pop()) ;
                        //         result = equals(operation,num2);
                        //         result += result;
                        //     }
                        // }
                        result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        if (this.id == 'dot') {
                            history += '.';
                        } else {
                            history+= this.id;
                        }
                        printHistory(history);
                        printOutput("");

                    }
                }
            }
        });
    }
    var number = document.getElementsByClassName("number");
    for(var i=0;i<number.length;i++){
        number[i].addEventListener('click',function(){
            var output=reverseNumberFormat(getOutput());
            if(output != NaN){
                
                output=output + this.id;
                printOutput(output);
            }
        });
    }

    //specialButton
    var special = document.getElementsByClassName("special");
    for(var i=0;i<number.length;i++){
        special[i].addEventListener('click',function(){
            var output=reverseNumberFormat(getOutput());
            var previous = output;
            if(output != NaN){
                if(this.id == "sin"){
                    
                    output =Math.sin(output * (Math.PI / 180));
                    printOutput(output); 
                    printHistory("sin("+previous+")");
                }

                else if(this.id == "cos"){
                    
                    output =Math.cos(output * (Math.PI / 180));
                    printOutput(output); 
                    printHistory("cos("+previous+")");
                }
                
                else if(this.id == "tan"){
                    
                    output =Math.tan(output * (Math.PI / 180));
                    printOutput(output); 
                    printHistory("tan("+previous+")");
                }
                else if(this.id == "tanh"){
                    
                    output =Math.tanh(output * (Math.PI / 180));
                    printOutput(output); 
                    printHistory("tanh("+previous+")");
                }
                else if(this.id == "sinh"){
                    
                    output =Math.sinh(output * (Math.PI / 180));
                    printOutput(output); 
                    printHistory("sinh("+previous+")");
                }
                else if(this.id == "cosh"){
                    
                    output =Math.cosh(output * (Math.PI / 180));
                    printOutput(output); 
                    printHistory("cosh("+previous+")");
                }
                else if(this.id == "log"){
                    output =Math.log(output);
                    printOutput(output); 
                    printHistory(previous);
                }
                else if(this.id == "abs"){
                    output =Math.abs(output);
                    printOutput(output); 
                    printHistory(previous);
                }
                else if(this.id == "mod"){
                    output =previous%output;
                    printOutput(output); 
                    printHistory(previous +"%"+output);
                }
                else if(this.id == "ceil"){
                    output =Math.ceil(output);
                    printOutput(output); 
                    printHistory(previous);
                }
                else if(this.id == "exp"){
                    output =Math.exp(output);
                    printOutput(output); 
                    printHistory(previous);
                }
            }
        });
    }
    function square(output){
        var previous = getOutput();
        output=getOutput();
        output =Math.pow(output,2);
        printOutput(output); 
        printHistory(previous);
        return output;    
    }
    function sqrt(output){
        var previous = getOutput();
        output=getOutput();
        output =Math.pow(output,(1/2));
        printOutput(output); 
        printHistory(previous);
        return output;    
    }
    function pie(output){
        var previous = getOutput();
        output=getOutput();
        output =Math.PI*(output);
        printOutput(output); 
        printHistory(previous);
        return output;    
    }
    function factorial(){
        var previous = getOutput();
        var output=getOutput();
        var number = 1;
		
		if (output === 0) {
			output = "0";
		} else if (output < 0) {
			output = "Error";
		} else {
			var number = 1;
			for (var i = output; i > 0; i--){
				number *= i;
			}
			output = number;
        }
        printOutput(output); 
        printHistory(previous+"!");
        return output; 
    }
    function percent(output){
        var previous = getOutput();
        output=getOutput();
        output =output/100;
        printOutput(output); 
        printHistory(previous);
        return output;    
    }
    function inverse(output){
        var previous = getOutput();
        output=getOutput();
        output =1/output;
        printOutput(output); 
        printHistory(previous);
        return output;    
    }
    function exp(output){
        var previous = getOutput();
        output=getOutput();
        output =Math.exp(output);
        printOutput(output); 
        printHistory(previous);
        return output; 
    }
function equals(num1,operator,num2){
    var result;

    switch(operator){
        case "+":
        result = num1+num2;
        break;

        case "-":
        result = num1-num2;
        break;

        case "*":
        result = num1*num2;
        break;

        case "/":
        result = num1/num2;
        break;

        case "%":
        result = num1%num2;
        break;
    }
    return result;
}
function equals(operator,num2){
    var result;

    switch(operator){
        case "+":
        result = "+"+num2;
        break;

        case "-":
        result = "-"+num2;
        break;

        case "*":
        result = "null";
        break;

        case "/":
        result = "null";
        break;

        case "%":
        result = "null";
        break;
    }
    return result;
}