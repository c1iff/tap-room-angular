import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select class="form-control" (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="cheapBeers">Budget Beer</option>
      <option value="expensiveBeers">Expensive Beer</option>
    </select>
    <br>
    <ul>
      <li *ngFor = "let currentKeg of kegs | pricefilter:filterByPrice">Name: {{currentKeg.name}} / Brand: {{currentKeg.brand}} / Price: {{currentKeg.price}} / ABV: {{currentKeg.alcoholContent}}
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button><br>
      <h3>{{currentKeg.pintsLeft}} Pints Remaining</h3>
      <button class="btn btn-info" (click)="pourPint(currentKeg)">Pour Me One!</button>
      <br>
      <img class="pint-level" [src]='kegLevel(currentKeg)'><hr></li>
    </ul>
  `
})

export class KegListComponent{
  @Input() kegs;
  @Output() clickSender = new EventEmitter();
  @Output() pourBeerEmitter = new EventEmitter();

  filterByPrice: string = "allKegs";

  onChange(optionFromMenu) {
  this.filterByPrice = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pourPint(kegToPour: Keg) {
    this.pourBeerEmitter.emit(kegToPour)
  }

  kegLevel(currentKeg: Keg){
    if(currentKeg.pintsLeft > 93){
      return '../../resources/img/green-circle.png'
    }
    else if(currentKeg.pintsLeft <= 93 && currentKeg.pintsLeft >= 62){
      return '../../resources/img/yellow-circle.png'
    }
    else if(currentKeg.pintsLeft <= 61 && currentKeg.pintsLeft >= 31){
      return '../../resources/img/orange-circle.png'
    }
    else{
      return '../../resources/img/red-circle.png'
    }
  }

}
