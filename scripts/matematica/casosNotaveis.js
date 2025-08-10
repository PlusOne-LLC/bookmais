const perguntasRespostas = [
    {
        id: "q1",
        numeroQuestao: "01",
        questao: "(a + b)²",
        respostas: [
            { texto: "a² + 2ab + b²", correta: true },
            { texto: "a² - 2ab + b²", correta: false },
            { texto: "a² + ab + b²", correta: false },
            { texto: "a² + 2ab + b", correta: false }
        ]
    },
    {
        id: "q2",
        numeroQuestao: "02",
        questao: "(a - b)²",
        respostas: [
            { texto: "a² + 2ab + b²", correta: false },
            { texto: "a² - 2ab + b²", correta: true },
            { texto: "a² + ab + b²", correta: false },
            { texto: "a² + 2ab + b", correta: false }
        ]
    },
    {
        id: "q3",
        numeroQuestao: "03",
        questao: "a² - b²",
        respostas: [
            { texto: "a² + 2ab + b²", correta: false },
            { texto: "a² - 2ab + b²", correta: false },
            { texto: "a² + ab + b²", correta: false },
            { texto: "(a + b)(a - b)", correta: true }
        ]
    },
    {
        id: "q4",
        numeroQuestao: "04",
        questao: "(x² + 4)(x² - 4)",
        respostas: [
            { texto: "a² + 2ab + b²", correta: false },
            { texto: "x² - 8", correta: false },
            { texto: "x⁴ - 16", correta: true },
            { texto: "x² + 4x + 16", correta: false }
        ]
    }
];