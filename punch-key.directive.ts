import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

/**
 * Example Usage In Template:
 *  <p appPunchKey [targetText]="'The future is now'" [initialDelayInMillis]="'500'" [delayBetweenChars]="'100'"></p> 
 * 
 * Note the use of single quotes inside the double quotes for each of the attribute values.
 */

@Directive({
  selector: '[appPunchKey]'
})
export class PunchKeyDirective implements OnInit {
  
  @Input() targetText: string;  
  @Input() delayBetweenChars: number;       // Number of milliseconds between each character.
  @Input() initialDelayInMillis: number;    // Number of milliseconds to wait before starting.
  
  element: ElementRef;
  renderer: Renderer2;
  
  constructor(element: ElementRef, renderer: Renderer2) {
    this.element = element;
    this.renderer = renderer;
  }
  
  ngOnInit(): void {
    setTimeout(() => this.initiatePunchText(this.element, this.renderer), this.initialDelayInMillis); 
  }

  private initiatePunchText(element: ElementRef, renderer: Renderer2): void {
    const textComplete = this.targetText;
    let textBank = '';
    let index = 0;
    const delay = this.delayBetweenChars;
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
