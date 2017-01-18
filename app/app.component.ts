import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container text-center">
    <h1>Whats on Tap?</h1>
    <keg-list [kegs]="kegs" (clickSender)="editKeg($event)" (pourBeerEmitter)="pourBeer($event)"></keg-list>
    <button class="btn btn-primary" (click)="addKegHasBeenClicked()">Add a New Keg</button>
    <edit-keg-form [selectedKeg]="selectedKeg" (doneClickedSender)="finishedEditing()"></edit-keg-form>
    <new-keg-form [showNewKeg]="showNewKeg" (emittNewKeg)="addKeg($event)"></new-keg-form>
  </div>

  `
})

export class AppComponent {

  selectedKeg = null;
  showNewKeg: boolean = false;

  kegs: Keg[] = [
    new Keg("IPA", "Breakside", 5, 6.7),
    new Keg("Hefeweizen", "Widmere", 4, 5.1),
    new Keg("Pale Ale", "Hopworks", 5, 6.2)
  ]

  editKeg(selectedKeg) {
    this.selectedKeg = selectedKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  addKegHasBeenClicked() {
    this.showNewKeg = true;
  }

  addKeg(kegToAdd: Keg) {
    this.kegs.push(kegToAdd);
  }

  pourBeer(kegToPour: Keg) {
    kegToPour.pintsLeft -= 1;
  }
}
