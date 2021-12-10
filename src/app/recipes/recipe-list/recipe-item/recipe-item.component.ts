import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:RecipeModel
  @Output() recipeSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {}

  onSelected(){
    this.recipeSelected.emit();
  }
}
