const numbers = [];
let randomNumber;

const N = 15;

const MIN = 10;
const MAX = 20;

for(let i = 0;i < N;i++) {
    randomNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    numbers.push(randomNumber); 
}

numbers.forEach(number => {
    console.log(number);
});