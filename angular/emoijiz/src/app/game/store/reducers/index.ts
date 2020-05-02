import { Answer } from './../../models/aswer.model';
import { Question } from './../../models/question.model';
import { AppState } from './../../../reducers/index';
import { Game } from './../../models/game.model';
import { StoreState } from 'src/app/infrastructure/models/storeState.model';
import { RootStoreConfig, ActionReducerMap } from '@ngrx/store';

import { reducer as gameReducer }  from './game.reducer'
import { reducer as questionReducer }  from './question.reducer'
import { reducer as answerReducer }  from './answer.reducer'



export const featureName = 'game';

export interface GameState {
    game: StoreState<Game>,
    question: StoreState<Question>,
    answer: StoreState<Answer>
}

export interface State extends AppState {
    [featureName]: GameState
}

export const reducers: ActionReducerMap<GameState> = {
    game: gameReducer,
    question: questionReducer,
    answer: answerReducer
}