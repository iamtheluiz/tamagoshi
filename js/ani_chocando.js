var nr_sprite_chocando = 9999999;
var temp_chocar = 50;	//Define quantas atualizações demora para o ovo chocar
var atualizacao = 0;

var s_chocando = [];

s_chocando[1] = [];

 s_chocando[1][1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[1][2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[1][3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[1][4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[1][5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[1][6] = ['|',0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0]; 
 s_chocando[1][7] = ['|',0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0]; 
 s_chocando[1][8] = ['|',0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0]; 
 s_chocando[1][9] = ['|',0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0]; 
s_chocando[1][10] = ['|',0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0]; 
s_chocando[1][11] = ['|',0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0]; 
s_chocando[1][12] = ['|',0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0]; 
s_chocando[1][13] = ['|',0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0]; 
s_chocando[1][14] = ['|',0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0]; 
s_chocando[1][15] = ['|',0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0]; 
s_chocando[1][16] = ['|',0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0];


 s_chocando[2] = [];

 s_chocando[2][1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_chocando[2][8] = ['|',0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0]; 
 s_chocando[2][9] = ['|',0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0]; 
s_chocando[2][10] = ['|',0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0]; 
s_chocando[2][11] = ['|',0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0]; 
s_chocando[2][12] = ['|',0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0]; 
s_chocando[2][13] = ['|',0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0]; 
s_chocando[2][14] = ['|',0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0]; 
s_chocando[2][15] = ['|',0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0]; 
s_chocando[2][16] = ['|',0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0]; 


function atualizar_chocando(){

	if(atualizacao == temp_chocar){
		estado = 'esperando';
		atualizacao = 0;
	}

	atualizacao++;

	if(nr_sprite_chocando >= 0 && nr_sprite_chocando < (s_chocando.length - 1)){
		nr_sprite_chocando++;
	}else if(nr_sprite_chocando >= (s_chocando.length - 1)){
		nr_sprite_chocando = 1;
	}

	for(var y = 1; y <= display_y; y++){

		display[y] = [];

		for(var x = 1; x <= display_x; x++){

			var pixel = document.getElementById(y+"_"+x);

			//console.log(nr_sprite_chocando);

			if(s_chocando[nr_sprite_chocando][y][x] == 0){
				pixel.setAttribute("class","pixel");
			}else{
				pixel.setAttribute("class","pixel corpo");
			}
		
			//Cria um novo pixel
			display_h.appendChild(pixel);

		}
	}

}

function iniciar_espera(){

}