var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var botao = document.querySelector("#botão");
var mensagem=document.querySelector("#msg");
var qualidade=document.querySelector(".Opção1");
var quantidade=document.querySelector(".Opção2");
var estrutura=document.querySelector(".Opção3");
var listagem_de_titulos = document.getElementsByTagName("h1");
var listagem_de_subtitulos = document.getElementsByTagName("h2");
var cont = 0;
var cont2= 0;

document.title = "Arts and Drafts";

console.log("");
console.log(document.title);

console.log("");
console.log("Olá!");
console.log("Seja bem-vindo(a) ao meu site!");
console.log("Se você está vendo esta menssagem, isso então significa que você sabe como utilizar o console do navegador");
console.log("Fique a vontade para testear quaisquer comandos desejar");
console.log("Espero que aproveite sua estadia");
console.log("Divirta-se!");

console.log("");
console.log("Títulos");
console.log("");

for(var cont=0; cont < listagem_de_titulos.length; cont++){
console.log(listagem_de_titulos[cont].textContent);
}
console.log("");
console.log("Sub-Títulos");
console.log("");

for(var cont2=0; cont2 < listagem_de_subtitulos.length; cont2++){
console.log(listagem_de_subtitulos[cont2].textContent);
};

botao.onclick = function(GetForm){
	console.log("");
console.log("Texto do mensagem: " + mensagem.value);
console.log("Satisfação quanto à qualidade: " + qualidade.value);
console.log("Satisfação quanto à quantidade: " + quantidade.value);
console.log("Satisfação quanto à estrutura: " + estrutura.value);

alert("Obrigado por sua contribuíção!");
mensagem.value=("");
qualidade.value=("");
quantidade.value=("");
estrutura.value=("");
};

btn1.onclick = function(scroll_bottom){	
window.scrollBy(0,10000000);

};

btn2.onclick = function(scroll_top){
document.documentElement.scrollTop = 0;

};

btn3.onclick = function(hide){	

document.querySelector(".imagem").style.display="none";
alert("As imagens serão escondidas!!!");
};

btn4.onclick = function(show){	
document.querySelector(".imagem").style.display="block";
alert("As imagens serão restauradas!");
}

btn5.onclick = function(change1){	
document.querySelector("body").style.background="#DDD";
document.querySelector("#topo").style.background="red";
}

btn6.onclick = function(change2){	
document.querySelector("#btn1").style.background="red";
	document.querySelector("#btn1").value="red";
		document.querySelector("#btn1").style.border="4px dotted cyan";
document.querySelector("#btn2").style.background="orange";
	document.querySelector("#btn2").value="orange";
		document.querySelector("#btn2").style.marginLeft="45%";
			document.querySelector("#btn2").style.border="4px dotted cyan";
document.querySelector("#btn3").style.background="yellow";
	document.querySelector("#btn3").value="yellow";
		document.querySelector("#btn3").style.marginLeft="50%";
			document.querySelector("#btn3").style.border="4px dotted cyan";
document.querySelector("#btn4").style.background="green";
	document.querySelector("#btn4").value="green";
		document.querySelector("#btn4").style.border="4px dotted cyan";
document.querySelector("#btn5").style.background="blue";
	document.querySelector("#btn5").value="blue";
		document.querySelector("#btn5").style.marginLeft="53%";
			document.querySelector("#btn5").style.border="4px dotted red";
document.querySelector("#btn6").style.background="indigo";
	document.querySelector("#btn6").value="indigo";
		document.querySelector("#btn6").style.marginLeft="50%";
			document.querySelector("#btn6").style.border="4px dotted cyan";
document.querySelector("#btn7").style.background="violet";
	document.querySelector("#btn7").value="violet";
		document.querySelector("#btn7").style.border="4px dotted cyan";
document.querySelector("#btn8").style.background="orange";
	document.querySelector("#btn8").value="orange";
		document.querySelector("#btn8").style.border="4px dotted cyan";
				document.querySelector("#btn8").style.marginLeft="53%";
}

btn7.onclick = function(change3){
	
document.querySelector("#topo").style.background="FFF";
document.querySelector("#topo").style.backgroundImage="url('danger.png')";	
document.getElementById("txt_cab1").innerHTML= "<strong>SITE UNDER CONSTRUCTION</strong>";
document.getElementById("txt_cab2").innerHTML= "<strong><em>PLEASE COME BACK AT A LATER DATE</strong>";
document.title = "SITE UNDER CONSTRUCTION";

}

btn8.onclick = function(Audio1){
	
var audio = new Audio('BackgroundSong.wav');
audio.play();

}

	