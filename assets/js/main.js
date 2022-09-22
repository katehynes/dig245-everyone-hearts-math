/* javascript */
// $("h1").hide();
//$(".clickme").click(function(eventObject) {
//console.log("ah", eventObject);
//}


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
  console.log("Number of days between " + firstDay + " and " + secondDay + " is: " + distance);
}

//let str = "";

//   if (username == requiredUsername) {
//     str = `
//     <div class="alert alert-success" role="alert">
//     Welcome, friend. </div>
//     `
//   } else {
//     str = `
//     <div class="alert alert-danger" role="alert">Not allowed</div>
//     `
//   }
//
//   $(".output").html(str);
// });
