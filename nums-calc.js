let num1Field = 
  document.querySelector("#screenNumberCalc #number1");
let num2Field = 
  document.querySelector("#screenNumberCalc #number2");
let operationField = 
  document.querySelector("#screenNumberCalc #operation");
let resultNumsField = 
  document.querySelector("#screenNumberCalc div.result");
let numsCalcButton = 
  document.querySelector("#screenNumberCalc input[value='Calculate']");
let numsResetButton = 
  document.querySelector("#screenNumberCalc input[value='Reset']");

numsCalcButton.onclick =  function() {
  let num1 = parseFloat(num1Field.value);
  let num2 = parseFloat(num2Field.value);
  let op = operationField.value;
  let result;
  if (Number.isNaN(num1) || Number.isNaN(num2))
    result = "<i>invalid input</i>";
  else  if (op == '+')
    result = num1 + num2;
  else if (op == '-')
    result = num1 - num2;
  else if (op == '*')
    result = num1 * num2;
  else if (op == '/')
    result = num1 / num2;
  else
    result = "<i>invalid operation</i>";
  if (Number.isNaN(result))
    result = "<i>invalid calculation</i>";
  if (typeof(result) == "number")
    result = '<pre>' + parseFloat(result.toPrecision(12)) + '</pre>';
  resultNumsField.innerHTML = "<h4>Result:</h4> " + result;
};

numsResetButton.onclick = function() {
  resultNumsField.innerHTML = '';
}
