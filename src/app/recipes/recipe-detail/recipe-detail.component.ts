import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(public recipeService: RecipeService, public shoppingList: ShoppingListService) { }

  ngOnInit(): void {}

  sendToShoppingList(): void{
    
  }

}
