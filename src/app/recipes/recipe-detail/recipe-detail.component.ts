import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(public recipeService: RecipeService, public shoppingList: ShoppingListService, public activatedRoute: ActivatedRoute, public router : Router){ }

  ngOnInit(): void {
    //sintassi sincrona
    let recipedId : any = this.activatedRoute.snapshot.paramMap.get("id");
    this.recipeService.getRecipe(recipedId);
  }

  sendToShoppingList(): void{
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

  onEditRecipe() : void{
    this.router.navigate(['edit'], {relativeTo : this.activatedRoute});
  }

  onDeleteRecipe() : void{
    this.recipeService.deleteRecipe(this.recipeService.selectedRecipe._id);
  }

}
