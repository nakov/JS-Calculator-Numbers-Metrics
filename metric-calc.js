let fromValueField = 
  document.querySelector("#screenMetricCalc #fromValue");
let sourceMetricField = 
  document.querySelector("#screenMetricCalc #sourceMetric");
let destMetricField = 
  document.querySelector("#screenMetricCalc #destMetric");
let resultMetricField = 
  document.querySelector("#screenMetricCalc div.result");
let metricsCalcButton = 
  document.querySelector("#screenMetricCalc input[value='Calculate']");
let metricsResetButton = 
  document.querySelector("#screenMetricCalc input[value='Reset']");

metricsCalcButton.onclick =  function() {
  let fromValue = parseFloat(fromValueField.value);
  let fromMetric = sourceMetricField.value;
  let toMetric = destMetricField.value;
  
  let valueMillimeters = fromValue;
  if (fromMetric == "mm")
    valueMillimeters *= 1;
  else if (fromMetric == "cm")
    valueMillimeters *= 10;
  else if (fromMetric == "m")
    valueMillimeters *= 1000;
  else if (fromMetric == "km")
    valueMillimeters *= 1000000;
  else 
    valueMillimeters = Number.NaN;
  
  let valueResultMetric = valueMillimeters;
  if (toMetric == "mm")
    valueResultMetric /= 1;
  else if (toMetric == "cm")
    valueResultMetric /= 10;
  else if (toMetric == "m")
    valueResultMetric /= 1000;
  else if (toMetric == "km")
    valueResultMetric /= 1000000;
  else 
    valueResultMetric = Number.NaN;

  valueResultMetric = parseFloat(valueResultMetric.toPrecision(12));

  let result;
  if (Number.isNaN(valueResultMetric))
    result = "<i>invalid input</i>";
  else
    result = '<pre>' + valueResultMetric + '</pre>';
  resultMetricField.innerHTML = "<h4>Result:</h4> " + result;
};

metricsResetButton.onclick = function() {
  resultMetricField.innerHTML = '';
}
