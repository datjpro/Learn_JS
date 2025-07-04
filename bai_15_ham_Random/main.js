//15: Hàm random
Math.random(); // trả về một số ngẫu nhiên trong khoảng [0, 1)
let randomNumber = Math.random(); // lấy một số ngẫu nhiên
console.log(randomNumber); // in ra số ngẫu nhiên

let randomNumber2 = Math.random(); // lấy một số ngẫu nhiên
console.log(randomNumber2 * 10); // in ra số ngẫu nhiên

let randomNumber3 = parseInt(Math.random() * 10); // lấy một số ngẫu nhiên
console.log(randomNumber3);

let randomNumber4 = Math.floor(Math.random() * 31 + 10); // lấy một số ngẫu nhiên
console.log(randomNumber4); // in ra số ngẫu nhiên trong khoảng [10, 40)
