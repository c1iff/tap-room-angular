import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent} from './keg-list.component';
import { NewKegComponent} from './new-keg.component';
import { EditKegComponent} from './edit-keg.component';
import { PricePipe } from './price.pipe';
import { KegService } from './get-data.service';
import { HttpModule }    from '@angular/http';
import 'rxjs/add/operator/map'




@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule],

  declarations: [ AppComponent, KegListComponent, NewKegComponent, EditKegComponent, PricePipe],
  providers: [ KegService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
