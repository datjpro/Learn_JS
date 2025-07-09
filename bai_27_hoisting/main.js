//27: Hoisting
console.log("gia tri cua bien c la: ", c); // undefined
var c = 9; // Hoisting: khai bao bien c o day, nhung duoc di chuyen len tren cung cua ham
// let c = 9; khong su dung, no nam trong vung chet tam thoi
// main.js:2 Uncaught ReferenceError: Cannot access 'c' before initialization
//     at main.js:2:40

// so sach var vs let
// var : co pham vi function scope
function testVar() {
  if (true) {
    var y = 20;
    console.log(`${y} trong block scope`); // 20
  }
  console.log(`${y} trong function scope`); // 20
}
testVar();

// let,const : co pham vi block scope
function testLet() {
  if (true) {
    let z = 30;
    console.log(`${z} trong block scope`); // 30
  }
  console.log(`${z} trong function scope`);
  // main.js:25 Uncaught ReferenceError: z is not defined
  //   at testLet (main.js:25:18)
  //   at main.js:27:1
}
testLet();

//khai bao lai
var a = 10;
var a = 20;
console.log(a); // 20
// let, const khong the khai bao lai
// let b = 10;
// let b = 20;
// console.log(b); // Uncaught SyntaxError: Identifier 'b' has already been declared
