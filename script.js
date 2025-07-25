﻿function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").textContent = "Please enter valid height and weight.";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").textContent =
        `Your BMI is ${bmi.toFixed(2)} - ${category}`;
}
