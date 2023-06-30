let x;

document.getElementById("rollButton").onclick = function(){

  x =  Math.floor(Math.random() * 10) + 1;

document.getElementById("xlabel").innerHTML = x;

}
