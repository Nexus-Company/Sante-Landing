import { Component } from '@angular/core';

@Component({
  selector: 'app-home-to-back',
  templateUrl: './to-back.component.html',
  styleUrl: './to-back.component.scss',
  imports: []
})
export class ToBackComponent {
  
  rolarParaContato() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
