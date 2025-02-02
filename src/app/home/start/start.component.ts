import { Component } from '@angular/core';

@Component({
  selector: 'app-home-start',
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class HomeStartComponent {

  rolarParaContato() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
