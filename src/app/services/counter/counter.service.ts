import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // // console.log('il nuovo contatore vale: ', this.counter(),  'e il doppio è: ', this.doubleCounter());
  // // this.counter.update(oldvalue => oldvalue+1);
  // // console.log('è ovvio che ora il contatore vale: ', this.counter(),  'e il doppio è: ', this.doubleCounter());
  // this.ciao.update(str => str + ' world!');
  minusOne() {
    throw new Error('Method not implemented.');
  }

  ciao = signal('hello')
counter = signal(0);
doubleCounter = computed(() => this.counter()*2)


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

   addOne(){
    this.counter.update(oldValue => oldValue + 1);
   }

   removeOne(){
    this.counter.update(oldValue => oldValue - 1);
   }
}
