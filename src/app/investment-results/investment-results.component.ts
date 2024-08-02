import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // similar like constructor but we use inject like signal
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
