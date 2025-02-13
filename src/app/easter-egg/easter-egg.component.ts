import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easter-egg',
  imports: [],
  templateUrl: './easter-egg.component.html',
  styleUrl: './easter-egg.component.scss'
})
export class EasterEggComponent implements OnInit {
  ngOnInit(): void {
    this.playEasterEggSound();
  }

  playEasterEggSound() {
    const audio = new Audio();
    audio.src = 'assets/sounds/easter-egg.mp3';
    audio.load();
    audio.play()
      .catch(error => console.log('Erro ao reproduzir som:', error));
  }
}
