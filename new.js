let giv1 = document.getElementById("giv1");
let giv2 = document.getElementById("giv2");
let giv3 = document.getElementById("giv3");
let git1 = document.getElementById("git1");
let git2 = document.getElementById("git2");
let git3 = document.getElementById("git3");
let gis1 = document.getElementById("gis1");
let gis2 = document.getElementById("gis2");
let gis3 = document.getElementById("gis3");
let gip1 = document.getElementById("gip1");
let gip2 = document.getElementById("gip2");
let gip3 = document.getElementById("gip3");
let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");
let gif3 = document.getElementById("gif3");
let giz1 = document.getElementById("giz1");
let giz2 = document.getElementById("giz2");
let giz3 = document.getElementById("giz3");
let gifz1 = document.getElementById("gifz1");
let gifz2 = document.getElementById("gifz2");
let gifz3 = document.getElementById("gifz3");
let gito1 = document.getElementById("gito1");
let gito2 = document.getElementById("gito2");
let gito3 = document.getElementById("gito3");
let gigo1 = document.getElementById("gigo1");
let gigo2 = document.getElementById("gigo2");
let gigo3 = document.getElementById("gigo3");
let gi1 = document.getElementById("gi1");
let gi2 = document.getElementById("gi2");
let gi3 = document.getElementById("gi3");
let para2 = document.getElementById("pp");
 var questions = [
  { question1: "How many minutes are there in a full week?" },
  { question2: "What software company is headquartered in Redmond, washington?" },
  { question3: "What planet is closest to the sun?" },
  { question4: "What Phone company produced 3310?" },
  { question5: "Which country is regarded as the giant of Africa?" },
  { question6: "What is the most popular drink inthe world that is not alcohol?" },
  { question7: "What does 'HTTP' stand for?" },
  { question8: "What is the smallest country in the world?" },
  { question9: "What is the deadliest insect?" },
  { question10: "How many sense organ do we have" },
];
var answers = [
  { question1: "10,080" },
  { question2: "Microsoft" },
  { question3: "Mercury" },
  { question4: "Nokia" },
  { question5: "Nigeria" },
  { question6: "Coffee"},
  { question7: "HyperText Transfer Protocol"},
  { question8: "Vatican city"},
  { question9: "Mosquito"},
  { question10: "5"},
];
 var goo = document.getElementById("display");
goo.innerHTML = questions[0].question1;
document.getElementById("pps").innerHTML =
  "<input name= 'color' type= 'radio' value= '11,240' id='giv1'/>11,240" +
  "<input name= 'color' type= 'radio' value= '10,080' id='giv2'/>10,080" +
  "<input name= 'color' type= 'radio' value= '9,860' id='giv3'/>9,860";
document.getElementById("new").style.display = "none";
document.getElementById("new1").style.display = "none";
document.getElementById("new2").style.display = "none";
document.getElementById("new3").style.display = "none";
document.getElementById("new4").style.display = "none";
document.getElementById("new5").style.display = "none";
document.getElementById("new6").style.display = "none";
document.getElementById("new7").style.display = "none";
document.getElementById("new8").style.display = "none";
document.getElementById('submit').style.display="none";



document.getElementById("giv2").addEventListener("click", (e) => {
  if(document.getElementById("giv2").value == answers[0].question1){
    para2.innerHTML = +1
    console.log("heyz");
    
    document.getElementById("pp").style.display = "none";
    e.target.disabled = true;
  }
  document.getElementById("new").style.display = "inline";
});
document.getElementById("giv1").addEventListener("click", (e) => {
  para2.innerHTML = +0
  console.log("hey1");
  document.getElementById("pp").style.display = "none";
  e.target.disabled = true;  
  document.getElementById("new").style.display = "inline";
});
document.getElementById("giv3").addEventListener("click", (e) => {
  para2.innerHTML = +0
  console.log("hey2");
  document.getElementById("pp").style.display = "none";  
  e.target.disabled = true;
  document.getElementById("new").style.display = "inline";
});






function reFresh() {
  goo.innerHTML = questions[1].question2;
  document.getElementById("pps").innerHTML =
    "<input name= 'colo' type= 'radio' value= 'Google' id='git1'/>Google" +
    "<input name= 'colo' type= 'radio' value= 'Microsoft' id='git2'/>Microsoft" +
    "<input name= 'colo' type= 'radio' value= 'Skype' id='git3'/>Skype";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new").style.display = "none";
  document.getElementById("new1").style.display = "none";
  document.getElementById("new2").style.display = "none"; 

  document.getElementById("git2").addEventListener("click", (e) => {
    if(document.getElementById("git2").value == answers[1].question2){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyz");
      document.getElementById("new1").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("git1").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new1").style.display = "inline";
       document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("git3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new1").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });
}
function reFresh1() {
  goo.innerHTML = questions[2].question3;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'Mercury' id='gis1'/>Mercury" +
    "<input name= 'color' type= 'radio' value= 'Venus' id='gis2'/>Venus" +
    "<input name= 'color' type= 'radio' value= 'Mars' id='gis3'/>Mars";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new2").style.display = "none";
  document.getElementById("new3").style.display = "none";
  document.getElementById("new1").style.display = "none";
  // document.getElementById("pp").style.display = "none";
  document.getElementById("gis1").addEventListener("click", (e) => {
    if(document.getElementById("gis1").value == answers[2].question3){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyz");
      document.getElementById("new2").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gis2").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new2").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gis3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new2").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });
}
function reFresh2() {
  goo.innerHTML = questions[3].question4;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'Samsung' id='gip1'/>Samsung" +
    "<input name= 'color' type= 'radio' value= 'Nokia' id='gip2'/>Nokia" +
    "<input name= 'color' type= 'radio' value= 'Sony Ericsson' id='gip3'/>Sony Ericsson";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new3").style.display = "none";
  document.getElementById("new2").style.display = "none";
  
  document.getElementById("gip2").addEventListener("click", (e) => {
    if(document.getElementById("gip2").value == answers[3].question4){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyp");
      document.getElementById("new3").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gip1").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new3").style.display = "inline";
       document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gip3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new3").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });
}

function reFresh3() {
  goo.innerHTML = questions[4].question5;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'Egypt' id='gif1'/>Egypt" +
    "<input name= 'color' type= 'radio' value= 'South Africa' id='gif2'/>South Africa" +
    "<input name= 'color' type= 'radio' value= 'Nigeria' id='gif3'/>Nigeria";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new4").style.display = "inline";
  document.getElementById("new3").style.display = "none";
  document.getElementById("gif3").addEventListener("click", (e) => {
    if(document.getElementById("gif3").value == answers[4].question5){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyzp");
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gif1").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gif2").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });

}
function reFresh4() {
  goo.innerHTML = questions[5].question6;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'Coffee' id='giz1'/>Coffee" +
    "<input name= 'color' type= 'radio' value= 'Tea' id='giz2'/>Tea" +
    "<input name= 'color' type= 'radio' value= 'Coke' id='giz3'/>Coke";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new4").style.display = "none";
  document.getElementById("new5").style.display = "none";
  document.getElementById("giz1").addEventListener("click", (e) => {
    if(document.getElementById("giz1").value == answers[5].question6){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyzp");
      document.getElementById("new5").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("giz2").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new5").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("giz3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new5").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });

}
function reFresh5() {
  goo.innerHTML = questions[6].question7;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'HypeText Transfer Protocol' id='gifz1'/>HypeText Transfer Protocol" +
    "<input name= 'color' type= 'radio' value= 'HyperText Transfer Protocol' id='gifz2'/>HyperText Transfer Protocol" +
    "<input name= 'color' type= 'radio' value= 'Hyper Text Transfer Protocol' id='gifz3'/>Hyper Text Transfer Protocol";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new5").style.display = "none";
  document.getElementById("new6").style.display = "none";
  document.getElementById("gifz2").addEventListener("click", (e) => {
    if(document.getElementById("gifz2").value == answers[6].question7){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyzp");
      document.getElementById("new6").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gifz1").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new6").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gifz3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new6").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });

}
function reFresh6() {
  goo.innerHTML = questions[7].question8;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'Vatican city' id='gito1'/>Vatican city" +
    "<input name= 'color' type= 'radio' value= 'Canada' id='gito2'/>Canada" +
    "<input name= 'color' type= 'radio' value= 'Ethopia' id='gito3'/>Ethopia";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new6").style.display = "none";
  document.getElementById("new7").style.display = "none";
  document.getElementById("gito1").addEventListener("click", (e) => {
    if(document.getElementById("gito1").value == answers[7].question8){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyzp");
      document.getElementById("new7").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gito2").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new7").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gito3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new7").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });

}
function reFresh7() {
  goo.innerHTML = questions[8].question9;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'Ant' id='gigo1'/>Ant" +
    "<input name= 'color' type= 'radio' value= 'Mosquito' id='gigo2'/>Mosquito" +
    "<input name= 'color' type= 'radio' value= 'Tsetse fly' id='gigo3'/>Tsetse fly";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new7").style.display = "none";
  document.getElementById("new8").style.display = "none";
  document.getElementById("gigo2").addEventListener("click", (e) => {
    if(document.getElementById("gigo2").value == answers[8].question9){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyzp");
      document.getElementById("new8").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gigo1").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("new8").style.display = "inline";
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gigo3").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("new8").style.display = "inline";
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });

}
function reFresh8() {
  goo.innerHTML = questions[9].question10;
  document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= '8' id='gi1'/>8" +
    "<input name= 'color' type= 'radio' value= '6' id='gi2'/>6" +
    "<input name= 'color' type= 'radio' value= '5' id='gi3'/>5";
  document.getElementById("ppz").style.display = "none";
  document.getElementById("new8").style.display = "none";
  document.getElementById("submit").style.display = "inline";
  document.getElementById("gi3").addEventListener("click", (e) => {
    if(document.getElementById("gi3").value == answers[9].question10){
      para2.innerHTML = Number(para2.innerHTML) + +1
      console.log("heyzp");
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;
    }
  });
  document.getElementById("gi1").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey1");
      document.getElementById("pp").style.display = "none";
      e.target.disabled = true;  
  });
  document.getElementById("gi2").addEventListener("click", (e) => {
      para2.innerHTML =Number(para2.innerHTML) +  +0
      console.log("hey2");
      document.getElementById("pp").style.display = "none";  
      e.target.disabled = true;
  });

}
function submiT(){
  goo.style.display = 'none'
  document.getElementById('submit').style.display = 'none'
  document.getElementById("pps").innerHTML ='Your total score is: ' + para2.innerHTML + ' /10 points';
  para2.style.display = 'none'
}






