import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
   name: "pricefilter",
   pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], beerPrice) {
    var output: Keg[] = [];
    if(beerPrice === "cheapBeers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (beerPrice === "expensiveBeers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price >= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
