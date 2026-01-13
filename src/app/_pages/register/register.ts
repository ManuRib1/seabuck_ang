import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../_services/auth';
import { RegisterData } from '../../_interfaces/user.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerData: RegisterData = {
    email: '',
    password: '',
    nom: '',
    prenom: ''
  };
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.errorMessage = '';

    // Validations
    if (!this.registerData.email || !this.registerData.password || 
        !this.registerData.nom || !this.registerData.prenom) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    if (this.registerData.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    if (this.registerData.password.length < 6) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
      return;
    }

    const success = this.authService.register(this.registerData);

    if (success) {
      this.router.navigate(['/accueil']);
    } else {
      this.errorMessage = 'Cet email est déjà utilisé';
    }
  }
}