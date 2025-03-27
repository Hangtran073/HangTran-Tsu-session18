//bài 2;

let courses = [
    { name: "HTML", complete: false },
    { name: "CSS", complete: false },
    { name: "Basic of javascript", complete: false },
    { name: "Node package Manager(npm)", complete: false },
    { name: "Git", complete: false },
];
function displayCourses() {
    console.log("\nDanh sách khóa học:");
    courses.forEach((course, index) => {
        console.log(`${index + 1}. ${courses.name}\nComplete: ${courses.complete}`);

    });
}

while (true) {
    let action = prompt("Nhập vào C(Create), R(Read), U(Update), D(delete), E( Exit):").toUpperCase();

    if (action === "C") {
        let newCourse = prompt("Nhập tên khóa học mới:");
        let isComplete = prompt("Khóa học đã hoàn thành? (true/false):").toLowerCase() === "true";
        courses.push({ name: newCourse, complete: isComplete });
        displayCourses();
    } else if (action === "R") {
        displayCourses();
    } else if (action === "U") {
        let index = parseInt(prompt("Nhập vị trí khóa học cần nhập(1-" + courses.length + "):")) - 1;
        if (index >= 0 && index < course.length) {
            let newName = prompt("Nhập tên mới cho khóa học:");
            let newComplete = prompt("Đã hoàn thành?(true/false):").toLowerCase() === "true";
            courses[index].name = newName;
            courses[index].complete = newComplete;
            displayCourses();
        } else {
            console.log("Vị trí không hợp lê.");
        }
    } else if (action === "D") {
        let index = parseInt(prompt("Nhập vào vị trí khóa học cần xóa(1-" + courses.length + "):")) - 1
        if (index >= 0 && index < courses.length) {
            courses.splice(index, 1);
            displayCourses();
        } else {
            console.log("Vị trí không hợp lệ.");

        }
    }else if (action === "E"){
        console.log("Cảm ơn bạn đã đến với Rikkei Academy!");
        break;
    } else{
        console.log("Lệnh không hợp lê, vui lòng nhập lại.");
    }
}
