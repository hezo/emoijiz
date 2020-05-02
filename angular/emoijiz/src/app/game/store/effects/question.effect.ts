import { getSelectedQuestion, getSelectedId } from './../selectors/question.selectors';
import { Question } from './../../models/question.model';
import { start, addQuestions, next } from './../actions/game.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { select, answer } from '../actions/question.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class QuestionEffects {

  /*startDefaultGame = createEffect(() =>
    this.actions$.pipe(
      ofType(start),
      map(() => addQuestions({
        payload: [
          {
            id: 0, question: "Mikä bändi", emojis: [
              'x1F339',
              'x1F339',
              'x1F339',
              'x1F339'
            ],
            answer: ""
          }
        ]
      })
      ))
  );*/

  answerQuestion = createEffect(() =>
    this.actions$.pipe(
      ofType(answer),
      map(asnwer => next())
    ));

 /* nextQuestion = createEffect(() =>
    this.actions$.pipe(
      ofType(next),
      exhaustMap((action) => {
        this.store.select(getSelectedId).pipe(
          map((id:number) => select(id + 1))
        )
      }
    ));
*/
  constructor(private readonly actions$: Actions, private readonly store: Store<{}>) { }
}