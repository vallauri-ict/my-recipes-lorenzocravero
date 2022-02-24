import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(public recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  recipeName : string = "";
  recipeDescription : string = "";
  recipeImagePath : string = "";
  recipeIngredients : string = "";
  buttonText : string = "";

  editMode : string = ""; //serve per il salvataggio

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params : Params) => {
        if(params['id'])
        {
          // edit mode
          if(this.recipeService.selectedRecipe)
          {
            this.recipeName = this.recipeService.selectedRecipe.name;
            this.recipeDescription = this.recipeService.selectedRecipe.description;
            this.recipeIngredients = "";

            for (const ingredient of this.recipeService.selectedRecipe.ingredients) 
            {
              this.recipeIngredients += ingredient.name + ":" + ingredient.amount + "\n";
            }
            this.editMode = "edit";
            this.buttonText = "Save changes";
          }
        }
        else
        {
          // add mode
          this.editMode = "add";
          this.buttonText = "Add recipe";
        }
      }
    )
  }

}
