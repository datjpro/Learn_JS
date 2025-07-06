//18: Kiểm tra giá trị truthy/falsy
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);

// 8 giá trị falsy trong JavaScript chuyển sang kiểu boolean sẽ là false
//falsy values: false, 0, "", null, undefined, NaN, 0n
console.log(typeof 0n);
let c = Boolean(null);
console.log(c);
console.log(typeof c);

//ví dụ ktra 1 biến đã được gán giá trị hay undefine
let salary;
console.log(salary);
if (salary) {
  console.log("Biến salary đã được gán giá trị");
} else {
  console.log("Biến salary chưa được gán giá trị");
}
