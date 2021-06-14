import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFormComponent } from './app-form/app-form.component';
import { AppComponent } from './app.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { TestStepperComponent } from './test-stepper/test-stepper.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // A1
  { path: 'create-account-page', component: CreateAccountPageComponent }, // A2
  { path: 'login-page', component: LoginPageComponent }, // A3
  { path: 'overview', component: OverviewComponent }, // A4
  { path: 'home-page', component: AppComponent },
  { path: 'app-form', component: AppFormComponent },
  { path: 'stepper-form', component: TestStepperComponent },
  { path: 'policy', component: PolicyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
