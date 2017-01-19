import { Component } from '@angular/core';
// import { Keg } from './keg.model';
import { KegService } from './get-data.service';
declare var firebase: any;



@Component({
  selector: 'app-root',
  template: `
  <div class="container text-center">
    <h1>Whats on Tap?</h1>
    <keg-list [kegs]="kegs" (clickSender)="editKegClicked($event)" (pourBeerEmitter)="pourBeer($event)"></keg-list>
    <button class="btn btn-primary" (click)="addKegHasBeenClicked()">Add a New Keg</button>
    <edit-keg-form [selectedKeg]="selectedKeg" (emittEditKeg)="editKeg($event)"></edit-keg-form>
    <new-keg-form [showNewKeg]="showNewKeg" (emittNewKeg)="addKeg($event)"></new-keg-form>
  </div>

  `
})

export class AppComponent {

  selectedKeg = null;
  showNewKeg: boolean = false;

  kegs = []

  editKeg(kegToEdit) {
     firebase.database().ref('/' + kegToEdit.id).set(kegToEdit)
     this.selectedKeg = null;
     this.kegs = []
     this.fbGetData()
  }

  editKegClicked(selectedKeg) {
    this.selectedKeg = selectedKeg;
  }


  finishedEditing(){
    this.selectedKeg = null;
  }

  addKegHasBeenClicked() {
    this.showNewKeg = true;
  }

  addKeg(kegToAdd) {
    firebase.database().ref('/').push({name: kegToAdd[0], brand: kegToAdd[1], price: kegToAdd[2], alcoholContent: kegToAdd[3], pintsLeft: 124})

  }

  pourBeer(kegToPour) {
    kegToPour.pintsLeft -= 1;
    this.editKeg(kegToPour);
  }


constructor(private kegData: KegService) { }

  ngOnInit(){
    // this.kegData.fetchData().subscribe(
    //   (data) => this.kegs = data
    //
    // );
    this.fbGetData()
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      var data =snapshot.val()
      data.id = snapshot.key

      this.kegs.push(data)


    })
  }
}
