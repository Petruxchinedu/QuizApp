var hours = document.getElementById('hs')
var minutes = document.getElementById('ms')
var seconds = document.getElementById('ss')
var start = document.getElementById('play')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var clock;

seconds.value = '00';
minutes.value = '00';
hours.value = '00';
  function clock1() {
   
  seconds.value = +seconds.value+ (1)
                                 
  if(seconds.value === '59'){
    seconds.value=0
    minutes.value = +minutes.value + 1  
  }
  if(minutes.value === '59'){
    minutes.value=0
    hours.value = +hours.value + 1
  } 
  
  
}
function startBtn(){
  
  // hours.value = hours.value < 10 ? "0" + hours.value : hours.value
  // minutes.value = minutes.value < 10 ? "0" + minutes.value : minutes.value
  // seconds.value = seconds.value < 10 ? "0" + seconds.value : seconds.value
  clock = setInterval(clock1,10)

}
function pauseBtn(){
  clearInterval(clock)
}

function resetBtn(){
   location.reload()
 }
function next(){
  document.getElementById("settime").style.visibility = "visible";
}
function saveAlarm(){
  var hour = document.getElementById("setHr")
  var minute = document.getElementById("setMin")
  var second = document.getElementById("setSec")
  document.getElementById("setBtn").setAttribute("onclick", "cancelBtn()");

  function x(){
    document.getElementById("settime").innerHTML = "Your Alarm is set for "+hour.value+":"+minute.value+":"+second.value;

    document.getElementById("settime").style.fontSize = "xxx-large";
    document.getElementById("settime").style.fontWeight = "bold";
    document.getElementById("settime").style.paddingLeft = "99px";
    document.getElementById("settime").style.paddingTop = "45px";
    document.getElementById("settime").style.color = "blue";
    document.getElementById("setBtn").innerHTML = "Cancel Alarm";

   
  x();
}
if(document.getElementById("hs").value ==  hour.value && document.getElementById("ms").value == minute.value && document.getElementById("ss").value == second.value){
  var audio = new Audio("Your_Future_Self_Will_Thank_You_For_Watching_This_Video__Lisa_Nichols_Motivation(256k).mp3");
  setInterval(()=>{
    audio.play()
  },10)
  console.log('hey')
}
else{
  setTimeout(x,100)
}
}
function cancelBtn(){
  window.location.reload()
}
