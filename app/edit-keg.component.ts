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
          <input [(ngModel)]="selectedKeg.name" class="form-control">
        </div>
        <div class="form-group">
          <label>Enter Keg Brand</label><br>
          <input [(ngModel)]="selectedKeg.brand" class="form-control">
        </div>
        <div class="form-group">
          <label>Enter the Price per Pint</label>
          <input [(ngModel)]="selectedKeg.price" class="form-control">
        </div>
        <div class="form-group">
          <label>Enter the ABV</label>
          <input [(ngModel)]="selectedKeg.alcoholContent" class="form-control">
        </div>
        <button class="btn btn-primary" (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent{
 @Input() selectedKeg: Keg;
 @Output() doneClickedSender = new EventEmitter();

 doneButtonClicked(){
   this.doneClickedSender.emit();
 }
}
