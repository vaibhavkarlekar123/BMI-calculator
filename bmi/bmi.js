const access = document.querySelector('button');

access.addEventListener('click', () => {
    const heightData = document.getElementById('height');
    const input_height = heightData.value / 100; // convert cm to meters

    const weightData = document.getElementById('weight');
    const input_weight = weightData.value;

    if (!input_height || !input_weight) {
        document.getElementById('res').innerHTML = "⚠️ Please enter both height and weight!";
        return;
    }

    // BMI formula
    const bmi = (input_weight / (input_height * input_height)).toFixed(2);

    // BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight (Unfit)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight (Healthy)";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight (Unfit)";
    } else {
        category = "Obese (Unfit)";
    }

    // Show result
    const result = document.getElementById('res');
    result.innerHTML = `Result: BMI = ${bmi} → ${category}`;
});
