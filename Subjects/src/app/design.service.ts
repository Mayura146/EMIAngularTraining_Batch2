import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
empName=new BehaviorSubject('Mayura');
videoEmit=new ReplaySubject<string>(3,5000);
exclusive=new Subject<boolean>();
  constructor() { }
}
