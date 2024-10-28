const user = {
  name: "이름",
  age: 20,
  "phone number": "010-1234-5678",
};

console.log(user.name);
console.log(user.age);
// console.log(user.phone number); 불가능
console.log(user["name"]);
console.log(user["age"]);
console.log(user["phone number"]);

const key = "number";
console.log(user["phone " + key]); // 계산된 프로퍼티

function setProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

const constObj = { key: "value" };
console.log(constObj.key); // value
constObj.key = "new value";
console.log(constObj.key); // new value
constObj = { key: "new object" }; // error

// shorthand property
function createUser(name, age) {
  return {
    name, // name: name,
    age, // age: age,
  };
}

// in operator
const menu = {
  hamburger: 5000,
  hotdog: 3000,
};
console.log(menu.hamburger); // 5000
console.log("hamburger" in menu); // true

console.log(menu.pizza); // undefined
console.log("pizza" in menu); // false

// for in
let total = 0;
for (const key in menu) {
  total += menu[key];
}

// reference
const original = { a: 1 };
const copy = original;
copy.a = 2;
console.log(copy); // { a: 2 }
console.log(original); // { a: 2 }

// compare
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const copy1 = obj1;

console.log(obj1 === obj1); // true
console.log(obj1 === obj2); // false
console.log(obj1 === copy); // true

// shallow copy
const obj = { a: 1 };
// copy
const copyObj1 = {};
for (const key in obj) {
  copyObj1[key] = obj[key];
}
// Object.assign
const copyObj2 = Object.assign({}, obj1);
// destructuring
const copyObj3 = { ...obj1 };

const origin = { nested: { a: 1 } };
const copyObj = {};
for (const key in origin) {
  copyObj[key] = origin[key];
}
console.log(copyObj.nested === origin.nested); // true

// method
const person = {
  이름: "홍길동",
  나이: 20,
};
person.인사하기 = function () {
  console.log("안녕하세요");
};

function run() {
  console.log("달리다");
}
person.달리기 = run;

const person2 = {
  이름: "홍길동",
  나이: 20,
  인사하기: function () {
    console.log("안녕하세요");
  },
  // 단축 구문
  달리기() {
    console.log("달리다");
  },
};

// this
const son = {
  이름: "손흥민",
  나이: 32,
  인사하기: function () {
    console.log(`안녕하세요, ${this.이름}입니다. 나이는 ${this.나이}살입니다.`);
  },
};
// 인사하기 실행시 this는 인사하기를 호출한 son을 가리킴.(son.이름, son.나이와 동일)
son.인사하기(); // 안녕하세요, 손흥민입니다. 나이는 32살입니다.

const park = { ...son };
park.이름 = "박지성";
park.나이 = 43;
// 인사하기 실행시 this는 인사하기를 호출한 park을 가리킴.(park.이름, park.나이와 동일)
park.인사하기(); // 안녕하세요, 박지성입니다. 나이는 43살입니다.

// constructor
function Person(이름, 나이) {
  // this = {}; this가 암시적으로 생성됨
  this.이름 = 이름;
  this.나이 = 나이;
  this.인사하기 = function () {
    console.log(`안녕하세요, ${this.이름}입니다. 나이는 ${this.나이}살입니다.`);
  };
  // return this; this가 암시적으로 반환됨
}
const mrSon = new Person("손흥민", 32);
const mrPark = new Person("박지성", 43);
mrSon.인사하기();
mrPark.인사하기();

// optional chaining
const member1 = {
  name: "회원1",
  privacy: {
    phone: "010-1234-5678",
  },
};
const member2 = {
  name: "회원2",
};

function getPhoneNumber(member) {
  // member가 없거나 member.privacy가 없을 때 에러
  // return member.privacy.phone;

  return member?.privacy?.phone;
  // 사용하지 않았다면,
  // return member && member.privacy && member.privacy.phone;
}

getPhoneNumber(member1); // 010-1234-5678
getPhoneNumber(member2); // undefined
getPhoneNumber(); // undefined;

// wrapper object
const str = "hello";
console.log(str.length); // 5
console.log(str.toUpperCase()); // "HELLO"

const num = 123;
console.log(num.toString()); // "123"

function sum(a, b) {
  return b;
}
