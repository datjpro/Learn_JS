//32: array
//khai báo mảng
//cách 1: khai báo mảng rỗng
let arr1 = [];
console.log(arr1); // In ra mảng rỗng
//cách 2: khai báo mảng với các phần tử
let arr2 = [1, 2, "three", 4, true];
console.log(arr2); // In ra mảng với các phần tử

//khai bao mang  su dung array constructor
let arr3 = new Array();
console.log(arr3); // In ra mảng rỗng

let arr4 = new Array(1, 2, "three", 4, true);
console.log(arr4); // In ra mảng với các phần tử

let arrayWithLength = new Array(5);
console.log(arrayWithLength); // In ra mảng với độ dài 5, các phần tử là undefined

//truy xuat mang
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5[0]); // In ra phần tử đầu tiên của mảng (1)

let arr6 = ["apple", "banana", "cherry"];
console.log(arr6);
console.log(arr6.length);
console.log(arr5.length);

//thay doi gia tri trong mang
arr6[1] = "orange"; // Thay đổi phần tử thứ hai thành "orange"
console.log(arr6); // In ra mảng sau khi thay đổi

//duyet qua mang
let arr7 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]); // In ra từng phần tử của mảng
  arr7[i] = arr7[i] * 2;
}
console.log(arr7); // In ra mảng sau khi duyệt

//for...of cho phép duyệt qua các phần tử của mảng mà không cần sử
let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
  //element la phan tu dai dien cua mang
  if (element % 2 === 0) {
    count++;
    console.log(`Số chẵn: ${element}`); // In ra các số chẵn
  }
}
// In ra mảng sau khi duyệt
console.log(arr8); // Mảng không thay đổi vì không gán lại giá trị
