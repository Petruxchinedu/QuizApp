var inp = document.getElementById('inp')
var btn = document.getElementById('btn')
var para = document.getElementById('pa')

var todoList = []
function todo(){
  let sum = ''
  for(let i = 0; i < todoList.length; i++){
    let togo = todoList[i]
    let name = `<p>${togo}</p>`
    sum += name
  }
  para.innerHTML= sum
 let inp2 = inp.value
 todoList.push(inp2)
}
