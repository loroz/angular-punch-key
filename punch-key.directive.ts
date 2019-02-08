import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

/**
 * Example Usage In Template:
 *  <p appPunchKey [targetText]="'The future is now'" [delay]=""'100'""></p> 
 * 
 * Note the use of single quotes inside the double quotes for each of the attribute values.
 */

@Directive({
  selector: '[appPunchKey]'
})
export class PunchKeyDirective {
  
  @Input() targetText: string;  
  @Input() delay: number;       // Number of milliseconds between each character.
  initialDelayInMillis = 500;
  
  constructor(element: ElementRef, renderer: Renderer2) {
    setTimeout(() => this.initiatePunchText(element, renderer), this.initialDelayInMillis); 
  }

  private initiatePunchText(element: ElementRef, renderer: Renderer2): void {
    const textComplete = this.targetText;
    let textBank = '';
    let index = 0;
    const delay = this.delay;
    const timeout = setTimeout(punchText, 0);
    
    function punchText() {
      if (textBank === textComplete) {
        clearTimeout(timeout);
      } else {
        updateText();
        setTimeout(punchText, delay);
      }
    }
    
    function updateText() {
      textBank += textComplete[index];
      index++;
      renderer.setProperty(element.nativeElement, 'innerText', textBank);
    }
  }

}
