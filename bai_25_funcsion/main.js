//25: functions:
// bài toán tính tổng 2 số a,b
let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));

function tinhTong(a = 0, b = 0) {
  return a + b;
}
// gọi hàm tính tổng
let tong = tinhTong(a, b);
console.log(tong);

let c = Number(prompt("Nhập số c:"));
function inRa(c) {
  for (let i = 1; i <= c; i++) {
    console.log("hello " + i);
  }
}
let inRa1 = inRa(c);
