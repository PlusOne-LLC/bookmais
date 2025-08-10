// Seleção dos elementos do DOM
const btnInicio = document.querySelector("#btnInicio");
const btnSeguinte = document.querySelector("#btnSeguinte");
const btnVoltar = document.querySelector("#btnVoltar");
const listaQ = document.querySelector("#listaQ");
const timerDisplay = document.querySelector("#timer");
let numeroQuestao; // Definido dinamicamente para cada questão
let totalQ = perguntasRespostas.length;
let passoAtual = 0;
let respostasCertas = 0;
let respostasErradas = 0;
let respostasDadas = new Array(totalQ).fill(false); // Array para rastrear questões respondidas
let respostasSelecionadas = new Array(totalQ).fill(-1); // Array para rastrear o índice da resposta selecionada (-1 significa não selecionada)
let tempoResposta; // Tempo limite para resposta em milissegundos
let timerId; // ID do temporizador
let tempoRestante; // Tempo restante em segundos para exibição

// Função para obter o tempo limite do usuário
function obterTempoLimite() {
    let tempo = prompt("Digite o tempo limite para cada questão (em segundos):");
    if (tempo === null) {
        sair(); // Sai se o usuário clicar em Cancelar
        return; // Evita prosseguir
    }
    tempo = parseInt(tempo);
    if (isNaN(tempo) || tempo <= 0) {
        alert("Por favor, insira um número válido maior que 0.");
        return obterTempoLimite(); // Repetir até obter valor válido
    }
    return tempo * 1000; // Converter para milissegundos
}

// Função para salvar o estado no localStorage
function salvarEstado() {
    const state = {
        tempoResposta,
        passoAtual,
        respostasDadas,
        respostasCertas,
        respostasErradas,
        respostasSelecionadas
    };
    localStorage.setItem('quizState', JSON.stringify(state));
}

// Função para carregar o estado do localStorage
function carregarEstado() {
    const stateJson = localStorage.getItem('quizState');
    if (stateJson) {
        const state = JSON.parse(stateJson);
        tempoResposta = state.tempoResposta;
        passoAtual = state.passoAtual;
        respostasDadas = state.respostasDadas;
        respostasCertas = state.respostasCertas;
        respostasErradas = state.respostasErradas;
        respostasSelecionadas = state.respostasSelecionadas;
        return true;
    }
    return false;
}

// Função para criar elementos de uma questão dinamicamente
function criarQuestao(pergunta, index) {
    const li = document.createElement("li");
    li.id = pergunta.id;
    if (index === 0) li.classList.add("mostrar");
    
    const spanNumero = document.createElement("span");
    spanNumero.className = "numeroQuestao";
    spanNumero.textContent = pergunta.numeroQuestao;
    li.appendChild(spanNumero);
    
    const divQuestao = document.createElement("div");
    divQuestao.className = "questao";
    const h3 = document.createElement("h3");
    h3.innerHTML = pergunta.questao;
    divQuestao.appendChild(h3);
    li.appendChild(divQuestao);
    
    const divRespostas = document.createElement("div");
    divRespostas.className = "respostas";
    pergunta.respostas.forEach((resposta, i) => {
        const divR = document.createElement("div");
        divR.className = `r ${resposta.correta ? "certa" : "errada"}`;
        const spanAlinha = document.createElement("span");
        spanAlinha.className = "alinha";
        spanAlinha.textContent = String.fromCharCode(65 + i); // A, B, C, D
        const p = document.createElement("p");
        p.innerHTML = resposta.texto;
        divR.appendChild(spanAlinha);
        divR.appendChild(p);
        divRespostas.appendChild(divR);
    });
    li.appendChild(divRespostas);
    
    return li;
}

// Função para inicializar as questões
function inicializarQuestoes() {
    perguntasRespostas.forEach((pergunta, index) => {
        const li = criarQuestao(pergunta, index);
        listaQ.insertBefore(li, listaQ.querySelector(".botoes"));
    });
    numeroQuestao = document.querySelector("li.mostrar .numeroQuestao");
}

// Função para sair da aplicação
function sair() {
    let sair = window.confirm("Deseja sair?");
    if (sair) {
        localStorage.removeItem('quizState'); // Limpa o estado ao sair
        window.location = "../index.html";
    }
}

// Função para limpar respostas selecionadas
function limparRespostas() {
    const listaR = listaQ.querySelectorAll("li")[passoAtual].querySelectorAll("div.r");
    listaR.forEach(el => {
        el.classList.remove("selecionada");
    });
}

// Função para selecionar uma resposta
function selecionarResposta(resposta) {
    if (respostasDadas[passoAtual]) return; // Impede novas seleções
    limparRespostas();
    resposta.classList.add("selecionada");
    respostasDadas[passoAtual] = true; // Marca questão como respondida
    clearInterval(timerId); // Para o temporizador
    atualizarTimer(Math.ceil(tempoResposta / 1000)); // Mantém exibição do tempo inicial
    
    // Atualiza contadores
    if (resposta.classList.contains('certa')) {
        respostasCertas++;
    } else {
        respostasErradas++;
    }
    
    // Salva o índice da resposta selecionada
    const listaR = listaQ.querySelectorAll("li")[passoAtual].querySelectorAll("div.r");
    listaR.forEach((el, i) => {
        if (el === resposta) {
            respostasSelecionadas[passoAtual] = i;
        }
    });
    
    salvarEstado(); // Salva o estado após seleção
}

// Função para selecionar automaticamente a resposta correta
function selecionarRespostaCorreta() {
    if (respostasDadas[passoAtual]) return; // Não seleciona se já respondida
    const listaR = listaQ.querySelectorAll("li")[passoAtual].querySelectorAll("div.r");
    listaR.forEach((el, i) => {
        if (el.classList.contains('certa')) {
            selecionarResposta(el);
            respostasSelecionadas[passoAtual] = i; // Atualiza o índice
        }
    });
    //alert("Tempo esgotado! A resposta correta foi selecionada automaticamente.");
}

// Função para atualizar a exibição do tempo
function atualizarTimer(segundos) {
    timerDisplay.textContent = `Tempo restante: ${segundos} segundos`;
}

// Função para iniciar o temporizador
function iniciarTemporizador() {
    clearInterval(timerId); // Limpa qualquer temporizador existente
    tempoRestante = tempoResposta / 1000; // Converte para segundos
    atualizarTimer(tempoRestante);
    
    timerId = setInterval(() => {
        tempoRestante--;
        atualizarTimer(tempoRestante);
        if (tempoRestante <= 0) {
            clearInterval(timerId);
            selecionarRespostaCorreta();
        }
    }, 1000); // Atualiza a cada segundo
}

// Função para adicionar eventos de clique às respostas
function adicionarEventosRespostas() {
    const listaR = listaQ.querySelectorAll("li")[passoAtual].querySelectorAll("div.r");
    listaR.forEach(el => {
        el.addEventListener("click", () => {
            selecionarResposta(el);
        }, { once: true }); // Evento removido após um clique
    });
}

// Função para restaurar seleção anterior
function restaurarSelecao() {
    if (respostasSelecionadas[passoAtual] !== -1) {
        const listaR = listaQ.querySelectorAll("li")[passoAtual].querySelectorAll("div.r");
        listaR[respostasSelecionadas[passoAtual]].classList.add("selecionada");
    }
}

// Função para mostrar a questão atual
function mostrarPasso(passo) {
    const listaQuestoes = listaQ.querySelectorAll("li");
    listaQuestoes.forEach((el, i) => {
        el.classList.toggle("mostrar", i === passo);
        if (i === passo) {
            numeroQuestao = el.querySelector(".numeroQuestao");
            numeroQuestao.textContent = perguntasRespostas[passo].numeroQuestao;
            adicionarEventosRespostas(); // Adiciona eventos de clique
            restaurarSelecao(); // Restaura a seleção anterior se existir
            if (!respostasDadas[passo]) {
                iniciarTemporizador(); // Inicia temporizador para questão não respondida
            } else {
                atualizarTimer(Math.ceil(tempoResposta / 1000)); // Mostra tempo inicial para questões respondidas
            }
        }
    });
    salvarEstado(); // Salva o estado após mudança de passo
}

// Função para alterar a questão atual
function alterarPasso(passo) {
    passoAtual += passo;
    
    if (passoAtual < 0) {
        passoAtual = 0;
    } else if (passoAtual >= totalQ) {
        passoAtual = totalQ - 1; // Permanece na última questão
        btnSeguinte.innerHTML = "Concluído";
        // Mostra resultados finais
        alert(`Questionário concluído!\nRespostas certas: ${respostasCertas}\nRespostas erradas: ${respostasErradas}`);
    } else {
        btnSeguinte.innerHTML = "Seguinte";
    }
    
    mostrarPasso(passoAtual);
}

// Manipuladores de eventos dos botões
btnInicio.addEventListener("click", sair);
btnVoltar.addEventListener("click", () => alterarPasso(-1));
btnSeguinte.addEventListener("click", () => {
    if (passoAtual === totalQ - 1 && respostasDadas[passoAtual]) {
        // Mostra resultados e sai se na última questão e respondida
        alert(`Questionário concluído!\nRespostas certas: ${respostasCertas}\nRespostas erradas: ${respostasErradas}`);
        sair();
    } else if (respostasDadas[passoAtual]) {
        alterarPasso(1); // Avança para próxima questão se atual está respondida
    } else {
        alert("Por favor, selecione uma resposta ou aguarde o tempo esgotar.");
    }
});

// Inicialização
localStorage.removeItem('quizState'); // Limpa o localStorage na primeira entrada
inicializarQuestoes(); // Cria as questões dinamicamente
if (!carregarEstado()) {
    tempoResposta = obterTempoLimite(); // Obtém tempo limite do usuário se não houver estado salvo
}
mostrarPasso(passoAtual); // Mostra a questão atual (carregada ou inicial)