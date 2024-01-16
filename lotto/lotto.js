const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

// 피셔 예이츠 셔플 알고리즘
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle);

// 숫자를 정렬할 때 사용하는 방식
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

// // Tip) 원본의 배열을 바꾸는 메서드를 사용하는 경우 중간에 slice를 사용하여 복사를 한다.
// const sortShuffle = shuffle.slice().sort((a, b) => a - b);
// console.log(sortShuffle);

// // 1번째 글자들을 비교를 해서 정렬을 할 수도 있다.
// const arr = ["apple", "daily", "candi", "banana"];
// const newArr = arr.slice().sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
// console.log(newArr);

// // 완전한 사전 순 정렬은 (한글 영어 다 된다.)
// const lexicographicalArr = arr.slice().sort((a, b) => a.localeCompare(b));
// console.log(lexicographicalArr);

// // Date도 정렬이 가능하다.

const $result = document.querySelector("#result");

const drawBall = (number, $parent) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $parent.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}

const $bonus = document.querySelector("#bonus");

setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);

// 셀프 체크 공 색칠하기
// 10 미만이면 빨간색, 20 미만이면 주황색, 30 미만이면 노란색, 40 미만이면 파란색, 40부터는 초록색
// 공이 빨간색 파란색 초록색일 때는 글자도 하얗게 구현하기
