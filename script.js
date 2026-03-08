let xp=0
let level=1

function showPage(page){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(page).classList.add("active")

}

/* greeting */

function greeting(){

let h=new Date().getHours()

let text=""

if(h<12) text="Good Morning!"
else if(h<18) text="Good Afternoon!"
else text="Good Evening!"

document.getElementById("greeting").innerText=text

document.getElementById("encourage").innerText=
"Clever like a fox 🦊 — keep up the pawsome progress!"

}

greeting()

/* xp */

function gainXP(){

xp+=10

if(xp>=100){
level++
xp=0
document.getElementById("level").innerText=level
}

document.getElementById("xp-fill").style.width=xp+"%"

}

/* flashcards */

let cards=[
["Hola","Hello"],
["Gracias","Thank you"],
["Adiós","Goodbye"]
]

let i=0
let flipped=false

function flipCard(){

flipped=!flipped

document.getElementById("card-front").style.display=
flipped?"none":"block"

document.getElementById("card-back").style.display=
flipped?"block":"none"

}

function nextCard(){

i++

if(i>=cards.length){
i=0
gainXP()
}

document.getElementById("card-front").innerText=cards[i][0]
document.getElementById("card-back").innerText=cards[i][1]

}

/* matching */

let words=["Hola","Hello","Gracias","Thanks"]

let board=document.getElementById("match-board")

words.forEach(w=>{

let d=document.createElement("div")
d.className="match"
d.innerText=w

d.onclick=()=>{
d.style.background="#b7ffce"
gainXP()
}

board.appendChild(d)

})

/* test */

let questions=[
["Hola means?","Hello"],
["Gracias means?","Thank you"],
["Adiós means?","Goodbye"],
["Por favor means?","Please"],
["Yo means?","I"],
["Tú means?","You"],
["Comer means?","To eat"],
["Beber means?","To drink"],
["Casa means?","House"],
["Libro means?","Book"],
["Perro means?","Dog"],
["Gato means?","Cat"],
["Rojo means?","Red"],
["Azul means?","Blue"],
["Grande means?","Big"],
["Pequeño means?","Small"],
["Amigo means?","Friend"],
["Escuela means?","School"],
["Maestro means?","Teacher"],
["Comida means?","Food"],
["Agua means?","Water"],
["Buenos días means?","Good morning"],
["Buenas noches means?","Good night"],
["¿Cómo estás?","How are you"],
["Sí means?","Yes"]
]

let quiz=document.getElementById("quiz-container")

questions.forEach((q,i)=>{

let div=document.createElement("div")

div.innerHTML=

q[0]+"<br><input id='q"+i+"'>"

quiz.appendChild(div)

})

function submitTest(){

let correct=0

questions.forEach((q,i)=>{

let ans=document.getElementById("q"+i).value.toLowerCase()

if(ans===q[1].toLowerCase()) correct++

})

document.getElementById("score").innerText=
"Score: "+correct+"/25"

}

/* scheduling */

function addSession(){

let name=document.getElementById("session-name").value
let date=document.getElementById("session-date").value
let time=document.getElementById("session-time").value

let li=document.createElement("li")

li.innerText=name+" - "+date+" "+time

document.getElementById("session-list").appendChild(li)

}

/* absence */

function submitAbsence(){

document.getElementById("absence-msg").innerText=
"Absence submitted for review."

}

/* world clock */

function addClock(){

let country=document.getElementById("country-input").value

let div=document.createElement("div")

setInterval(()=>{

let time=new Date().toLocaleTimeString()

div.innerText=country+" : "+time

},1000)

document.getElementById("clock-list").appendChild(div)

}
