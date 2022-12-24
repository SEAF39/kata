const organizeInstructors = function(instructors) {
  const organizedInstructors = {};

  for (const instructor of instructors) {
    const { name, course } = instructor;
    if (!organizedInstructors[course]) {
      organizedInstructors[course] = [name];
    } else {
      organizedInstructors[course].push(name);
    }
  }

  return organizedInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
// Output: { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"] }

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
// Output: { Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"] }
