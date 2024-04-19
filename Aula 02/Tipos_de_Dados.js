/*
tipos de dados Number, String, Boolean, Array, Object e Function
*/

var x, y;
x = 3; // Number
y = 4;
var soma = "x + y";
var nome = "Orpheu"; //String
let valor = 14;
console.log(soma+10);
var aceite = true; // ou false -> Boolean
const PI = 3.1415;
let xxx = Math.PI*10

console.log(Math.PI*10 +"\n"+(Math.PI*10).toFixed(2)+"\n"+(Math.PI*10).toPrecision(5))

//area = pi * r**2 
/*  Tipo array (vetor) Um array em JavaScript pode conter vários tipos de dados */
var array = [1, 2, 3, 4, 5, 6, 7]; // uso de colchetes para declarar matrizes
for (var i = 0; i < 7; i++) {
     const exemplo = array[i];
     console.log(exemplo);
}
console.log("Valor de i : " + i);
var funcoes = [f1(), f2(), f3(x, y)]; // array de funções
var objetos = [
     { a: 1, b: 2 },
     { a: "a", b: "valor" },
     { x: 1, y: "texto" },
];
var texto = ["texto1", "texto2", "texto3", "texto4"];

/*  Tipo Object */
var objeto = {}; // uso de chaves para declarar objetos [coleção de elementos]
objeto.atributo1 = "valor 1";
objeto.nome = nome;
objeto.valor = 40;

console.log(objeto);

console.log("------ uso de função padrão ---------\n\n");
function somar(v1, v2) {
     return v1 + v2;
}

console.log(somar(x, y));

var map = new Map();
map.set("um", 1);
map.set("dois", 2);
map.set("tres", 3);
map.set("quatro", 4);

console.log(map.values());