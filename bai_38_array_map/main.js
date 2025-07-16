//38: map
//map(): tạo ra mảng mới từ mảng ban đầu (mảng gốc)
//let newArray = array.map(
//    function(element, index, array){
//        return element;
//    },thisArg);
//ví dụ 1: nhân đôi giá trị trong mảng
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = numbers.map(function (numbers) {
  return numbers * 2;
});

console.log("Mảng sau khi nhân đôi:", doubled);
console.log("Mảng gốc:", numbers);
//ví dụ 2: chuyển đổi mảng đối tượng thành mảng có tên
const users = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Nguyễn Văn B" },
  { id: 3, name: "Nguyễn Văn C" },
  { id: 4, name: "Nguyễn Văn D" },
];
const names = users.map((users) => users.name);
console.log(names);
