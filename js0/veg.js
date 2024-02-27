console.log('Veg vekia');



function capitalize(text){
    return text[0].toUpperCase() + text.slice(1);
}

function formaList(selector, textFormatFunc){
    const parentDOM = document.querySelector(selector)
    const allLiDom = parentDOM.querySelectorAll('li');
    
    for (let i = 0; i < allLiDom.length; i++) {
        const liDOM = allLiDom[i];
        liDOM.innerText = textFormatFunc(liDOM.innerText);
    }
}

formaList('.veg', capitalize);
formaList('.fun', santaText);
formaList('.dash', dashText);


function santaText(text){
    return '🎅' + text + '👋';
}

function dashText(text){
    return '-'.repeat(text.length);
}

/*
const vegDOM = document.querySelector('.veg');
const vegLiDOM = vegDOM.querySelectorAll('li');

for (let i = 0; i < vegLiDOM.length; i++) {
    const liDOM = vegLiDOM[i];
    liDOM.innerText = capitalize(liDOM.innerText);
}

const funDOM = document.querySelector('.fun');
const funLiDOM = funDOM.querySelectorAll('li');

for (let i = 0; i < funLiDOM.length; i++) {
    const liDOM = funLiDOM[i];
    liDOM.innerText = formaText(liDOM.innerText);
}

const dashDOM = document.querySelector('.dash');
const dashLiDOM = dashDOM.querySelectorAll('li');

for (let i = 0; i < dashLiDOM.length; i++) {
    const liDOM = dashLiDOM[i];
    liDOM.innerText = dashText(liDOM.innerText);
} */