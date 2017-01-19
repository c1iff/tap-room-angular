import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class KegService {
  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('/kegs.json').map(
      (res) => res.json()
    );
  }
}
