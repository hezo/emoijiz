import { Question } from './../../models/question.model';
import { answer, skip, addQuestions, select } from './../actions/question.actions';
import {EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import { StoreState, LoadingState } from 'src/app/infrastructure/models/storeState.model';
import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';


export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>({
    selectId: (question: Question) => question.id
});

export const intialState: StoreState<Question> = adapter.getInitialState({
    selectedId: null,
    callState: LoadingState.INIT
})

export const reducer = createReducer(
    intialState,
    on(addQuestions, (state, { payload }) => {
        if(Array.isArray(payload))
            return adapter.addMany(payload, state)
        return adapter.addOne(payload, state)
    }),
    on(addQuestions, (state, {}) => produce(state, draft => {
        draft.callState = LoadingState.LOADED;
    })),
    on(select, (state, { id }) => produce(state, draft => {
        draft.selectedId = id;
    }))
);