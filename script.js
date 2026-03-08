// ---------- SINGLE PAGE NAV ----------
function showSection(sectionId){
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// ---------- PET AVATAR ----------
let petXP = 0;
let streak = 0;
let petLevel = 1;

function completeLesson(){
  petXP += 20; streak++;
  document.getElementById('xp-fill').style.width = Math.min(petXP,100)+'%';
  document.getElementById('streak').innerText = streak;
  if(petXP >= 100){petLevel++; petXP=0; document.getElementById('level').innerText=petLevel;}
}

document.getElementById('pet-name-btn').addEventListener('click',()=>{
  const name = document.getElementById('pet-name-input').value;
  if(name){document.getElementById('pet-name-display').innerText = name;}
});

// ---------- GREETING ----------
function updateGreeting(){
  const now = new Date();
  let greeting = "Good Morning";
  if(now.getHours()>=12 && now.getHours()<18) greeting="Good Afternoon";
  if(now.getHours()>=18) greeting="Good Evening";
  document.getElementById('dynamicGreeting').innerText = greeting+", Emma!";
}
updateGreeting();

// ---------- PET COLLECTION ----------
let collectedPets = [];
function collectPet(lang){
  const icons = {Spanish:'🦊',Mandarin:'🐼',Japanese:'🐱',German:'🐺',Swahili:'🦁'};
  if(!collectedPets.includes(lang)){
    collectedPets.push(lang);
    const grid = document.getElementById('pet-collection');
    const card = document.createElement('div');
    card.className='pet-card';
    card.innerText = `${icons[lang]} ${lang}`;
    grid.appendChild(card);
  }
}

// ---------- FLASHCARDS ----------
const flashcardsData = [
  {q:'Hola', a:'Hello'}, {q:'Adiós', a:'Goodbye'}, {q:'Gracias', a:'Thank you'},
  {q:'Por favor', a:'Please'}, {q:'Perro', a:'Dog'}, {q:'Gato', a:'Cat'},
  {q:'Casa', a:'House'}, {q:'Escuela', a:'School'}, {q:'Libro', a:'Book'},
  {q:'Agua', a:'Water'}, {q:'Comida', a:'Food'}, {q:'Amigo', a:'Friend'},
  {q:'Familia', a:'Family'}, {q:'Rojo', a:'Red'}, {q:'Azul', a:'Blue'},
  {q:'Verde', a:'Green'}, {q:'Feliz', a:'Happy'}, {q:'Triste', a:'Sad'},
  {q:'Grande', a:'Big'}, {q:'Pequeño', a:'Small'}
];
let currentCard = 0;
function loadFlashcards(){
  document.getElementById('flashcards').classList.add('active');
  currentCard=0;
  document.getElementById('flashcard').innerText = flashcardsData[currentCard].q;
}
function flipCard(){
  const card = flashcardsData[currentCard];
  document.getElementById('flashcard').innerText = card.a;
}
function nextCard(){
  currentCard = (currentCard+1)%flashcardsData.length;
  document.getElementById('flashcard').innerText = flashcardsData[currentCard].q;
}

// ---------- PRACTICE ----------
const practiceData = [
  {q:'Translate "Hello"', a:'Hola', explanation:'Hello in Spanish is Hola.'},
  {q:'Translate "Thank you"', a:'Gracias', explanation:'Thank you in Spanish is Gracias.'},
  {q:'Fill in the blank: El ___ (dog)', a:'Perro', explanation:'Dog in Spanish is Perro.'}
];
let currentPractice = 0;
function startPractice(){
  currentPractice=0;
  document.getElementById('practice').classList.add('active');
  document.getElementById('practiceQuestion').innerText = practiceData[currentPractice].q;
  document.getElementById('practiceInput').value='';
  document.getElementById('practiceResult').innerText='';
  document.getElementById('nextPracticeBtn').style.display='none';
}
function checkPractice(){
  const input = document.getElementById('practiceInput').value.trim();
  if(input.toLowerCase()===practiceData[currentPractice].a.toLowerCase()){
    document.getElementById('practiceResult').innerText = '✅ Correct!';
  }else{
    document.getElementById('practiceResult').innerText = `❌ Wrong. Correct: ${practiceData[currentPractice].a}. ${practiceData[currentPractice].explanation}`;
  }
  document.getElementById('nextPracticeBtn').style.display='inline';
}
function nextPractice(){
  currentPractice++;
  if(currentPractice>=practiceData.length){document.getElementById('practiceResult').innerText='Practice Complete!';return;}
  document.getElementById('practiceQuestion').innerText = practiceData[currentPractice].q;
  document.getElementById('practiceInput').value='';
  document.getElementById('practiceResult').innerText='';
  document.getElementById('nextPracticeBtn').style.display='none';
}

// ---------- UNIT TEST ----------
const unitTestData = [
  {q:'Translate "Good morning"', a:'Buenos días', explanation:'Good morning = Buenos días'},
  {q:'Translate "Cat"', a:'Gato', explanation:'Cat = Gato'},
  {q:'Translate "House"', a:'Casa', explanation:'House = Casa'},
  {q:'Translate "Water"', a:'Agua', explanation:'Water = Agua'},
  {q:'Translate "Friend"', a:'Amigo', explanation:'Friend = Amigo'},
  {q:'Translate "Red"', a:'Rojo', explanation:'Red = Rojo'},
  {q:'Translate "Blue"', a:'Azul', explanation:'Blue = Azul'},
  {q:'Translate "Dog"', a:'Perro', explanation:'Dog = Perro'},
  {q:'Translate "Book"', a:'Libro', explanation:'Book = Libro'},
  {q:'Translate "Family"', a:'Familia', explanation:'Family = Familia'},
  {q:'Translate "Food"', a:'Comida', explanation:'Food = Comida'},
  {q:'Translate "Happy"', a:'Feliz', explanation:'Happy = Feliz'},
  {q:'Translate "Sad"', a:'Triste', explanation:'Sad = Triste'},
  {q:'Translate "Green"', a:'Verde', explanation:'Green = Verde'},
  {q:'Translate "Small"', a:'Pequeño', explanation:'Small = Pequeño'},
  {q:'Translate "Please"', a:'Por favor', explanation:'Please = Por favor'},
  {q:'Translate "Goodbye"', a:'Adiós', explanation:'Goodbye = Adiós'},
  {q:'Translate "School"', a:'Escuela', explanation:'School = Escuela'},
  {q:'Translate "Family"', a:'Familia', explanation:'Family = Familia'},
  {q:'Translate "Food"', a:'Comida', explanation:'Food = Comida'},
  {q:'Translate "Dog"', a:'Perro', explanation:'Dog = Perro'},
  {q:'Translate "Cat"', a:'Gato', explanation:'Cat = Gato'},
  {q:'Translate "House"', a:'Casa', explanation:'House = Casa'},
  {q:'Translate "Water"', a:'Agua', explanation:'Water = Agua'},
  {q:'Translate "Friend"', a:'Amigo', explanation:'Friend = Amigo'}
];
function submitUnitTest(){
  let score=0,results='';
  unitTestData.forEach((q,i)=>{
    const userAns = document.getElementById('q'+i)?.value.trim();
    if(userAns?.toLowerCase()===q.a.toLowerCase()){score++;}else{results+=`Q${i+1}: ❌ Correct: ${q.a}. ${q.explanation}\n`;}
  });
  document.getElementById('unitTestResult').innerText=`Score: ${score}/${unitTestData.length}\n${results}`;
}

// ---------- SCHEDULE ----------
function scheduleLesson(){
  const name = document.getElementById('lesson-name').value;
  const date = document.getElementById('lesson-date').value;
  if(name && date){
    const li = document.createElement('li');
    li.innerText=`${date}: ${name}`;
    document.getElementById('lesson-list').appendChild(li);
    document.getElementById('lesson-name').value='';
    document.getElementById('lesson-date').value='';
  }
}

// ---------- WORLD CLOCK ----------
function updateClocks(){
  const container = document.getElementById('clock-container');
  container.innerHTML='';
  const countries = [
    {name:'New York, US', tz:'America/New_York'},
    {name:'London, UK', tz:'Europe/London'},
    {name:'Tokyo, JP', tz:'Asia/Tokyo'}
  ];
  countries.forEach(c=>{
    const d = new Date().toLocaleTimeString('en-US',{timeZone:c.tz,hour:'2-digit',minute:'2-digit'});
    const div = document.createElement('div'); div.className='clock';
    div.innerHTML=`<strong>${c.name}</strong><br>${d}`;
    container.appendChild(div);
  });
}
setInterval(updateClocks,1000);
updateClocks();
