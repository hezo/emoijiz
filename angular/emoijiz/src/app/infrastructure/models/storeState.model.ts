import { Exception } from './exception.model';
import { EntityState } from '@ngrx/entity';

export interface StoreState<T> extends EntityState<T> {
    selectedId: string;
    callState: CallState;
}

export const enum LoadingState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED'
}

export interface ErrorState {
    exception: Exception
}

export type CallState = LoadingState | ErrorState;

export function GetError(callstate: CallState): string | null {
    if((callstate as ErrorState).exception.message !== undefined) {
        return (callstate as ErrorState).exception.message
    }
    return null;
}

export function GetException(callstate: CallState): Exception | null {
    if((callstate as ErrorState).exception !== undefined) {
        return (callstate as ErrorState).exception
    }
    return null;
}