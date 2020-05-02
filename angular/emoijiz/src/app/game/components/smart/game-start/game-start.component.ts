import { answer } from './../../../store/actions/question.actions';
import { Answer } from './../../../models/aswer.model';
import { GameState } from './../../../store/reducers/index';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/game/store/reducers';
import { Question } from 'src/app/game/models/question.model';
import { getSelectedQuestion, getState } from 'src/app/game/store/selectors/question.selectors';
import { start } from 'src/app/game/store/actions/game.actions';
import { answer as  answerAction} from 'src/app/game/store/actions/question.actions';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {

  public question$:Observable<Question>;
  public questionId: string;

  constructor(private readonly store:Store<{}>) {
    this.question$ = this.store.select(getSelectedQuestion);
   }

  ngOnInit(): void {
    this.store.dispatch(start());
  }

  public onAnswer(value: string): void {

    let answer: Answer = {
      question: 1234,
      user: "",
      value: value
    };

    this.store.dispatch(answerAction({answer}))
  }

}
