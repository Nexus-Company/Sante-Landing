import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { EasterEggGuardGuard } from './easter-egg/easter-egg-guard.guard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sante-landing';
  private konamiCode: string[] = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  private userInput: string[] = [];

  constructor(private router: Router, private easterEggGuard: EasterEggGuardGuard){

  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.userInput.push(event.key);
    
    if (this.userInput.length > this.konamiCode.length) {
      this.userInput.shift();
    }

    if (this.userInput.join('') === this.konamiCode.join('')) {
      this.easterEggGuard.activateSecretCode();
      this.router.navigate(['/easter-egg']);
    }
  }
}
