import { Question } from './question.model';

export interface Game {
    id: string;
    questions: Question[];
}