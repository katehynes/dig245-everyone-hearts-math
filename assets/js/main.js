/* javascript */

const MILLI_PER_DAY = 1000 * 60 * 60 * 24;

$("form").submit(function(e) {
  e.preventDefault();
  let firstDay = new Date(document.getElementById("firstDay").value);
  let secondDay = new Date(document.getElementById("secondDay").value);
  calculateDays(firstDay, secondDay);
})

function calculateDays(firstDay, secondDay) {
  let distance;
  let time1 = firstDay.getTime();
  let time2 = secondDay.getTime();
  if (time1 < time2) {
    distance = time2 - time1;
  } else {
    distance = time1 - time2;
  }
  distance = distance / MILLI_PER_DAY;
  document.getElementById("distance-in-day").textContent = distance;
  console.log("Number of days between " + firstDay + " and " + secondDay + " is: " + distance);
  console.log("The Math!");
  console.log("number of milliseconds in a day: 1000 milliseconds/sec * 60 sec/min * 60min/hour * 24hour/day");
  console.log("distance = ((time of start date: " + time1 + ") - (time of destination: " + time2 + ") / (number of milliseconds per day))");
}
