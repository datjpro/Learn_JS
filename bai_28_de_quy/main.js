//28: de quy
//giai thua
function giaiThua(n) {
  if (n == 0 || n == 1) return 1;
  else {
    return n * giaiThua(n - 1);
  }
}

var a = Number(prompt("Nhap so a: "));
giaiThua(a);
console.log(`Giai thua cua ${a} la: `, giaiThua(a));

//fibonacci
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}

var b = Number(prompt("Nhap so b: "));
f(b);
console.log(`Fibonacci cua ${b} la: `, f(b));
