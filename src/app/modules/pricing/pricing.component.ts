import {Component} from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  isMonthly: boolean = true;

  plans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Basic Experience',
        '5 Spaces',
        '10 Pop Ups',
        '1 Chat Room',
        '2 Webinars'
      ]
    },
    {
      name: 'Standard',
      monthlyPrice: 599,
      annualPrice: 599 * 12 * 0.8, // 20% discount
      features: [
        'Professional Experience',
        '10 Spaces',
        '20 Pop Ups',
        '5 Chat Rooms',
        '10 Webinars'
      ]
    },
    {
      name: 'Premium',
      monthlyPrice: 799,
      annualPrice: 799 * 12 * 0.8, // 20% discount
      features: [
        'Advanced Experience',
        '25 Spaces',
        '50 Pop Ups',
        '15 Chat Rooms',
        '30 Webinars'
      ]
    }
  ];

  togglePricing() {
    this.isMonthly = !this.isMonthly;
  }

  getPrice(plan: any): number {
    return this.isMonthly ? plan.monthlyPrice : plan.annualPrice;
  }
}
