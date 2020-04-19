import { StoreState, LoadingState, GetError } from 'src/app/infrastructure/models/storeState.model';
import { GameState, featureName } from './../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Game } from '../../models/game.model';

export const getFeaturetState = createFeatureSelector<GameState>(featureName);

export const getState = createSelector(
    getFeaturetState,
    (state: GameState) => state.game
)

export const isLoading = createSelector(
    getState,
    (state) => state.callState === LoadingState.LOADING
);

export const isError = createSelector(
    getState,
    (state) => GetError(state.callState) !== null
);