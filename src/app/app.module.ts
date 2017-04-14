import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import {AppComponent} from './app.component';
import {AuthCallbackComponent} from './auth-callback/auth-callback.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ApiService} from "./api.service";
import {DesktopsComponent} from './desktops/desktops.component';
import { DesktopsCreateComponent } from './desktops-create/desktops-create.component';
import {UiService} from "./ui.service";
import { DesktopsViewComponent } from './desktops-view/desktops-view.component';
import { DesktopsEditComponent } from './desktops-edit/desktops-edit.component';
import { DesktopsStatsComponent } from './desktops-stats/desktops-stats.component';
import { DesktopsDestroyModalComponent } from './desktops-destroy-modal/desktops-destroy-modal.component';
import { DesktopsTerminalComponent } from './desktops-terminal/desktops-terminal.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/desktops', pathMatch: 'full'},
  {path: 'desktops', component: DesktopsComponent},
  {path: 'desktops/create', component: DesktopsCreateComponent},
  {path: 'desktops/stats/:id', component: DesktopsStatsComponent},
  {path: 'desktops/view/:id', component: DesktopsViewComponent},
  {path: 'desktops/:id/terminal', component: DesktopsTerminalComponent},
  {path: 'auth_callback_github', component: AuthCallbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    HomepageComponent,
    DesktopsComponent,
    DesktopsCreateComponent,
    DesktopsViewComponent,
    DesktopsEditComponent,
    DesktopsStatsComponent,
    DesktopsDestroyModalComponent,
    DesktopsTerminalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    ApiService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
