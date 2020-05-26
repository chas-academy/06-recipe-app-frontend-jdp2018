import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { CategoriesComponent } from "./categories/categories.component";
import { VegetarianComponent } from "./vegetarian/vegetarian.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CategoriesFilterPipe } from "./categories/categories-filter.pipe";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/signup.component";
import { RequestResetComponent } from "./password/request-reset/request-reset.component";
import { ResponseResetComponent } from "./password/response-reset/response-reset.component";
import { ProfileComponent } from "./profile/profile.component";
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    routingComponents,
    VegetarianComponent,
    RecipeDetailComponent,
    CategoriesFilterPipe,
    LoginComponent,
    SignUpComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent,
    SavedRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SnotifyModule,
  ],
  providers: [
    { provide: "SnotifyToastConfig", useValue: ToastDefaults },
    SnotifyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
