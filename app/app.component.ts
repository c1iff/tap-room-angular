import { Component } from '@angular/core';
// import { Keg } from './keg.model';
import { KegService } from './get-data.service';



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

  kegs = []

  editKeg(selectedKeg) {
    this.selectedKeg = selectedKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  addKegHasBeenClicked() {
    this.showNewKeg = true;
  }

  addKeg(kegToAdd) {
    this.kegs.push(kegToAdd);
  }

  pourBeer(kegToPour) {
    kegToPour.pintsLeft -= 1;
  }


constructor(private kegData: KegService) { }

  ngOnInit(){
    this.kegData.fetchData().subscribe(
      (data) => this.kegs = data
      
    );
  }
}
