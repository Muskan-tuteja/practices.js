// sum question slove .....

// let a =12
// let b =23
// console.log(a+b)

// question concation/string
// let a = 12
// let b =" 67"
// // console.log(typeof(a+b))
// console.log("sum of 10 and 20 " +a +b)
// let c = 12
// let e = 67
// console.log("sum of 10 and 20 " +(c +e))

// let a = 12;
// let b = 34;
// console.log(a + b + "is sum of 10 and 29");

// string ko name me converting karne jo hm number ka use karte hai h
// let age = Number(prompt("enter your name"))
// console.log( age)

// swap
// let a =20
// let b =34
// let c

// c= a
// a=b
// b = c

// let a = 10
// let b = 30
//  a = a + b // a = 40
//  b = a - b // b = 10
//  a = a - b //a 50

// let a = 20
// let b = 34

// [a,b] = [b,a]

// let a = 12
// let b = 22
// let c = 23

// console.log (Math.floor(a/b))

// let a = 10
// let b = 3
// console.log(a%b)
// console.log(b%a)

// let a = 4563
// console.log(a%10000)
// console.log(10%a)
// console.log(Math.floor(a/10))

// relation

// let a = 3 //assignmed karne 1 equal

// console.log(13 == 12)
// console.log(13 === 12)
// console.log(13 !== 12)
// console.log(13 ==! 12)

// logical operator
// &&
// console.log(12>4 && 10>9)
// console.log(12>21 && 10>9)
// console.log(12>2 && 10>9 && 12<9)
// console.log(12>56 && 23>29)

// ||
// console.log(12>44 || 12>5 || 12<4)

// && or ||
// console.log(78<12 || 23>89 && 23<90)
// console.log(78<12 || 23>89 || 23<90)

// let i = 11
// i = i++
// i = ++i
// console.log(i)

// let a = 11
// let b = 22
// let c = a+b+a++ + b++ + ++a + ++b
// console.log("a=" +a )
// console.log("b=" +b )
// console.log("c=" +c )

// let a = true//1(true ko hmesha 1 mante h )
// a++
// console.log(a)

// let b = false
// b++
// console.log(b)

// let a = 11++//(varible par hn ++ laga saki h but number par ni laga sakte)
// console.log(a)

// let a = 10
// let b = ++(a++)

// console.log(b)

// Math function

// console.log(Math.round(10.6))//1 to 4 hoga to 10 hi hoga but jase hi (5 hoga to 11 hojaye ga )

// console.log(Math.ceil(11.5))//(jase hi .1 ko hoga 12 hojye ga )

// console.log(Math.trunc(20.56))
// console.log(Math.floor(20.56))
// console.log(Math.pow(2,4))

// console.log(Math.sqrt(9))
// console.log(Math.cbrt(9))
// console.log(Math.abs(-12))
// console.log(Math.max(23,45,67))
// console.log(Math.min(23,45,67))

// console.log(Math.random()) //0 to 1

// console.log(Math.floor((Math.random()*9000)+1000))

// let a = 23.5679
// console.log(a.toFixed(6))

// let a = 5
// let b = 3

// console.log(a*b)
// console.log(2*(a+b))

// let a =5
// let b = 4
// let c= 3

// let s = (a+b+c)/2
// console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)))

// let r = 12
// console.log(Math.floor((2*Math.PI*r).toFixed(2)))

// ..................conditional Statement.............................

// let ans = prompt("my name is muskan and age")
// if(isNaN(ans)){
//   console.log("not input")
// }
// else if(ans>=18){
//   console.log("you are true")
// }else{
//   console.log("you are false")
// }

// Shop Discount

// let amount = Number(prompt("whai is final amount?"))
// // console.log(typeof(amount))

// if(amount> 0 && amount<=5000){
//   console.log(amount)
// }else if(amount> 5000 && amount<=7000){
//   console.log(amount-Math.floor((5*amount)/100))
// }else if(amount> 7000 && amount<=9000){
//   console.log(amount-Math.floor((10*amount)/100))
// }else if(amount>9000){
//   console.log(amount-Math.floor((20*amount)/100))
// }else if(isNaN(amount)){
//   console.log("you are string")
// }

// let amount = Number(prompt("whai is final amount?"));
// // console.log(typeof(amount))
// let dis = 0;

// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else if (isNaN(amount)) {
//   console.log("you are string");
// }
// console.log(amount - Math.floor((dis * amount) / 100));

// let unit = Number(prompt("Enter electricity unit"))
// let amount = 0
// if(unit>400){
//   amount = (unit-400)*13
//   unit = 400

// }
// if(unit>200 && unit<=400){
//   amount += (unit-200)*8
//   unit = 200

// }
// if(unit>100 && unit<=200){
//   amount += (unit-100)*6
//   unit = 100

// }
// amount +=unit*4
// console.log(amount)

// let amount = 4823
// if (amount>=500) {
//   console.log("500 notes : " + Math.floor(amount/500))
//   amount = amount % 500

// }
// if (amount>=200) {
//   console.log("200 notes : " + Math.floor(amount/200))
//   amount = amount % 200
// }
// if (amount>=100) {
//   console.log("100 notes : " + Math.floor(amount/100))
//   amount = amount %100
// }
// if (amount>=50) {
//   console.log("50 notes : " + Math.floor(amount/50))
//   amount = amount % 50
// }
// if (amount>=20) {
//   console.log("20 notes : " + Math.floor(amount/20))
//   amount = amount % 20
// }
// if (amount>=10) {
//   console.log("10 notes : " + Math.floor(amount/10))
//   amount = amount % 10
// }
// if (amount>=5) {
//   console.log("5 notes : " + Math.floor(amount/5))
//   amount = amount % 5
// }
// if (amount>=2) {
//   console.log("2 notes : " + Math.floor(amount/2))
//   amount = amount % 2
// }

// if (amount>=1) {
//   console.log("1 notes : " + Math.floor(amount/1))
//   amount = amount % 1
// }

// पहले divide करो (A ÷ B)

// उसका quotient (पूरा भागफल) लो

// फिर multiply करो (B × quotient)

// अब A में से subtract करो → वही remainder (modulus) होगा
// पहले divide करो, फिर multiply, फिर subtract करो = remainder

// ternary operator ? :
// console.log(122>13?"true":"false")
// console.log(122<13?"true":"false")

// nested operator
// let num = 0
// console.log(num>0?"postive":num<0?"negative":"zero")

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("mother");

//     break;
//   case 2:
//     console.log("mo0ther");

//     break;

//   default: console.log("invaild")
//     break;
// }
// let day = 1;
// switch (day) {
//   case 1:
//     console.log("mother");

//   case 2:
//     console.log("mo0ther");

//   default:
//     console.log("invaild");
//     break;
// }

// let names = "muskan"
// switch (names) {
//   case "muskan": console.log("yes1")

//     break;
//   case "mahi": console.log("yes2")

//     break;

//   default: console.log("invalid")
//     break;
// }

// let day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("yes");
//     break;
//   default:
//     console.log("invalid");
// }

// switch (true) {
//   case 10>7: console.log("yes")

//     break;
//   case 10<7: console.log("yes?")

//     break;

//   default:
//     break;
// }

// let num = 0.1 + 0.2;

// switch (num) {
//   case 0.7:
//     console.log("hii");
//     break;
//   case 0.5:
//     console.log("hi");
//     break;
//   case 0.3:
//     console.log("hi");
//     break;


//     default: console.log("heii")
// }
// let num = 0.1 + 0.2;
// let rounded = Math.round(num * 10) / 10;  // 1 decimal tak round

// switch (rounded) {
//   case 0.3:
//     console.log("hipo");
//     break;
//   case 0.5:
//     console.log("hi");
//     break;
//   case 0.7:
//     console.log("hii");
//     break;
//   default:
//     console.log("heii");
// }

