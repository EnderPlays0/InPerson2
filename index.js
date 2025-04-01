var x = document.getElementById("catImage");
var catHide = document.getElementById('hideCat')
var y = document.getElementById("dogImage");
var dogHide = document.getElementById('hideDog')
var z = document.getElementById("cowImage");
var cowHide = document.getElementById('hideCow')
x.style.display = "none";
y.style.display = "none";
z.style.display = "none";
function catFunctionReveal(){
    x.style.display = "block";  
    catHide.style.display = "block";
}
function catFunctionHide(){
    x.style.display = "none";
    catHide.style.display = "none";
}
function dogFunctionReveal(){
    y.style.display = "block";
    dogHide.style.display = "none";
}
function dogFunctionHide(){
    y.style.display = "none";
    dogHide.style.display = "none";
}
function cowFunctionReveal(){
    z.style.display = "block";
    cowHide.style.display = "none";
}
function cowFunctionHide(){
    z.style.display = "none";
    cowHide.style.display = "none";
}
