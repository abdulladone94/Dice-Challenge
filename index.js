const randomNumber1 = Math.floor((Math.random() * 6) + 1)
const imgDice1 = 'dice'+randomNumber1+'.png'
const imgSource1 = 'images/'+imgDice1

document.querySelectorAll('img')[0].setAttribute('src', imgSource1)


