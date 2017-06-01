var currInOrd = 1;
var currOutOrd = 0;
var timer=null;

//一、自动变换
function autoChange(){
	timer = setInterval(goStep,3000);
}

function goStep(){
	//1）、改变滑入和滑出的图片序号（按照顺序进行变换）
	currInOrd++;
	currOutOrd++;
	if(currInOrd>2){
		currInOrd=1;
	}
	if(currOutOrd>2){
		currOutOrd=1;
	}

	//2）、滑入滑出效果
	slideInOut();

	//3）、改变按钮颜色
	changeBtnColor();

}


//二、点击按钮，跳转到对应的图片。
function goImg(ord){
	//1）、改变滑入和滑出的图片序号（点那个是那个）
	currOutOrd = currInOrd;
	currInOrd = ord;
	
	//2）、滑入滑出效果
	slideInOut();

	//3）、改变按钮颜色
	changeBtnColor();
}
	
//2）、滑入滑出效果
var slideInOutTimer = null;
function slideInOut(){
	//滑入滑出的初始化
	slideInOutInit();
	//启动定时器进行滑入滑出效果
	slideInOutTimer=setInterval(slideInOutStep,10);
} 
/*
1.5*200=300
200*10=2000
*/

//滑入和滑出的初始化；300
function slideInOutInit(){
	//1、把currLeft重置为0;
	currLeft =0;
	
	//2、让滑入的图片放置容器右边
	$("box").children[currInOrd-1].style.left = "1350px";	
}

var currLeft = 0;
function slideInOutStep(){
	//改变数据
	currLeft -=1.5;
	
	//边界停止
	if(currLeft<=-1350){
		window.clearInterval(slideInOutTimer);
	}
	
	//改变外观
	$("box").children[currOutOrd-1].style.left = currLeft+"px";
	$("box").children[currInOrd-1].style.left = (currLeft+1350)+"px";
}

function changeBtnColor(){
	var ul = $("box").lastElementChild;
	for(var i=0;i<2;i++){
		ul.children[i].style.backgroundColor = "pink";
	}
	ul.children[currInOrd-1].style.backgroundColor = "#009b72";
}

//3、鼠标悬停时，变换停止
function stopChange(){
	window.clearInterval(timer);
}

//4、鼠标离开，继续自动变换

function initUI(){
	//1、先让所有的按钮变成原始的颜色
	var ul = $("box").lastElementChild;
	for(var i=0;i<2;i++){
		ul.children[i].style.backgroundColor = "pink";
	}
	//2、让第一个按钮变成高亮颜色；
	ul.children[0].style.backgroundColor = "red";
	
	//让后三张图片远离容器
	$("box").children[0].style.left = "0px";
	for(var i=1;i<2;i++){
		$("box").children[i].style.left = "1350px";
	}
}

window.onload = function(){
	initUI();
	autoChange();
	
	$("box").onmouseover = stopChange;
	$("box").onmouseout = autoChange;
	
	var ul = $("box").lastElementChild;
	for(let i=0;i<2;i++){
		ul.children[i].onmouseover = function(){
			goImg(i+1);
		}
	}	
}
