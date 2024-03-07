import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent {
  // Variables needed to construct the offers
  @Input() img: string = '';
  @Input() destination: string = '';
  @Input() price: string = '';

  background: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    this.background = `url('${this.img}')` // url is constructed for the background
  }
}
