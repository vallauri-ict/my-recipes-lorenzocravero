import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipeService } from 'src/app/shared/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>()

  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe:RecipeModel){
    this.recipeSelectedInList.emit(recipe);
  }

}
