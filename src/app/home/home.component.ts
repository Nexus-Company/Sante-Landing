import { Component } from '@angular/core';
import { ToBackComponent } from "./to-back/to-back.component";
import { HomeStartComponent } from "./start/start.component";
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HomeStartComponent, OurServicesComponent, ContactComponent, ToBackComponent],
  templateUrl: './home.component.html',
  styles: '',
  standalone: true
})
export class HomeComponent {

}
