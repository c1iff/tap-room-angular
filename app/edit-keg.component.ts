import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-form',
  template: `
  <div>
      <div *ngIf="selectedKeg">
        <h3>{{selectedKeg.name}} {{selectedKeg.brand}}</h3>
        <hr>
        <h3>Edit Keg Info</h3>
        <div class="form-group">
          <label>Enter Keg Name:</label>
          <input #kegName value={{selectedKeg.name}} class="form-control">
        </div>
        <div class="form-group">
          <label>Enter Keg Brand</label><br>
          <input #kegBrand value="{{selectedKeg.brand}}" class="form-control">
        </div>
        <div class="form-group">
          <label>Enter the Price per Pint</label>
          <input #kegCost value="{{selectedKeg.price}}" class="form-control">
        </div>
        <div class="form-group">
          <label>Enter the ABV</label>
          <input #kegABV value={{selectedKeg.alcoholContent}} class="form-control">
        </div>
        <button class="btn btn-primary" (click)="submitForm(kegName.value, kegBrand.value, kegCost.value, kegABV.value)">Add</button>
      </div>
    </div>
  `
})

export class EditKegComponent{
 @Input() selectedKeg;
 @Output() emittEditKeg = new EventEmitter();

 submitForm(kegName: string, kegBrand: string, kegPrice: number,
 kegAlcoholContent: number)
 {
  var editKegToAdd =  {name: kegName, brand: kegBrand, price: kegPrice, alcoholContent: kegAlcoholContent, id: this.selectedKeg.id, pintsLeft: this.selectedKeg.pintsLeft};
  this.emittEditKeg.emit(editKegToAdd);

}


}
