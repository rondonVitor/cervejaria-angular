import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { PublicModule } from "./public/public.module";
import { AuthenticatedModule } from "./authenticated/authenticated.module";
import { AuthService } from "./services/auth-service.service";
import { AuthGuard } from "./services/auth-guard.service";
import { IState } from "../store/state";
import { store } from "../store/store";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, PublicModule, AuthenticatedModule, NgbModule, NgReduxModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IState>) {
    ngRedux.provideStore(store);
  }
}
