//Bài 1: Tạo đối tượng chứa thông tin cá nhân;
let person= {
    name: "Nguyễn Thị B",
    age: 25,
    address:"Hồ Chí Minh, Việt Nam",
    phone: "1234456789"
};
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
console.log("Số điện thoại:", person.phone);

//Bài 2: Tạo đối tượng học sinh và lưu vào mảng;

let newStudent = {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "nam",
    age: 20,
    mark: 8,    
};
let students = [];
students.push(newStudent);

console.log("Danh sách học sinh:", students);
console.log("Thông tin học sinh mới:", students[0]);

//Bài 3: 

//thêm nhiều học sinh vào mảng;

students.push(
    {
        id: 2,
        name: "Nguyễn Văn C",
        gender: "nữ",
        age: 21,
        mark: 9,    
    },
    {
        id: 3,
        name: "Nguyễn Văn B",
        gender: "nam",
        age: 22,
        mark: 7.5,    
    }
)

//tìm học sinh có điểm cao nhất
let topStudent = students.reduce((max, student) => (student.mark > max.mark? student :max), students[0]);
console.log("Học sinh có điểm cao nhất:", topStudent);