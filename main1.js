var firstInput = document.getElementById("num1")
var secondInput = document.getElementById("num2")
var thirdInput = document.getElementById("result")

function add(x, y){
  x = firstInput
  y = secondInput
  thirdInput.innerHTML = Number(x.value) + Number(y.value);
}
var firstIn = document.getElementById("num3")
var secondIn = document.getElementById("num4")
var thirdIn = document.getElementById("result-1")

function addSub(x, y){
  x = firstIn
  y = secondIn
  thirdIn.innerHTML = x.value - y.value;
}

var firstInp = document.getElementById("num5")
var secondInp = document.getElementById("num6")
var thirdInp = document.getElementById("result-2")

function addMulti(x, y){
  x = firstInp
  y = secondInp
  thirdInp.innerHTML = x.value * y.value;
}
var fistIn = document.getElementById("num7")
var scondIn = document.getElementById("num8")
var thidIn = document.getElementById("page")

function newCal(x, y){
  x = fistIn
  y = scondIn
  thidIn.innerHTML = x.value / y.value;
}
var firstInpu = document.getElementById("num9")
var secondInpu = document.getElementById("num10")
var thirdInpu = document.getElementById("result-4")

function addMold(x, y){
  x = firstInpu
  y = secondInpu
  thirdInpu.innerHTML = x.value % y.value;
}



