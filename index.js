const randomNumber1 = Math.floor((Math.random() * 6) + 1)
const randomNumber2 = Math.floor((Math.random() * 6) + 1)
const imgDice1 = 'dice'+randomNumber1+'.png'
const imgDice2 = 'dice'+randomNumber2+'.png'
const imgSource1 = 'images/'+imgDice1
const imgSource2 = 'images/'+imgDice2

let no1 = document.querySelectorAll('img')[0].setAttribute('src', imgSource1)
let no2 = document.querySelectorAll('img')[1].setAttribute('src', imgSource2)

if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = ('Player 2 Wins 🚩')
}else if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = ('🚩 Player 1 Wins')
}else {
    document.querySelector('h1').innerHTML = ('Drow!')
}
