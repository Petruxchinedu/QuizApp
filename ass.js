let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let new1 = document.getElementById("new");
let nep1 = document.getElementById("nep");

var question = [
  { ques: "what is your name", a: "<input name= 'color' type= 'radio' value= 'girl' id='git1'/>girl" +
  "<input name= 'color' type= 'radio' value= 'she' id='git2'/>she" +
  "<input name= 'color' type= 'radio' value= 'boy' id='git3'/>boy" },
  { ques: "how old are you", a: "<input name= 'color' type= 'radio' value= '90' id='giz1'/>90" +
  "<input name= 'color' type= 'radio' value= '24' id='giz2'/>24" +
  "<input name= 'color' type= 'radio' value= '32' id='gitz3'/>32" },
  { ques: "where do you stay?", a: "<input name= 'color' type= 'radio' value= 'ogun' id='git1'/>ogun" +
  "<input name= 'color' type= 'radio' value= 'oyo' id='git2'/>oyo" +
  "<input name= 'color' type= 'radio' value= 'osun' id='git3'/>osun" },
  { ques: "what is your best food?", a: "<input name= 'color' type= 'radio' value= 'egg' id='git1'/>egg" +
  "<input name= 'color' type= 'radio' value= 'rice' id='git2'/>rice" +
  "<input name= 'color' type= 'radio' value= 'beans' id='git3'/>beans" },
  { ques: "what is your best color", a: "<input name= 'color' type= 'radio' value= 'red' id='git1'/>red" +
  "<input name= 'color' type= 'radio' value= 'green' id='git2'/>green" +
  "<input name= 'color' type= 'radio' value= 'blue' id='git3'/>blue" },
];
var answers = [
  { question1: "she" },
  { question2: "32" },
  { question3: "oyo" },
  { question4: "rice" },
  { question5: "green" },
];
document.getElementById("new").innerHTML =question[0].ques
document.getElementById("nep").innerHTML =question[0].a
let i = 0;

function away() {
  const gof = question[i];
  new1.innerHTML = gof.ques;
  nep1.innerHTML =gof.a
}

btn2.addEventListener("click", () => {
  if (i < question.length - 1) {
    i++;
    away();
  }
});
btn1.addEventListener("click", () => {
  if (i > 0) {
    i--;
    away();
  }
});
document.getElementById("git2").addEventListener("click", (e) => {
  if(document.getElementById("git2").value == answers[0].question1){
    document.getElementById('pp').innerHTML = +1
    console.log("hey");
    // document.getElementById("pp").style.display = "none";
    e.target.disabled = true;
  }
});
document.getElementById("git1").addEventListener("click", (e) => {
    document.getElementById('pp').innerHTML = +0
    console.log("hey1");
    // document.getElementById("pp").style.display = "none";
    e.target.disabled = true;  
});
document.getElementById("git3").addEventListener("click", (e) => {
    document.getElementById('pp').innerHTML = +0
    console.log("hey2");
    // document.getElementById("pp").style.display = "none";  
    e.target.disabled = true;
});

// document.getElementById("giz3").addEventListener("click", (e) => {
//   // if(document.getElementById("giz3").value == answers[0].question1){
//   //   document.getElementById('pp').innerHTML += +1
//   //   console.log("hey");
//   //   // document.getElementById("pp").style.display = "none";
//   //   e.target.disabled = true;
//   // }
// });
// document.getElementById("giz1").addEventListener("click", (e) => {
//     document.getElementById('pp').innerHTML += +0
//     console.log("hey1");
//     // document.getElementById("pp").style.display = "none";
//     e.target.disabled = true;  
// });
// document.getElementById("giz").addEventListener("click", (e) => {
//     document.getElementById('pp').innerHTML += +0
//     console.log("hey2");
//     // document.getElementById("pp").style.display = "none";  
//     e.target.disabled = true;
// });
