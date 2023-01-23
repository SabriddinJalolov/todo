
// Warmup-1

// 1-masala
// let a = true && false;
// console.log(a);


//2-masala

// let aMonkey = prompt("enter boolean");
// let bMonkey = prompt("enter boolean2");

// if (aMonkey && bMonkey) {
//   console.log(true);
// } else if (!aMonkey && !bMonkey) {
//   console.log(true);
// }

// 3-masala

// let a = Number(prompt("a qiymatni kiriting"));
// let b = Number(prompt("b qiymatni kiriting"));
// sum = a + b;

// if (a == b) {
//   sum = sum * 2;
// }
// console.log(sum);

// 4-masala

// let a = prompt("son kiriting");
// let b = 21;

// sum = Math.abs(b - a);

// if (b >= a) {
//   console.log(sum);
// }else if(b <= a){
//   console.log(sum * 2);
// }

// 5-masala

// let speak = "gapiradi";

// let hour = prompt("soat kiriting");

// jami = (speak && (hour < 7  hour > 20));

// console.log(jami);


//*6-masala

// let a = prompt("a son kiriting");
// let b = prompt("b son kiriting");

// jami = (a == 10  b == 10  a + b == 10);
// console.log(jami);


// 8-masala

// let a = prompt("a son kiriting");
// let b = prompt("b son kiriting");
// let negative = "qwer";

// if (negative) {
//   sum = (a < 0 && b < 0);
//   console.log(sum);
// } else if (negative) {
//   sum = (a < 0 && b > 0)  (a > 0 && b < 0);
//   console.log(sum);
// }

//9-masala

// let str = "not candy"
// sum = str.match(/^not/) ? str : 'not ' + str;
// console.log(sum);


//10-masala

// let str = "kitten";
// let n = prompt("n son kiriting");

// sum = str.slice(0, n) + str.slice(n + 1, str.length);

// console.log(sum);


//* 11-masalani ishlay olmadim

//* 12-masala

// let str = "java";

// sum = str.slice(0, 3).repeat(3);
// console.log(sum);

//* 13-masala



// Warmup-2

//* 1-masala
let str = prompt("string kiriting");

let n = prompt("n ta son kiriting");

let result = "";
for (let i = 0; i < n; i++){
  result = result + str;
}
console.log(result);