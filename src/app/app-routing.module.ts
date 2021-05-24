import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFormComponent } from './app-form/app-form.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { TestStepperComponent } from './test-stepper/test-stepper.component';

const routes: Routes = [
  { path: 'new-account', component: NewAccountComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'home-page', component: AppComponent },
  { path: 'app-form', component: AppFormComponent },
  { path: 'stepper-form', component: TestStepperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
