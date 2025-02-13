import { Component } from '@angular/core';
import { ToBackComponent } from "./to-back/to-back.component";
import { HomeStartComponent } from "./start/start.component";
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HomeStartComponent, OurServicesComponent, ContactComponent, ToBackComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styles: '',
  standalone: true
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  scrollToElement(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
