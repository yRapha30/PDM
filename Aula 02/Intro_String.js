const nome = "Jesus Cristo";
console.log("nome.charAt(0)", nome.charAt(0));
console.log("nome.charAt(30)", nome.charAt(30)); // não gera erro
console.log("valor de indice 6 ", nome.charCodeAt(6)); // valor em tabela de código ascii  (tabela unicode)
console.log(nome.indexOf("r")); // retorna o valor de índice se encontrado, caso contrario -1
console.log(nome.substring(1)); // a partir de 1 (1,5) retorna o intervalor entre 1 e 5
console.log("Pedra angular: ".concat(nome).concat("!"));// "texto" + 'texto2'
console.log(nome.replace("J", "@J")); //substitui um elemento
console.log("joao,maria,josé, pedro".split(",")); //substituir uma estrutura separada por vírgula em um array

function maiuscula(s) {
     return s.toUpperCase();
}

console.log(`Graças Senhor ${maiuscula(nome)}`);

/* 
o js reconhece uma string como um vetor
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator

*/

// Métodos;
let txt = "Verdade";
let length = txt.length;
//1;
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
const exemplo = "Jesus Cristo";
console.log(exemplo.charAt(6));
console.log(exemplo.charCodeAt(0)); // unicode no chrome para visualizar o número retornado
//console.log(exemplo.indexOf(e)) // não entendi por que deu erro
console.log(exemplo.substring(6));
console.log(exemplo.substring(0, 6));
var a = "Cristo";
console.log(
     "Jesus ".concat(a).concat(" dividiu o mundo em antes dele e depois dele")
);
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
let text2 = text.toUpperCase();
let text3 = text.toLowerCase();
let text4 = text.trim();