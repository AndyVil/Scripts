for(let i = 0 ; i < 10 ; i++){

let contador = 0;
for(let n = 0 ; n < 100000 ; n++){
let dado1 = (Math.floor(Math.random() * 6)+1);
let dado2 = (Math.floor(Math.random() * 6)+1);
let dado3 = (Math.floor(Math.random() * 6)+1);
		if(dado1 ==5){
	  	if(dado1 == dado2 && dado2==dado3){
	  		 contador++;
	  }
	 }
	}
console.log(contador);
	let arrResultado = [];
	arrResultado.push(contador);
	//console.log(arrResultado);
	}