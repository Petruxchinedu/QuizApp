var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')
var reset = document.getElementById('btn')
var para = document.getElementById('par')
var newPara = document.getElementById('newp')

var turn = 1;
function handle(e){
  if(turn === 1){
    e.target.innerHTML = "X";
    e.target.disabled = true;
    turn = 2
    para.innerHTML = 'Player O turn'
    
  }else if (turn=== 2){
    e.target.innerHTML = "O";
    e.target.disabled = true;
    turn = 1
    para.innerHTML = 'Player X turn'
    
  }

  if(btn1.innerText === 'X' && btn2.innerText === 'X' && btn3.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  } else if (btn4.innerText === 'X' && btn5.innerText === 'X' && btn6.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  else if (btn7.innerText === 'X' && btn8.innerText === 'X' && btn9.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  else if (btn1.innerText === 'X' && btn4.innerText === 'X' && btn7.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  else if (btn3.innerText === 'X' && btn6.innerText === 'X' && btn9.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  else if (btn1.innerText === 'X' && btn5.innerText === 'X' && btn9.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  else if (btn3.innerText === 'X' && btn5.innerText === 'X' && btn7.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  else if (btn2.innerText === 'X' && btn5.innerText === 'X' && btn8.innerText ==='X'){
    newPara.innerHTML = 'Player X wins'
  }
  if(btn1.innerText === 'O' && btn2.innerText === 'O' && btn3.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  } else if (btn4.innerText === 'O' && btn5.innerText === 'O' && btn6.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  else if (btn7.innerText === 'O' && btn8.innerText === 'O' && btn9.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  else if (btn1.innerText === 'O' && btn4.innerText === 'O' && btn7.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  else if (btn3.innerText === 'O' && btn6.innerText === 'O' && btn9.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  else if (btn1.innerText === 'O' && btn5.innerText === 'O' && btn9.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  else if (btn3.innerText === 'O' && btn5.innerText === 'O' && btn7.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  else if (btn2.innerText === 'O' && btn5.innerText === 'O' && btn8.innerText ==='O'){
    newPara.innerHTML = 'Player O wins'
  }
  
}



function  resetBtn(){
  location.reload()
}