//13: các hàm toán học

// hàm Math.sqrt() tính căn bậc hai của một số
let a = Math.sqrt(16);
console.log(a);

// hàm Math.pow() tính lũy thừa của một số
let b = Math.pow(2, 3); // 2^3
console.log(b);

// hàm Math.abs() tính giá trị tuyệt đối của một số
let c = Math.abs(-5);
console.log(c);

// hàm Math.ceil() làm tròn số lên
let d = Math.ceil(4.2);
console.log(d);
// hàm Math.floor() làm tròn số xuống
let e = Math.floor(4.8);
console.log(e);
// hàm Math.round() làm tròn số đến số nguyên gần nhất
let f = Math.round(4.5);
console.log(f);

// làm tròn x đến chữ số hàng đơn vị
let g = 3.14159;
let gGrounded = g.toFixed(2); // làm tròn đến 2 chữ số thập phân
console.log(gGrounded); // "3.14"
console.log(typeof gGrounded); // string
// chuyển đổi chuỗi thành số
let gNumber = Number(gGrounded); // chuyển đổi chuỗi thành số
console.log(gNumber); // 3.14
console.log(typeof gNumber); // number

// hàm Math.max() trả về giá trị lớn nhất trong một danh sách các số
let h = Math.max(1, 2, 3, 4, 5);
console.log(h);
// hàm Math.min() trả về giá trị nhỏ nhất trong một danh sách các số
let i = Math.min(1, 2, 3, 4, 5);
console.log(i);
