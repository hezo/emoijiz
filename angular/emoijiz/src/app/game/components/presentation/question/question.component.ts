import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() title:string;
  @Input() question:string[] = [
    'x1F339',
    'x1F339',
    'x1F339',
    'x1F339'
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
