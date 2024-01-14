const number = Number(prompt("몇 명이 참가하나요?"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord; // 입력한 단어가 제시어가 된다.
    $word.textContent = word; // word 태그 선택하고 textcontent를 word로 바꿔준다.
    const order = Number($order.textContent); // 순서 바꾸기
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    alert("틀렸습니다!");
  }
  $input.value = ""; //input 태그를 선택하고 안의 값을 비워준다.
  $input.focus();
};
const onInput = (event) => {
  newWord = event.target.value;
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);

// 인풋 창에서 엔터를 눌렀을 때 버튼이 클릭되게 구현
$input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    onClickButton();
  }
});

// 셀프 체크 :
// 입력할 수 있는 단어를 세 글자로 고정. 다만, 세 글자가 아니라면 다시 입력하라고 표시.
// 또한 초반에 prompt를 입력할 때 몇 명이 참여할 지 선택할 때 취소를 누르면 다음 코드가 실행되지 않게 구현
