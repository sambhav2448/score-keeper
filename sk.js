var player1=document.querySelector("#p1");
var player2=document.querySelector("#p2");
var sp1=document.querySelector("#sp1");
var sp2=document.querySelector("#sp2");
var para=document.querySelector("p span");
var rbutton=document.querySelector("#rbutton");
var input=document.querySelector("input");


var a=0;
var b=0;

var gameover=false;
var winningscore=5;


player1.addEventListener("click",function()
{
	if(!gameover){
		a++;
		if(a===winningscore)
		{
			sp1.classList.add("winner");
			gameover=true;
		}
		sp1.textContent=a;
	}

});

player2.addEventListener("click",function()
{
	if(!gameover){
		b++;
		if(b===winningscore){
			sp2.classList.add("winner");
			gameover=true;
		}
sp2.textContent=b;
}
});


rbutton.addEventListener("click",function()
{
	
reset();

});


function reset(){
	sp1.textContent=0;
	sp2.textContent=0;
	a=0;
	b=0;
	gameover=false;
	sp1.classList.remove("winner");
	sp2.classList.remove("winner");


}

input.addEventListener("change",function(){
para.textContent=input.value;
winningscore=Number(input.value);//instead of input we can use the key word 'this' which refers to the input here

reset();
});