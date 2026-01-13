import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PanierService } from '../../_services/panier';
import { DataService } from '../../_services/data';
import { PanierItem } from '../../_interfaces/panier.interface';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class PanierComponent implements OnInit {
  items: PanierItem[] = [];
  showSuccessMessage: boolean = false;

  constructor(
    public panierService: PanierService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.items = this.panierService.getItems();
  }

  getImageUrl(item: PanierItem): string {
    return this.dataService.getImageUrl(item.produit.img_prod);
  }

  modifierQuantite(produitId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const quantite = parseInt(input.value);
    if (!isNaN(quantite) && quantite >= 0) {
      this.panierService.modifierQuantite(produitId, quantite);
      this.items = this.panierService.getItems();
    }
  }

  retirerProduit(produitId: number): void {
    if (confirm('Voulez-vous vraiment retirer ce produit du panier ?')) {
      this.panierService.retirerProduit(produitId);
      this.items = this.panierService.getItems();
    }
  }

  validerCommande(): void {
    if (this.items.length === 0) {
      alert('Votre panier est vide !');
      return;
    }

    this.showSuccessMessage = true;
    
    // Vider le panier après 2 secondes
    setTimeout(() => {
      this.panierService.viderPanier();
      this.items = [];
      
      // Masquer le message après 3 secondes supplémentaires
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }, 2000);
  }

  viderPanier(): void {
    if (confirm('Voulez-vous vraiment vider le panier ?')) {
      this.panierService.viderPanier();
      this.items = [];
    }
  }
}