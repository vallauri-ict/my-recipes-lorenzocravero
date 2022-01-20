import { not } from '@angular/compiler/src/output/output_ast';
import { Directive, HostBinding, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef) { }

  //facciamo il binding della classe open legandola alla booleana isOpen
  //in questo modo il valore della variabile isOpen condiziona il comportamento del dropdown
  @HostBinding('class.open') isOpen:boolean = false;

  //host listener è legato agli eventi, per gestire appunto un evento applicato 
  //ad un tag html che ha questa direttiva
  @HostListener('document:click',['$event'])toggleOpen(event:Event){
    //dobbiamo prenderci un riferimento all'elemento su cui abbiamo fatto click
    //lo iniettiamo quindi nel costruttore

    this.isOpen =  this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  };
}
