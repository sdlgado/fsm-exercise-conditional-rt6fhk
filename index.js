// use IF/ELSE statements to print out (console.log()) a 
// letter grade (either "A", "B", "C", "D", or "F") 
// for the value stored as the score
// For example 90-100 = 'A | 80-89 = 'B' .... <60 = 'F'

var score = 75
var grade = undefined
/************************/
// CODE HERE
if(score >= 100) {
  grade = "A"
} else if (score >= 80) {
  grade= "B"
} else if (score >= 70) {
  grade = "C"
} else if (score >= 60) {
  grade = "D"
} else {
  grade = "F"
}

/************************/
console.log('Score: ' + score + ' Grade: ' + grade)