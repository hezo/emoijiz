import { start } from './../actions/game.actions';
import {EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import { Game } from '../../models/game.model';
import { StoreState, LoadingState } from 'src/app/infrastructure/models/storeState.model';
import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';


export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>({
    selectId: (game: Game) => game.id
});

export const intialState: StoreState<Game> = adapter.getInitialState({
    selectedId: null,
    callState: LoadingState.INIT
})

export const reducer = createReducer(
    intialState,
    on(start, (state, {}) => produce(state, draft => {
        draft.callState = LoadingState.LOADED;
    }))
) 