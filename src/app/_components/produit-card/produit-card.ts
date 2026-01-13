import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../../_interfaces/produit.interface';
import { DataService } from '../../_services/data';

@Component({
  selector: 'app-produit-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produit-card.html',
  styleUrls: ['./produit-card.css']
})
export class ProduitCardComponent {
  @Input() produit!: Produit;

  constructor(private dataService: DataService) {}

  getImageUrl(): string {
    return this.dataService.getImageUrl(this.produit.img_prod);
  }
}