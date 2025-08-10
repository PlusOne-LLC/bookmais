const perguntasRespostas = [
    {
        id: "q1",
        numeroQuestao: "01",
        questao: "(a + b)²",
        respostas: [
            { texto: "a² - 2ab + b²", correta: false },
            { texto: "a² + ab + b²", correta: false },
            { texto: "a² + 2ab + b²", correta: true },
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
            { texto: "a² + ab + b²", correta: false },
            { texto: "(a + b)(a - b)", correta: true },
            { texto: "a² + 2ab + b²", correta: false },
            { texto: "a² - 2ab + b²", correta: false }
        ]
    },
    {
        id: "q4",
        numeroQuestao: "04",
        questao: "(x² + 4)(x² - 4)",
        respostas: [
            { texto: "x² + 4x + 16", correta: false },
            { texto: "a² + 2ab + b²", correta: false },
            { texto: "x⁴ - 16", correta: true },
            { texto: "x² - 8", correta: false }
        ]
    },
    {
        id: "q5",
        numeroQuestao: "05",
        questao: "(a + b)³",
        respostas: [
            { texto: "a³ + 2ab + b³", correta: false },
            { texto: "a³ + 3a²b + 3ab² + b³", correta: true },
            { texto: "a³ - 3a²b + 3ab² - b³", correta: false },
            { texto: "a³ + b³", correta: false }
        ]
    },
    {
        id: "q6",
        numeroQuestao: "06",
        questao: "(a - b)³",
        respostas: [
            { texto: "a³ + 3a²b + 3ab² + b³", correta: false },
            { texto: "a³ - 3a²b + 3ab² - b³", correta: true },
            { texto: "a³ + 2ab - b³", correta: false },
            { texto: "a³ - b³", correta: false }
        ]
    },
    {
        id: "q7",
        numeroQuestao: "07",
        questao: "(x + y + z)²",
        respostas: [
            { texto: "x² + y² + z²", correta: false },
            { texto: "x² + y² + z² - 2xy - 2xz - 2yz", correta: false },
            { texto: "x² + y² + z² + 2xy + 2xz + 2yz", correta: true },
            { texto: "x² + y² + z² + xy + xz + yz", correta: false }
        ]
    },
    {
        id: "q8",
        numeroQuestao: "08",
        questao: "(2x + 3)²",
        respostas: [
            { texto: "4x² + 9", correta: false },
            { texto: "4x² + 6x + 9", correta: false },
            { texto: "4x² + 12x + 9", correta: true },
            { texto: "2x² + 12x + 9", correta: false }
        ]
    },
    {
        id: "q9",
        numeroQuestao: "09",
        questao: "(3x - 2y)²",
        respostas: [
            { texto: "9x² + 4y²", correta: false },
            { texto: "9x² - 12xy + 4y²", correta: true },
            { texto: "9x² + 12xy + 4y²", correta: false },
            { texto: "3x² - 12xy + 4y²", correta: false }
        ]
    },
    {
        id: "q10",
        numeroQuestao: "10",
        questao: "(x + 2)(x - 2)",
        respostas: [
            { texto: "x² + 2x - 4", correta: false },
            { texto: "x² - 4", correta: true },
            { texto: "x² + 4", correta: false },
            { texto: "x² - 2x - 4", correta: false }
        ]
    }
];