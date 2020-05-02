import { Answer } from './../../models/aswer.model';
import { Question } from './../../models/question.model';
import { answer, skip, addQuestions, select } from './../actions/question.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { StoreState, LoadingState } from 'src/app/infrastructure/models/storeState.model';
import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';


export const adapter: EntityAdapter<Answer> = createEntityAdapter<Answer>({
    selectId: (answer: Answer) => answer.question
});

export const intialState: StoreState<Answer> = adapter.getInitialState({
    selectedId: null,
    callState: LoadingState.INIT
})

export const reducer = createReducer(
    intialState,
    on(answer, (state, { answer }) => {
        return adapter.addOne(answer, state)
    }),
);