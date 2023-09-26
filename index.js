// Inputs
const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");

//Button
const submit = document.querySelector(".submit-button");

// Error messages
const dayMessage = document.querySelector(".day-message");
const monthMessage = document.querySelector(".month-message");
const yearMessage = document.querySelector(".year-message");
const labelDay = document.querySelector(".label-day");
const labelMonth = document.querySelector(".label-month");
const labelYear = document.querySelector(".label-year");

// Outputs
const dayOutput = document.querySelector(".DD");
const monthOutput = document.querySelector(".MM");
const yearOutput = document.querySelector(".YY");

// Actual Dates
const years = new Date().getFullYear();
const monthDays = new Date().getMonth();
const day = new Date().getDate();

// User input

submit.addEventListener("click", () => {
  const dayValue = parseInt(dayInput.value);
  const monthValue = parseInt(monthInput.value);
  const yearValue = parseInt(yearInput.value);

  if (dayValue >= 32) {
    dayInput.style.borderColor = "red";
    dayMessage.innerText = "Must be a valid day";
    labelDay.style.color = "red";
  } else if (dayValue <= 0 || isNaN(dayValue)) {
    dayInput.style.borderColor = "red";
    dayMessage.innerText = "This field is required";
    labelDay.style.color = "red";
  } else {
    dayInput.style.borderColor = "";
    dayMessage.innerText = "";
    labelDay.style.color = "";
    dayOutput.innerHTML = Math.abs(dayValue - day);
  }

  if (monthValue <= 0 || isNaN(dayValue)) {
    monthInput.style.borderColor = "red";
    monthMessage.innerText = "This field is required";
    labelMonth.style.color = "red";
  } else if (monthValue > 12) {
    monthInput.style.borderColor = "red";
    monthMessage.innerText = "Must be a valid month";
    labelMonth.style.color = "red";
  } else {
    monthInput.style.borderColor = "";
    monthMessage.innerText = "";
    labelMonth.style.color = "";
    monthOutput.innerHTML = Math.abs(monthValue - monthDays);
  }

  if (yearValue >= 2024) {
    yearInput.style.borderColor = "red";
    yearMessage.innerText = "Must be in the past";
    labelYear.style.color = "red";
  } else if (yearValue <= 0 || isNaN(dayValue)) {
    yearInput.style.borderColor = "red";
    yearMessage.innerText = "This field is required";
    labelYear.style.color = "red";
  } else {
    yearInput.style.borderColor = "";
    yearMessage.innerText = "";
    labelYear.style.color = "";
    yearOutput.innerHTML = Math.abs(yearValue - years);
  }
});

