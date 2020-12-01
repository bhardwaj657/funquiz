readlineSync = require("readline-sync");
var score= 0; 
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("right");
    score = score + 1;
    console.log("---------");
  }
  else{
    console.log("wrong")
     score = score - 1;
    console.log("---------");
  }
}
var questions = [{
  question: `What is Spider-Man's real name ? 
  a: Harry
  b: Peter parker
  c: Tony Stark
  `,

  answer: "b"
},
{
  question: `Which city does Spider-Man protect from crime? 
  a: London
  b: Los angles
  c: New york city
  `,
  answer: "c"
},
{
  question: `Who wrote the original Spider-Man comics? 
  a: Walt disney
  b: Stan lee
  c: JK Rowling
  `,
  answer: "b"
},
{
  question: `Where does Spider-Man shoot his webs from?  
  a: His wrist
  b: His eye
  c: His feet
  `,
  answer: "a"
},
{
  question: `How did Peter Parker get his special powers?
  a: He drank poison.
  b: He was bitten by radioactive spider.
  c: He was injected with supersyrum.
  `,
  answer: "b"
},
{
  question: `What is Peter Parker's favourite hobby? 
  a: Singing
  b: Writting
  c: Photography
  `,
  answer: "c"
},
{
  question: `What words of wisdom did Peter Parker's uncle give to him?
  a: With power comes great responsibilities
  b: Dont get trapeed with more power
  c: Live long and prosperous
  `,
  answer: "a"
},
{
  question: ` Marvel introduced a comic book character who would become the new Spider-Man. What's his name?
  a: Bruce wayne
  b: Miles Morales
  c: Tony stark
  `,
  answer: "b"
},
{
  question: `Do Spiderman has crush on anyone? 
  a: yes
  b: no
  
  `,
  answer: "a"
},
{
  question: `which of the following represent Spiderman's personality? 
  a: helpfull
  b: joyfull
  c: kind natured
  d: all of the above
  `,
  answer: "d"
},
{
  question: `who is the inspiration of spiderman? 
  a: Ironman
  b: Captain America
  c: Hulk
  `,
  answer: "a"
},
{
  question: `What was the name of spiderman's best friend?
  a: Harry
  b: Marry james
  c: Flash thomsan  
  `,
  answer: "a"
},
{
  question: `Who was spiderman's first powerfull enemy  ? 
  a: sandman
  b: goblin
  c: vulture
  `,
  answer: "b",
},]

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Great! you scored " + score ) ;