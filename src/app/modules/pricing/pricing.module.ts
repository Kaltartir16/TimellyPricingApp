import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class PricingModule { }
