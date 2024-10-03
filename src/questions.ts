import { QuestionsType } from "./@types/questions.type"

export const questions: QuestionsType[] = [
    {
        questionText: "What is the capital France",
        answerOption: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Japan", isCorrect: false }
        ]
    },
    {
        questionText: "Who is CEO of Tesla",
        answerOption: [
            { answerText: "Jeff Bezos", isCorrect: false},
            { answerText: "Elon Musk", isCorrect: true},
            { answerText: "Bill Gates", isCorrect: false},
            { answerText: "Tony Stark", isCorrect: false}
        ]
    },

    {
        questionText: "The Iphone was created by which company",
        answerOption: [
            { answerText: "Apple", isCorrect: true},
            { answerText: "Microsoft", isCorrect: false},
            { answerText: "Intel", isCorrect: false},
            { answerText: "Amazon", isCorrect: false},
        ]
    }
]