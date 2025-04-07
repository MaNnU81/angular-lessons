import { computed, effect, Injectable, signal } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  interval:number = -1;

  // // console.log('il nuovo contatore vale: ', this.counter(),  'e il doppio è: ', this.doubleCounter());
  // // this.counter.update(oldvalue => oldvalue+1);
  // // console.log('è ovvio che ora il contatore vale: ', this.counter(),  'e il doppio è: ', this.doubleCounter());
  // this.ciao.update(str => str + ' world!');


  ciao = signal('hello')
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2)


  constructor() {
    effect(() => {
      console.log('il contatore vale: ', this.counter(), 'e il doppio è: ', this.doubleCounter());
      console.log(this.ciao());

    })

    // this.counter.set(8)
    // // console.log('il nuovo contatore vale: ', this.counter(),  'e il doppio è: ', this.doubleCounter());
    // // this.counter.update(oldvalue => oldvalue+1);
    // // console.log('è ovvio che ora il contatore vale: ', this.counter(),  'e il doppio è: ', this.doubleCounter());
    // this.ciao.update(str => str + ' world!');
  }

  addOne() {
    this.counter.update(oldValue => oldValue + 1);
  }

  removeOne() {
    this.counter.update(oldValue => oldValue - 1);
  }

 
  startInterval() {

    if (this.interval === -1) {
      this.interval = window.setInterval(() => {
        this.counter.update(oldValue => oldValue + 1);
      }, 1000);;
    }
    
  }
  stopInterval() {
    window.clearInterval(this.interval);
    this.interval = -1;
  }
}
