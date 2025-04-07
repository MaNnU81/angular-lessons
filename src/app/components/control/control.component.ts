import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {
  counterServ = inject(CounterService);
  
  plusClicked(){
this.counterServ.addOne();
  }

  minusClicked(){
    this.counterServ.removeOne();
  }
}
