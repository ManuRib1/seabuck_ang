import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../_services/data';
import { Categorie } from '../../_interfaces/categorie.interface';
import { Produit } from '../../_interfaces/produit.interface';

@Component({
  selector: 'app-categorie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categorie-detail.html',
  styleUrls: ['./categorie-detail.css']
})
export class CategorieDetailComponent implements OnInit {
  categorie?: Categorie;
  produits: Produit[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categorie = this.dataService.getCategorieById(id);
    this.produits = this.dataService.getProduitsByCategorieRecursive(id);
  }

  getImageUrl(produit: Produit): string {
    return this.dataService.getImageUrl(produit.img_prod);
  }
}