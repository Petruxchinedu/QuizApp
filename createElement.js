// var para = document.createElement('p')//createElement= for creating html tag in javacsript
// console.log(para)
// var txt = document.createTextNode("hello world")//createTextNode =to add text to the html tag e.g p tag
// para.appendChild(txt)    //parent.appendChild("")
// console.log(para)

// document.querySelector("any html tag in the body").appendChild(para);//to make it show at the dom

// para.setAttribute("class", "classname")



// var para = document.createElement("input")
// document.querySelector("body").appendChild(para)
// para.setAttribute("id","className")// to give it an id or class,start with id , then classname
// document.querySelector("#className").type = "text"// TO GIVE IT A TYPE

// var btn = document.createElement("button")
// var txt = document.createTextNode("ADD")
// btn.appendChild(txt)
// document.querySelector("body").appendChild(btn)

// btn.onclick = function(){
//   var parag = document.createElement("p");
//   var parag2 = document.createTextNode(para.value);
//   parag.appendChild(parag2);
//   document.querySelector("body").appendChild(parag);
//   parag.id = "goo"
//   var butt1 = document.createElement("button");
//   var text2 = document.createTextNode("delete");
//   parag.appendChild(butt1)
//   butt1.appendChild(text2)
//   butt1.setAttribute("id", "button")

//   butt1.onclick = function(){
//     document.getElementById("goo").style.textDecoration ="line-through";
//     }

  
// }// to create onclick in our javascripT


//para.style.background = "green"; //to style inside javascript
//para.style.fontSize = "60px"
var ife = document.createElement("div")
document.querySelector("body").appendChild(ife)
var kin = document.createElement("input")
ife.appendChild(kin)
kin.id = "goo"
var btn = document.createElement("button")
var text = document.createTextNode("Add")
btn.appendChild(text)
ife.appendChild(btn)
var peter = document.createElement("ul")
ife.appendChild(peter)



btn.onclick = function () {
  var paul = document.createElement("li")
  var pal = document.createTextNode(kin.value)
  paul.appendChild(pal)
  paul.id = "ggg"
  document.querySelector("body").appendChild(paul);

  var butt1 = document.createElement("button");
  var text2 = document.createTextNode("delete");
  butt1.appendChild(text2);
  paul.appendChild(butt1);
  peter.appendChild(paul);
  butt1.setAttribute("id", "butto");

  var butt2 = document.createElement("button");
  var text3 = document.createTextNode("Remove");
  butt2.appendChild(text3)
  paul.appendChild(butt2)
  

  butt1.onclick = function(){
  document.getElementById("ggg").style.textDecoration ="line-through";}

  butt2.onclick = function(){
  paul.remove()}
}