//34: java objects
let a = 5;
let b = 7.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);
let str = "Hello, World!";
console.log(typeof str);

M = ["apple", "banana", "cherry"];
console.log(typeof M);

let student = {
  fullName: "to pham thanh dat",
  birthYear: 2004,
  isStudent: true,
  address: {
    city: "Thanh pho Ho Chi Minh",
    district: "Quan 9",
  },
  school: "HUTECH",
  scores: [8, 9, 10],
  getAge: function () {
    return 2025 - this.birthYear;
  },

  diemTrungBinh: function () {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length;
  },
};
console.log(student);
console.log(student.getAge());
console.log(student.diemTrungBinh());
