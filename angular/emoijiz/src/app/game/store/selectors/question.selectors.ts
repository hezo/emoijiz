import { Question } from './../../models/question.model';
import { StoreState, LoadingState, GetError } from 'src/app/infrastructure/models/storeState.model';
import { GameState, featureName} from './../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getFeaturetState = createFeatureSelector<GameState>(featureName);

export const getState = createSelector(
    getFeaturetState,
    (state: GameState) => state.question
)

export const getQuestions = createSelector(
    getState,
    (state) => state.entities
);

export const getSelectedId = createSelector(
    getState,
    (state) => state.selectedId
);

export const getSelectedQuestion = createSelector(
    getQuestions,
    getSelectedId,
    (entities, id) => entities[id]
);

export const isLoading = createSelector(
    getState,
    (state: StoreState<Question>) => state.callState === LoadingState.LOADING
);

export const isError = createSelector(
    getState,
    (state: StoreState<Question>) => GetError(state.callState) !== null
);