import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ControlComponent } from './components/control/control.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, ControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lessons';
  
}

