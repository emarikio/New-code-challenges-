let marks = "Enter a number between 0-100"
function inputStudentGrades(marks) {
    if (marks > 79){
        grade = 'A';
}else if (marks >= 60, marks <= 79) {
    grade = 'B';
}else if (marks >= 49, marks <= 59) {
    grade = 'C';
}else if (marks >= 40, marks <= 49) {
    grade = 'D';
}else {
    return 'E';
}
}
console.log(inputStudentGrades);