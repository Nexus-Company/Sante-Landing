import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {
  rolarParaOurServices() {
    document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' });
  }
}
