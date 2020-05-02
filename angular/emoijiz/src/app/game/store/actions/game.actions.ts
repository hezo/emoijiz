import { createAction, props } from '@ngrx/store';
import { Question } from '../../models/question.model';

export const start = createAction(
    'start game'
);

export const addQuestions = createAction(
    'add question(s)',
    props<{ payload: Question | Question[] }>()
);

export const next = createAction(
    'next question'
)

export const end = createAction(
    'end game'
);