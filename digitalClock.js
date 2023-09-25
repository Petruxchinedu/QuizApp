let hourEl = document.getElementById("hour")
let minuteEl= document.getElementById("minute")
let secondEl= document.getElementById("second")
let btn1 =document.getElementById("btn1")
let btn2 =document.getElementById("btn2")
let inp = document.getElementById('inp')
let setHr = document.getElementById('setHr')
let setMin = document.getElementById('setMin')
let setSec = document.getElementById('setSec')
let pp = document.getElementById("pp")

function updateClock(){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if(h > 12){
    h = h - 12
    ampm = "PM"
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;


  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;
  ampm.innerHTML = ampm;

  setTimeout(()=>{updateClock()}, 1000)
}
updateClock()

btn1.addEventListener('click', ()=>{
  document.getElementById("inp").style.visibility = "visible";
  document.getElementById("btn2").style.visibility = "visible";
})
  
  
btn2.addEventListener('click', ()=>{
  btn1.style.visibility = "hidden";
  let para = document.createElement('p')
  let output1 = setHr.value
  let output2 = setMin.value
  let output3 = setSec.value
  para.innerHTML = `Your alarm is set to ${setHr.value}: ${setMin.value}: ${setSec.value}`
  para.style.color = "white"
  para.style.fontSize = "50px"
  para.style.visibility = "visible"
  para.style.marginLeft = "-60px"
  pp.appendChild(para);
  let h = hourEl.innerHTML;
  let m = minuteEl.innerHTML;
  let s = secondEl.innerHTML ;
  if(h == setHr.value && m == setMin.value  && s == setSec.value){
    console.log('hey')
  }
   
})

