console.log('Labas rytas Lietuva');

const titleDOM = document.getElementById('title');
console.log(titleDOM);

console.log(titleDOM.classList);

titleDOM.classList.add('red');

// titleDOM.innerHTML='Hi';



/* for (let i = 0; i < titleDOM.classList.length; i++) {
    const c = titleDOM.classList[i];
    console.log(c);
    titleDOM.classList.remove(c)
}

console.log(titleDOM.classList); */

const sectionTitle ='About you';
// const sectionTitleDOM = document.querySelector('.section-title');
// const sectionTitleDOM = document.querySelector('h2');
const sectionTitleDOM = document.querySelector('h2.section-title > span');
sectionTitleDOM.innerText = sectionTitle;
sectionTitleDOM.textContent = sectionTitle;

// console.log(sectionTitleDOM);