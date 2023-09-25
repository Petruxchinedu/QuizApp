var para = document.getElementById('ide')
var para2 = document.getElementById('ides')
var btn = document.getElementById('btn')
var newText= document.getElementById('new')
var newText1= document.getElementById('new1')

 
btn.onclick = function() {

  if(Math.floor(Math.random()*100 ) <= 45){
    newText1.innerHTML = para.value + " and " + para2.value  + Math.floor(Math.random()*100) +" % " + " You are not compatible "
  }
  else if (Math.floor(Math.random()*100 ) <= 60){
    newText1.innerHTML = para.value + " and " + para2.value + Math.floor(Math.random()*100 ) +" % " + " You are  compatible"
  }
  else if (Math.floor(Math.random()*100 ) <= 100){
    newText1.innerHTML = para.value + " and " + para2.value  + Math.floor(Math.random()*100 ) +" % " + " You are so compatible "
  }
}