// number
const num = 10; // 숫자형
const float = 10.5; // 실수형
const infinity = num / 0; // Infinity(무한대)
const nan = "문자열" / 2; // NaN(숫자가 아님)

// bigint
const bigInt = 1234567890123456789012345678901234567890n; // 큰 숫자형

// string
const str1 = "String Data Type";
const str2 = "String Data Type";
const str3 = `String Data Type`;
const str4 = `Hello ${이름}`; // 템플릿 리터럴 (template literal)

// boolean
const enabled = true;
const isAdult = 나이 > 19;

// null
let phoneNumber = null; // 전화번호가 없음을 의미

// undefined
let address; // 현재 값은 undefined
address = "서울시 송파구";

// symbol
const mySymbol = Symbol();

// object
// const user = new Object(); // 생성자 함수를 사용한 객체 생자
const user = {
  name: "홍길동",
  age: 20,
};
console.log(user.name); // 점 표기법 사용
console.log(user["age"]); // 대괄호 표기법 사용
