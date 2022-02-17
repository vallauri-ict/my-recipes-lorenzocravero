import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.models';
import { DatastorageService } from './datastorage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients : IngredientModel[] = [];

  constructor(private datastorageservice : DatastorageService) { }

  // getIngredients(){
  //   this.datastorageservice.sendGetRequest('shopping-list').subscribe(
  //     data => {
  //       this.ingredients = data as IngredientModel[];
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   )
  // }

  //per l'aggiunta di un solo ingrediente
  addIngredient(ingredient : IngredientModel){
    let ingredientFound = false;
    for (const item of this.ingredients) {
      if(item.name.toLowerCase() == ingredient.name.toLowerCase())
      {
        ingredientFound = true;
        item.amount += ingredient.amount;
        break;
      }
    }
    this.ingredients.push(ingredient);
  }

  //per l'aggiunta di un array di ingredienti contemporaneamente
  addIngredients(ingredients : IngredientModel[]){
    for (const ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }

  postIngredient(ingredient : IngredientModel){
    this.datastorageservice.sendPostRequest(('/shopping-list'),ingredient);
  }
}
