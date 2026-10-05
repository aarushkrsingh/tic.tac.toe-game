let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn = true;
let count = 0;

const winConditions = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
];
 const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add('hidden');
    count = 0;
};
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn){
            box.style.color = "blue";
            box.innerText = "X";
            turn = false;
        }else{
            box.style.color = "red";
            box.innerText = "O";
            turn = true;
        }
        count++;
        box.disabled = true;

        checkWin();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations!, ${winner} wins!`;
    msgContainer.classList.remove('hidden');
    disableBoxes();
};
const checkWin = () => {
    for (let condition of winConditions){
        let pos1Val = boxes[condition[0]].innerText;
        let pos2Val = boxes[condition[1]].innerText;
        let pos3Val = boxes[condition[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos1Val === pos3Val) {
                console.log(`${pos1Val} wins!`);
                showWinner(pos1Val);
            }
        }
    }
    if (count === 9) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove('hidden');
    }
}

newBtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);