import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  @Input() question:string;
  @Input() emojies:string[];

  @Output() answer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(input:string):void {
    this.answer.emit(input);
  }

}
