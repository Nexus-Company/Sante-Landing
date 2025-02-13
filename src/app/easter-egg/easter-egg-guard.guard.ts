import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EasterEggGuardGuard implements CanActivate {

  private secretCodeEntered = false;  // Flag para controlar se o código foi ativado

  constructor(private router: Router) {}

  // Método para verificar se o usuário pode acessar a página
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.secretCodeEntered) {
      return true; // Permite o acesso à página secreta
    } else {
      this.router.navigate(['/home']); // Redireciona para a home, caso o código não tenha sido ativado
      return false;
    }
  }

  // Método para ativar o código secreto
  activateSecretCode() {
    this.secretCodeEntered = true;
  }
}
