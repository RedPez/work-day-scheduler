/* Script for the day/date timer*/
setInterval(myTimer, 60000);

function myTimer() {
  let day = dayjs().format("dddd");
  let date = dayjs().format("DD MMM YYYY");
  let time = dayjs().format("HH:mm:ss");
  $("#currentDay").text(day + ", " + date);
}

/*Script for task input*/
let timeBlocks = 11;

// for loop to go through each element at a time
for (let i = 1; i <= timeBlocks; i++) {
  // select inputElement
  const inputElement = document.querySelector("#input-element-${i}");

  // Keep saved content visible on page from local storage
  const savedContent = localStorage.getItem("input-${i}");
  if (savedContent) {
    inputElement.innerText = savedContent;
  }

  // Save content to local storage
  function saveToLocalStorage() {
    let updatedContent = inputElement.innerText;
    console.log("Your ${i}am Task is: " + updatedContent);

    localStorage.setItem("input-${i}", updatedContent);
  }

  // Add a click event listener to the "Save" button
  $("#save-column-${i} .saveBtn").on("click", saveToLocalStorage);
}

/*Script for colour change depending on time*/
let timeColor = document.querySelector("");
//hmmmmm how do we do this?

//probably need a function and a loop

//Loop
for (let i = 1; i <= timeBlocks; i++) {
  // select inputElement
  const inputElement = document.querySelector("#input-element-${i}");
}

/*if (i < currentHour){
  add past colour
} else if (i === currentHour) {
  add present colour
} else {
  add future colour;
}*/
