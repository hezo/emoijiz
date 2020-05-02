import { Answer } from './../../models/aswer.model';
import { Question } from './../../models/question.model';
import { createAction, props } from '@ngrx/store';


export const addQuestions = createAction(
    'add question(s)',
    props<{ payload: Question | Question[] }>()
);

export const answer = createAction(
    'answer',
    props<{ answer: Answer }>()
)

export const skip = createAction(
    'skip'
)

export const select = createAction(
    'select',
    props<{ id: number }>()
)
