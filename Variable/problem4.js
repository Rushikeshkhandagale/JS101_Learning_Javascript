// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
let name= "Rushikesh Sanjay Khandagale";
let school_name= "SVA";
let grade= "A+";
let section = "B";
let roll_No= 21;
let maths= 77;
let science=76;
let english=75;
let total = maths + science + english;
let percentage = (total / 300) * 100;

// Print the report card of the student (You can make it look nice by using some keyboard symbols )

console.log("___________________________________________");
console.log("________________Report card________________");
console.log("Student name - ",name                      );
console.log("Grade -", grade                            );
console.log("Section -", section);
console.log("Roll No -",roll_No);
console.log("___________________________________________");
console.log("Subjects");
console.log("Math -", maths);
console.log("English -", english);
console.log("Science -", science);
console.log("___________________________________________");
console.log("Total -", total);
console.log("Percentage -", percentage);
console.log("___________________________________________");

