var elems = document.querySelectorAll("a[href^='mailto:']");
if(elems.length>0){
  elems[0].scrollIntoView();
}
for(var i = 0; i<elems.length; i++){
  console.log(elems[i].href.substr(7));
  elems[i].style.backgroundColor = "red";
  elems[i].style.border = "1px solid black";
  elems[i].style.color = "white";
}
