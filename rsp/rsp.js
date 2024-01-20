const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0", // 가위
  rock: "-220px", // 바위
  paper: "-440px", // 보
};

let computerChoice = "scissors";

const changeComputerHand = () => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};

let intervalId = setInterval(changeComputerHand, 50);

// 가위: 1,  바위: 0,   보: -1
// 나\컴퓨터  가위    바위    보
// 가위       0       1       2
// 바위      -1       0       1
// 보        -2      -1       0
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

// clickable은 플래그변수
let clickable = true;
let score = 0;

let computer = 0;
let me = 0;

const clickButton = (event) => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice =
      event.target.textContent === "바위" ? "rock" : event.target.textContent === "가위" ? "scissors" : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    let message;
    if ([2, -1].includes(diff)) {
      me += 1;
      message = "승리";
    } else if ([-2, 1].includes(diff)) {
      computer += 1;
      message = "패배";
    } else {
      message = "무승부";
    }
    if (me >= 3) {
      $score.textContent = `나의 승리 ${me}:${computer}`;
    } else if (computer >= 3) {
      $score.textContent = `컴퓨터의 승리 ${me}:${computer}`;
    } else {
      $score.textContent = `${message} ${me}:${computer}`;
      // 점수 계산 및 화면 표시
      setTimeout(() => {
        clickable = true;
        intervalId = setInterval(changeComputerHand, 50);
      }, 1000);
    }
  }
};

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);

// addEventListener을 없애기 위해서는 removeEventListener를 사용하면 되는데
// 실수 할 일이 있으므로 플래그 변수를 사용하기를 추천한다.
// 왜냐하면, addEventListener로 추가한 이벤트는 removeEventListener로 없애주어야 하는데
// 뒤에 동일한 함수를 적어주어야 하지만 JS에서 함수끼리의 비교는 객체의 비교와 같아서
// false가 나오기 때문이다.
// 이를 해결하기 위해서는 변수에 담아둔 값을 서로 비교하게 구현해야한다.
// ex)
// const fun = (값) => () => {
//   console.log('고차함수입니다.', 값);
// }
// fun(1) === fun(1); // false

// const fun1 = fun(1);
// fun1 === fun1 // true

// if (diff === '고양이' || diff === '사자' || diff === '거북이') 이런 코드는 별로 안 와닿는다.
// ['고양이', '사자', '거북이'].includes(diff) 하면 True / False 로 나온다.
// ['고양이', '사자', '거북이'].indexOf(diff) 하면 Index / -1 로 나온다.
