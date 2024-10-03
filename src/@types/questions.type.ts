export type AnswerOption = {
    answerText: string;
    isCorrect: boolean;
}

export type QuestionsType = {
    questionText: string,
    answerOption: AnswerOption[]
};