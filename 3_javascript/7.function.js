function printHello() {
  console.log("Hello");
}
printHello();
printHello();

function print(str) {
  console.log(str);
}
print("return문이 없는 함수");
print("반환값은 undefined");

function add(a, b) {
  return a + b;
}
const three = add(1, 2); // 3
const eight = add(three, 5); // 8

// parameter
function printPrice(price) {
  console.log(`가격은 ${price}원 입니다.`);
}
printPrice(); // 가격은 undefined원 입니다.
printPrice(1000); // 가격은 1000원 입니다.
printPrice(1000, 2000); // 가격은 1000원 입니다.

// default parameter
function caculatePrice(unitPrice, quantity = 1) {
  return unitPrice * quantity;
}
caculatePrice(1000); // 1000
caculatePrice(1000, 1); // 1000
caculatePrice(2000, 2); // 4000

// return
function caculator(op, num1, num2) {
  if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
    return;
  }

  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}
caculator("+", 1, 2); // 3
caculator("-", 1, 2); // -1
caculator("%", 3, 2); // undefined

// function expression
const messageType = "hello";
const printHello = function () {
  console.log("Hello");
};
printHello();
// 복사 (할당)
const sayHello = printHello;
sayHello();
const sayHi = function () {
  console.log("Hi");
};

const welcome = messageType === "hello" ? printHello : sayHi;
welcome();

// sayHello와 sayHi는 콜백 함수
function printMessage(messageType, sayHello, sayHi) {
  if (messageType === "hello") {
    sayHello();
  } else {
    sayHi();
  }
}
printMessage("hello", printHello, sayHi);
printMessage("hi", printHello, sayHi);

// arrow function
const add = (a, b) => a + b;
const sum = add(1, 2); // 3

const print = str => console.log(str);
print("arrow function");
