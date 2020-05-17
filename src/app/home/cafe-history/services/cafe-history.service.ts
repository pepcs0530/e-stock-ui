import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeHistoryService {

  constructor() { }

  private cafeHistoryBean = new BehaviorSubject(null);

  getCafeHistoryBean() {
    return this.cafeHistoryBean.value;
  }

  setCafeHistoryBean(payload: any) {
      this.cafeHistoryBean.next(payload);
  }
}
