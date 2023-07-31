// let a =+prompt("Nhập vào số a");
// let b =+prompt("Nhập vào số b");
// console.log('====================================');
// console.log("tổng 2 số là "+(a+b));
// console.log('====================================');

// giải quyết bài toán tính tổng 2 số sử dụng hàm
// nhiẹm vụ : tính tổng 2 số
// tên hàm : total
// xác định đầu vào : 2 tham số a,b
// xác định đầu ra : trả về tổng của 2 số truyền vào

function total(a, b) {
  // khối lệnh thực thi của hàm
  let sum = a + b;
  return sum;
}

//  gọi hàm
let sum1 = total(3, 5);

// Ví dụ, để tính tổng của các số từ 1 đến 10, tổng của các số từ 20 đến 37, tổng của các số
// từ 35 – 49:
// var sum = 0;
// for (var i = 1; i <= 10; i++) sum += i;
// console.log("Sum from 1 to 10 is " + sum);

// sum = 0;
// for (var i = 20; i <= 37; i++) sum += i;
// console.log("Sum from 20 to 37 is " + sum);

// sum = 0;
// for (var i = 35; i <= 49; i++) sum += i;
// console.log("Sum from 35 to 49 is " + sum);

// nhiẹm vụ :tính tổng các số trong khoảng từ a => b
// tên hàm : sumNumbers
// xác định đầu vào : 2 tham số
// xác định đầu ra : tổng các số nằm trong khoảng a -> b

function sumNumbers(a, b) {
  let sum = 0;
  for (var i = a; i <= b; i++) {
    sum += i;
  }
}
let rs = sumNumbers(1, 10);
sumNumbers(20, 37);

// sau khi đã thực hiện xong hàm dòng 49

sumNumbers(35, 49);

// cách khai báo hàm tổng quát
function tenHam(a, b, c) {
  // phân thân của hàm

  // trả vê giá trị
  console.log(a);
  return [1, 2, 3, 4];
  console.log(b);
  console.log(c);
}

let result = tenHam(1, 2, 3);
console.log(result);

// phạm vi của biến
// var
// let và const

number = 5;
var number;
console.log(number);

// number1 = 10;
// let number1;
// console.log(number1);
function name(params) {
  let y = 10;
}
// console.log(y);

// pass by value
// ham increment để tăng giá trị của tham số n lên 1 đơn vị
function increment(n) {
  n++;
  console.log("x inside the method is " + n);
}

function main() {
  var x = 1;
  console.log("Before the call, x is " + x); // x = 1
  increment(1);
  console.log("After the call, x is " + x); // x = 2
}
main();

//ví dụ khác pass by value
let m = 1; // khai báo biến m = 1;
// định nghiaax 1 hàm nhận vào 1 tham số có tên là a và tăng a thêm 2 đơn vị
function changeM(a) {
  // tham trị với các kiểu dữ liệu dạng nguyên thủy : number, string boolean
  a = 10000;

}
// gọi hàm và truyền vào giá trị của biến m (pass by value)
changeM(m);

console.log(m);

function changeArr0(arr) {
  // kiểu dữ liệu object, function
  //  truyền tham chiếu hay còn gọi la truyền địa chỉ
  arr[0]++;
}
let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
// let arr3 = arr2;
// arr3[2] = 1000;

// // gọi hàm
changeArr0(arr1);
console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// chỉ sử dụng tham trị

// Trong JavaScript, tất cả các tham số của hàm mặc định được truyền như là giá trị. 
// Điều này có nghĩa là JavaScript sao chép giá trị của các biến mà bạn truyền tới hàm 
// vào biến cục bộ. Bất cứ sự thay đổi nào mà bạn thực hiện trên biến cục bộ trong hàm
//  không làm ảnh hướng tới tham số mà bạn truyền vào. Một cách khác, sự thay đổi của các
//   tham số không ảnh hưởng ra bên ngoài của hàm.
