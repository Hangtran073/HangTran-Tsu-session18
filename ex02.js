let products = [
    { id: 1, name: 'Milk', count: 100 },
    { id: 2, name: 'Orange', count: 100 },
    { id: 3, name: 'Butter', count: 100 },
];
let newOject = { id: 4, name: 'Apple', count: 100 };
products.push(newOject);
delete products[1];
products[2].count = 0;

let keyword = 'Butter';
if (products.some(key => key.name === keyword)) {
    console.log(`${keyword} có trong mảng`);
    console.log(products);

} else {
    console.log("Không có dữ liệu bạn tìm kiếm");
}



