const btn=document.getElementById("submit-button");
const first =document.getElementById("first");
const Second =document.getElementById("Second");

function func(){
    alert("qwerty")
}
function fun2(){
    alert("asdfg")
}
function fun3(){
    alert("zxcvb")
}
btn.addEventListener("click",func);
first.addEventListener("click",fun2,true);
Second.addEventListener("click",fun3);
