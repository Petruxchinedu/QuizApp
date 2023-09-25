var input = document.getElementById('inp');
var newp = document.getElementById('new')
var todoList = [0]

function good(){
  // let name = document.createElement('p')
  // name.innerHTML = input.value
  // document.querySelector('body').appendChild(name)
  // console.log(name)
  let name = input.value
   todoList.push(name)
   newp.innerHTML = todoList
   localStorage.setItem('todoList', todoList)
}
 newp.innerHTML=localStorage.getItem("todoList")
//  localStorage.removeItem("name")