//31 : date time
//Khai báo đối tượng Date
let currentDate = new Date();
//Lấy ngày tháng năm hiện tại
console.log(currentDate); // In ra ngày giờ hiện tại
console.log(typeof currentDate); // In ra ngày giờ hiện tại

//Lấy các thành phần của ngày
let day = currentDate.getDate(); // Lấy ngày
let month = currentDate.getMonth() + 1; // Lấy tháng (tháng bắt đầu từ 0)
let year = currentDate.getFullYear(); // Lấy năm
let hours = currentDate.getHours(); // Lấy giờ
let minutes = currentDate.getMinutes(); // Lấy phút
let seconds = currentDate.getSeconds(); // Lấy giây
console.log(`Ngày: ${day}, Tháng: ${month}, Năm: ${year}`); // In ra ngày tháng năm
console.log(`Giờ: ${hours}, Phút: ${minutes}, Giây: ${seconds}`); // In ra giờ phút giây

//timestamp
let timestamp1 = new Date(0);
console.log(timestamp1); // In ra ngày giờ tương ứng với timestamp 0
let currentTimeStamp = currentDate.getTime(); // Lấy timestamp hiện tại
console.log(currentTimeStamp); // In ra timestamp hiện tại
