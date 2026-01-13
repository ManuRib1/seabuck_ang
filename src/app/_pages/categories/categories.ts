import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../_services/data';
import { Categorie } from '../../_interfaces/categorie.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Récupérer uniquement les catégories parentes (sans parent)
    this.categories = this.dataService.getCategoriesByParent(null);
  }

  getImageUrl(categorie: Categorie): string {
    return this.dataService.getImageUrl(categorie.id_img_cat);
  }
}