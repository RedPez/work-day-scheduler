setInterval(myTimer, 1000);

function myTimer() {
  let day = dayjs().format("dddd");
  let date = dayjs().format("DD MMM YYYY");
  $("#currentDay").text(day + ", " + date);
}
