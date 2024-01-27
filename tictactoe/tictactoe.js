// 최신 문법1. 구조분해할당. 객체안의 속성 이름과 변수 명이 같을 때 사용할 수 있다.
const { body } = document;

// 최신 문법2. 배열의 값을 변수에 저장하기
const arr = [1, 2, 3, 4, 5];
// const one = arr[0]; ~ const five = arr[4]; 와 같다
// const [one, two, three, four, five] = arr;

// 만약 3개만 사용하고 싶다면 콤마만 남겨둔다.
// const [one,,, four, five] = arr;

const $table = document.createElement("table");
const $result = document.createElement("div"); // 결과창

const rows = [];
let turn = "O";

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    cells.push($td);
    $td.addEventListener("click", (event) => {
      console.log("clicked");

      // 칸에 글자가 있나? 이벤트 리스너에서 조건에 안되면 리턴되게 하는 편이 편하다.
      if (event.target.textContent) return;

      event.target.textContent = turn;

      // 승부 확인
      if (turn === "O") {
        turn = "X";
      } else if (turn === "X") {
        turn = "O";
      }
    });
    $tr.append($td);
  }
  rows.push(cells);
  $table.append($tr);
}
body.append($table);
body.append($result);
