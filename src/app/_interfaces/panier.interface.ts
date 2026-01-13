import { Produit } from './produit.interface';

export interface PanierItem {
  produit: Produit;
  quantite: number;
}