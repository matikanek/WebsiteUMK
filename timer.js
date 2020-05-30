var numer = Math.floor(Math.random()*5)+1;
var obrazek = "<img src='img/slajd1.jpg' />";
var zmienna=0;

function odliczanie()
	{
		var dzisiaj = new Date();
	
		var godzina = dzisiaj.getHours();
		if(godzina<10) godzina = "0"+godzina;
	
		var minuta = dzisiaj.getMinutes();
		if(minuta<10) minuta = "0"+minuta;
	
		var sekunda = dzisiaj.getSeconds();
		if(sekunda<10) sekunda = "0"+sekunda;
	
		document.getElementById("time").innerHTML = godzina+":"+minuta+":"+sekunda;
		
		if(zmienna%250 == 0)
		{	
			schowaj();
			obrazek = "<img src='img/slajd"+numer+".jpg' />";
			numer++;
			if(numer>5) numer = 1;
			zmienna = 1;
		}
		zmienna++;
		
		setTimeout("odliczanie()", 1000);
	}
	
function schowaj()
{
	$("#slider").fadeOut(500);
	setTimeout("zmien()", 500);
	$("#slider").fadeIn(500);
}