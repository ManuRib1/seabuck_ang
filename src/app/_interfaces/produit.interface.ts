export interface Produit {
  id_prod: number;
  nom_prod: string;
  slug_prod: string;
  img_prod: number; // ID de l'image
  id_cat_prod: number;
  couleur_prod: string;
  prix?: number; // Optionnel si vous voulez ajouter des prix plus tard
  ingredients?: number[]; // IDs des ingrédients (optionnel)
  alimentations?: number[]; // IDs des alimentations (optionnel)
}