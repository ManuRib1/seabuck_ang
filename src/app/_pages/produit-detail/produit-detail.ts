import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { DataService } from '../../_services/data';
import { PanierService } from '../../_services/panier';
import { Produit } from '../../_interfaces/produit.interface';
import { Categorie } from '../../_interfaces/categorie.interface';
import { Ingredient } from '../../_interfaces/ingredient.interface';
import { Alimentation } from '../../_interfaces/alimentation.interface';

declare var $: any;

@Component({
  selector: 'app-produit-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produit-detail.html',
  styleUrls: ['./produit-detail.css']
})
export class ProduitDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  produit?: Produit;
  categorie?: Categorie;
  ingredients: Ingredient[] = [];
  alimentations: Alimentation[] = [];
  autresProduits: Produit[] = [];
  private slickInitialized = false;
  quantite: number = 1;
  showSuccessMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.loadProduit(Number(params.get('id')));
    });
  }

  loadProduit(id: number): void {
    this.destroySlick();
    
    this.produit = this.dataService.getProduitById(id);
    
    if (this.produit) {
      this.categorie = this.dataService.getCategorieById(this.produit.id_cat_prod);
      
      if (this.produit.ingredients) {
        this.ingredients = this.dataService.getIngredientsByIds(this.produit.ingredients);
      }
      
      if (this.produit.alimentations) {
        this.alimentations = this.dataService.getAlimentationsByIds(this.produit.alimentations);
      }
      
      this.autresProduits = this.dataService.getProduits()
        .filter(p => p.id_prod !== id);
    }

    setTimeout(() => {
      this.initSlick();
    }, 100);
  }

  ngAfterViewInit(): void {
    this.initSlick();
  }

  ngOnDestroy(): void {
    this.destroySlick();
  }

  initSlick(): void {
    if (this.slickInitialized) return;
    
    setTimeout(() => {
      if (typeof $ !== 'undefined' && $.fn.slick) {
        $('.produits-slider-detail').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
        this.slickInitialized = true;
      }
    }, 200);
  }

  destroySlick(): void {
    if (typeof $ !== 'undefined' && $.fn.slick && this.slickInitialized) {
      $('.produits-slider-detail').slick('unslick');
      this.slickInitialized = false;
    }
  }

  ajouterAuPanier(): void {
    if (this.produit) {
      this.panierService.ajouterProduit(this.produit, this.quantite);
      this.showSuccessMessage = true;
      
      // Masquer le message après 3 secondes
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }
  }

  augmenterQuantite(): void {
    this.quantite++;
  }

  diminuerQuantite(): void {
    if (this.quantite > 1) {
      this.quantite--;
    }
  }

  getImageUrl(produit: Produit): string {
    return this.dataService.getImageUrl(produit.img_prod);
  }

  getCouleurFond(): string {
    return this.produit?.couleur_prod || '#667eea';
  }

  hasAllergenes(): boolean {
    return this.ingredients.some(ingredient => ingredient.allergies_ingre);
  }
}