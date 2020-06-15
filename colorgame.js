
/*var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]*/
var num=6;
var colors=generaterandomcolor(num);
var squares=document.querySelectorAll(".square");
var pickedColor=randomcolor();
var colorDisplay=document.getElementById("colorDisplay");
var display=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	resetbutton.classList.remove("selected");
	num=3;
	colors=generaterandomcolor(num);
	pickedColor=randomcolor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];

		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	resetbutton.classList.remove("selected");
	num=6;
	colors=generaterandomcolor(num);
	pickedColor=randomcolor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		
	}
})
/*hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
});*/

resetbutton.addEventListener("click",function(){
	resetbutton.classList.add("selected");
	hardbtn.classList.remove("selected");
	easybtn.classList.remove("selected");

	//generate colors
	colors=generaterandomcolor(num);
	pickedColor=randomcolor();
	colorDisplay.textContent=pickedColor;
	display.textContent="";
	this.textContent="new color";

	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background=colors[i];
	
	}

	h1.style.background="steelblue";	
});
colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++)
{
	//add initial color to the square
	squares[i].style.background=colors[i];
	//add click listner to square
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedcolor=this.style.background;
		//compare to clicked color
		if(clickedcolor === pickedColor){
			for(var i=0;i<squares.length;i++)
			{
				squares[i].style.background=pickedColor;
			}
			display.textContent="correct";
			resetbutton.textContent="play again?";
			h1.style.background=clickedcolor;
		}
		else
		{
			//h1.style.background=clickedcolor;
			this.style.background="#232323";
			display.textContent="try Again";
		}
		h1.style.background=steelblue;
	});
}


function randomcolor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolor(num){
	var arr =[];
	for(var i=0; i<num;  i++)
	{
		arr.push(colorproduce());
	}

	return arr;
}

function colorproduce()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);

    var b=Math.floor(Math.random()*256);
    return "rgb(" + r  + ", " + g  + ", " + b  + ")";


}
