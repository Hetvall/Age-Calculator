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

// Current Date
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

//Event
document.addEventListener("DOMContentLoaded", () => {
  // Months
  const numberOfDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Reset errors
  dayMessage.innerText = "";
  dayInput.style.borderColor = "";
  labelDay.style.color = "";
  monthMessage.innerText = "";
  monthInput.style.borderColor = "";
  labelMonth.style.color = "";
  yearMessage.innerText = "";
  yearInput.style.borderColor = "";
  labelYear.style.color = "";

  // calculating age
  const calculateAge = () => {
    let dayValue = parseInt(dayInput.value);
    let monthValue = parseInt(monthInput.value);
    let yearValue = parseInt(yearInput.value);

    let yearsDifference = currentYear - yearValue;
    let monthDifference = currentMonth - monthValue;
    let dayDifference = currentDay - dayValue;

    // Conditionals
    const inputValidate = (dayValue, monthValue, yearValue) => {
      // Focus to clear an error by clicking on Input.
      dayInput.addEventListener("focus", () => {
        dayMessage.innerText = "";
        dayInput.style.borderColor = "";
        labelDay.style.color = "";
      });

      monthInput.addEventListener("focus", () => {
        monthMessage.innerText = "";
        monthInput.style.borderColor = "";
        labelMonth.style.color = "";
      });

      yearInput.addEventListener("focus", () => {
        yearMessage.innerText = "";
        yearInput.style.borderColor = "";
        labelYear.style.color = "";
      });

      let hasError = false;
      // Check if it is a number and avoid NaN output.
      if (isNaN(dayValue)) {
        dayMessage.innerText = "This field is required";
        dayInput.style.borderColor = "red";
        labelDay.style.color = "red";
        hasError = true;
      }

      if (isNaN(monthValue)) {
        monthMessage.innerText = "This field is required";
        monthInput.style.borderColor = "red";
        labelMonth.style.color = "red";
        hasError = true;
      }

      if (isNaN(yearValue)) {
        yearMessage.innerText = "This field is required";
        yearInput.style.borderColor = "red";
        labelYear.style.color = "red";
        hasError = true;
      }

      if (!dayInput.value || !monthInput.value || !yearInput.value) {
        if (!dayInput.value) {
          dayMessage.innerText = "This field is required";
          dayInput.style.borderColor = "red";
          dayInput.style.borderColor = "red";
          monthInput.style.borderColor = "red";
          yearInput.style.borderColor = "red";
        }
        if (!monthInput.value) {
          monthMessage.innerText = "This field is required";
          monthInput.style.borderColor = "red";
          dayInput.style.borderColor = "red";
          monthInput.style.borderColor = "red";
          yearInput.style.borderColor = "red";
        }

        if (!yearInput.value) {
          yearMessage.innerText = "This field is required";
          yearInput.style.borderColor = "red";
          dayInput.style.borderColor = "red";
          monthInput.style.borderColor = "red";
          yearInput.style.borderColor = "red";
        }
        return;
      }

      // Check if the input is 0 or less
      if (dayValue <= 0) {
        dayMessage.innerText = "Must be a valid day";
        dayInput.style.borderColor = "red";
        labelDay.style.color = "red";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        hasError = true;
      }
      if (monthValue <= 0) {
        monthMessage.innerText = "Must be a valid month";
        monthInput.style.borderColor = "red";
        labelMonth.style.color = "red";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        hasError = true;
      }
      if (yearValue <= 0) {
        yearMessage.innerText = "Must be a valid year";
        yearInput.style.borderColor = "red";
        labelYear.style.color = "red";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        hasError = true;
        return;
      }

      // check if input is a valid digit
      if (
        dayValue < 1 ||
        dayValue > 31 ||
        new Date(yearValue, monthValue - 1, dayValue) > new Date()
      ) {
        dayMessage.innerText = "Must be a valid day";
        dayInput.style.borderColor = "red";
        labelDay.style.color = "red";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        hasError = true;
        return;
      }
      if (monthValue < 1 || monthValue > 12) {
        monthMessage.innerText = "Must be a valid month";
        monthInput.style.borderColor = "red";
        labelMonth.style.color = "red";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        hasError = true;
        return;
      }

      if (
        yearValue > currentYear ||
        new Date(yearValue, monthValue - 1, dayValue).getDate() !== dayValue
      ) {
        yearMessage.innerText = "Must be in the past";
        yearInput.style.borderColor = "red";
        labelYear.style.color = "red";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        hasError = true;
        return;
      } else {
        yearMessage.innerText = "";
        yearInput.style.borderColor = "";
        labelYear.style.color = "";
      }

      if (currentDay < dayValue) {
        monthDifference -= 1;
        const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        dayDifference += numberOfDaysInMonths[lastMonth - 1];

        // Leap Year
        if (
          lastMonth === 2 &&
          ((currentYear % 4 === 0 && currentYear % 100 !== 0) ||
            (yearValue % 4 === 0 && yearValue % 100 !== 0))
        ) {
          dayDifference -= 1;
        }
      }

      if (currentMonth < monthValue) {
        yearsDifference -= 1;
        monthDifference += 12;
      }

      if (!hasError) {
        dayOutput.textContent = Math.abs(dayDifference);
        monthOutput.textContent = Math.abs(monthDifference);
        yearOutput.textContent = Math.abs(yearsDifference);
      }

      // Outputs
    };

    inputValidate(dayValue, monthValue, yearValue);
  };
  // Event
  submit.addEventListener("click", calculateAge);
});
