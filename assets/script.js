/* Script for the day/date timer*/
setInterval(myTimer, 1000);

function myTimer() {
  let day = dayjs().format("dddd");
  let date = dayjs().format("DD MMM YYYY");
  let time = dayjs().format("HH:mm:ss");
  $("#currentDay").text(day + ", " + date);
}
