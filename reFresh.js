function reFresh() {
  goo.innerHTML = questions[1].question2;
  var pps = (document.getElementById("pps").innerHTML =
    "<input name= 'color' type= 'radio' value= 'boy' id='git1'/>girl" +
    "<input name= 'color' type= 'radio' value= 'boy' id='git2'/>she" +
    "<input name= 'color' type= 'radio' value= 'boy' id='git3'/>boy");
  var ppz = (document.getElementById("ppz").style.display = "none");
  document.getElementById("new").style.display = "none";
  document.getElementById("new1").style.display = "inline";
  document.getElementById("new2").style.display = "none";
  if (answers[1].question2 == git2) {
    document.getElementById("pp").innerHTML = +1;
  }
}
