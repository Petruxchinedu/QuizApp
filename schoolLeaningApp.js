let div1 = document.getElementById("arr")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let div2 = document.getElementById("img")


let alpha = [
  {letter : "A for apple", img: "images/a mage.jpeg" },
  {letter : "B for Ball", img:"images/Ball.webp" },
  {letter : "C for car", img:"images/car1.jpeg" },
  {letter : "D for dog", img:"images/dog.png" },
  {letter : "E for egg",img:"images/egg.jpeg" },
  {letter : "F for fish",img:"images/fish.png" },
  {letter : "G for gun",img:"images/gunnn.jpeg" },
  {letter : "H for house",img:"images/house.jpeg" },
  {letter : "I for ink",img:"images/ink.png" },
  {letter : "J for jug",img:"images/jug.jpeg" },
  {letter : "K for kettle",img:"images/kettle.png" },
  {letter : "L for lion",img:"images/lion.jpeg" },
  {letter : "M for mango",img:"images/mango.jpeg" },
  {letter : "N for nail",img:"images/nail.jpeg" },
  {letter : "O for orange",img:"images/orange.jpeg" },
  {letter : "P for pen",img:"images/pen.jpeg" },
  {letter : "Q for queen",img:"images/queen.jpeg" },
  {letter : "R for run",img:"images/run.jpeg" },
  {letter : "S for app",img:"images/sun.png" },
  {letter : "T for apple",img:"images/table.png" },
  {letter : "U for apple",img:"images/umbrella.png" },
  {letter : "V for apple",img:"images/van.jpeg" },
  {letter : "W for apple",img:"images/window.png" },
  {letter : "X for apple",img:"images/xmas.jpeg" },
  {letter : "Y for apple",img:"images/yam.jpeg" },
  {letter : "Z for apple",img:"images/zebra.jpeg" }
]

let i = 0;

function appD(){
  const car = alpha[i];
  div1.innerHTML = car.letter;
  div2.src = car.img;
    // div1.innerHTML = (alpha[i++]["imag"])  
}

btn2.addEventListener("click", ()=>{
  if(i < alpha.length-1){
    i++;
    appD()
  }
})
btn1.addEventListener("click", ()=>{
  if(i > 0){
    i--;
    appD()
  }
})
