const talkingCalendar = function(date) {
  // Split the input date string by '/' to get an array of strings
  const dateParts = date.split('/');
  // Convert the month string to a number
  const month = parseInt(dateParts[1]);
  // Create an array of month names
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  // Use the month number to get the name of the month
  const monthName = monthNames[month - 1];
  // Get the day string
  let day = dateParts[2];
  // Append the ordinal ending to the day string
  if (day === "01" || day === "21" || day === "31") {
    day += "st";
  } else if (day === "02" || day === "22") {
    day += "nd";
  } else if (day === "03" || day === "23") {
    day += "rd";
  } else {
    day += "th";
  }
  // Get the year string
  const year = dateParts[0];
  // Return the full date string
  return `${monthName} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
