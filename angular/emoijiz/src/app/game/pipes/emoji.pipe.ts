import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.domSanitizer.bypassSecurityTrustHtml(value as string);  }

}
