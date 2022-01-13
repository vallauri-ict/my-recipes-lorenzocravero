import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  //facciamo il binding della classe open legandola alla booleana isOpen
  //in questo modo il valore della variabile isOpen condiziona il comportamento del dropdown
  @HostBinding('class.open') isOpen:boolean = false;

  //host listener è legato agli eventi, per gestire appunto un evento applicato 
  //ad un tag html che ha questa direttiva
  @HostListener('click')toggleOpen(){
    this.isOpen = !this.isOpen
  };
}
