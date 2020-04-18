import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  @Input() emoji: string;

  constructor() { }

  ngOnInit(): void {
  }

  public emo(): string {
    return `&#${this.emoji};`
  }

}