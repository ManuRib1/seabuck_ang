import { Injectable } from '@angular/core';
import { Produit } from '../_interfaces/produit.interface';
import { Categorie } from '../_interfaces/categorie.interface';
import { Image } from '../_interfaces/image.interface';
import { Ingredient } from '../_interfaces/ingredient.interface';
import { Alimentation } from '../_interfaces/alimentation.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Données Alimentations
  private alimentations: Alimentation[] = [
    {
      id_ali: 1,
      nom_ali: "Végan",
      desc_ali: "Produits sans ingrédients d'origine animale",
      slug_ali: "vegan"
    },
    {
      id_ali: 2,
      nom_ali: "Sans gluten",
      desc_ali: "Produits sans gluten",
      slug_ali: "sans-gluten"
    },
    {
      id_ali: 3,
      nom_ali: "Bio",
      desc_ali: "Produits biologiques",
      slug_ali: "bio"
    }
  ];

  // Données Catégories
  private categories: Categorie[] = [
    {
      id_cat: 1,
      nom_cat: "Sundays",
      slug_cat: "sundays",
      desc_cat: "Nos délicieux sunday glacés",
      id_parent_cat: null,
      id_img_cat: 4
    },
    {
      id_cat: 2,
      nom_cat: "Sundays fruits",
      slug_cat: "sundays-fruits",
      desc_cat: "Sundays aux fruits frais",
      id_parent_cat: 1,
      id_img_cat: 13
    },
    {
      id_cat: 3,
      nom_cat: "Sundays gourmands",
      slug_cat: "sundays-gourmands",
      desc_cat: "Sundays gourmands et crémeux",
      id_parent_cat: 1,
      id_img_cat: 3
    },
    {
      id_cat: 4,
      nom_cat: "Cakes",
      slug_cat: "cakes",
      desc_cat: "Nos cakes glacés",
      id_parent_cat: null,
      id_img_cat: 15
    }
  ];

  // Données Images
  private images: Image[] = [
    { id_image: 1, nom_image: "acid-citrus", alt_image: "acid-citrus", url_image: "acid-citrus.png", slug_image: "acid-citrus" },
    { id_image: 2, nom_image: "blue-mint", alt_image: "blue-mint", url_image: "blue-mint.png", slug_image: "blue-mint" },
    { id_image: 3, nom_image: "cookie", alt_image: "cookie", url_image: "cookie.png", slug_image: "cookie" },
    { id_image: 4, nom_image: "dark-chocolate", alt_image: "dark-chocolate", url_image: "dark-chocolate.png", slug_image: "dark-chocolate" },
    { id_image: 5, nom_image: "dark-coffee", alt_image: "dark-coffee", url_image: "dark-coffee.png", slug_image: "dark-coffee" },
    { id_image: 6, nom_image: "fresh-lime", alt_image: "fresh-lime", url_image: "fresh-lime.png", slug_image: "fresh-lime" },
    { id_image: 7, nom_image: "green-mint", alt_image: "green-mint", url_image: "green-mint.png", slug_image: "green-mint" },
    { id_image: 8, nom_image: "lolipop", alt_image: "lolipop", url_image: "lolipop.png", slug_image: "lolipop" },
    { id_image: 9, nom_image: "orange-sugar", alt_image: "orange-sugar", url_image: "orange-sugar.png", slug_image: "orange-sugar" },
    { id_image: 10, nom_image: "purple-dream", alt_image: "purple-dream", url_image: "purple-dream.png", slug_image: "purple-dream" },
    { id_image: 11, nom_image: "sweat-vanilla", alt_image: "sweat-vanilla", url_image: "sweat-vanilla.png", slug_image: "sweat-vanilla" },
    { id_image: 12, nom_image: "sweet-caramel", alt_image: "sweet-caramel", url_image: "sweet-caramel.png", slug_image: "sweet-caramel" },
    { id_image: 13, nom_image: "sweet-strawberry", alt_image: "sweet-strawberry", url_image: "sweet-strawberry.png", slug_image: "sweet-strawberry" },
    { id_image: 14, nom_image: "white-chocolate", alt_image: "white-chocolate", url_image: "white-chocolate.png", slug_image: "white-chocolate" },
    { id_image: 15, nom_image: "Donut", alt_image: "Donut", url_image: "donut.png", slug_image: "donut" },
    { id_image: 16, nom_image: "Donut rasberry", alt_image: "Donut-rasberry", url_image: "donut-ras.png", slug_image: "donut-rasberry" },

  ];

  // Données Ingrédients
  private ingredients: Ingredient[] = [
    { id_ingre: 1, nom_ingre: "Myrtilles", slug_ingre: "myrtilles", allergies_ingre: true },
    { id_ingre: 2, nom_ingre: "Vanille", slug_ingre: "vanille", allergies_ingre: false },
    { id_ingre: 3, nom_ingre: "Crème", slug_ingre: "creme", allergies_ingre: true },
    { id_ingre: 4, nom_ingre: "Caramel", slug_ingre: "caramel", allergies_ingre: false },
    { id_ingre: 5, nom_ingre: "Fraises", slug_ingre: "fraises", allergies_ingre: false },
    { id_ingre: 6, nom_ingre: "Chocolat", slug_ingre: "chocolat", allergies_ingre: false },
    { id_ingre: 7, nom_ingre: "Chocolat blanc", slug_ingre: "chocolat-blanc", allergies_ingre: false },
    { id_ingre: 8, nom_ingre: "Menthe", slug_ingre: "menthe", allergies_ingre: true },
    { id_ingre: 9, nom_ingre: "Sirop de menthe", slug_ingre: "sirop-de-menthe", allergies_ingre: false },
    { id_ingre: 10, nom_ingre: "Crème de lait d'amande", slug_ingre: "creme-de-lait-amande", allergies_ingre: false },
    { id_ingre: 11, nom_ingre: "Citron", slug_ingre: "citron", allergies_ingre: true },
    { id_ingre: 12, nom_ingre: "Crème de citron", slug_ingre: "creme-de-citron", allergies_ingre: false },
    { id_ingre: 13, nom_ingre: "Menthe glaciale", slug_ingre: "menthe-glaciale", allergies_ingre: false },
    { id_ingre: 14, nom_ingre: "Cookie", slug_ingre: "cookie", allergies_ingre: true },
    { id_ingre: 15, nom_ingre: "Café", slug_ingre: "cafe", allergies_ingre: false },
    { id_ingre: 16, nom_ingre: "Citron vert", slug_ingre: "citron-vert", allergies_ingre: false },
    { id_ingre: 17, nom_ingre: "Sirop lolipop", slug_ingre: "sirop-lolipop", allergies_ingre: false },
    { id_ingre: 18, nom_ingre: "Sirop d'orange", slug_ingre: "sirop-orange", allergies_ingre: false },
    { id_ingre: 19, nom_ingre: "Sirop de myrtille", slug_ingre: "sirop-de-myrtille", allergies_ingre: false }
  ];

  // Données Produits
  private produits: Produit[] = [
    {
      id_prod: 1,
      nom_prod: "Purple dream vegan sunday",
      slug_prod: "purple-dream-vegan-sunday",
      img_prod: 10,
      id_cat_prod: 2,
      couleur_prod: "#5e4478",
      prix: 7.50,
      ingredients: [1, 19, 10], // Myrtilles, Sirop de myrtille, Crème de lait d'amande
      alimentations: [1] // Végan
    },
    {
      id_prod: 2,
      nom_prod: "Sweat vanilla sunday",
      slug_prod: "sweat-vanilla-sunday",
      img_prod: 11,
      id_cat_prod: 3,
      couleur_prod: "#E05002",
      prix: 6.90,
      ingredients: [2, 3], // Vanille, Crème
      alimentations: []
    },
    {
      id_prod: 3,
      nom_prod: "Green mint vegan sunday",
      slug_prod: "green-mint-vegan-sunday",
      img_prod: 7,
      id_cat_prod: 2,
      couleur_prod: "#007C10",
      prix: 7.20,
      ingredients: [8, 9, 10], // Menthe, Sirop de menthe, Crème de lait d'amande
      alimentations: [1] // Végan
    },
    {
      id_prod: 4,
      nom_prod: "Acid citrus sunday",
      slug_prod: "acid-citrus-sunday",
      img_prod: 1,
      id_cat_prod: 2,
      couleur_prod: "#FFC107",
      prix: 6.80,
      ingredients: [11, 12], // Citron, Crème de citron
      alimentations: []
    },
    {
      id_prod: 5,
      nom_prod: "Blue mint sunday",
      slug_prod: "blue-mint-sunday",
      img_prod: 2,
      id_cat_prod: 2,
      couleur_prod: "#2196F3",
      prix: 7.00,
      ingredients: [13, 3], // Menthe glaciale, Crème
      alimentations: []
    },
    {
      id_prod: 6,
      nom_prod: "Cookie crunch sunday",
      slug_prod: "cookie-crunch-sunday",
      img_prod: 3,
      id_cat_prod: 3,
      couleur_prod: "#8D6E63",
      prix: 7.50,
      ingredients: [14, 3, 2], // Cookie, Crème, Vanille
      alimentations: []
    },
    {
      id_prod: 7,
      nom_prod: "Dark chocolate sunday",
      slug_prod: "dark-chocolate-sunday",
      img_prod: 4,
      id_cat_prod: 3,
      couleur_prod: "#3E2723",
      prix: 7.20,
      ingredients: [6, 3], // Chocolat, Crème
      alimentations: []
    },
    {
      id_prod: 8,
      nom_prod: "Dark coffee sunday",
      slug_prod: "dark-coffee-sunday",
      img_prod: 5,
      id_cat_prod: 3,
      couleur_prod: "#5D4037",
      prix: 7.30,
      ingredients: [15, 3], // Café, Crème
      alimentations: []
    },
    {
      id_prod: 9,
      nom_prod: "Fresh lime vegan sunday",
      slug_prod: "fresh-lime-vegan-sunday",
      img_prod: 6,
      id_cat_prod: 2,
      couleur_prod: "#00BFA5",
      prix: 7.20,
      ingredients: [16, 10], // Citron vert, Crème de lait d'amande
      alimentations: [1] // Végan
    },
    {
      id_prod: 10,
      nom_prod: "Lolipop sunday",
      slug_prod: "lolipop-sunday",
      img_prod: 8,
      id_cat_prod: 3,
      couleur_prod: "#E91E63",
      prix: 6.90,
      ingredients: [17, 3], // Sirop lolipop, Crème
      alimentations: []
    },
    {
      id_prod: 11,
      nom_prod: "Orange sugar sunday",
      slug_prod: "orange-sugar-sunday",
      img_prod: 9,
      id_cat_prod: 2,
      couleur_prod: "#FF9800",
      prix: 6.80,
      ingredients: [18, 3], // Sirop d'orange, Crème
      alimentations: []
    },
    {
      id_prod: 12,
      nom_prod: "Sweet caramel sunday",
      slug_prod: "sweet-caramel-sunday",
      img_prod: 12,
      id_cat_prod: 3,
      couleur_prod: "#D4A574",
      prix: 7.10,
      ingredients: [4, 3], // Caramel, Crème
      alimentations: []
    },
    {
      id_prod: 13,
      nom_prod: "Sweet strawberry sunday",
      slug_prod: "sweet-strawberry-sunday",
      img_prod: 13,
      id_cat_prod: 2,
      couleur_prod: "#F06292",
      prix: 7.30,
      ingredients: [5, 3], // Fraises, Crème
      alimentations: []
    },
    {
      id_prod: 14,
      nom_prod: "White chocolate sunday",
      slug_prod: "white-chocolate-sunday",
      img_prod: 14,
      id_cat_prod: 3,
      couleur_prod: "#FFF3E0",
      prix: 7.20,
      ingredients: [7, 3], // Chocolat blanc, Crème
      alimentations: []
    },
    {
      id_prod: 15,
      nom_prod: "Rasberry donut",
      slug_prod: "rasberry-donut-red",
      img_prod: 16,
      id_cat_prod: 4,
      couleur_prod: "rgb(233, 108, 135)",
      prix: 7.50,
      ingredients: [1, 19, 10], // Myrtilles, Sirop de myrtille, Crème de lait d'amande
      alimentations: [1] // Végan
    }
  ];

  constructor() {}

  // ========== MÉTHODES CATÉGORIES ==========
  getCategories(): Categorie[] {
    return this.categories;
  }

  getCategorieById(id: number): Categorie | undefined {
    return this.categories.find(cat => cat.id_cat === id);
  }

  getCategoriesByParent(parentId: number | null): Categorie[] {
    return this.categories.filter(cat => cat.id_parent_cat === parentId);
  }

  // ========== MÉTHODES PRODUITS ==========
  getProduits(): Produit[] {
    return this.produits;
  }

  getProduitById(id: number): Produit | undefined {
    return this.produits.find(prod => prod.id_prod === id);
  }

  getProduitsByCategorie(categorieId: number): Produit[] {
    return this.produits.filter(prod => prod.id_cat_prod === categorieId);
  }

  getProduitsByCategorieRecursive(categorieId: number): Produit[] {
    // Récupérer les produits de cette catégorie
    let produits = this.getProduitsByCategorie(categorieId);
    
    // Récupérer les sous-catégories
    const sousCategories = this.getCategoriesByParent(categorieId);
    
    // Pour chaque sous-catégorie, ajouter ses produits
    sousCategories.forEach(sousCat => {
      produits = [...produits, ...this.getProduitsByCategorieRecursive(sousCat.id_cat)];
    });
    
    return produits;
  }

  // ========== MÉTHODES IMAGES ==========
  getImageById(id: number): Image | undefined {
    return this.images.find(img => img.id_image === id);
  }

  getImageUrl(imageId: number): string {
    const image = this.getImageById(imageId);
    return image ? `imgs/${image.url_image}` : 'imgs/placeholder.png';
  }

  // ========== MÉTHODES INGRÉDIENTS ==========
  getIngredientById(id: number): Ingredient | undefined {
    return this.ingredients.find(ing => ing.id_ingre === id);
  }

  getIngredientsByIds(ids: number[]): Ingredient[] {
    return ids.map(id => this.getIngredientById(id)).filter(ing => ing !== undefined) as Ingredient[];
  }

  // ========== MÉTHODES ALIMENTATIONS ==========
  getAlimentationById(id: number): Alimentation | undefined {
    return this.alimentations.find(ali => ali.id_ali === id);
  }

  getAlimentationsByIds(ids: number[]): Alimentation[] {
    return ids.map(id => this.getAlimentationById(id)).filter(ali => ali !== undefined) as Alimentation[];
  }
}