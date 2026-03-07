let xp = 0
let level = 1

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(page).classList.add("active")

}

/* XP SYSTEM */

function gainXP(){

xp += 20

petCelebrate()

if(xp >= 100){

level++
xp = 0

document.getElementById("level").textContent = level

showAchievement("Level Up!")

}

document.getElementById("xp-fill").style.width = xp + "%"

}

/* PET REACTION */

function petCelebrate(){

let pet = document.querySelector(".pet-avatar")

pet.style.transform="scale(1.4)"

setTimeout(()=>{
pet.style.transform="scale(1)"
},400)

}

/* FLASHCARDS */

let flashcards = [

{front:"Hola",back:"Hello"},
{front:"Gracias",back:"Thank you"},
{front:"Adiós",back:"Goodbye"},
{front:"Por favor",back:"Please"}

]

let currentCard = 0

function flipCard(){

document.querySelector(".flashcard3d").classList.toggle("flipped")

}

function nextFlashcard(){

currentCard++

if(currentCard>=flashcards.length){

currentCard=0
gainXP()

}

document.querySelector(".flashcard3d").classList.remove("flipped")

document.getElementById("card-front").innerText=
flashcards[currentCard].front

document.getElementById("card-back").innerText=
flashcards[currentCard].back

}

/* MATCHING GAME */

let words=["Hola","Hello","Gracias","Thanks"]

let board=document.getElementById("match-board")

if(board){

words.forEach(word=>{

let div=document.createElement("div")

div.className="match-card"

div.innerText=word

div.onclick=()=>{

div.style.background="#c7ffd8"

gainXP()

}

board.appendChild(div)

})

}

/* ACHIEVEMENTS */

function showAchievement(text){

let container=document.getElementById("achievements")

if(container){

let badge=document.createElement("div")

badge.className="badge"

badge.innerText=text

container.appendChild(badge)

}

}

/* CHART */

const ctx=document.getElementById("progressChart")

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

data:[10,30,20,40,60,50,90],

borderColor:"#ff7eb3",

backgroundColor:"rgba(255,126,179,.2)",

tension:.4

}]

},

options:{
plugins:{legend:{display:false}}
}

})

}
