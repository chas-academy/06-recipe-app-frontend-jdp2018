import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { MatButtonModule, MatToolbarModule } from "@angular/material";

import { CategoriesComponent } from "./categories/categories.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CategoriesFilterPipe } from "./categories/categories-filter.pipe";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/signup.component";
import { SavedRecipesComponent } from "./saved-recipes/saved-recipes.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    routingComponents,
    RecipeDetailComponent,
    CategoriesFilterPipe,
    LoginComponent,
    SignUpComponent,
    SavedRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
