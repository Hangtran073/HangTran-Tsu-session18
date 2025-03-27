
let students = [];
function addStudent() {
    console.log("click");
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const className = document.getElementById("class").value.trim();

    if (name === "" || age === "" || className === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;

    }

    let student = {
        id: students.length + 1,
        name: name,
        age: age,
        className: className
    }
    students.push(student);
    console.log("students", students);

    showStudents(students);
}

//Tạo hàm hiển thị danh sách nhân viên
function showStudents(list) {
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += `
            <tr>
                <td>${i + 1}</td>
                <td>${list[i].name}</td>
                <td>${list[i].age}</td>
                <td>${list[i].class}</td>

                <td>
                    <button onclick= updateStudent(${i}) >Sửa</button>
                    <button onclick= removeStudent(${i}) >Xóa</button>
                </td>
         
            </tr >
            `
    }
    document.getElementById("list").innerHTML = str;
}
showStudents();

function removeStudent(index) {
    console.log("index", index);
    let confirmDelete = confirm("Bạn có muốn xóa hay không?");
    if (confirmDelete) {
        students.splice(index, 1);
        showStudents(students);
    }
}

function updateStudent(index) {
    console.log("index", index);
    student[index].name = prompt("Tên mới");
    student[index].age = prompt("Tuổi mới");
    student[index].class = prompt("Tên lớp mới");
    showStudents(students);
}
function findStudent() {
    console.log("tìm kiếm!");
    let searchName = document.getElementById("search").value;
    let result = students.filter(item => item.age.includes(searchName));
    showStudents(students);

}