//26: scope
// global scope
let globalVar = "I am a global variable";
// function scope
function myFunction() {
  let functionVar = "I am a function variable";
  console.log(globalVar); // Accessing global variable
  console.log(functionVar); // Accessing function variable
}
// block scope
if (true) {
  let blockVar = "I am a block variable";
  console.log(blockVar); // Accessing block variable
}
