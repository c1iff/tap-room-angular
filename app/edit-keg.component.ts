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
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="selectedKeg.name">
        <label>Enter Keg Brand</label><br>
        <input [(ngModel)]="selectedKeg.brand">
        <br>
        <input [(ngModel)]="selectedKeg.price">
        <br>
        <input [(ngModel)]="selectedKeg.alcoholContent">
        <br>
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
