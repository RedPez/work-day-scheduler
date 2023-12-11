/* Script for the day/date timer*/
setInterval(myTimer, 1000);

function myTimer() {
  let day = dayjs().format("dddd");
  let date = dayjs().format("DD MMM YYYY");
  $("#currentDay").text(day + ", " + date);
}

/*Script for task input*/
let timeBlocks = 11;

// for loop to go through each element at a time
for (let i = 1; i <= timeBlocks; i++) {
  // select inputElement
  const inputElement = document.querySelector(`#input-element-${i}`);

  // Keep saved content visible on page from local storage
  const savedContent = localStorage.getItem(`input-${i}`);
  if (savedContent) {
    inputElement.innerText = savedContent;
  }

  // Save content to local storage
  function saveToLocalStorage() {
    let updatedContent = inputElement.innerText;
    let time = $(`#time-${i}`).text();
    console.log(`Your ${time} task is: ` + updatedContent);

    localStorage.setItem(`input-${i}`, updatedContent);
  }

  // Add a click event listener to the "Save" button
  $(`#save-column-${i} .saveBtn`).on("click", saveToLocalStorage);
}

//Add times to calendar using jQuery

// Function to set the time for each element with ID starting from 1 to timeBlocks
function diaryTimeElement() {
  for (let i = 1; i <= timeBlocks; i++) {
    // Get the current time in 24-hour format
    const diaryTime = dayjs()
      .hour(i + 7)
      .minute(0)
      .format("HH:mm");

    // Set the time for the corresponding element
    $(`#time-${i}`).text(diaryTime);

    // Display the time within the <p> tag with class "hour"
    $(`#time-${i}`).closest(".hour").attr("data-time", diaryTime);
  }
}

/*Script for colour change depending on time*/
let currentHour = dayjs().hour();

//Function for colour change dependent on time
//set the refresh rate for the page
setInterval(changeColour, 60000);
//the actual function
function changeColour() {
  // Loop to move through each time block and add/remove class as needed.
  for (let i = 1; i <= timeBlocks; i++) {
    // Select inputColumn by ID
    const inputColumn = $(`#input-column-${i}`);

    // Remove all classes
    inputColumn.removeClass("past present future");

    // Indicate if past, present, or future via class
    if (i + 7 < currentHour) {
      inputColumn.addClass("past");
    } else if (i + 7 === currentHour) {
      inputColumn.addClass("present");
    } else {
      inputColumn.addClass("future");
    }
  }
}

// Call the functions to set the time when the page loads
diaryTimeElement();

changeColour();

setInterval(changeColour, 60000);
