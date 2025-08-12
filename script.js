const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pense em uma parte de uma cidade moderna: escolha entre um semáforo inteligente ou uma estação de ônibus automatizada.",
        alternativas: [
            {
                texto: "Prefiro o semáforo inteligente para otimizar o trânsito.",
                afirmacao: "Você decidiu investir na criação de um semáforo inteligente para melhorar o fluxo de veículos na cidade."
            },
            {
                texto: "Prefiro a estação de ônibus automatizada para facilitar a mobilidade.",
                afirmacao: "Você optou por criar uma estação de ônibus moderna, com informações em tempo real e tecnologia de ponta."
            }
        ]
    },
    {
        enunciado: "Para o semáforo inteligente funcionar, ele precisa de algumas funcionalidades. Qual delas você considera mais importante?",
        alternativas: [
            {
                texto: "Sensores que detectam veículos e ajustam o tempo do sinal.",
                afirmacao: "Você implementou sensores avançados, reduzindo congestionamentos e economizando tempo dos motoristas."
            },
            {
                texto: "Sinalização extra para pedestres, com avisos sonoros.",
                afirmacao: "Você priorizou a segurança dos pedestres, garantindo travessias mais seguras com alertas visuais e sonoros."
            }
        ]
    },
    {
        enunciado: "A prefeitura quer expandir a tecnologia para outros pontos da cidade. Por onde você começa?",
        alternativas: [
            {
                texto: "Instalar em avenidas principais para impactar mais pessoas.",
                afirmacao: "Você escolheu as vias mais movimentadas, aumentando rapidamente a eficiência no trânsito."
            },
            {
                texto: "Instalar primeiro em bairros residenciais para testar a tecnologia.",
                afirmacao: "Você iniciou em áreas menores, garantindo que a tecnologia fosse ajustada antes de grandes implantações."
            }
        ]
    },
    {
        enunciado: "Um problema inesperado aconteceu: durante a madrugada, o consumo de energia dos semáforos aumentou muito. O que você faz?",
        alternativas: [
            {
                texto: "Criar um modo de economia de energia para horários de pouco movimento.",
                afirmacao: "Você ativou o modo econômico, reduzindo a intensidade das luzes e economizando recursos da cidade."
            },
            {
                texto: "Instalar painéis solares para alimentar o sistema.",
                afirmacao: "Você inovou ao usar energia limpa, tornando a cidade mais sustentável."
            }
        ]
    },
    {
        enunciado: "Com o sucesso do projeto, você precisa apresentar os resultados em uma feira de tecnologia. Como fará?",
        alternativas: [
            {
                texto: "Criar um protótipo físico do semáforo inteligente.",
                afirmacao: "Seu protótipo impressionou os visitantes e gerou interesse de outras cidades."
            },
            {
                texto: "Criar uma simulação digital para mostrar como funciona.",
                afirmacao: "Sua simulação interativa permitiu que as pessoas entendessem facilmente a tecnologia."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No futuro da sua cidade inteligente...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
