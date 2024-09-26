// while
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// 10보다 작은 홀수만 출력
let num = 1;
while (num < 10) {
  console.log(num); // 1, 3, 5, 7, 9
  num += 2;
}

// do while
let seconds = 1;
do {
  console.log(seconds++);
} while (seconds <= 5);

let input;
do {
  input = prompt("숫자를 입력하세요.");
  console.log("입력한 값은 ", input);
} while (isNaN(input));

// for
// 10부터 1까지 출력
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 10보다 작은 홀수만 출력
for (let odd = 1; odd < 10; odd += 2) {
  console.log(odd);
}

let sum = 1;
for (; sum < 10; ) {
  sum += sum;
  console.log(sum);
}

// break and continue
// 1부터 10까지 출력
let i = 1;
while (true) {
  console.log(i++);
  if (i > 10) {
    break; // 10보다 커지면 반복문 종료
  }
}

// 10보다 작은 홀수만 출력
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // 짝수일 때는 출력하지 않음
  }
  console.log(i);
}
