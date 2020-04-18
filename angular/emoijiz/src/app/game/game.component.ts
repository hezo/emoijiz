import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  public emos:string[] = [
    'x1F339',
    'x1F339',
    'x1F339',
    'x1F339'
  ]

  ngOnInit(): void {
  }

}
