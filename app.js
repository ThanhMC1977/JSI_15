//let a = -5
//const kiemtrasonguyento = (a)=> {
//for(let i = 2; i < a; i++)
//{
//    if(a%i==0){
//        return false
//    }
//}
//return true
//}
//if(kiemtrasonguyento(a) == true){
  //  alert('${a} là số nguyên tố')
//}
//else {
//    alert('${a} không là số nguyên tố')
//}
//let arr =[1,2,3];
//let arr1 = [...arr];
//arr1[0] = 1000;
//console.log(arr)
//let a = [1,2,3];
//let b = [4,5,6];
//let c = [...a,...b]
//let obj1 = {
//    name: "Ngao",
//    type: "husky"
//}
//let obj2 = {
//    name: "cauba",
//    type: "pug",
//    height: "short",
//}
//let obj3 = {...obj1,...obj2}
//console.log("obj3: ",obj3);
///let arr = [-1,345,6,100,-10,-3];
//let result = arr.filter(item => item>0);
//console.log("result:",result);

let users = [
    {id: 1, name: "Quân", age: "16" ,group: "class-monitor-student"},
    {id: 2, name: "Đăng", age: "16" ,group: "vice-student"},
    {id: 3, name: "Đạt", age: "17" ,group: "student"},
    {id: 4, name: "Tùng Anh", age: "16" ,group: "student"},
    {id: 5, name: "Thành", age: "16" ,group: "student"},
    {id: 6, name: "Chi", age: "16" ,group: "student"},
    {id: 7, name: "Hiếu", age: "<30" ,group: "teacher"}
]
let result1 = users.filter(item => item.group.includes('student'));
console.log("result1: ", result1);
let result2 = result1.filter(item => item.age>15)
console.log("result2:", result2);
let result3 = result2.filter(item => item.id<5)
let usermindx =users.map(item => item.id= item.id+"-mindx")
console.log("usermindx:",usermindx);
