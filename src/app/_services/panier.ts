import { Injectable } from '@angular/core';
import { Produit } from '../_interfaces/produit.interface';
import { PanierItem } from '../_interfaces/panier.interface';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private items: PanierItem[] = [];
  private readonly STORAGE_KEY = 'seabuck_panier';

  constructor() {
    this.loadPanierFromStorage();
  }

  // Ajouter un produit au panier
  ajouterProduit(produit: Produit, quantite: number = 1): void {
    const existingItem = this.items.find(item => item.produit.id_prod === produit.id_prod);

    if (existingItem) {
      existingItem.quantite += quantite;
    } else {
      this.items.push({ produit, quantite });
    }

    this.savePanierToStorage();
  }

  // Retirer un produit du panier
  retirerProduit(produitId: number): void {
    this.items = this.items.filter(item => item.produit.id_prod !== produitId);
    this.savePanierToStorage();
  }

  // Modifier la quantité
  modifierQuantite(produitId: number, quantite: number): void {
    const item = this.items.find(item => item.produit.id_prod === produitId);
    if (item) {
      if (quantite <= 0) {
        this.retirerProduit(produitId);
      } else {
        item.quantite = quantite;
        this.savePanierToStorage();
      }
    }
  }

  // Obtenir tous les items
  getItems(): PanierItem[] {
    return this.items;
  }

  // Obtenir le nombre total d'items
  getNombreItems(): number {
    return this.items.reduce((total, item) => total + item.quantite, 0);
  }

  // Calculer le total
  getTotal(): number {
    return this.items.reduce((total, item) => {
      const prix = item.produit.prix || 0;
      return total + (prix * item.quantite);
    }, 0);
  }

  // Vider le panier
  viderPanier(): void {
    this.items = [];
    this.savePanierToStorage();
  }

  // Sauvegarder dans localStorage
  private savePanierToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
  }

  // Charger depuis localStorage
  private loadPanierFromStorage(): void {
    const panierJson = localStorage.getItem(this.STORAGE_KEY);
    if (panierJson) {
      this.items = JSON.parse(panierJson);
    }
  }
}