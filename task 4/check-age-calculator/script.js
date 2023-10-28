document.getElementById("calculate-button").addEventListener("click", ageCalculate);

function ageCalculate() {
    const birthDate = new Date(document.getElementById("date-input").value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = Math.floor(ageInDays % 30);

    displayResult(years, months, days);
}

function displayResult(bYear, bMonth, bDate) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}
