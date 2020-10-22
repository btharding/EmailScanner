document.addEventListener("DOMContentLoaded", function(){
 var button = document.getElementById("findMailTo");
 button.addEventListener("click", function(){
   chrome.tabs.executeScript({file:"getMailTo.js"});
 });
});
