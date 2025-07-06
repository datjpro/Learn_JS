//20: while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let so = prompt("Nhập một số nguyên dương:");
while (so < 1 || so > 100) {
  console.log("Số không hợp lệ, vui lòng nhập lại:");
  so = Number(prompt("Nhập một số nguyên dương từ 1 đến 100:"));
}
console.log("Số hợp lệ:", so);
