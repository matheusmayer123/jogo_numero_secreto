let listaNumerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let numeroJogo = 1.0;
let tentativas = 1;



function exibirTextoNaTela(campo, tag, texto) {

    campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', { rate: 1.2 });
};

exibirTextoNaTela('titulo', 'h1', 'Jogo do número Secreto');
exibirTextoNaTela('paragrafo', 'p', 'Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('titulo', 'h1', 'Acertou!');
        exibirTextoNaTela('paragrafo', 'p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('paragrafo', 'p', `O número secreto é menor que ${chute} `);
        } else {
            if (chute < numeroSecreto) {

                exibirTextoNaTela('paragrafo', 'p', `O número secreto é maior que ${chute}`);
            }
        }
        tentativas++;
        limparCampo();

    }


};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('titulo', 'h1', ` Jogo do número Secreto ${numeroJogo}`);
    exibirTextoNaTela('paragrafo', 'p', 'Escolha um número de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroJogo++;


};

function numeroAleatorio() {

    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    let qntNumeros = listaNumerosSorteados.length;
    if (qntNumeros == 10) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroSecreto)) {
        return numeroAleatorio();

    } else {
        listaNumerosSorteados.push(numeroSecreto);
        console.log(listaNumerosSorteados);
        console.log(numeroSecreto);
        return numeroSecreto;
    }
};

















