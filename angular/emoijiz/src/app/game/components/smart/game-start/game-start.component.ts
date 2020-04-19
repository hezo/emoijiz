import { GameState } from './../../../store/reducers/index';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/game/store/reducers';
import { Question } from 'src/app/game/models/question.model';
import { getSelectedQuestion, getState } from 'src/app/game/store/selectors/question.selectors';
import { start } from 'src/app/game/store/actions/game.actions';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {

  public question$:Observable<Question>;

  constructor(private store:Store<{}>) {
    this.question$ = this.store.select(getSelectedQuestion);
   }

  ngOnInit(): void {
    this.store.dispatch(start());
  }

}
