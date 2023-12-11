import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';

  // Credenciales predefinidas
  credentials = {
    username: 'admin',
    password: '1234'
  };

  constructor(private router: Router) { }

  login() {
    console.log('Login button clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Verificar las credenciales
    if (this.username === this.credentials.username && this.password === this.credentials.password) {
      console.log('Inicio de sesión exitoso');
      // Establecer isLoggedIn en true y redirigir a la página de inicio (AppComponent)
      this.router.navigate(['/tarifario-multas']);
    } else {
      console.log('Credenciales incorrectas');
      
    }
  }

  forgotPassword() {
    console.log('Olvido su password?');
  }

  register() {
    console.log('Click para registrarte');
  }
}
