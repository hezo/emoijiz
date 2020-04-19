import { Question } from './../../../models/question.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  @Input() question:Question;
  @Output() answer = new EventEmitter<string>();

  public form = this.fb.group({
    answer: ['']
  });

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {

  }

  onAnswer():void {
    this.answer.emit(this.form.get('answer').value);
  }

}
