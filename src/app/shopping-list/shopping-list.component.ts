import { Component, OnInit } from '@angular/core';
import {  IngredientModel } from '../models/ingredient.models';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[]=[
    new  IngredientModel("Pasta",500),
    new  IngredientModel("Pomodoro",2)
  ]
  constructor(public shoppinglistservice : ShoppingListService) { }

  ngOnInit(): void { }

  onIngredientAdded(newIngredient:IngredientModel){
    let ingredientFound = false;
    if(!ingredientFound){
      this.ingredients.push(newIngredient);
    }
  }

}
