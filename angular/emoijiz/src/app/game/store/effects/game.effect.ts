import { start } from './../actions/game.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { select } from '../actions/question.actions';
 
@Injectable()
export class GameEffects {
 
  startDefaultGame = createEffect(() =>
    this.actions$.pipe(
      ofType(start),
      map(() => select({id: 0}))
    )
  );
 
  constructor(private actions$: Actions) {}
}