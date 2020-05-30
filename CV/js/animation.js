var pl = document.getElementById('pol');
var bt = document.getElementById('brt');
var handle;
var growthBT;
var fallingBT;
var growthPL;
var fallingPL;
var w = 54;
var iPL = 0;
var iBT = 0;
var maxSize = 15; // to half L = 71
var coursor_inBT = false;
var coursor_inPL = false;
  
function setGrowthBT(func){
	growthBT = setInterval(func, 10);
}
  
function setFallingBT(func) {
	fallingBT = setInterval(func, 10);
}
  
function setGrowthPL(func){
	growthPL = setInterval(func, 10);
}
  
function setFallingPL(func) {
	fallingPL = setInterval(func, 10);
}
  
function biggerBT() {
	if(iBT < maxSize) {
		iBT++;
		bt.style.width = (w+iBT) + 'px';
	}	
	else
		clearInterval(growthBT);
}
  
function smallerBT() {
	if(iBT > 0) {
		iBT--;
		bt.style.width = (w+iBT) + 'px';
	}
	else
		clearInterval(fallingBT);
}
  
function biggerPL() {
	if(iPL < maxSize) {
		iPL++;
		pl.style.width = (w+iPL) + 'px';
	}	
	else
		clearInterval(growthPL);
}
  
function smallerPL() {
	if(iPL > 0) {
		iPL--;
		pl.style.width = (w+iPL) + 'px';
	}
	else
		clearInterval(fallingPL);
}
  
function toBigImg(obj) {
	handle = obj;
	if(handle == bt) {
		clearInterval(fallingBT);
	}
	else if(handle == pl) {
		clearInterval(fallingPL);
	}
	if(handle == bt && coursor_inBT == false) {
		setGrowthBT(biggerBT);
		coursor_inBT = true;
	}
	else if(handle == pl && coursor_inPL == false) {
		setGrowthPL(biggerPL);
		coursor_inPL = true;
	}
}

function toSmallImg(obj) {
	handle = obj;
	if(handle == bt) {
		clearInterval(growthBT);
		coursor_inBT = false;
	}
	else if(handle == pl) {
		clearInterval(growthPL);
		coursor_inPL = false;
	}
	if(handle == bt && coursor_inBT == false)
		setFallingBT(smallerBT);
	else if(handle == pl && coursor_inPL == false)
		setFallingPL(smallerPL);
}