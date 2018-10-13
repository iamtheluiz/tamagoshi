/* Variáveis Globais */
var display_h = document.getElementById("display");	//Display HTML
var display = [];	//Guarda o estado de cada pixel (aceso ou apagado)
var display_x = 19;	//Largura do Display
var display_y = 16;	//Altura do Display
var sprite = [];

var estados = [];	//Atividade do tamagotchi
estados[0] = 'chocando';	//Sprites do ovo
estados[1] = 's_espera';	//Sprites de espera

var estado = 0;

function criar_display(){

	//Passa por todos os campos
	for(var y = 1; y <= display_y; y++){

		display[y] = [];

		for(var x = 1; x <= display_x; x++){

			display[y][x] = 0;
		
			//Cria um novo pixel
			var pixel = document.createElement("div");
			pixel.setAttribute("class","pixel");
			pixel.setAttribute("id",y+"_"+x);
			display_h.appendChild(pixel);

		}
	}

	console.table(display);

}

function loop(){
	if(estado == 'chocando'){
		atualizar_chocando();
	}else if(estado == 'esperando'){
		atualizar_espera();
	}
}


function atualizar(){
	estado = 'esperando';
}
function criar_ovo(){
	estado = 'chocando';
}

//Inicialização do jogo
criar_display();
criar_ovo();

setInterval(loop,500);