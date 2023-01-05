const advice = document.querySelector('.advice > q');
const adviceId = document.querySelector('#slip-id');
const generateAdviceButton = document.querySelector('button');

generateAdviceButton.addEventListener("click", generateAdvice)

function generateAdvice(){
    let lol = fetch("https://api.adviceslip.com/advice")
    .then(val => {
    console.log(val.status);
    console.log(val.ok);
    // val.json(); won't work
    // as you have to return the value(promise in this case)
    // so it will be passed on to next .then as argument
    return val.json();
})
.then(resp => {
    let slip;
    let ha;
    
    // obj destructuring
    // bracket, donno why?
    // ({slip:{id},slip:{advice:a}} = val2)
    // advice.textContent = a;

    // OR
    adviceId.textContent = "#" + resp.slip.id;
    advice.textContent =  resp.slip.advice;
})
}

generateAdvice();