import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { QuestionComponent } from './components/presentation/question/question.component';
import { EmojiComponent } from './components/presentation/emoji/emoji.component';
import { EmojiPipe } from './pipes/emoji.pipe';
import { QuestionCardComponent } from './components/presentation/question-card/question-card.component';


@NgModule({
  declarations: [GameComponent, QuestionComponent, EmojiComponent, EmojiPipe, QuestionCardComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    InfrastructureModule
  ]
})
export class GameModule { }
