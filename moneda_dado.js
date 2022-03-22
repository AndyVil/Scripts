//Calcula un random 1-6 DADOS
let dado1 = (Math.floor(Math.random() * 6)+1);
let dado2 = (Math.floor(Math.random() * 6)+1);
let dado3 = (Math.floor(Math.random() * 6)+1);

//Imprime dados
console.log("Dado 1 ="+" "+dado1);
console.log("Dado 2 ="+" "+dado2);
console.log("Dado 3 ="+" "+dado3);

//Funcion moneda
moneda(dado1,dado2,dado3);

//Si dos de los 3 dados son pares, es un Si, sino es un No
function moneda(d1, d2, d3){
	let val = ((d1%2)==0)
	let val2 = ((d2%2)==0)
	let val3 = ((d3%2)==0)
	
 let	rand = (((val&&val2)||(val2&&val3))||val3&&val);
	
	if(rand){
	 console.log("\nSi | Cara");
	}else{
		console.log("\nNo | Cruz")
	}
}