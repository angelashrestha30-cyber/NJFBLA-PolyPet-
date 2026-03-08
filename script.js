function showPage(p){

document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"))

document.getElementById(p).classList.add("active")

}

/* greeting */

let h=new Date().getHours()

let greet=""

if(h<12)greet="Good Morning"
else if(h<18)greet="Good Afternoon"
else greet="Good Evening"

document.getElementById("greeting").innerText=greet
document.getElementById("encourage").innerText=
"Clever like a fox 🦊 Keep up the pawsome progress!"

/* animated fox */

document.addEventListener("mousemove",e=>{
let fox=document.getElementById("fox")
fox.style.left=e.pageX+15+"px"
fox.style.top=e.pageY+15+"px"
})

/* world clock */

let zones=[
["New York","America/New_York"],
["London","Europe/London"],
["Tokyo","Asia/Tokyo"],
["Beijing","Asia/Shanghai"]
]

zones.forEach(z=>{

let div=document.createElement("div")

setInterval(()=>{

let t=new Date().toLocaleTimeString("en-US",{timeZone:z[1]})

div.innerText=z[0]+" : "+t

},1000)

document.getElementById("clock-list").appendChild(div)

})

/* flashcards */

let cards=[
["Hola","Hello"],
["Adiós","Goodbye"],
["Gracias","Thank you"],
["Por favor","Please"],
["Sí","Yes"],
["No","No"],
["Buenos días","Good morning"],
["Buenas tardes","Good afternoon"],
["Buenas noches","Good night"],
["¿Cómo estás?","How are you"],
["Amigo","Friend"],
["Familia","Family"],
["Casa","House"],
["Libro","Book"],
["Perro","Dog"],
["Gato","Cat"],
["Comer","To eat"],
["Beber","To drink"],
["Escuela","School"],
["Maestro","Teacher"]
]

let i=0
let flipped=false

function showCard(){

document.getElementById("card-front").innerText=cards[i][0]
document.getElementById("card-back").innerText=""

}

showCard()

function flipCard(){

if(!flipped){
document.getElementById("card-back").innerText=cards[i][1]
flipped=true
}else{
document.getElementById("card-back").innerText=""
flipped=false
}

}

function nextCard(){

i=(i+1)%cards.length
showCard()

}

/* practice */

let practiceQuestions=[
["Yo ___ estudiante","soy"],
["Ella ___ mi amiga","es"],
["Nosotros ___ felices","somos"],
["Tú ___ inteligente","eres"],
["Ellos ___ estudiantes","son"]
]

let practice=document.getElementById("practice")

practiceQuestions.forEach((q,i)=>{

let d=document.createElement("div")

d.innerHTML=q[0]+" <input id='p"+i+"'>"

practice.appendChild(d)

})

function checkPractice(){

let correct=0

practiceQuestions.forEach((q,i)=>{

let ans=document.getElementById("p"+i).value

if(ans==q[1])correct++

})

document.getElementById("practice-result").innerText=
correct+" / "+practiceQuestions.length+" correct"

}

/* unit test */

let test=[
["Hola means?","Hello","Greeting word"],
["Gracias means?","Thank you","Polite expression"],
["Perro means?","Dog","Animal vocab"],
["Casa means?","House","Home word"],
["Libro means?","Book","Object word"]
]

let quiz=document.getElementById("quiz")

test.forEach((q,i)=>{

let d=document.createElement("div")

d.innerHTML=q[0]+"<br><input id='q"+i+"'>"

quiz.appendChild(d)

})

function submitTest(){

let score=0

let result=""

test.forEach((q,i)=>{

let ans=document.getElementById("q"+i).value

if(ans.toLowerCase()==q[1].toLowerCase()){
score++
}else{

result+="Question: "+q[0]+"<br>"
result+="Correct: "+q[1]+"<br>"
result+="Explanation: "+q[2]+"<br><br>"

}

})

document.getElementById("results").innerHTML=
"Score: "+score+"/"+test.length+"<br><br>"+result

}

/* scheduling */

function addSession(){

let name=document.getElementById("session-name").value
let date=document.getElementById("session-date").value
let time=document.getElementById("session-time").value

let li=document.createElement("li")

li.innerText=name+" "+date+" "+time

document.getElementById("sessions").appendChild(li)

}

function submitAbsence(){

document.getElementById("absence-msg").innerText="Absence submitted"

}
