/* Operadores Matemáticos
+ (soma)
- (subtração)
* (multiplicação)
/ (divisão)
% (resto da divisão)
++ (incremento de 1)
-- (decremento de 1)
+= (soma o próprio valor a outro valor)
-= (subtrai o próprio valor a outro valor)
*= (multiplica o próprio valor a outro valor)
/= (divide o próprio valor a outro valor)

*/
let x = 10, y =14
let resultado = x + y
console.log( "soma de 10 + 14 = "+ resultado)
resultado = x - y
console.log( "subtração de 10 - 14 = "+ resultado)
resultado = x * y
console.log( "multiplicação de 10 * 14 = "+ resultado)
resultado = x / y
console.log( "divisão de 10 / 14 = "+ resultado)
y = 3
resultado = x ** y
console.log( "potencia de 10 ** 3 = "+ resultado)
x = 27
resultado = x ** (1/y)
console.log("raiz de cúbica de 27 = "+ resultado)
/* a raiz 'n' de x =>  x elevado (1/n) ou  x**(1/n)*/

x = 10
console.log("incremento de x valendo 10 antes ", ++x)
x= 10
console.log("incremento de x valendo 10 depois ", x++, ' obs o valor de x real passou a ser ', x)
x = 10
console.log("decremento de x valendo 10 antes ", --x)
x= 10
console.log("decremento de x valendo 10 depois ", x--, ' obs o valor de x real passou a ser ', x)
x = 10, y=14
x+=y //para efeito didático colocada a conta separada 
resultado = x
console.log('x+=y onde x=10 e y =14', resultado)
x = 10, y=14
x-=y //subtraçao 
resultado = x
console.log('x-=y onde x=10 e y =14', resultado)
x = 10, y=14
x*=y //multiplicação
resultado = x
console.log('x*=y onde x=10 e y =14', resultado)
x = 10, y=14
x/=y //divisão
resultado = x
console.log('x/=y onde x=10 e y =14', resultado)
// operadores de incremento de decremento
x = 10
console.log('incremento antes ++x', ++x)
x=10
console.log('incremento depois x++', x++, 'o valor exibido não é o mesmo da variável')