import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PricingComponent} from "./modules/pricing/pricing.component";

const routes: Routes = [
  { path: '', redirectTo: '/pricing', pathMatch: 'full' },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
