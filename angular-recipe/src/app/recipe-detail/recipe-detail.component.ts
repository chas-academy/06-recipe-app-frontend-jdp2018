import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { TokenService } from "../token.service";
import { AuthService } from "../../app/auth.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  public meal: meal;
  public loggedIn: boolean;
  input = {
    idMeal: null,
  };
  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private token: TokenService,
    private Auth: AuthService
  ) {}

  ngOnInit() {
    this.getRecipe();
  }
  onSaveRecipes(idMeal: number) {
    this.service
      .saveRecipe({ token: this.token.get(), idMeal })
      .subscribe((data) => this.handleResponse());
  }
  handleResponse() {
    this.input.idMeal = null;
  }

  getRecipe(): void {
    this.Auth.authStatus.subscribe((value) => (this.loggedIn = value));
    const recipeId = this.route.snapshot.paramMap.get("id");
    this.service
      .getRecipe(recipeId)
      .subscribe((response: any) => (this.meal = response.meals[0]));
  }
}
