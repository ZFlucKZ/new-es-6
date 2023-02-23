// fullname=(fname,lname)=>fname+lname
// setAge=(age)=>"อายุ ="+age

// console.log(fullname("New","Audio"));
// console.log(setAge(20));
// const name ="New"
// const age ="30"
// const address ="Suphnburi"
// const custormer ={
//     name:name,
//     age:age,
//     address:address
// }
// console.log(custormer)


// let custormerNane ="เด็กชายนิว"
// let tel = "0822522887"
// const address = `ชื่อลูกค้า ${custormerNane}
// ชื่อนายณัฐพนธ์ มาลาวงษ์
// จังหวัดสุพรรณบุรี
// เบอร์โทร ${tel}`
// console.log(address)   

// const newarr = [100,200,300]
// const data =[10,20,...newarr]

// const color = ["เขียว","น้ำเงิน","ขาว"]
// const allcolors = ["แดง","เหลือง",...color]
// const newcolor = ["ดำ","เทา"]

// allcolors.push(newcolor)

// console.log(data)
// console.log(allcolors)


// summation=(x,y)=>{
//     return x+y
// }

// console.log(summation(50,100));

summation =(...newarr)=>{
let total = 0
for(let number of newarr) total+=number
return total
}

console.log(summation(100,100))