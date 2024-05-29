import { Component } from '@angular/core';
import { CreditcardsService } from '../../services/creditcards.service';
import { CreditCard } from '../../models/credit-card';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  constructor(private creditCardsService: CreditcardsService,
    private router: ActivatedRoute) {

    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    this.creditCardsService.getCreditCardById(this.creditCardId).subscribe((data: CreditCard) => {
      this.creditCardDetails = data;
    })
  }
}