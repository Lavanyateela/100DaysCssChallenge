let minus=document.getElementById("minus");
let plus=document.getElementById("plus");
let counter=document.getElementById("counter");
let count=0;
plus.addEventListener("click",function(){
    counter.innerHTML=++count;
})
minus.addEventListener("click",function(){
    counter.innerHTML=--count;
})