

alert('Boas vindas ao nosso site!');
//numero maximo de tentativas
let numeroMaximo = 1000;
//gera numero aleatorio inteiro de 1 ao numero maximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//testando o numero secreto
console.log(numeroSecreto);
//quantas tentativas precisou para acertar
let tentativas = 1;
console.log(tentativas)


let chuteNumero = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
//enquanto o chute for diferente do numero secreto
while (chuteNumero != numeroSecreto) {
    //se o numero do chute for maior que o numero secreto
    if (chuteNumero == numeroSecreto) {

        break;
    } else {
        //se o numero do chute for menor que o numero secreto
        if (chuteNumero < numeroSecreto) {
            alert(`O número secreto é maior que ${chuteNumero}`);
        } else {
            if (chuteNumero > numeroSecreto) {
                alert(`O número secreto é menor que ${chuteNumero}`);

            }
        }
    }
    //novo chute caso não tenha acertado de primeira
    chuteNumero = prompt('Você errou, insira outro numero: ');
    tentativas++;


};

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);












/* ================================================================================================================================= */

/* Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome. */

/* let nome = prompt('Informe seu nome: ');

alert(`Bem vindo, ${nome}`);
 */






/* ================================================================================================================================= */
/* Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo. */
/* let saldoDaConta = prompt('Digite o saldo da sua conta atualmente: ');


alert(`O saldo da sua conta atual é de ${saldoDaConta}`); */






/* ================================================================================================================================= */





/* Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.". */

/* let pontos = prompt('Quantos pontos você obteve: ');

if (pontos >= 100) {
    alert('Parabens, voce venceu!')
} else {
    alert('Tente novamente para ganhar...')
}

 */


/* ================================================================================================================================= */



/* let diaDaSemana = prompt('Me diga, qual dia da semana é hoje: ');

if (diaDaSemana.toUpperCase() == 'SABADO' || diaDaSemana.toUpperCase() == 'SÁBADO' || diaDaSemana.toUpperCase() == "DOMINGO") {
    alert('Bom fim de semana!')
} else {
    if (diaDaSemana.toUpperCase() == 'SEGUNDA' || diaDaSemana.toUpperCase() == 'TERÇA' || diaDaSemana.toUpperCase() == 'QUARTA' || diaDaSemana.toUpperCase() == 'QUINTA' || diaDaSemana.toUpperCase() == 'SEXTA') {
        alert('Boa Semana!');
    } else {
        alert('Dia da semana inválido.')
    }
}
    

 */
/* ================================================================================================================================= */

/* Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
 */

/* let numDigitado = prompt('Insira um número: ');

if (numDigitado > 0) {
    alert('Você digitou um número positivo.');
}

else {
    if (numDigitado == 0) {
        alert('O número digitado foi ' + numDigitado)
    } else {

        alert('Você digitou um número negativo.');
    }
}
 */

/* ================================================================================================================================= */