import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li *ngFor = "let currentKeg of kegs">Name: {{currentKeg.name}} / Brand: {{currentKeg.brand}} / Price: {{currentKeg.price}} / ABV: {{currentKeg.alcoholContent}}<button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button><br><br></li>
    </ul>
  `
})

export class KegListComponent{
  @Input() kegs;
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    console.log(kegToEdit);
    this.clickSender.emit(kegToEdit);
  }

}
