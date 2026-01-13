export interface User {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role?: 'user' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  nom: string;
  prenom: string;
}