import { Component } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  openWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=556198221095&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%C2%A0da%C2%A0Sant%C3%A8.', '_blank');
  }  
}