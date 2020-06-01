import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";
import { TokenService } from "../token.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null,
  };

  constructor(
    private logInApi: DataService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) {}
  public error = null;

  handleError(error) {
    this.error = error.error.error;
  }

  onSubmit() {
    this.logInApi.login(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl("/saved-recipes");
  }

  ngOnInit() {}
}
