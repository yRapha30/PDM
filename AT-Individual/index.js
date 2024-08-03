const talk = ["Bom dia João", "Seja bem vindo!"]
function home() {
    for (let i = 0; i < talk.length; i++){
        console.log(talk [i])
    }
}    
home ()

    function meses (num) {
        switch (num) {
            case 1:
                console.log ("Janeiro")
                break;
                case 2:
                console.log ("Fevereiro")
                break;
                case 3:
                console.log ("Março")
                break;
                case 4:
                console.log ("Abril")
                break;
                case 5:
                console.log ("Maio")
                break;
                case 6:
                console.log ("Junho")
                break;
                case 7:
                console.log ("Julho")
                break;
                case 8:
                console.log ("Agosto")
                break;
                case 9:
                console.log ("Setembro")
                break;
                case 10:
                console.log ("Outubro")
                break;
                case 11:
                console.log ("Novembro")
                break;
                case 12:
                console.log ("Dezembro")
                break;
            
            default:
                console.log ("Número inválido")
                break;
        }
    }
        meses(4)
        function valor (num1, num2){
            if (num1 == NaN || num2 == NaN){
                console.log ("Os  valores 1 e 2 não são iguais a números")
            }
            else if (num1 > num2) {
                console.log ("Valor 1 é maior que o valor 2")
            }
            else if (num1 < num2) {
                console.log ("Valor 2 é maior que o valor 1")
            }
        }

            valor(3, 8)
        function info (salario,  quantidadeHE, quantidadeDF){
            var trabalho = salario / 176
            var faltas = trabalho * quantidadeDF * 8
            var horaextra = quantidadeHE * 1.5 * trabalho
            var salarioliq = salario + horaextra - faltas

            console.log(`Salário: ${salario}\n Salarioliquido:${salarioliq}\n Total em horas extras:${horaextra}\n Total em faltas:${faltas}`);





        }
        info(2000, 3, 2)

        const V1 = ["a", "b", "c", "d", "e"]

        function escolherVA (){
            console.log(`${V1 [0]}, ${V1 [V1.length-1]}`)
        }
        escolherVA(V1)