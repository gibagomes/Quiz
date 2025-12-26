alert("JS carregou!");

const perguntas = [
  {
    pergunta: "Qual linguagem é usada para estruturar páginas?",
    opcoes: ["CSS", "JavaScript", "HTML", "Python"],
    correta: 2
  },
  {
    pergunta: "Qual linguagem deixa o aplicativo bonito?",
    opcoes: ["HTML", "CSS", "JavaScript", "SQL"],
    correta: 1
  },
  {
    pergunta: "Qual linguagem cria a lógica do aplicativo?",
    opcoes: ["CSS", "HTML", "Java", "JavaScript"],
    correta: 3
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");

mostrarPergunta();

function mostrarPergunta() {
  resultadoEl.textContent = "";
  opcoesEl.innerHTML = "";

  const atual = perguntas[indiceAtual];
  perguntaEl.textContent = atual.pergunta;

  atual.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;

    botao.addEventListener("click", function () {
      verificarResposta(index);
    });

    opcoesEl.appendChild(botao);
  });
}

function verificarResposta(indice) {
  const correta = perguntas[indiceAtual].correta;

  if (indice === correta) {
    pontuacao++;
    resultadoEl.textContent = "Resposta correta!";
  } else {
    resultadoEl.textContent = "Resposta errada!";
  }

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    setTimeout(mostrarPergunta, 1000);
  } else {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  perguntaEl.textContent = "Fim do Quiz!";
  opcoesEl.innerHTML = "";
  resultadoEl.textContent =
    "Você acertou " + pontuacao + " de " + perguntas.length + " perguntas.";
}
