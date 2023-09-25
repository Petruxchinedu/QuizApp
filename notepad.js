var btn1 = document.getElementById("gpp");
btn1.onclick = function(){
  var para = document.createElement('p')
  var img = document.createElement('img')
  para.id = "input"
  para.setAttribute("contenteditable", "true");
  img.src = "icons8-delete-30.png";
  img.id = "img1"
  para.appendChild(img);
  document.querySelector('body').appendChild(para)


  img.onclick = function(){
    para.remove()
  }
}