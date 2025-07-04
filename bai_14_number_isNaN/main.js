//14:
let str = "123a";
console.log(typeof str); // string
let num = Number(str); // chuyển đổi chuỗi thành số
console.log(num); // NaN
console.log(typeof num); // number

// let so = prompt("Nhập một số: ");
// console.log(so);

let a = 123;
console.log(isNaN(a));
let b = "abc";
console.log(isNaN(b)); // true, vì "abc" không phải là một số

let c = Number(true);
console.log(typeof c); // number
console.log(isNaN(c)); // false, vì true được chuyển đổi thành 1

console.log(typeof ("siu" / "hehe"));
console.log(isNaN("siu" / "hehe"));
