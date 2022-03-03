import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientModel } from 'src/app/models/ingredient.models';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(public recipeService: RecipeService, private activatedRoute: ActivatedRoute, public router: Router) { }

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
          //add mode
          this.editMode = "add";
          this.buttonText = "Add recipe";
        }
      }
    )
  }

  onSave() : void {
    let ingredients = this.manageIngredients(this.recipeIngredients);
    let recipe : RecipeModel = new RecipeModel(this.recipeName, this.recipeDescription, this.recipeImagePath, [])

    if(this.editMode == "add")
    {
    
    }
    else
    {

    }
    alert("Ricetta salvata");
    this.router.navigate(['\/recipes']);
  }

  manageIngredients(ingredients : string){
    let retVal = [];
    let items = ingredients.split('\n');

    for (const item of items) 
    {
      // dividiamo l'oggetto relativo all'ingrediente in nome e quantità (supponendo che l'utente abbia inserito i dati nel formato indicato)
      let aus = item.split(":");

      // creiamo un nuovo ingrediente e mettiamo dentro le i dati ottenuti
      let ingredient = new IngredientModel(aus[0],parseInt(aus[1]));

      // infine aggiungiamo il nuovo ingrediente al vettore da restituire
      retVal.push(ingredient);
    }
  }

}
