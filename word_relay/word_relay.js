const number = Number(prompt("몇 명이 참가하나요?"));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0]) {
        word = newWord; // 입력한 단어가 제시어가 된다.
        $word.textContent = word; // word 태그 선택하고 textcontent를 word로 바꿔준다.
        const order = Number($order.textContent); // 순서 바꾸기
        if (order + 1 > number) {
            $order.textContent = 1;
        }
        else {
            $order.textContent = order + 1;
        }

    }
    else {
        alert("틀렸습니다!");
    }
    $input.value = ''; //input 태그를 선택하고 안의 값을 비워준다.
    $input.focus();
};
const onInput = (event) => {
    newWord = event.target.value;
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);

// 인풋 창에서 엔터를 눌렀을 때 버튼이 클릭되게 구현
$input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      onClickButton();
    }
});