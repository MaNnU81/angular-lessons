import { Component, effect, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterServ = inject(CounterService);

  contatore = 0;
  doppioContatore = 0;

constructor(){

  effect(() => {
    this.contatore = this. counterServ.counter();
    this.doppioContatore = this.counterServ.doubleCounter();

  })
 
}


}
