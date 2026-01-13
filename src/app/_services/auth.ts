import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, LoginCredentials, RegisterData } from '../_interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private readonly STORAGE_KEY = 'seabuck_user';

  // Utilisateurs fictifs pour la démo
  private users: (User & { password: string })[] = [
    {
      id: 1,
      email: 'admin@seabuck.com',
      password: 'admin123',
      nom: 'Admin',
      prenom: 'Seabuck',
      role: 'admin'
    },
    {
      id: 2,
      email: 'user@example.com',
      password: 'user123',
      nom: 'Dupont',
      prenom: 'Jean',
      role: 'user'
    }
  ];

  constructor(private router: Router) {
    // Vérifier si un utilisateur est déjà connecté
    this.loadUserFromStorage();
  }

  // Connexion
  login(credentials: LoginCredentials): boolean {
    const user = this.users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      const { password, ...userWithoutPassword } = user;
      this.currentUser = userWithoutPassword;
      this.saveUserToStorage(userWithoutPassword);
      return true;
    }
    return false;
  }

  // Inscription
  register(data: RegisterData): boolean {
    // Vérifier si l'email existe déjà
    const existingUser = this.users.find(u => u.email === data.email);
    if (existingUser) {
      return false;
    }

    // Créer le nouvel utilisateur
    const newUser = {
      id: this.users.length + 1,
      email: data.email,
      password: data.password,
      nom: data.nom,
      prenom: data.prenom,
      role: 'user' as const
    };

    this.users.push(newUser);

    // Connecter automatiquement
    const { password, ...userWithoutPassword } = newUser;
    this.currentUser = userWithoutPassword;
    this.saveUserToStorage(userWithoutPassword);
    return true;
  }

  // Déconnexion
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.STORAGE_KEY);
    this.router.navigate(['/accueil']);
  }

  // Vérifier si connecté
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  // Récupérer l'utilisateur actuel
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Sauvegarder dans localStorage
  private saveUserToStorage(user: User): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  // Charger depuis localStorage
  private loadUserFromStorage(): void {
    const userJson = localStorage.getItem(this.STORAGE_KEY);
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
    }
  }
}