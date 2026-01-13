import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../_services/data';
import { Produit } from '../../_interfaces/produit.interface';

declare var $: any;

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css']
})
export class AccueilComponent implements OnInit, AfterViewInit {
  produits: Produit[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.produits = this.dataService.getProduits();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof $ !== 'undefined' && $.fn.slick) {
        $('.produits-slider').slick({
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
      }
    }, 100);
  }

  getImageUrl(produit: Produit): string {
    return this.dataService.getImageUrl(produit.img_prod);
  }
}