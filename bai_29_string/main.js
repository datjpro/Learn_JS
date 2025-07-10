//29: String
//1. cac cah xuat chuoi
console.log("Xin chao cac ban"); // chuoi

// 2. khai bao chuoi
let str1 = "Xin chao\ncac ban"; // chuoi
console.log(str1); // chuoi da dinh dang
let hi = `hom nay tro dep qua,
toi rat vui`;
console.log(hi); // chuoi da dinh dang

//3. quy tac index trong chuoi
let ten = "Leon";
console.log(ten[0]); // L
console.log(ten[1]); // e
console.log(ten[2]); // o
console.log(ten[3]); // n

//4. thuoc tinh length
let dongvat = "con meo";
console.log(dongvat.length); // 7

//5.1. phương thức cắt chuỗi slice, substring, substr
let s4 = "0123456789";
let s5 = s4.slice(2, 6); //cắt từ vị trí 2 đến 6-1
console.log(s5);
