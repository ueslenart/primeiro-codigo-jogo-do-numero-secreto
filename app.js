let listaDeNumerosSorteados = [];
let numerosLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela("h1", 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =`voce descobriu com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas) ;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Errou');
        exibirTextoNaTela('p', 'O numero secreto é menor');
    } else {
        if(chute < numeroSecreto) {
        exibirTextoNaTela('h1', 'errou');
        exibirTextoNaTela('p', 'O numero secreto é maior que');
        } 
    }
    tentativas++;
    limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;;

    if(quantidadeDeElementosNaLista == numerosLimite) {
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    
}
