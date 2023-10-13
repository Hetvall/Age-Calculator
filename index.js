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
  function resetErrorState() {
    dayMessage.innerText = "";
    dayInput.style.borderColor = "";
    labelDay.style.color = "";
    monthMessage.innerText = "";
    monthInput.style.borderColor = "";
    labelMonth.style.color = "";
    yearMessage.innerText = "";
    yearInput.style.borderColor = "";
    labelYear.style.color = "";
  }

  // errorState
  function errorState() {
    dayInput.style.borderColor = "red";
    labelDay.style.color = "red";
    monthInput.style.borderColor = "red";
    labelMonth.style.color = "red";
    yearInput.style.borderColor = "red";
    labelYear.style.color = "red";
  }

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
      dayInput.addEventListener("focus", resetErrorState);
      monthInput.addEventListener("focus", resetErrorState);
      yearInput.addEventListener("focus", resetErrorState);

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

      // Check Empty Input
      if (!dayInput.value || !monthInput.value || !yearInput.value) {
        if (!dayInput.value) {
          dayMessage.innerText = "This field is required";
          dayInput.style.borderColor = "red";
          errorState();
        }
        if (!monthInput.value) {
          monthMessage.innerText = "This field is required";
          monthInput.style.borderColor = "red";
          errorState();
        }

        if (!yearInput.value) {
          yearMessage.innerText = "This field is required";
          yearInput.style.borderColor = "red";
          errorState();
        }
        return;
      } else {
        resetErrorState();
      }

      // Check if the input is 0 or less
      if (dayValue <= 0 || monthValue <= 0 || yearValue <= 0) {
        if (dayValue <= 0) {
          dayMessage.innerText = "Must be a valid day";
          dayInput.style.borderColor = "red";
          labelDay.style.color = "red";
          errorState();
          hasError = true;
        }

        if (monthValue <= 0) {
          monthMessage.innerText = "Must be a valid month";
          monthInput.style.borderColor = "red";
          labelMonth.style.color = "red";
          errorState();
          hasError = true;
        }

        if (yearValue <= 0) {
          yearMessage.innerText = "Must be a valid year";
          yearInput.style.borderColor = "red";
          labelYear.style.color = "red";
          errorState();
          hasError = true;
        }
        return;
      } else {
        resetErrorState();
      }

      // check if input is a valid digit
      if (
        dayValue < 1 ||
        dayValue > 31 ||
        new Date(yearValue, monthValue - 1, dayValue) > new Date() ||
        monthValue < 1 ||
        monthValue > 12 ||
        yearValue > currentYear ||
        new Date(yearValue, monthValue - 1, dayValue).getDate() !== dayValue
      ) {
        if (
          dayValue < 1 ||
          dayValue > 31 ||
          (yearValue == currentYear &&
            monthValue == currentMonth &&
            dayValue > currentDay) ||
          dayValue > numberOfDaysInMonths[monthValue - 1]
        ) {
          dayMessage.innerText = "Must be a valid day";
          dayInput.style.borderColor = "red";
          labelDay.style.color = "red";
          errorState();
          hasError = true;
        }

        if (monthValue < 1 || monthValue > 12) {
          monthMessage.innerText = "Must be a valid month";
          monthInput.style.borderColor = "red";
          labelMonth.style.color = "red";
          errorState();
          hasError = true;
        }

        const maxDayInMonth = numberOfDaysInMonths[monthValue - 1];
        if (dayValue > maxDayInMonth) {
          dayMessage.innerText = "Must be a valid day";
          dayInput.style.borderColor = "red";
          labelDay.style.color = "red";
          errorState();
          hasError = true;
        }

        if (yearValue > currentYear) {
          yearMessage.innerText = "Must be in the past";
          yearInput.style.borderColor = "red";
          labelYear.style.color = "red";
          errorState();
          hasError = true;
        }
        return;
      } else {
        resetErrorState();
      }

      if (
        new Date(yearValue, monthValue - 1, dayValue).getDate() !== dayValue
      ) {
        yearMessage.innerText = "Must be a valid year";
        yearInput.style.borderColor = "red";
        labelYear.style.color = "red";
        errorState();
        hasError = true;
      } else {
        resetErrorState();
      }

      if (
        currentYear < yearValue ||
        (currentYear === yearValue && currentMonth < monthValue)
      ) {
        if (
          currentMonth > monthValue ||
          (currentMonth === monthValue && currentDay < dayValue)
        ) {
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
      }

      if (currentMonth < monthValue) {
        yearsDifference -= 1;
        monthDifference += 12;
      }

      if (!hasError) {
        resetErrorState();
        dayOutput.textContent = Math.abs(dayDifference);
        monthOutput.textContent = Math.abs(monthDifference);
        yearOutput.textContent = Math.abs(yearsDifference);
      }

      if (hasError) {
        errorState();
      }
      // Outputs
    };

    inputValidate(dayValue, monthValue, yearValue);
  };
  // Event
  submit.addEventListener("click", calculateAge);
});
