import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  
  @Input('appHighlight') hoverColor: string = 'Cyan';
  @Input() defaultColor : string = 'White';
  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;

  //i due host listener gestiscono il comportamento del colore di sfondo a seconda del mouse
  @HostListener('mouseenter') evidenzia(){
    this.backgroundColor = this.hoverColor ? this.hoverColor : 'Cyan';
  }

  @HostListener('mouseleave') rilascia(){
    this.backgroundColor = this.defaultColor;
  }


  constructor() { }


  ngOnInit(): void {
      this.backgroundColor = this.defaultColor;
  }
}
