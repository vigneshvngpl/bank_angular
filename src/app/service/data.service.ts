import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

sdata="service data"

checkData(){
  return "hello hi"
}

}
