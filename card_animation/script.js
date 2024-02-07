let container = document.querySelector('.container')
let card = document.querySelector('.card')
let cardImage =  document.querySelector('.card img')
let cardTitle = document.querySelector('.card card-title')
let cardInfo = document.querySelector('.card-info p')
let cardBtn = document.querySelector('btn')

container.addEventListener('mousemove',(e)=>{
    let Xaxis =(window.innerWidth/2 - e.pageX)/22
    let Yaxis =(window.innerHeight/2 - e.pageY)/22
    card.style.transform =`rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`
})

container.addEventListener('mouseenter',(e)=>{
    cardImage.style.transform = 'translateZ(200px) rotateZ(-35deg)'
    cardTitle.style.transform ='translateZ(125px)'
    cardInfo.style.transform ='translateZ(100px)'
    cardInfo.style.transform ='translateZ(75px)'
})
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = 'all ease .2s'
    card.style.transform ='rotateX(0deg) rotateY(0deg)'
    cardImage.style.transform = 'translateZ(0px) rotateZ(0deg)'
    cardTitle.style.transform ='translateZ(0px)'
    cardInfo.style.transform ='translateZ(0px)'
    cardInfo.style.transform ='translateZ(0px)'
})