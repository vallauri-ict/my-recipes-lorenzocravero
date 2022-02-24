import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService: RecipeService, private activatedroute : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }

  onNewRecipe() : void{
    this.router.navigate(['new'],{relativeTo : this.activatedroute});
  }

}
