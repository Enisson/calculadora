//math function
function insert(num) {
    document.querySelector('.result').innerHTML += num;
}

function clean() {
    document.querySelector('.result').innerHTML = "";
    document.querySelector('.operator').innerHTML = "";
}

function math(operator) {
    const result = document.querySelector('.result');
    const op = document.querySelector('.operator').innerHTML += result.innerHTML + operator;
    result.innerHTML = "";
}

function result(){
    const result = document.querySelector('.result').innerHTML;
    const op = document.querySelector('.operator').innerHTML;
    const calc = op + result;

    if (calc){
        document.querySelector('.result').innerHTML = eval(calc);
        const op = document.querySelector('.operator').innerHTML = "";
    }
}


// Dark Mode function
const altMod = {
    screen: document.querySelector('.screen'),
    btn: document.querySelector('.btn-alt-mode button'),
    btnBackground: document.querySelector('.btn-alt-mode'),
    operator: document.querySelector('.operator'),
    result: document.querySelector('.result'),
    bgCalc: document.querySelector('table'),
    trButton: document.querySelectorAll('tr button'),
    trLast: document.querySelectorAll('tr td:last-child'),
    equalBtn: document.querySelector('.math')
}

function darkMode(){
    altMod.btn.classList.toggle('active');
    altMod.screen.classList.toggle('active');
    altMod.btnBackground.classList.toggle('active');
    altMod.operator.classList.toggle('active');
    altMod.result.classList.toggle('active');
    altMod.bgCalc.classList.toggle('active');
    altMod.trButton.forEach( index => { index.classList.toggle('active');});
    altMod.trLast.forEach( index =>{ index.classList.toggle('active')});
    altMod.equalBtn.classList.toggle('active');
}

altMod.btn.addEventListener('click', darkMode);