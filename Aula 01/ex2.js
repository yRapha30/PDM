/* o valor de a é alterado por se tratar de uma variável global
ela pode mudar mesmo dentro de outro escopo
o valor de b será o valor de acordo com o escopo declarado, portanto 
se declarado dentro de uma função será reconhecido somente dentro da função
*/
var a = 1
{
    {
        {
            var a = 2
        }
    }
}

let b = 3
{
    {
        {
            let b = 4
        }
    }
}
console.log(`o valor de a: ${a} e o valor de b ${b}`)