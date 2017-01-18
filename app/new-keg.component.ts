import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg-form',
  template: `
  <div>
      <div *ngIf="showNewKeg">
        <hr>
        <h3>Add a New Keg</h3>
        <div class="form-group">
          <label>Enter Keg Name:</label>
          <input #kegName class="form-control">
        </div>
        <div class="form-group">
          <label>Enter Keg Brand</label><br>
          <input #kegBrand class="form-control">
        </div>
        <div class="form-group">
          <label>Enter Keg Cost</label><br>
          <input #kegCost class="form-control">
        </div>
        <div class="form-group">
          <label>Enter Keg ABV</label><br>
          <input #kegABV class="form-control">
        </div>
        <button class="btn btn-primary" (click)="submitForm(kegName.value, kegBrand.value, kegCost.value, kegABV.value)">Add</button>
      </div>
    </div>

  `
})

export class NewKegComponent{
  @Input() showNewKeg;
  @Output() emittNewKeg = new EventEmitter()

  submitForm(name: string, brand: string, price: number,
 alcoholContent: number) {
   var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
   this.emittNewKeg.emit(newKegToAdd);
 }



}
