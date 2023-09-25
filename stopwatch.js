var start = document.getElementById('play')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var hours = document.getElementById('hs')
var minutes = document.getElementById('ms')
var seconds = document.getElementById('ss')
var clock;
seconds.value = '00';
minutes.value = '00';
hours.value = '00';
  function clock1() {
   
  seconds.value = +seconds.value+ (1)
  if(seconds.value === '59'){
    seconds.value=0
    minutes.value =  +minutes.value + 1  
  }
  if(minutes.value === '59'){
    minutes.value=0
    hours.value = +hours.value + 1
  } 
  // if(hours.value < '10'){
  //   hours.value = "0" + hours.value
  // }else{hours.value}
  // if(minutes.value < '10'){
  //   minutes.value = "0" + minutes.value
  // }else{minutes.value}
  // if(seconds.value < '10'){
  //   seconds.value = "0" + seconds.value
  // }else{seconds.value}
  
}
function startBtn(){

  // hours.value = hours.value < 10 ? "0" + hours.value : hours.value
  // minutes.value = minutes.value < 10 ? "0" + minutes.value : minutes.value
  // seconds.value = seconds.value < 10 ? "0" + seconds.value : seconds.value
clock  = setInterval(clock1,100)
}
function pauseBtn(){
clearInterval(clock)
}

function resetBtn(){
   location.reload()
 }
 

