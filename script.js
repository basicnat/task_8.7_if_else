let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = getQuestion()

function getQuestion() {
    const phraseRandom = Math.floor(Math.random() * 3);
    let questionText;
    if (phraseRandom === 0) {        
        questionText = `Вы загадали ${answerNumber}?`; 
    } else if (phraseRandom === 2) {
        questionText = `Может, это число ${answerNumber}?`
    } else {
        questionText = `Чувствую, вы загадали ${answerNumber}, да?`
    }
    console.log(questionText)
    return questionText;
}

document.getElementById('btnRetry').addEventListener('click', function () {
    
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    gameRun = true
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getQuestion();
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getQuestion();
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        
        if(answerNumber >= 100) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        } else if (answerNumber <= 50) {
            answerField.innerText = `Читаю мысли! \n\u{1F609}`
        } else if (answerNumber <=20) {
            answerField.innerText = `Ура, я нашёл ответ!\n\u{1F64B}`
        } else {
            answerField.innerText = "Опять угадал!"
        }
        gameRun = false;
    }
})

