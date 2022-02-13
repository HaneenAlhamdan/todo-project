var myName = window.prompt("Enter your name");

console.log("your name is",myName);


var myGender = window.prompt("Enter your Gender");

console.log("your gender is",myGender);
if (myGender === "male" || myGender=== "Male"){
   alert(`Welcome Mr  ${myName}` );
}
else if( myGender === "female"||myGender=== "Female")
{
    alert (`Welcome Miss ${myName}`);
}
else{
    alert('Welcome');
}
 alert("Your age it cannot lees than 0");

 var myAge = window.prompt("Enter your Age");

 console.log("your age is",myAge);


/confirm("Do you want to skip welocming meassge?")
