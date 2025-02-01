import { Component } from '@angular/core';
import { ToBackComponent } from "./to-back/to-back.component";
import { HomeStartComponent } from "./start/start.component";

@Component({
  selector: 'app-home',
  imports: [ToBackComponent, HomeStartComponent],
  templateUrl: './home.component.html',
  standalone: true
})
export class HomeComponent {

}
