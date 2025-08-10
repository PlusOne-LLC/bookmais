const perguntasRespostas = [
    {
        id: "q1",
        numeroQuestao: "01",
        questao: "8x² + x - x²",
        respostas: [
            { texto: "7x² + x", correta: true },
            { texto: "9x² + x", correta: false },
            { texto: "7x - x²", correta: false },
            { texto: "8x² - x²", correta: false }
        ]
    },
    {
        id: "q2",
        numeroQuestao: "02",
        questao: "(3x² + 5x - 2) + (4x² - 3x + 6)",
        respostas: [
            { texto: "1x² + 8x + 4", correta: false },
            { texto: "7x² + 2x + 4", correta: true },
            { texto: "7x² + 8x + 4", correta: false },
            { texto: "1x² + 2x - 4", correta: false }
        ]
    },
    {
        id: "q3",
        numeroQuestao: "03",
        questao: "(3x - 6y + 4) + (4x + 2y - 2)",
        respostas: [
            { texto: "8x² - x²", correta: false },
            { texto: "7x - 4y + 2", correta: true },
            { texto: "8x² + x", correta: false },
            { texto: "x⁹ + x", correta: false }
        ]
    },
    {
        id: "q4",
        numeroQuestao: "04",
        questao: "0x² + x - x - xy²",
        respostas: [
            { texto: "7x - 2x²", correta: false },
            { texto: "9x² + x", correta: false },
            { texto: "-xy² + 0x²", correta: true },
            { texto: "0x² - x²", correta: false }
        ]
    },
    {
        id: "q5",
        numeroQuestao: "05",
        questao: "2x² - 3x + 5x²",
        respostas: [
            { texto: "5x² - 3x", correta: false },
            { texto: "7x² - 3x", correta: true },
            { texto: "2x² + 2x", correta: false },
            { texto: "7x² + 3x", correta: false }
        ]
    },
    {
        id: "q6",
        numeroQuestao: "06",
        questao: "(4x² - 2x + 1) - (x² + 3x - 4)",
        respostas: [
            { texto: "3x² - 5x + 5", correta: true },
            { texto: "4x² - 5x - 3", correta: false },
            { texto: "5x² - 5x + 5", correta: false },
            { texto: "3x² + x - 3", correta: false }
        ]
    },
    {
        id: "q7",
        numeroQuestao: "07",
        questao: "(2x + 3y - 5) + (x - 2y + 7)",
        respostas: [
            { texto: "2x + y - 2", correta: false },
            { texto: "x + 5y - 2", correta: false },
            { texto: "3x + y + 2", correta: true },
            { texto: "3x - y + 2", correta: false }
        ]
    },
    {
        id: "q8",
        numeroQuestao: "08",
        questao: "5x³ - 2x³ + 4x",
        respostas: [
            { texto: "7x³ + 4x", correta: false },
            { texto: "3x³ - 4x", correta: false },
            { texto: "3x³ + 4x", correta: true },
            { texto: "5x³ + 4x", correta: false }
        ]
    },
    {
        id: "q9",
        numeroQuestao: "09",
        questao: "(6x² - 4x + 3) + (2x² + x - 1)",
        respostas: [
            { texto: "4x² - 3x + 2", correta: false },
            { texto: "8x² - 3x + 2", correta: true },
            { texto: "6x² - 3x + 2", correta: false },
            { texto: "8x² + 3x + 2", correta: false }
        ]
    },
    {
        id: "q10",
        numeroQuestao: "10",
        questao: "(x² + 2x - 3) - (2x² - x + 4)",
        respostas: [
            { texto: "x² - 3x + 7", correta: false },
            { texto: "-x² + 3x - 7", correta: true },
            { texto: "x² + 3x - 7", correta: false },
            { texto: "-x² - 3x + 7", correta: false }
        ]
    },
    {
        id: "q11",
        numeroQuestao: "11",
        questao: "3xy - 2xy + xy",
        respostas: [
            { texto: "4xy", correta: false },
            { texto: "xy", correta: false },
            { texto: "2xy", correta: true },
            { texto: "3xy", correta: false }
        ]
    },
    {
        id: "q12",
        numeroQuestao: "12",
        questao: "(5x + 7y - 2) - (3x + 4y + 1)",
        respostas: [
            { texto: "2x + 11y - 3", correta: false },
            { texto: "8x + 3y - 3", correta: false },
            { texto: "2x + 3y - 3", correta: true },
            { texto: "2x - 3y + 3", correta: false }
        ]
    },
    {
        id: "q13",
        numeroQuestao: "13",
        questao: "4x² - 3x² + 2x - x",
        respostas: [
            { texto: "x² - 2x", correta: false },
            { texto: "x² + x", correta: true },
            { texto: "x² + 2x", correta: false },
            { texto: "x² - x", correta: false }
        ]
    },
    {
        id: "q14",
        numeroQuestao: "14",
        questao: "(2x² + 3x - 5) + (x² - 2x + 4)",
        respostas: [
            { texto: "3x² + x - 1", correta: true },
            { texto: "x² + x - 1", correta: false },
            { texto: "3x² + x + 1", correta: false },
            { texto: "3x² - x + 1", correta: false }
        ]
    },
    {
        id: "q15",
        numeroQuestao: "15",
        questao: "(x - 2y + 3) + (2x + y - 1)",
        respostas: [
            { texto: "x - y + 2", correta: false },
            { texto: "3x + y - 2", correta: false },
            { texto: "3x - y + 2", correta: true },
            { texto: "x + y + 2", correta: false }
        ]
    },
    {
        id: "q16",
        numeroQuestao: "16",
        questao: "7x³ - 4x³ + 2x²",
        respostas: [
            { texto: "4x³ + 2x²", correta: false },
            { texto: "3x³ + 2x²", correta: true },
            { texto: "7x³ + 2x²", correta: false },
            { texto: "3x³ - 2x²", correta: false }
        ]
    },
    {
        id: "q17",
        numeroQuestao: "17",
        questao: "(4x² - x + 6) - (2x² + 3x - 2)",
        respostas: [
            { texto: "2x² - 4x - 8", correta: false },
            { texto: "2x² - 4x + 8", correta: true },
            { texto: "6x² - 4x + 8", correta: false },
            { texto: "2x² + 4x - 8", correta: false }
        ]
    },
    {
        id: "q18",
        numeroQuestao: "18",
        questao: "(3x + 5y - 4) + (2x - 3y + 1)",
        respostas: [
            { texto: "5x + 8y - 3", correta: false },
            { texto: "5x + 2y - 3", correta: true },
            { texto: "x + 2y - 3", correta: false },
            { texto: "5x - 2y + 3", correta: false }
        ]
    },
    {
        id: "q19",
        numeroQuestao: "19",
        questao: "2xy² + 3xy² - xy²",
        respostas: [
            { texto: "5xy²", correta: false },
            { texto: "4xy²", correta: true },
            { texto: "2xy²", correta: false },
            { texto: "3xy²", correta: false }
        ]
    },
    {
        id: "q20",
        numeroQuestao: "20",
        questao: "(x² + 4x - 2) - (x² - x + 3)",
        respostas: [
            { texto: "x² - 5x + 5", correta: false },
            { texto: "x² + 5x - 5", correta: false },
            { texto: "5x - 5", correta: true },
            { texto: "5x + 5", correta: false }
        ]
    },
    {
        id: "q21",
        numeroQuestao: "21",
        questao: "5x² + 2x - 3x² + x",
        respostas: [
            { texto: "3x² + 2x", correta: false },
            { texto: "2x² - 3x", correta: false },
            { texto: "2x² + 3x", correta: true },
            { texto: "5x² + 3x", correta: false }
        ]
    },
    {
        id: "q22",
        numeroQuestao: "22",
        questao: "(6x² - 3x + 2) + (x² + 2x - 1)",
        respostas: [
            { texto: "7x² + x + 1", correta: false },
            { texto: "7x² - x + 1", correta: true },
            { texto: "5x² - x + 1", correta: false },
            { texto: "7x² + x - 1", correta: false }
        ]
    },
    {
        id: "q23",
        numeroQuestao: "23",
        questao: "(4x - 2y + 5) - (2x + y - 3)",
        respostas: [
            { texto: "2x - y + 8", correta: false },
            { texto: "6x - 3y + 8", correta: false },
            { texto: "2x - 3y + 8", correta: true },
            { texto: "2x + 3y - 8", correta: false }
        ]
    },
    {
        id: "q24",
        numeroQuestao: "24",
        questao: "3x³ + 2x² - x³ - x²",
        respostas: [
            { texto: "x³ + 2x²", correta: false },
            { texto: "2x³ + x²", correta: true },
            { texto: "2x³ - x²", correta: false },
            { texto: "3x³ + x²", correta: false }
        ]
    },
    {
        id: "q25",
        numeroQuestao: "25",
        questao: "(2x² + x - 4) - (x² + 2x - 3)",
        respostas: [
            { texto: "x² + x + 1", correta: false },
            { texto: "3x² - x - 1", correta: false },
            { texto: "x² - x - 1", correta: true },
            { texto: "x² - x + 1", correta: false }
        ]
    },
    {
        id: "q26",
        numeroQuestao: "26",
        questao: "(5x + 3y - 2) + (x - y + 4)",
        respostas: [
            { texto: "6x + 4y + 2", correta: false },
            { texto: "6x + 2y + 2", correta: true },
            { texto: "4x + 2y + 2", correta: false },
            { texto: "6x - 2y - 2", correta: false }
        ]
    },
    {
        id: "q27",
        numeroQuestao: "27",
        questao: "4xy - xy + 2xy",
        respostas: [
            { texto: "3xy", correta: false },
            { texto: "6xy", correta: false },
            { texto: "5xy", correta: true },
            { texto: "4xy", correta: false }
        ]
    },
    {
        id: "q28",
        numeroQuestao: "28",
        questao: "(3x² - 2x + 1) + (2x² + 3x - 5)",
        respostas: [
            { texto: "5x² + x - 4", correta: true },
            { texto: "x² + x - 4", correta: false },
            { texto: "5x² - x + 4", correta: false },
            { texto: "5x² + x + 4", correta: false }
        ]
    },
    {
        id: "q29",
        numeroQuestao: "29",
        questao: "(x - 4y + 6) - (2x - y + 2)",
        respostas: [
            { texto: "x - 3y + 4", correta: false },
            { texto: "-x + 3y - 4", correta: false },
            { texto: "-x - 3y + 4", correta: true },
            { texto: "x + 3y - 4", correta: false }
        ]
    },
    {
        id: "q30",
        numeroQuestao: "30",
        questao: "6x² - 3x² + x - 2x",
        respostas: [
            { texto: "3x² + x", correta: false },
            { texto: "3x² - x", correta: true },
            { texto: "6x² - x", correta: false },
            { texto: "3x² - 2x", correta: false }
        ]
    },
    {
        id: "q31",
        numeroQuestao: "31",
        questao: "(4x² + 2x - 3) - (x² - x + 2)",
        respostas: [
            { texto: "3x² + x - 5", correta: false },
            { texto: "3x² + 3x - 5", correta: true },
            { texto: "5x² + 3x - 5", correta: false },
            { texto: "3x² - 3x + 5", correta: false }
        ]
    },
    {
        id: "q32",
        numeroQuestao: "32",
        questao: "(2x + y - 1) + (3x - 2y + 4)",
        respostas: [
            { texto: "5x - y + 3", correta: true },
            { texto: "x - y + 3", correta: false },
            { texto: "5x + y - 3", correta: false },
            { texto: "5x + 3y + 3", correta: false }
        ]
    },
    {
        id: "q33",
        numeroQuestao: "33",
        questao: "2x³ + 3x² - x³ - 2x²",
        respostas: [
            { texto: "x³ + x²", correta: true },
            { texto: "2x³ + x²", correta: false },
            { texto: "x³ - x²", correta: false },
            { texto: "x³ + 2x²", correta: false }
        ]
    },
    {
        id: "q34",
        numeroQuestao: "34",
        questao: "(5x² - x + 2) + (2x² + 3x - 1)",
        respostas: [
            { texto: "7x² + 2x - 1", correta: false },
            { texto: "3x² + 2x + 1", correta: false },
            { texto: "7x² + 2x + 1", correta: true },
            { texto: "7x² - 2x + 1", correta: false }
        ]
    }
];
