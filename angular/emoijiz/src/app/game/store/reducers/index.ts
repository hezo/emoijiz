import { AppState } from './../../../reducers/index';
import { Game } from './../../models/game.model';
import { StoreState } from 'src/app/infrastructure/models/storeState.model';
import { RootStoreConfig, ActionReducerMap } from '@ngrx/store';

import { reducer as gameReducer }  from './game.reducer'

export const featureName = 'game';

export interface GameState {
    game: StoreState<Game>
}

export interface State extends AppState {
    [featureName]: GameState
}

export const reducers: ActionReducerMap<GameState> = {
    game: gameReducer
}