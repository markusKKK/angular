import { Component } from '@angular/core';
import { CreditcardsService } from '../../services/creditcards.service';
import { CreditCard } from '../../models/credit-card';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  creditCardDetails!: CreditCard;

  constructor(private creditCardsService: CreditcardsService) {
    this.creditCardsService.getCreditCardById(3).subscribe((data: CreditCard) => {
      this.creditCardDetails = data;
    })
  }
}