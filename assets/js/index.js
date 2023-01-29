//Output Text
let output = document.getElementById('adviceTxt');
let outputID = document.getElementById('adviceID');

function GetAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        outputID.innerHTML = "Advice #" + data.slip.id;
        output.innerHTML = data.slip.advice;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    GetAdvice();
});

//Button
let generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', () => {
    GetAdvice();
});