import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../models/recipe.models';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe:RecipeModel
  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {}


}
