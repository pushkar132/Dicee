// First Dice
var randomNum1=Math.floor(Math.random()*6+1);
var randomNum1Src="images/dice"+randomNum1+".png";
document.querySelector(".img1").setAttribute("src",randomNum1Src);
//Second Dice
var randomNum2=Math.floor(Math.random()*6+1);
var randomNum2Src="images/dice"+randomNum2+".png";
document.querySelector(".img2").setAttribute("src",randomNum2Src);
//winner
if(randomNum1>randomNum2){
  document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(randomNum2>randomNum1){
  document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else{
  document.querySelector("h1").textContent="Draw";
}
