
let x = 10;
let y = 15;

//1.
let z = x + y;

console.log(z)

//.2
let g = x * y;

console.log(g)

//3.
let a = true;
let b = false;

let s = 0;
let w ="0";

 let gow =(s < 5);
  
 let fol =( w <= 0);
  console.log(gow)
  console.log(fol)

  //4.
  let v =(25);
  let c =(15);

  let duo =(v + c);
   let vox = (v * c);
   let lol = (c / v);
   let rio = (v - c);
console.log(duo)
console.log(vox)
console.log(lol)
console.log(rio)
//5.
let t = true;
let u = false;
let sio =(t > u);
let vio = (t < u);
let cio = (u == t);
let lio = ( u != t);
console.log(sio)
console.log(vio)
console.log(cio)
console.log(lio)
//6.
//let age = 18;

//if(age > 18){
   // console.log("взрослый");
//} else{
    //console.log("ребёнок");
//}
//8.
let counter = (0)
let hoo = (counter += 5);
let coo = (counter -= 5);
let doo = (counter *= 5);
let soo = (counter /= 5);
console.log(hoo)
console.log(coo)
console.log(doo)
console.log(soo)
//.9
let text = "привет";
let gut = "мир";

let m = (text == gut);
let vet =(text != gut);

console.log(m)
console.log(vet)
//10.
const sumArray = (arr) => {  
    let sum = 0;  
    for (let i = 0; i < arr.length; i++) {  
        sum += arr[i];  
    }
    return sum;  
}

//const numbers = [1, 2, 3, 4, 5];  
//console.log(sumArray(numbers)); 

//1.

//let age = prompt('Возраст? тестирования по вождению ', 18);

//let message = (age < 3) ? 'вам еще рано водить машину' :
  //(age < 18) ? 'Привет!' :
  //(age < 100) ? 'Здравствуйте!' :
  //'Какой необычный возраст!';

//alert( message );
 //console.log(message)

//2.
let double  = prompt('на пишите что нибудь', text);

let vip = (double) ? 'отлично':
  (double) ? 'нечего нет' :
  

alert( message )
console.log(vip)

//11.
const age = 19
const isAdult = true

 const resulf = age >= 18 ? isAdult : !isAdult;
 console.log(resulf)
//1.
 function Sum(a, b) {
  return console.log (a + b)
 }
 
 Sum(20, 40)
//.
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); 

//3
 
const str = "привет мир";

const calculateNumber = (x) => {
    console.log(x.length);
}

calculateNumber(str)

function filterGreaterThan(numbers, threshold) {
  return numbers.filter(number => number > threshold);
}

// Пример использования:
const numbers = [1, 5, 8, 10, 3, 7];
const threshold = 5;
const result = filterGreaterThan(numbers, threshold);
console.log(result); // [8, 10, 7]

function square(x) {
  return x * x;
}
var demo = square(3);
// значение demo будет равняться 9
console.log(demo)