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
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

// User input

submit.addEventListener("click", () => {
  const dayValue = parseInt(dayInput.value);
  const monthValue = parseInt(monthInput.value);
  const yearValue = parseInt(yearInput.value);

  if (dayValue > 31) {
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
    dayOutput.innerHTML = Math.abs(dayValue - currentDay);
  }

  if (monthValue <= 0 || isNaN(monthValue)) {
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
    monthOutput.innerHTML = Math.abs(monthValue - currentMonth);
  }

  if (yearValue > currentYear) {
    yearInput.style.borderColor = "red";
    yearMessage.innerText = "Must be in the past";
    labelYear.style.color = "red";
  } else if (yearValue <= 0 || isNaN(yearValue)) {
    yearInput.style.borderColor = "red";
    yearMessage.innerText = "This field is required";
    labelYear.style.color = "red";
  } else {
    yearInput.style.borderColor = "";
    yearMessage.innerText = "";
    labelYear.style.color = "";
    yearOutput.innerHTML = Math.abs(yearValue - currentYear);
  }
});
