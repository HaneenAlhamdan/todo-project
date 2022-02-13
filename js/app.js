// var myName = window.prompt("Enter your name");

// console.log("your name is",myName);


// var myGender = window.prompt("Enter your Gender");

// console.log("your gender is",myGender);
// if (myGender === "male" || myGender=== "Male"){
//    alert(`Welcome Mr  ${myName}` );
// }
// else if( myGender === "female"||myGender=== "Female")
// {
//     alert (`Welcome Miss ${myName}`);
// }
// else{
//     alert('Welcome');
// }
//  alert("Your age it cannot lees than 0");

//  var myAge = window.prompt("Enter your Age");

//  console.log("your age is",myAge);


//  confirm("Do you want to skip welocming meassge?");
//*********************************************************************

var answers = [];
var qu1 = prompt("Are you student in Lutc?");
var qu2 = prompt("Are your major in programmer?");
var qu3 = prompt("Did you work in programming");
function checkAnswer(q) {


//     if (q.toUpperCase() === "YES") {
//         console.log("yes");

//     }

//     else if (q.toUpperCase() === "NO") {
//         console.log("no");
//     }

//     else {
//         q = "invalid";
//         console.log("invalid");
//     }
//   //  console.log(answers);

if (q.toUpperCase() != "YES" && q.toUpperCase() != "NO" ) {
    q="invalid";
}
    answers.push(q);
}


checkAnswer(qu1);
checkAnswer(qu2);
checkAnswer(qu3);


// var qu2 = prompt("Are your major in programmer?");
// if (qu2.toUpperCase() === "YES") {
//     console.log("yes");

// }

// else if (qu2.toUpperCase() === "NO") {
//     console.log("no");
// }

// else {
//     qu2 = "invalid";
//     console.log("invalid");
// }
// answers.push(qu2);

// console.log(answers);




//  var qu1 = window.prompt("Are you student in Lutc?");
//  console.log(qu1);
//  if(qu1=== "yes" || qu1 ==="Yes"){
//      console.log("yes");

//  }

//  else if(qu1=== "no" || qu1 ==="No"){
//     console.log("no");
// }

// else {
//     console.log("invalid");
// }
// Answer.push(i);

//  var qu2 = window.prompt("Are your major in programmer?");
//  console.log(qu2);
//  if(qu2 === "yes" || qu2 ==="Yes"){
//     console.log("yes");
// }

// else if(qu2 === "no" || qu2 ==="No"){
//    console.log("no");
// }

// else {
//    console.log("invalid");
// }
// Answer.push(i);

//  var qu3 = window.prompt("Did you work in programming");
//  console.log(qu3);
//  if(qu3 === "yes" || qu3 ==="Yes"){
//     console.log("yes");
// }

// else if(qu3 === "no" || qu3 ==="No"){
//    console.log("no");
// }

// else {
//    console.log("invalid");
// }
// Answer.push(i);
// }

for (var i = 0; i < answers.length; i++) {
    console.log(answers[i]);
}
console.log(answers);

 //confirm("Are you student in Lutc?")

 //confirm("Are your major in programmer?")

 //confirm("Did you work in programming")
