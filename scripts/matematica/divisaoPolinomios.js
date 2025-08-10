const perguntasRespostas = [
    {
        id: "q1",
        numeroQuestao: "01",
        questao: "(4x⁴ - 4x³ + x - 1) ÷ (4x² + 1)",
        respostas: [
            { texto: "Q(x)= x - 1 <br> R(x)= 4x² + 0x²", correta: true },
            { texto: "Q(x)= x + 1 <br> R(x)= 4x² + 0x²", correta: false },
            { texto: "Q(x)= x - 5 <br> R(x)= 8x² + 0x²", correta: false },
            { texto: "Q(x)= x - 1 <br> R(x)= 6x² + 0x²", correta: false }
        ]
    },
    {
        id: "q2",
        numeroQuestao: "02",
        questao: "(x³ - 2x + x + 1) ÷ (x² - x + 2)",
        respostas: [
            { texto: "Q(x)= x - 1 <br> R(x)= x² + x", correta: true },
            { texto: "Q(x)= x + 1 <br> R(x)= x² + x", correta: false },
            { texto: "Q(x)= x - 1 <br> R(x)= x² - x", correta: false },
            { texto: "Q(x)= x - 1 <br> R(x)= x² - 2x", correta: false }
        ]
    },
    {
        id: "q3",
        numeroQuestao: "03",
        questao: "(x³ + 3x² - x + 2) ÷ (x - 1)",
        respostas: [
            { texto: "Q(x)= x² + 4x + 3 <br> R(x)= 5", correta: true },
            { texto: "Q(x)= x² + 3x - 1 <br> R(x)= 2", correta: false },
            { texto: "Q(x)= x² + 4x + 3 <br> R(x)= 3", correta: false },
            { texto: "Q(x)= x² + 2x + 1 <br> R(x)= 5", correta: false }
        ]
    },
    {
        id: "q4",
        numeroQuestao: "04",
        questao: "(2x³ - x² + 3x - 1) ÷ (x + 1)",
        respostas: [
            { texto: "Q(x)= 2x² - 3x + 6 <br> R(x)= -7", correta: true },
            { texto: "Q(x)= 2x² + x + 3 <br> R(x)= -1", correta: false },
            { texto: "Q(x)= 2x² - 3x + 6 <br> R(x)= 7", correta: false },
            { texto: "Q(x)= 2x² - x + 3 <br> R(x)= -1", correta: false }
        ]
    },
    {
        id: "q5",
        numeroQuestao: "05",
        questao: "(x⁴ - 2x³ + x² - 3) ÷ (x² - 1)",
        respostas: [
            { texto: "Q(x)= x² - 2x + 1 <br> R(x)= -2", correta: true },
            { texto: "Q(x)= x² - 2x + 1 <br> R(x)= 2", correta: false },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= -3", correta: false },
            { texto: "Q(x)= x² - x + 1 <br> R(x)= -3", correta: false }
        ]
    },
    {
        id: "q6",
        numeroQuestao: "06",
        questao: "(3x³ + x² - 2x + 4) ÷ (x - 2)",
        respostas: [
            { texto: "Q(x)= 3x² + 7x + 12 <br> R(x)= 28", correta: true },
            { texto: "Q(x)= 3x² + x - 2 <br> R(x)= 4", correta: false },
            { texto: "Q(x)= 3x² + 7x + 12 <br> R(x)= -28", correta: false },
            { texto: "Q(x)= 3x² - x + 2 <br> R(x)= 4", correta: false }
        ]
    },
    {
        id: "q7",
        numeroQuestao: "07",
        questao: "(x⁴ + x³ - 2x² + x - 1) ÷ (x² + x - 1)",
        respostas: [
            { texto: "Q(x)= x² - 1 <br> R(x)= 2x - 2", correta: true },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= x - 1", correta: false },
            { texto: "Q(x)= x² - 1 <br> R(x)= x - 2", correta: false },
            { texto: "Q(x)= x² + 1 <br> R(x)= 2x - 2", correta: false }
        ]
    },
    {
        id: "q8",
        numeroQuestao: "08",
        questao: "(2x⁴ - 3x² + x - 5) ÷ (2x² - 1)",
        respostas: [
            { texto: "Q(x)= x² - 1 <br> R(x)= x - 4", correta: true },
            { texto: "Q(x)= x² + 1 <br> R(x)= x - 4", correta: false },
            { texto: "Q(x)= x² - 1 <br> R(x)= x + 4", correta: false },
            { texto: "Q(x)= 2x² - 1 <br> R(x)= x - 5", correta: false }
        ]
    },
    {
        id: "q9",
        numeroQuestao: "09",
        questao: "(x³ - 5x² + 3x + 1) ÷ (x - 3)",
        respostas: [
            { texto: "Q(x)= x² - 2x - 3 <br> R(x)= -8", correta: true },
            { texto: "Q(x)= x² - 2x - 3 <br> R(x)= 8", correta: false },
            { texto: "Q(x)= x² + 2x + 3 <br> R(x)= -8", correta: false },
            { texto: "Q(x)= x² - 5x + 3 <br> R(x)= 1", correta: false }
        ]
    },
    {
        id: "q10",
        numeroQuestao: "10",
        questao: "(x⁴ - x² + 2x - 1) ÷ (x² + 2)",
        respostas: [
            { texto: "Q(x)= x² - 3 <br> R(x)= 2x + 5", correta: true },
            { texto: "Q(x)= x² + 3 <br> R(x)= 2x - 5", correta: false },
            { texto: "Q(x)= x² - 3 <br> R(x)= 2x - 5", correta: false },
            { texto: "Q(x)= x² - 1 <br> R(x)= 2x + 1", correta: false }
        ]
    },
    {
        id: "q11",
        numeroQuestao: "11",
        questao: "(3x³ - 2x² + x - 4) ÷ (x + 1)",
        respostas: [
            { texto: "Q(x)= 3x² - 5x + 6 <br> R(x)= -10", correta: true },
            { texto: "Q(x)= 3x² + x - 4 <br> R(x)= 0", correta: false },
            { texto: "Q(x)= 3x² - 5x + 6 <br> R(x)= 10", correta: false },
            { texto: "Q(x)= 3x² - 2x + 1 <br> R(x)= -4", correta: false }
        ]
    },
    {
        id: "q12",
        numeroQuestao: "12",
        questao: "(x⁴ + 2x³ - x + 2) ÷ (x² - x + 1)",
        respostas: [
            { texto: "Q(x)= x² + 3x + 3 <br> R(x)= -2x + 5", correta: true },
            { texto: "Q(x)= x² + 3x + 3 <br> R(x)= 2x - 5", correta: false },
            { texto: "Q(x)= x² + x + 1 <br> R(x)= -x + 2", correta: false },
            { texto: "Q(x)= x² - x + 1 <br> R(x)= 2x + 2", correta: false }
        ]
    },
    {
        id: "q13",
        numeroQuestao: "13",
        questao: "(2x³ + x² - 3x + 1) ÷ (x - 2)",
        respostas: [
            { texto: "Q(x)= 2x² + 5x + 7 <br> R(x)= 15", correta: true },
            { texto: "Q(x)= 2x² + x - 3 <br> R(x)= 1", correta: false },
            { texto: "Q(x)= 2x² + 5x + 7 <br> R(x)= -15", correta: false },
            { texto: "Q(x)= 2x² - x + 3 <br> R(x)= 1", correta: false }
        ]
    },
    {
        id: "q14",
        numeroQuestao: "14",
        questao: "(x⁴ - 3x³ + 2x² - x + 1) ÷ (x² - 2x + 1)",
        respostas: [
            { texto: "Q(x)= x² - x + 1 <br> R(x)= 0", correta: true },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= 0", correta: false },
            { texto: "Q(x)= x² - x + 1 <br> R(x)= x + 1", correta: false },
            { texto: "Q(x)= x² - 2x + 1 <br> R(x)= -x + 1", correta: false }
        ]
    },
    {
        id: "q15",
        numeroQuestao: "15",
        questao: "(x³ + 2x² - x - 2) ÷ (x + 2)",
        respostas: [
            { texto: "Q(x)= x² - 1 <br> R(x)= 0", correta: true },
            { texto: "Q(x)= x² + 2x - 1 <br> R(x)= -2", correta: false },
            { texto: "Q(x)= x² - 1 <br> R(x)= 2", correta: false },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= 0", correta: false }
        ]
    },
    {
        id: "q16",
        numeroQuestao: "16",
        questao: "(4x⁴ - 2x³ + x² - 3x + 1) ÷ (2x² - x + 1)",
        respostas: [
            { texto: "Q(x)= 2x² + 1 <br> R(x)= -x", correta: true },
            { texto: "Q(x)= 2x² - 1 <br> R(x)= x + 1", correta: false },
            { texto: "Q(x)= 2x² + 1 <br> R(x)= x", correta: false },
            { texto: "Q(x)= 2x² + x + 1 <br> R(x)= -3x + 1", correta: false }
        ]
    },
    {
        id: "q17",
        numeroQuestao: "17",
        questao: "(x³ - x² + 2x - 3) ÷ (x - 1)",
        respostas: [
            { texto: "Q(x)= x² + 2 <br> R(x)= -1", correta: true },
            { texto: "Q(x)= x² - x + 2 <br> R(x)= -3", correta: false },
            { texto: "Q(x)= x² + 2 <br> R(x)= 1", correta: false },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= -3", correta: false }
        ]
    },
    {
        id: "q18",
        numeroQuestao: "18",
        questao: "(3x⁴ + x³ - 2x² + x - 1) ÷ (x² + 1)",
        respostas: [
            { texto: "Q(x)= 3x² + x - 3 <br> R(x)= 4x + 2", correta: true },
            { texto: "Q(x)= 3x² - x + 3 <br> R(x)= 4x - 2", correta: false },
            { texto: "Q(x)= 3x² + x - 3 <br> R(x)= -4x + 2", correta: false },
            { texto: "Q(x)= 3x² + 1 <br> R(x)= x - 1", correta: false }
        ]
    },
    {
        id: "q19",
        numeroQuestao: "19",
        questao: "(x³ + 4x² - 2x + 1) ÷ (x + 3)",
        respostas: [
            { texto: "Q(x)= x² + x - 5 <br> R(x)= 16", correta: true },
            { texto: "Q(x)= x² - x + 5 <br> R(x)= -16", correta: false },
            { texto: "Q(x)= x² + x - 5 <br> R(x)= -16", correta: false },
            { texto: "Q(x)= x² + 4x - 2 <br> R(x)= 1", correta: false }
        ]
    },
    {
        id: "q20",
        numeroQuestao: "20",
        questao: "(2x⁴ - x³ + 3x² - x + 2) ÷ (x² - x + 1)",
        respostas: [
            { texto: "Q(x)= 2x² + x + 2 <br> R(x)= 2x", correta: true },
            { texto: "Q(x)= 2x² - x + 2 <br> R(x)= -2x", correta: false },
            { texto: "Q(x)= 2x² + x + 2 <br> R(x)= -2x", correta: false },
            { texto: "Q(x)= 2x² + 1 <br> R(x)= x + 2", correta: false }
        ]
    },
    {
        id: "q21",
        numeroQuestao: "21",
        questao: "(x³ - 3x² + 2x - 1) ÷ (x - 2)",
        respostas: [
            { texto: "Q(x)= x² - x <br> R(x)= -1", correta: true },
            { texto: "Q(x)= x² + x <br> R(x)= 1", correta: false },
            { texto: "Q(x)= x² - x <br> R(x)= 1", correta: false },
            { texto: "Q(x)= x² - 3x + 2 <br> R(x)= -1", correta: false }
        ]
    },
    {
        id: "q22",
        numeroQuestao: "22",
        questao: "(4x³ + 2x² - x + 3) ÷ (2x + 1)",
        respostas: [
            { texto: "Q(x)= 2x² - 1 <br> R(x)= 4", correta: true },
            { texto: "Q(x)= 2x² + x - 1 <br> R(x)= 3", correta: false },
            { texto: "Q(x)= 2x² - 1 <br> R(x)= -4", correta: false },
            { texto: "Q(x)= 2x² + 2x - 1 <br> R(x)= 4", correta: false }
        ]
    },
    {
        id: "q23",
        numeroQuestao: "23",
        questao: "(x⁴ - 2x³ + x² - x + 1) ÷ (x² - x + 1)",
        respostas: [
            { texto: "Q(x)= x² - x <br> R(x)= 1", correta: true },
            { texto: "Q(x)= x² + x <br> R(x)= -1", correta: false },
            { texto: "Q(x)= x² - x <br> R(x)= -1", correta: false },
            { texto: "Q(x)= x² - 1 <br> R(x)= x + 1", correta: false }
        ]
    },
    {
        id: "q24",
        numeroQuestao: "24",
        questao: "(3x³ - x² + 2x - 2) ÷ (x - 1)",
        respostas: [
            { texto: "Q(x)= 3x² + 2x + 4 <br> R(x)= 2", correta: true },
            { texto: "Q(x)= 3x² - x + 2 <br> R(x)= -2", correta: false },
            { texto: "Q(x)= 3x² + 2x + 4 <br> R(x)= -2", correta: false },
            { texto: "Q(x)= 3x² + x - 2 <br> R(x)= 2", correta: false }
        ]
    },
    {
        id: "q25",
        numeroQuestao: "25",
        questao: "(x⁴ + x³ - x² + 2x - 1) ÷ (x² + 1)",
        respostas: [
            { texto: "Q(x)= x² + x - 2 <br> R(x)= 4x + 1", correta: true },
            { texto: "Q(x)= x² - x + 2 <br> R(x)= -4x - 1", correta: false },
            { texto: "Q(x)= x² + x - 2 <br> R(x)= -4x + 1", correta: false },
            { texto: "Q(x)= x² + 1 <br> R(x)= x - 1", correta: false }
        ]
    },
    {
        id: "q26",
        numeroQuestao: "26",
        questao: "(2x³ - x² + x - 3) ÷ (x + 1)",
        respostas: [
            { texto: "Q(x)= 2x² - 3x + 4 <br> R(x)= -7", correta: true },
            { texto: "Q(x)= 2x² + x - 3 <br> R(x)= 0", correta: false },
            { texto: "Q(x)= 2x² - 3x + 4 <br> R(x)= 7", correta: false },
            { texto: "Q(x)= 2x² - x + 1 <br> R(x)= -3", correta: false }
        ]
    },
    {
        id: "q27",
        numeroQuestao: "27",
        questao: "(x⁴ - 3x³ + 2x - 1) ÷ (x² - 2x + 1)",
        respostas: [
            { texto: "Q(x)= x² - x + 1 <br> R(x)= -x", correta: true },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= x", correta: false },
            { texto: "Q(x)= x² - x + 1 <br> R(x)= x", correta: false },
            { texto: "Q(x)= x² - 2x + 1 <br> R(x)= -2x + 1", correta: false }
        ]
    },
    {
        id: "q28",
        numeroQuestao: "28",
        questao: "(3x³ + 2x² - x + 4) ÷ (x - 2)",
        respostas: [
            { texto: "Q(x)= 3x² + 8x + 15 <br> R(x)= 34", correta: true },
            { texto: "Q(x)= 3x² + 2x - 1 <br> R(x)= 4", correta: false },
            { texto: "Q(x)= 3x² + 8x + 15 <br> R(x)= -34", correta: false },
            { texto: "Q(x)= 3x² - x + 2 <br> R(x)= 4", correta: false }
        ]
    },
    {
        id: "q29",
        numeroQuestao: "29",
        questao: "(x⁴ - x³ + 2x² - x + 1) ÷ (x² + x + 1)",
        respostas: [
            { texto: "Q(x)= x² - 2x + 1 <br> R(x)= 0", correta: true },
            { texto: "Q(x)= x² + x - 1 <br> R(x)= 0", correta: false },
            { texto: "Q(x)= x² - 2x + 1 <br> R(x)= x + 1", correta: false },
            { texto: "Q(x)= x² + 1 <br> R(x)= -x + 1", correta: false }
        ]
    },
    {
        id: "q30",
        numeroQuestao: "30",
        questao: "(2x³ - x² + 3x - 2) ÷ (x + 1)",
        respostas: [
            { texto: "Q(x)= 2x² - 3x + 6 <br> R(x)= -8", correta: true },
            { texto: "Q(x)= 2x² + x - 3 <br> R(x)= -2", correta: false },
            { texto: "Q(x)= 2x² - 3x + 6 <br> R(x)= 8", correta: false },
            { texto: "Q(x)= 2x² - x + 3 <br> R(x)= -2", correta: false }
        ]
    }
];