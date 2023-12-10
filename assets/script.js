/* Script for the day/date timer*/
setInterval(myTimer, 1000);

function myTimer() {
  let day = dayjs().format("dddd");
  let date = dayjs().format("DD MMM YYYY");
  let time = dayjs().format("HH:mm:ss");
  $("#currentDay").text(day + ", " + date);
}

/*Script for task input*/
//select inputElement
const inputElement = document.querySelector("#input-element-1");

//Keep saved content visible on page from local storage
const savedContent = localStorage.getItem("input-1");
if (savedContent) {
  inputElement.innerText = savedContent;
}

//Save content to local storage
function saveToLocalStorage() {
  let updatedContent = inputElement.innerText;
  console.log("Your 8am Task is: " + updatedContent);

  localStorage.setItem("input-1", updatedContent);
}

$("#save-column-1 .saveBtn").on("click", saveToLocalStorage);
