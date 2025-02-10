//btns
const btnStart = document.querySelector('#btn-startGame')
const btnAddWord = document.querySelector('#btn-addNewWord')

//sections
const sectionHome = document.querySelector('#home')
const sectionAddWord = document.querySelector('#add-new-word')
const sectionGame = document.querySelector('#game')


btnStart.addEventListener('click', ()=>{
    sectionHome.style.display = 'none'
    sectionGame.style.display = 'block';
})

btnAddWord.addEventListener('click', ()=>{
    sectionHome.style.display = 'none'
    sectionAddWord.style.display = 'block';

})

