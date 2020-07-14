var numSquares=6;
var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedcolor=pickColor();
	colorDisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else
		{
			squares[i].style.display="none";
		}
	}

});
hardBtn.addEventListener("click",function(){
	
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	h1.style.backgroundColor="steelblue";

	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedcolor=pickColor();
	colorDisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		
	}



});


resetButton.addEventListener("click",function(){
	//generate new colors;
	colors=generateRandomColor(numSquares);
	//pick new color;
	pickedcolor=pickColor();
	//change arr colors
	colorDisplay.textContent=pickedcolor;
	this.textContent="New Colors"
	messageDisplay.textContent="";
	//change colors of square;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#steelblue";
});


colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add click listeners
	squares[i].addEventListener("click",function(){
		//grab color
		var clickedColor=this.style.backgroundColor;
		//compare color
		if(clickedColor===pickedcolor)
		{
			messageDisplay.textContent="Correct!";
			
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again";
			
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}
function changeColors(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make array
	var arr=[]
	//add num random colors to array
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());

	}
	//return arry
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random() *256);
	
	//pick a green from 0 to 255
	var g=Math.floor(Math.random() *256);

	//pick a blue from 0 to 255
	var b=Math.floor(Math.random() *256);

	return "rgb(" + r + ", " + g +", "+b+")";
	

	
}