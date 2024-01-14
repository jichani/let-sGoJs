const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = []; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}

const answer = [];
for (let n = 0; n < 4; n += 1) {
  // 4번 반복
  const index = Math.floor(Math.random() * numbers.length); // 0 ~ 8 정수
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

console.log(answer);

const tries = []; // 시도한 값들을 담는 변수

function checkInput(input) {
  if (input.length !== 4) {
    // 길이는 4가 아닌가
    return alert("4자리 숫자를 입력해주세요."); // undefined를 반환해서 if 로 검사하면 false로 인식된다.
  }
  if (new Set(input).size !== 4) {
    // 중복된 숫자가 있는가
    return alert("중복되지 않게 입력해주세요");
  }
  if (tries.includes(input)) {
    // 이미 시도한 값은 아닌가
    return alert("이미 시도한 값입니다.");
  }
  return true;
} // 검사하는 코드

function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
  $logs.appendChild(message);
}

let out = 0;

$form.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 동작 막기
  // console.log(event.target[0]); // form 안에서 선택할 수 있다.

  const value = $input.value;
  $input.value = "";

  if (!checkInput(value)) return;

  // 입력값 문제없음
  if (answer.join("") === value) {
    $logs.textContent = "홈런!";
    return;
  }

  if (tries.length >= 9) {
    defeated();
    return;
  }

  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      // 일치하는 숫자 발견
      if (index === i) {
        // 자릿수도 같음
        strike += 1;
      } else {
        // 숫자만 같음
        ball += 1;
      }
    }
  }

  if (strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}: ${out} 아웃`, document.createElement("br"));
  } else {
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement("br"));
  }

  if (out === 3) {
    defeated();
    return;
  }

  tries.push(value);
});

// 셀프 체크 : 아웃을 당하면 몇번째 아웃인지를 표시 (완료)
// 패배했을 때 게임이 끝나게 구현
// 인풋창에 같은 숫자는 입력이 안되게 구현하기
// 인풋창에 한글이 입력이 안되게 구현하기
