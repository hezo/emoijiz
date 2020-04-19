import { Question } from './../../models/question.model';
import { start, addQuestions } from './../actions/game.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { select } from '../actions/question.actions';
 
@Injectable()
export class QuestionEffects {
 
  startDefaultGame = createEffect(() =>
    this.actions$.pipe(
      ofType(start),
      map(() => addQuestions({payload: [
        {id: 0, question: "Mikä bändi", emojis: [
            'x1F339',
            'x1F339',
            'x1F339',
            'x1F339'
          ],
          answer: ""
        }
      ]})
      ))
  );
 
  constructor(private actions$: Actions) {}
}