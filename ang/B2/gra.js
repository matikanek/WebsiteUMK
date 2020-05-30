var litery = new Array(35);
	litery[0] = "A";
	litery[1] = "Ą";
	litery[2] = "B";
	litery[3] = "C";
	litery[4] = "Ć";
	litery[5] = "D";
	litery[6] = "E";
	litery[7] = "Ę";
	litery[8] = "F";
	litery[9] = "G";
	litery[10] = "H";
	litery[11] = "I";
	litery[12] = "J";
	litery[13] = "K";
	litery[14] = "L";
	litery[15] = "Ł";
	litery[16] = "M";
	litery[17] = "N";
	litery[18] = "Ń";
	litery[19] = "O";
	litery[20] = "Ó";
	litery[21] = "P";
	litery[22] = "Q";
	litery[23] = "R";
	litery[24] = "S";
	litery[25] = "Ś";
	litery[26] = "T";
	litery[27] = "U";
	litery[28] = "V";
	litery[29] = "W";
	litery[30] = "X";
	litery[31] = "Y";
	litery[32] = "Z";
	litery[33] = "Ź";
	litery[34] = "Ż";
	
	var wyg = new Audio('wygrana.mp3');
	var ok = new Audio('dobrze.mp3');
	var wrong = new Audio('zle.mp3');
	var odgadniete = 0;
	var progres = 0;
	var spacje = 0;
	var los;
	var dlugosc;
	var ile_rund = 10;
	var punkty = 0;
	var runda = 1;
	var nagroda = 5;
	var ile_odgadnietych = 0;
	var kara = 1;
	var ile_hasel;
	
	var haslo1 = "";
	
	function wypisz_haslo()
	{
		document.getElementById("password").innerHTML = haslo1;
	}
	
	window.onload = start;
	
	function start()
	{
		haslo1= "";
		var tresc_diva = "";
		odgadniete = 0;
		progres = 0;
		spacje = 0;
		document.getElementById('progres').innerHTML = '<p>Progress</p><p>'+progres+'%</p><div id="skill_percentage"><div id="skill_level" style="width:'+progres+'%"></div></div>';
		document.getElementById('pkt').innerHTML = punkty;
		document.getElementById('et2').innerHTML = runda+"&nbsp/&nbsp"+ile_rund;
		
		los = Math.floor(Math.random()*ile_hasel);
		while(k[los] == true)
		{
			los = Math.floor(Math.random()*ile_hasel);
		}
		k[los] = true;
		
		haslo[los] = haslo[los].toUpperCase();
		dlugosc = haslo[los].length;
		
		document.getElementById('tip').innerHTML = tipsy[los];
		
		for(i=0; i<dlugosc; i++)
		{
			if(haslo[los].charAt(i) == " ")
			{			
				haslo1 = haslo1 + ' ';
				spacje++;
			}
			else if(haslo[los].charAt(i) == "-")
			{
				haslo1 = haslo1 + "-";
				spacje++;
			}
			else if(haslo[los].charAt(i) == "/")
			{
				haslo1 = haslo1 + "/";
				spacje++;
			}
			else if(haslo[los].charAt(i) == ",")
			{
				haslo1 = haslo1 + ",";
				spacje++;
			}
			else if(haslo[los].charAt(i) == "(")
			{
				haslo1 = haslo1 + "(";
				spacje++;
			}
			else if(haslo[los].charAt(i) == ")")
			{
				haslo1 = haslo1 + ")";
				spacje++;
			}
			else haslo1 = haslo1 + ' ';
		}
		
		for(i=0; i<35; i++){
			var element = "lit"+i;
			tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
			if((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
		}
		
		document.getElementById("alfabet").innerHTML = tresc_diva;
		wypisz_haslo();
	}
	
	String.prototype.ustawZnak = function(miejsce, znak)
	{
		var j=0;
		odgadniete++;
		ile_odgadnietych++;
		if(miejsce > this.length - 1) 
		{
			return this.toString();
		}
		else 
		{
			haslo1 = this.substr(0, miejsce) + znak + this.substr(miejsce+1);
			return haslo1;
		}
	}
	
	function sprawdz(nr)
	{
		var trafiona = false;
		for(i=0; i<dlugosc; i++)
		{
			if(haslo[los].charAt(i) == litery[nr])
			{
				haslo1 = haslo1.ustawZnak(i, litery[nr]);
				trafiona = true;
			}
		}
		
		if(trafiona == true)
		{
			ile_odgadnietych = 0;
			var element = "lit" + nr;
			document.getElementById(element).style.background = "#003300";
			document.getElementById(element).style.color = "#00c000";
			document.getElementById(element).style.border = "3px solid #00c000";
			document.getElementById(element).style.cursor = "default";
			document.getElementById(element).setAttribute("onclick", ";");
			wypisz_haslo();
			if(haslo[los] != haslo1) ok.play();
		}
		else
		{
			punkty = punkty - kara;
			var element = "lit" + nr;
			document.getElementById(element).style.background = "#330000";
			document.getElementById(element).style.color = "#c00000";
			document.getElementById(element).style.border = "3px solid #c00000";
			document.getElementById(element).style.cursor = "default";
			document.getElementById(element).setAttribute("onclick", ";");
			
			document.getElementById('pkt').innerHTML = punkty;
			wrong.play();
		}
		
		progres = Math.round((odgadniete/(dlugosc-spacje))*100);
		document.getElementById('progres').innerHTML = '<p>Progress</p><p>'+progres+'%</p><div id="skill_percentage"><div id="skill_level" style="width:'+progres+'%"></div></div>';
		
		document.getElementById('et2').innerHTML = runda+"&nbsp/&nbsp"+ile_rund;
		
		//wygrana
		if (haslo[los] == haslo1)
		{
			wyg.play();
			punkty = punkty + nagroda;
			runda++;
			x = '<div id="dalej"><b>Bardzo dobrze :)</b><br/><br/><span class="reset" onclick="start()">GENERUJ NOWE HASŁO!</span></div>';
			document.getElementById("alfabet").innerHTML  = x;
			document.getElementById('pkt').innerHTML = punkty;
		}
		
		if(runda > ile_rund)
		{
			document.getElementById('alfabet').innerHTML = '<div id="podsumowanie"><span class="reset" onclick="koniec()">PODSUMOWANIE</span></div>';
		}
		
		
		wypisz_haslo();
	}
	
function koniec(){
	document.getElementById('pojemnik').innerHTML = '<div id="koniec">Koniec gry<br/><br/> Twoje punkty:<br/><p><font size="70px">'+punkty+'</font></p><span class="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</span></div>';
}