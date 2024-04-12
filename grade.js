// Define the students marks 
const marks = 70;

// Code that assigns grade to marks
if (marks > 70 && marks < 100) {
    console.log("Grade A");
}else if (marks >= 60 && marks <= 79) {
    console.log("Grade B");
}else if (marks >= 50 && marks <= 59) {
    console.log("Grade C");
}else if (marks >= 40 && marks <= 49) {
    console.log("Grade D");
}else if (marks > 0 && marks <= 40) {
    console.log("Grade E");
}

// Marks below 0 and greater than 100
else {
    console.log("Invalid Marks!");
}