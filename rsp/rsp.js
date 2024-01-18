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
// clickable은 플래그변수
let clickable = true;
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    // 점수 계산 및 화면 표시
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
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
