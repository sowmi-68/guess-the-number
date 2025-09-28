var a = Math.floor(Math.random()*10) + 1
console.log(a)
var p =document.getElementById("res")
var s = document.getElementById("score")
var point = 10
function res(){
    var b = document.getElementById("num").value
   if(a==b){
    p.textContent = "Your guess is right"
    alert("You Won with score:"+point)
    
   }
   else{
       point -=1
       p.textContent = "Your guess is wrong"
       s.textContent = "Score:"+point
   }
   
}