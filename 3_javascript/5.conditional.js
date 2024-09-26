// if

const age = 19;
if (age < 20) {
  console.log("미성년자입니다.");
}

let beverage;
if (age < 10) {
  beverage = "milk";
} else if (age < 20) {
  beverage = "juice";
} else {
  beverage = "beer";
}

let charge;
if (age < 20) {
  console.log("0원 입니다.");
} else {
  console.log("10,000원 입니다.");
}

// switch / case
const version = 1;
const direction = "left";

switch (version) {
  case 1:
    console.log("더 이상 지원하지 않는 버전입니다.");
    break;
  case 5:
    console.log("최신 버전입니다.");
    break;
  default:
    console.log("사용 가능한 버전입니다.");
}

switch (direction) {
  case "up":
  case "down":
    console.log("위아래로 이동");
    break;
  case "left":
  case "right":
    console.log("좌우로 이동");
    break;
}
