import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, exhaustMap, first } from 'rxjs/operators';
import { select, addQuestions } from '../actions/question.actions';
 
import questions from '../../../../questions.json';
import { start, next } from '../actions/game.actions';
import { Store } from '@ngrx/store';
import { getSelectedId } from '../selectors/question.selectors';

@Injectable()
export class GameEffects {
 
  startDefaultGame = createEffect(() =>
    this.actions$.pipe(
      ofType(start),
      switchMap(() => [
        addQuestions({payload : questions}),
        select({id: 0})
      ]))
  );
 
  nextQuestion = createEffect(() =>
    this.actions$.pipe(
      ofType(next),
      exhaustMap(() => this.store.select(getSelectedId).pipe(
        first(),
        map((current: number) => {
          let next = current + 1;
          return select({id: next})
        })
      )
      ))
  );

  constructor(private readonly actions$: Actions, private readonly store: Store<{}>) { }
}