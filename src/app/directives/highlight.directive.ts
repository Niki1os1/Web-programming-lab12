import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  @Input('highlightColor') color : string = '';
  @Input('highlightOpacity') opacity : number = 1;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color, this.opacity);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', 1);
  }
  
  private highlight(color: string, opacity: number) {
    
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.opacity = opacity;
  }

  

}
