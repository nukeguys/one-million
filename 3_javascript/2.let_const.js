/**
 * 변수
 */

let _hello; // 변수 선언(생성)
_hello = "Hello!"; // 할당(변수에 값을 저장)

let $welcome = "Hello Guest"; // 선언과 동시에 할당(초기화)

let 이름 = "이름",
  나이 = 20; // 한 번에 여러 변수 선언

alert($welcome); // 변수 접근 (사용)
나이 = 21; // 변수값 변경
$welcome = _hello; // 변수값 변경(복사)

/**
 * 상수
 */

const delayTime = 3000; // 상수 선언

const PI = 3.141592; // 상수 선언
// PI = 3.14; // 상수값 변경(에러)
