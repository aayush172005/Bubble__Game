var time = 30;
var Score= 0;
var hitnum =0;
function bubblebanao()
{
    var bulbule="";

for(var i=1;i<=128;i++)
{
    var num=Math.floor(Math.random()*10);
    bulbule +=`<div class="bubble">${num}</div>`;

}

document.querySelector("#pbot").innerHTML=bulbule;
}
function Timerchalao()
{
  var samay=setInterval(function(){
    if(time>0)
    {

        time--;

        document.querySelector("#timer").textContent=time;
    }
    else{
        clearInterval(samay);
        document.querySelector("#pbot").innerHTML=`<h1> GAME OVER ! </h1>`;
     }
  },1000);
  

}
function Hitkaro()
{
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hits").textContent=hitnum;
}
function Scorebadhao()
{
    Score+=10;
    document.querySelector("#Sval").textContent=Score;
}
document.querySelector("#pbot").addEventListener("click",function (info){
    var clicked = Number(info.target.textContent);
    if(clicked==hitnum)
    {
        Scorebadhao();
       
        bubblebanao();
         Hitkaro(); 
        alert("Correct !");
    }
    else{
        alert("Oops, Game over , try again ! ");
        Scorebadhao();
       
        bubblebanao();
         Hitkaro();
    }
})
   
Timerchalao();
bubblebanao();
Hitkaro(); 
