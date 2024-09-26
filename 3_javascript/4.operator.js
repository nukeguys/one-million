// typeof operator
typeof 1; // 'number'
typeof 10n; // 'bigint'
typeof "Hello"; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Symbol(); // 'symbol'
typeof {}; // 'object'
typeof null; // 'object'
typeof console.log; // 'function'

// assignment operator
let num = 1;
num += 2; // num = num + 2;
num -= 1; // num = num - 1;
num *= 3; // num = num * 3;
num /= 2; // num = num / 2;

// increment and decrement operator
let count = 0;
count++; // count = count + 1;
count--; // count = count - 1;

let inc = ++count; // 전위 증가 연산자, inc는 1, count는 1
inc = count++; // 후위 증가 연산자, inc는 1, count는 2

// logical operator
true || true; // true
true || false; // true
false || true; // true
false || false; // false
false || 0 || "name" || null; // 'name'

true && true; // true
true && false; // false
false && true; // false
false && false; // false
true && 0 && "name" && null; // 0

!true; // false
!false; // true
!!undefined; // false

// short circuit evaluation
true || alert("This is true."); // alert 함수가 실행되지 않음
false || alert("This is false."); // alert 함수가 실행됨

true && alert("This is true."); // alert 함수가 실행됨
false && alert("This is false."); // alert 함수가 실행되지 않음

// nullish coalescing operator
let nickname = null;
let name = "James";
const welcomeName = username ?? name;

let length = 0;
length || 20; // 20
length ?? 20; // 0

// conditional operator
const age = 19;
const charge = age < 20 ? 0 : 10000;
const beverage = age < 10 ? "milk" : age < 20 ? "juice" : "beer";
