// Bài 2: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn

// chức năng : tính diện tích và chu vi 
// tên hàm : calculateAreaAndPerimeterOfCircle
// tham số đầu vào : 1 tham số là bán kính
// giá trị trả về : 1 mảng 2 phần tử gồm diện tích và chu vi của hình tròn


// triển khai code 
function calculateAreaAndPerimeterOfCircle(radius) {
    let area = Math.PI*radius*radius; // DIỆN TÍCH
    let perimeter = 2*Math.PI * radius; // Chu vi
    return [area, perimeter]; // trả về giá trị 
}


// kiểm tra hàm hoạt động tốt không
// th1 r=5
console.log(calculateAreaAndPerimeterOfCircle(5));
console.log(calculateAreaAndPerimeterOfCircle(15));
console.log(calculateAreaAndPerimeterOfCircle(20));
console.log(calculateAreaAndPerimeterOfCircle(100));

//  Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không?

function isANumber(string) {
    let n = parseInt(string);
    console.log(n);
    // if(Object.is(n,NaN)){
    //     return false
    // }
    //     return true
    // đúng hoặc sai
    return string <= 100 || string > 100;
}


// isNaN()
console.log(isANumber("e"));
console.log(isANumber(0/0));


function demoVariableArea(number){
   let n=2;
   if(n>4){
    let check = true;
    console.log(check);
   } 
   for(let i=0 ; i<n; i++){
    let sum = 0;
    sum+=i;
   }
}

function isInteger (number){
    return number > 0;
}
swap(a,b);

