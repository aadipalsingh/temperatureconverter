document.getElementById("convert-btn").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;

  if (isNaN(temperature)) {
    alert("Please enter a valid number");
    return;
  }

  let result;

  if (fromUnit === toUnit) {
    result = temperature;
  } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = (temperature * 9) / 5 + 32;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
    result = temperature + 273.15;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = ((temperature - 32) * 5) / 9;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    result = ((temperature - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
    result = temperature - 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    result = ((temperature - 273.15) * 9) / 5 + 32;
  }

  document.getElementById("output").textContent = `${result.toFixed(2)} ${
    toUnit.charAt(0).toUpperCase() + toUnit.slice(1)
  }`;
});
