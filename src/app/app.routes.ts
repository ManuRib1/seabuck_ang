import { Routes } from '@angular/router';
import { AccueilComponent } from './_pages/accueil/accueil';
import { CategoriesComponent } from './_pages/categories/categories';
import { CategorieDetailComponent } from './_pages/categorie-detail/categorie-detail';
import { ProduitDetailComponent } from './_pages/produit-detail/produit-detail';
import { LoginComponent } from './_pages/login/login';
import { RegisterComponent } from './_pages/register/register';
import { PanierComponent } from './_pages/panier/panier';


export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categorie/:id', component: CategorieDetailComponent },
  { path: 'produit/:id', component: ProduitDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'panier', component: PanierComponent },
  { path: '**', redirectTo: '/accueil' }
];