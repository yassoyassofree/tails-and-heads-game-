document.getElementById('flipButton').addEventListener('click', function() {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const coinImage = document.getElementById('coinImage');
    const quote = document.getElementById('quote');

    coinImage.src = result === 'Heads' ? 'https://tse1.mm.bing.net/th?id=OIP.xtWLsjAHsxzVbff2kSOx6AHaHa&pid=Api&P=0&h=220':
    coinImage.alt = result== 'Heads' ? 'https://tse1.mm.bing.net/th?id=OIP.xtWLsjAHsxzVbff2kSOx6AHaHa&pid=Api&P=0&h=220':
    coinImage.src = result === 'Tails' ? 'https://www.nicepng.com/png/full/146-1464848_quarter-png.png':
    quote.innerText = result === 'Heads' ? "Tails mean the end of one journey and the beginning of another." : "Heads are where opportunity lies.";
    quote.innerText = result === 'Heads' ? "Heads are where opportunity lies." : "Tails mean the end of one journey and the beginning of another.";

    document.getElementById('result').innerText = You ; [dynamic ];
});
function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('user-choice').innerText = 'Your choice: ' + userChoice;
    document.getElementById('computer-choice').innerText = "Computer's choice: " + computerChoice;
    document.getElementById('winner').innerText = determineWinner(userChoice, computerChoice);
}
let choices = ['Heads', 'Tails'];

document.getElementById('flipButton').addEventListener('click', function() {
    const userChoice = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const computerChoice = Math.random() < 0.5 ? 'Heads' : 'Tails';

    document.getElementById('user-choice').innerText = 'Your choice: ' + userChoice;
    document.getElementById('computer-choice').innerText = "Computer's choice: " + computerChoice;

    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = result;

    const coinImage = document.getElementById('coinImage');
    const quote = document.getElementById('quote');

    coinImage.src = userChoice === 'Heads' ? 'https://tse1.mm.bing.net/th?id=OIP.xtWLsjAHsxzVbff2kSOx6AHaHa&pid=Api&P=0&h=220' : 'https://www.nicepng.com/png/full/146-1464848_quarter-png.png';
    quote.innerText = userChoice === 'Heads' ? "Heads are where opportunity lies." : "Tails mean the end of one journey and the beginning of another.";
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((userChoice === 'Heads' && computerChoice === 'Tails') || (userChoice === 'Tails' && computerChoice === 'Heads')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
