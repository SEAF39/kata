function instructorWithLongestName(instructors) {
  let longestName = "";
  let longestNameInstructor = {};
  for (const instructor of instructors) {
    if (instructor.name.length > longestName.length) {
      longestName = instructor.name;
      longestNameInstructor = instructor;
    }
  }
  return longestNameInstructor;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));