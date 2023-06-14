function el (element) {
	if (element.charAt(0) === "#") { // If passed an ID...
		return document.querySelector(element); // ... returns single element
	}

	return document.querySelectorAll(element); // Otherwise, returns a nodelist
}

var display = document.getElementById('newInput'),
oldDis = document.getElementById('oldInput'),
oldNum, newNum = "",
operator, result,
btns = el('.calcBtn');


function updateDisplay (result, old = ""){
	display.innerHTML = result;

	oldDis.innerHTML = old;
}

/*
 * Click Handler for all buttons
 *
 */
function btnclick (id){		
	var btnClass = document.getElementById(id).className;

	switch (btnClass) {
		case "numberButton":
		numberButton(id);
		break;

		case "operatorButton":
		operatorButton(id);
		break;

		case "specialButton":
		specialButton(id);
		break;

		case "equalsButton":
		equals();
		break;

		case "clearButton":
		clear(id);
		break;
	}
}

function numberButton (id) {
	var num = id.charAt(2);
	newNum += num;

	if (oldDis.innerHTML != "") {
		updateDisplay(newNum, oldDis.innerHTML);
	}
	else {
		updateDisplay(newNum);
	}
}

function operatorButton (id) {
	oldNum = newNum;
	newNum = "";
	operator = id;
	var opSign = document.getElementById(id).value;

	//delete result;
	if (result) {
		oldNum = result;
	}

	var oldStr = oldNum + " " + opSign;

	updateDisplay(oldNum, oldStr);

}

function clear (id) {
	switch(id) {
		case "clr1":
		newNum = newNum.substring(0, newNum.length - 1);
		break;

		case "clr2":
		newNum = "";
		break;

		case "clr3":
		oldNum = "";
		newNum = "";
		break;
	}

	updateDisplay(newNum);
}

function equals () {

	oldNum = parseFloat(oldNum);
	newNum = parseFloat(newNum);

	if (operator == undefined) {
		
	}

	else {
		switch (operator) {
			case "plus":
			result = oldNum + newNum;
			break;

			case "minus":
			result = oldNum - newNum;
			break;

			case "times":
			result = oldNum * newNum;
			break;

			case "divide":
			result = oldNum / newNum;
			break;

			case "modulus":
			result = oldNum % newNum;
			break;

			// If equal is pressed without an operator, keep number and continue
			default:
			result = newNum;
			delete operator;
		}

		updateDisplay(result, result);
		operator = undefined;
		newNum = "";
	}


	//console.log("Old = " + oldNum + "\nOp = " + operator + "\nNew = " + newNum + "\nResult = " + result)

}

function specialCalc () {
	if (newNum) {
		return newNum;
	}
	else {
		return result;
	}
}

function toDegrees (angle) {
	return angle * (180 / Math.PI);
}

function specialButton (id) {
	var calc = specialCalc();

	switch(id) {
		case "sqrt-root":
		result = Math.sqrt(calc);
		break;

		case "square":
		result = (calc * calc);
		break; 

		case "reciproc":
		result = 1/calc;
		break;

		case "factorial":
		var number = 1;
		
		if (calc === 0) {
			result = "0";
		} else if (calc < 0) {
			result = "Error";
		} else {
			var number = 1;
			for (var i = calc; i > 0; i--){
				number *= i;
			}
			result = number;
		}

		case "pi":
		result = calc * Math.PI;
		break;

		case "sin":
		result = Math.sin(calc * (Math.PI / 180));
		break;

		case "cos":
		result = Math.cos(calc * (Math.PI / 180));
		break;

		case "tan":
		result = Math.tan(calc * (Math.PI / 180));
		break;

		case "sin-inv":
		//result = Math.asin(calc * (Math.PI / 180));
		result = Math.asin(calc);
		break;

		case "cos-inv":
		result = Math.acos(calc * (Math.PI / 180));
		break;

		case "tan-inv":
		result = Math.atan(calc * (Math.PI / 180));
		break;

		case "log":
		result = Math.log10(calc);
		break;

		case "log-In":
		result = Math.log(calc);
		break;

		case "exp":
		result = Math.exp(calc);
	}

	updateDisplay(result);
	newNum = "";

}