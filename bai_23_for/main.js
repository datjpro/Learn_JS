//23: for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let tong = 0;
for (let i = 1; i <= 100; i++) {
  tong += i;
}
console.log("Tổng từ 1 đến 100 là:", tong);

let t = 0;
let so = Number(prompt("Nhập một số nguyên dương từ 1 đến 100:"));
for (let i = 1; i <= so; i++) {
  t += i;
}
console.log("Tổng từ 1 đến", so, "là:", t);
