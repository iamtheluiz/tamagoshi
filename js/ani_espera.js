var nr_sprite_espera = 9999999;

var s_espera = [];

 s_espera[1] = [];
 s_espera[1][1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][8] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[1][9] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
s_espera[1][10] = ['|',0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0];
s_espera[1][11] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[1][12] = ['|',0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
s_espera[1][13] = ['|',0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
s_espera[1][14] = ['|',0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
s_espera[1][15] = ['|',0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
s_espera[1][16] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

 s_espera[2] = [];
 s_espera[2][1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][8] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[2][9] = ['|',0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0];
s_espera[2][10] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0];
s_espera[2][11] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[2][12] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[2][13] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[2][14] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[2][15] = ['|',0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0];
s_espera[2][16] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


 s_espera[3] = [];
 s_espera[3][1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 s_espera[3][8] = ['|',0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0]; 
 s_espera[3][9] = ['|',0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0]; 
s_espera[3][10] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]; 
s_espera[3][11] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]; 
s_espera[3][12] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]; 
s_espera[3][13] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]; 
s_espera[3][14] = ['|',0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0]; 
s_espera[3][15] = ['|',0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0]; 
s_espera[3][16] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  

 s_espera[4] = [];
 s_espera[4][1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][8] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera[4][9] = ['|',0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0];
s_espera[4][10] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0];
s_espera[4][11] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[4][12] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[4][13] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[4][14] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera[4][15] = ['|',0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0];
s_espera[4][16] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function atualizar_espera(){

	if(nr_sprite_espera >= 0 && nr_sprite_espera < (s_espera.length - 1)){
		nr_sprite_espera++;
	}else if(nr_sprite_espera >= (s_espera.length - 1)){
		nr_sprite_espera = 1;
	}

	for(var y = 1; y <= display_y; y++){

		display[y] = [];

		for(var x = 1; x <= display_x; x++){

			var pixel = document.getElementById(y+"_"+x);

			//console.log(nr_sprite_espera);

			if(s_espera[nr_sprite_espera][y][x] == 0){
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