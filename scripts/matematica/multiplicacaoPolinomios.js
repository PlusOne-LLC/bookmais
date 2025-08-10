const perguntasRespostas = [
    {
        id: "q1",
        numeroQuestao: "01",
        questao: "(x + 1).(3x - 2)",
        respostas: [
            { texto: "9x + 9x", correta: false },
            { texto: "8x² - x²", correta: false },
            { texto: "3x² - x - 2", correta: true },
            { texto: "88", correta: false }
        ]
    },
    {
        id: "q2",
        numeroQuestao: "02",
        questao: "(2x - 3).(3x² + 4x - 5)",
        respostas: [
            { texto: "6x³ + x² - 22x + 15", correta: false },
            { texto: "6x³ - x² - 22x + 15", correta: true },
            { texto: "2x³ - x² + 2x + 15x", correta: false },
            { texto: "x² - 2x + 8", correta: false }
        ]
    },
    {
        id: "q3",
        numeroQuestao: "03",
        questao: "(a - 1).(a + 1)",
        respostas: [
            { texto: "a + 2", correta: false },
            { texto: "a² - 1", correta: true },
            { texto: "a² + 1", correta: false },
            { texto: "a² - 2", correta: false }
        ]
    },
    {
        id: "q4",
        numeroQuestao: "04",
        questao: "(2x + 3).(x - 4)",
        respostas: [
            { texto: "2x² + 5x - 12", correta: false },
            { texto: "2x² - x - 12", correta: false },
            { texto: "x² - 5x - 12", correta: false },
            { texto: "2x² - 5x - 12", correta: true }
        ]
    },
    {
        id: "q5",
        numeroQuestao: "05",
        questao: "(3x - 2).(2x + 5)",
        respostas: [
            { texto: "6x² - 11x - 10", correta: false },
            { texto: "6x² + 11x - 10", correta: true },
            { texto: "3x² + 11x - 10", correta: false },
            { texto: "6x² + x - 10", correta: false }
        ]
    },
    {
        id: "q6",
        numeroQuestao: "06",
        questao: "(x² + 2x - 1).(x + 3)",
        respostas: [
            { texto: "x³ + 2x² + x - 3", correta: false },
            { texto: "x³ + 5x² - x - 3", correta: false },
            { texto: "x³ + 5x² + 5x - 3", correta: true },
            { texto: "x³ + x² + 5x - 3", correta: false }
        ]
    },
    {
        id: "q7",
        numeroQuestao: "07",
        questao: "(4x + 1).(2x - 3)",
        respostas: [
            { texto: "8x² + 10x - 3", correta: false },
            { texto: "8x² - x - 3", correta: false },
            { texto: "4x² - 10x - 3", correta: false },
            { texto: "8x² - 10x - 3", correta: true }
        ]
    },
    {
        id: "q8",
        numeroQuestao: "08",
        questao: "(x - 2).(x² + x + 1)",
        respostas: [
            { texto: "x³ - x² + x - 2", correta: true },
            { texto: "x³ + x² - x - 2", correta: false },
            { texto: "x³ - x² - x + 2", correta: false },
            { texto: "x³ - x² + x - 3", correta: false }
        ]
    },
    {
        id: "q9",
        numeroQuestao: "09",
        questao: "(3x + 2).(x² - x + 4)",
        respostas: [
            { texto: "3x³ - x² - 10x - 8", correta: false },
            { texto: "3x³ + x² - 10x + 8", correta: false },
            { texto: "3x³ - x² + 10x + 8", correta: true },
            { texto: "3x³ - x² + x + 8", correta: false }
        ]
    },
    {
        id: "q10",
        numeroQuestao: "10",
        questao: "(x + 5).(x - 5)",
        respostas: [
            { texto: "x² + 10x - 25", correta: false },
            { texto: "x² - 25", correta: true },
            { texto: "x² - 10x + 25", correta: false },
            { texto: "x² + 25", correta: false }
        ]
    },
    {
        id: "q11",
        numeroQuestao: "11",
        questao: "(2x - 1).(x² + 3x - 2)",
        respostas: [
            { texto: "2x³ + 5x² - 7x + 2", correta: true },
            { texto: "x³ + 5x² - 7x + 2", correta: false },
            { texto: "2x³ + 5x² + x - 2", correta: false },
            { texto: "2x³ - 5x² + 7x - 2", correta: false }
        ]
    },
    {
        id: "q12",
        numeroQuestao: "12" ,
        questao: "(x + 4).(2x + 1)",
        respostas: [
            { texto: "2x² + x + 4", correta: false },
            { texto: "2x² + 9x + 4", correta: true },
            { texto: "x² + 9x + 4", correta: false },
            { texto: "2x² + 9x - 4", correta: false }
        ]
    },
    {
        id: "q13",
        numeroQuestao: "13",
        questao: "(5x - 3).(x + 2)",
        respostas: [
            { texto: "5x² + x - 6", correta: false },
            { texto: "5x² - 7x + 6", correta: false },
            { texto: "5x² + 7x - 6", correta: true },
            { texto: "x² + 7x - 6", correta: false }
        ]
    },
    {
        id: "q14",
        numeroQuestao: "14",
        questao: "(x² - 3x + 2).(x - 1)",
        respostas: [
            { texto: "x³ - 4x² - 5x + 2", correta: false },
            { texto: "x³ - x² + 5x - 2", correta: false },
            { texto: "x³ + 4x² - 5x + 2", correta: false },
            { texto: "x³ - 4x² + 5x - 2", correta: true }
        ]
    },
    {
        id: "q15",
        numeroQuestao: "15",
        questao: "(3x + 4).(2x - 5)",
        respostas: [
            { texto: "6x² - 7x - 20", correta: true },
            { texto: "6x² + x - 20", correta: false },
            { texto: "3x² - 7x - 20", correta: false },
            { texto: "6x² + 7x - 20", correta: false }
        ]
    },
    {
        id: "q16",
        numeroQuestao: "16",
        questao: "(x - 3).(x² + 2x - 1)",
        respostas: [
            { texto: "x³ - x² + x - 3", correta: false },
            { texto: "x³ + x² + 7x - 3", correta: false },
            { texto: "x³ - x² - 7x + 3", correta: true },
            { texto: "x³ - x² - x + 3", correta: false }
        ]
    },
    {
        id: "q17",
        numeroQuestao: "17",
        questao: "(2x + 3).(x² - x + 1)",
        respostas: [
            { texto: "x³ + x² - x + 3", correta: false },
            { texto: "2x³ + x² - x + 3", correta: true },
            { texto: "2x³ - x² + x - 3", correta: false },
            { texto: "2x³ + x² + x - 3", correta: false }
        ]
    },
    {
        id: "q18",
        numeroQuestao: "18",
        questao: "(x + 2).(x + 2)",
        respostas: [
            { texto: "x² + 4x - 4", correta: false },
            { texto: "x² - 4x + 4", correta: false },
            { texto: "x² + 2x + 4", correta: false },
            { texto: "x² + 4x + 4", correta: true }
        ]
    },
    {
        id: "q19",
        numeroQuestao: "19",
        questao: "(4x - 3).(3x + 2)",
        respostas: [
            { texto: "12x² - 5x + 2", correta: false },
            { texto: "4x² + 5x - 2", correta: false },
            { texto: "12x² + 5x - 2", correta: true },
            { texto: "12x² + x - 2", correta: false }
        ]
    },
    {
        id: "q20",
        numeroQuestao: "20",
        questao: "(x² + x - 1).(2x - 3)",
        respostas: [
            { texto: "2x³ - x² + x - 3", correta: false },
            { texto: "2x³ - x² - 5x + 3", correta: true },
            { texto: "2x³ + x² - 5x - 3", correta: false },
            { texto: "x³ - x² - 5x + 3", correta: false }
        ]
    },
    {
        id: "q21",
        numeroQuestao: "21",
        questao: "(x - 5).(x + 3)",
        respostas: [
            { texto: "x² - x - 15", correta: false },
            { texto: "x² + 2x - 15", correta: false },
            { texto: "x² - 2x - 15", correta: true },
            { texto: "x² - 2x + 15", correta: false }
        ]
    },
    {
        id: "q22",
        numeroQuestao: "22",
        questao: "(2x² + x - 1).(x + 1)",
        respostas: [
            { texto: "2x³ + 3x² - 1", correta: true },
            { texto: "x³ + 3x² - 1", correta: false },
            { texto: "2x³ - 3x² + 1", correta: false },
            { texto: "2x³ + x² - x - 1", correta: false }
        ]
    },
    {
        id: "q23",
        numeroQuestao: "23",
        questao: "(3x - 4).(x² + 2x - 3)",
        respostas: [
            { texto: "3x³ + x² - 17x + 12", correta: false },
            { texto: "3x³ - 2x² + 17x - 12", correta: false },
            { texto: "x³ + 2x² - 17x + 12", correta: false },
            { texto: "3x³ + 2x² - 17x + 12", correta: true }
        ]
    },
    {
        id: "q24",
        numeroQuestao: "24",
        questao: "(x + 1).(x² - 2x + 3)",
        respostas: [
            { texto: "x³ - x² + x + 3", correta: true },
            { texto: "x³ + x² - x - 3", correta: false },
            { texto: "x³ - x² - x + 3", correta: false },
            { texto: "x³ - x² + x - 3", correta: false }
        ]
    },
    {
        id: "q25",
        numeroQuestao: "25",
        questao: "(2x + 5).(3x - 1)",
        respostas: [
            { texto: "6x² + x - 5", correta: false },
            { texto: "6x² - 13x + 5", correta: false },
            { texto: "2x² + 13x - 5", correta: false },
            { texto: "6x² + 13x - 5", correta: true }
        ]
    },
    {
        id: "q26",
        numeroQuestao: "26",
        questao: "(x - 2).(2x² + x - 4)",
        respostas: [
            { texto: "2x³ - 3x² - 10x + 8", correta: true },
            { texto: "x³ - 3x² - 10x + 8", correta: false },
            { texto: "2x³ - 3x² + x - 8", correta: false },
            { texto: "2x³ + 3x² + 10x - 8", correta: false }
        ]
    },
    {
        id: "q27",
        numeroQuestao: "27",
        questao: "(x + 3).(x - 3)",
        respostas: [
            { texto: "x² + 6x - 9", correta: false },
            { texto: "x² - 9", correta: true },
            { texto: "x² - 6x + 9", correta: false },
            { texto: "x² + 9", correta: false }
        ]
    },
    {
        id: "q28",
        numeroQuestao: "28",
        questao: "(4x - 3).(x² + x - 2)",
        respostas: [
            { texto: "x³ + x² - 11x + 6", correta: false },
            { texto: "4x³ + x² + x - 6", correta: false },
            { texto: "4x³ - x² + 11x - 6", correta: false },
            { texto: "4x³ + x² - 11x + 6", correta: true }
        ]
    },
    {
        id: "q29",
        numeroQuestao: "29",
        questao: "(2x + 1).(2x - 1)",
        respostas: [
            { texto: "4x² + 2x - 1", correta: false },
            { texto: "4x² - 2x + 1", correta: false },
            { texto: "4x² - 1", correta: true },
            { texto: "4x² + 1", correta: false }
        ]
    },
    {
        id: "q30",
        numeroQuestao: "30",
        questao: "(x² - x + 1).(3x + 2)",
        respostas: [
            { texto: "3x³ + x² - x - 2", correta: false },
            { texto: "x³ - x² + x + 2", correta: false },
            { texto: "3x³ - x² - x + 2", correta: false },
            { texto: "3x³ - x² + x + 2", correta: true }
        ]
    }
];