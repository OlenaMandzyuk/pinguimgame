/*    
        @licstart  The following is the entire license notice for this page.

        Copyright (C) 2015  Carlos J. Costa

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo;

function init(){
	YPos = -500;
	XPos = -500;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
}
var emRoma = false;
function move(){

	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}
	if ((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405) && !emRoma) {
		emRoma = true;
		toMove.style.background = "url('roma.jpg')";
		// mostrar mensagem
		alert("Pausa para pizza em Roma");
		// colocar background original
		var sairDeRoma = function() {
			toMove.style.background = "url('screen.png')";
			emRoma = false;
		};
		setTimeout(sairDeRoma, 1500);
	}
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;

	// executar as validações do exercicio
	exercicio(XPos, YPos);
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 10);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 10);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 10);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 10);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
    if (e.keyCode===16) stop();
}

function exercicio(xPinguim, yPinguim) {
	armadilha1(xPinguim, yPinguim);
	armadilha2(xPinguim, yPinguim);
	exibirPonto1(xPinguim, yPinguim);
	exibirPonto2(xPinguim, yPinguim);
	exibirPonto3(xPinguim, yPinguim);
	exibirNaoEDesta1(xPinguim, yPinguim);
	exibirNaoEDesta2(xPinguim, yPinguim);
	voltaAoMundo(xPinguim);
}


var exibirArmadilha = [true, true];
function armadilha1(xPinguim, yPinguim) {

	// -680px -291px ( x1, y1 )
	// -777px -351px ( x2, y2 )

	var xMin = (xPinguim <= -680);
	var yMin = (yPinguim <= -291);

	var xMax = (xPinguim >= -777);
	var yMax = (yPinguim >= -351);

	if(yMin && yMax && xMin && xMax && exibirArmadilha[0]) {
		alert(" run forest run !!! acabas de perder 10 pontos ");
		exibirArmadilha[0] = false;
		incrementarPontuacao(-10); 
	}
}

function armadilha2(xPinguim, yPinguim) {
	// -1155px -306px( x1, y1 )
	// -1259px -340px( x2, y2 )

	var xMin = (xPinguim <= -1155);
	var yMin = (yPinguim <= -306);

	var xMax = (xPinguim >= -1259);
	var yMax = (yPinguim >= -340);

	if(yMin && yMax && xMin && xMax && exibirArmadilha[1]) {
		alert(" run forest run !!! acabas de perder 5 pontos");
		exibirArmadilha[1] = false;
		incrementarPontuacao(-5);
	}
}


var exibirPonto = [true, true, true];
function exibirPonto1(xPinguim, yPinguim) {

	// -561px -181px ( x1, y1 )
	// -645px -221px ( x2, y2 )

	var xMin = (xPinguim <= -561);
	var yMin = (yPinguim <= -181);

	var xMax = (xPinguim >= -645);
	var yMax = (yPinguim >= -221);

	if(yMin && yMax && xMin && xMax && exibirPonto[0]) {
		alert(" bem feito! acabas de ganhar mais 10 pontos !!!");
		exibirPonto[0] = false;
		incrementarPontuacao(10); 
	}
}

function exibirPonto2(xPinguim, yPinguim) {

	// -150px -442px ( x1, y1 )
	// -229px -486px ( x2, y2 )

	var xMin = (xPinguim <= -150);
	var yMin = (yPinguim <= -442);

	var xMax = (xPinguim >= -229);
	var yMax = (yPinguim >= -486);

	if(yMin && yMax && xMin && xMax && exibirPonto[1]) {
		alert(" bem feito! acabas de ganhar mais 5 pontos !!! !!! ");
		exibirPonto[1] = false; 
		incrementarPontuacao(5);
	}
}

function exibirPonto3(xPinguim, yPinguim) {

	// -1056px -150px ( x1, y1 )
	// -1142px -195px ( x2, y2 )

	var xMin = (xPinguim <= -1056);
	var yMin = (yPinguim <= -150);

	var xMax = (xPinguim >= -1142);
	var yMax = (yPinguim >= -195);

	if(yMin && yMax && xMin && xMax && exibirPonto[2]) {
		alert(" bem feito! acabas de ganhar mais 10 pontos !!! ");
		exibirPonto[2] = false;
		incrementarPontuacao(10); 
	}
}

var exibirNaoEDesta = [true, true, true];
function exibirNaoEDesta1(xPinguim, yPinguim) {

	// -599px -526px ( x1, y1 )
	// -647px -559px ( x2, y2 )

	var xMin = (xPinguim <= -599);
	var yMin = (yPinguim <= -526);

	var xMax = (xPinguim >= -647);
	var yMax = (yPinguim >= -559);

	if(yMin && yMax && xMin && xMax && exibirNaoEDesta[0]) {
		alert(" boa tentativa, mas nem tudo o que brilha é ouro! ");
		exibirNaoEDesta[0] = false; 
	}
}


function exibirNaoEDesta2(xPinguim, yPinguim) {

	// -408px -560px ( x1, y1 )
	// -457px -604px ( x2, y2 )

	var xMin = (xPinguim <= -408);
	var yMin = (yPinguim <= -560);

	var xMax = (xPinguim >= -457);
	var yMax = (yPinguim >= -604);

	if(yMin && yMax && xMin && xMax && exibirNaoEDesta[1]) {
		alert(" boa tentativa, mas nem tudo o que brilha é ouro! ");
		exibirNaoEDesta[1] = false; 
	}
}

function exibirNaoEDesta2(xPinguim, yPinguim) {

	// -1324px -163px ( x1, y1 )
	// -1367px -221px ( x2, y2 )

	var xMin = (xPinguim <= -1324);
	var yMin = (yPinguim <= -163);

	var xMax = (xPinguim >= -1367);
	var yMax = (yPinguim >= -221);

	if(yMin && yMax && xMin && xMax && exibirNaoEDesta[2]) {
		alert(" boa tentativa, mas nem tudo o que brilha é ouro! continua procurar ");
		exibirNaoEDesta[2] = false; 
	}
}

var numeroDeVoltas = 1;
var fimDoMapa = -953;
function voltaAoMundo(xPinguim) {
	// -953px 	
	if(xPinguim <= (fimDoMapa * numeroDeVoltas)){
		numeroDeVoltas++;
		alert(" Parabéns! Já deu "+(numeroDeVoltas-1)+" voltas ao Mundo! Mais 1 ponto.");
		incrementarPontuacao(1);
	}
}

var jogoTerminou = false;
var pontuacao = 0;
function incrementarPontuacao(pontos) {
	pontuacao += pontos;
	document.getElementById("pontos").innerHTML=""+pontuacao;

	if(pontuacao >= 25 && !jogoTerminou){
		jogoTerminou = true;
		toMove.style.background = "url('fimPinguimGame.jpg')";
		alert("Parabéns! Ganhaste o jogo!");
	}		
}
