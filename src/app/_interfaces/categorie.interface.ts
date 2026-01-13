export interface Categorie {
  id_cat: number;
  nom_cat: string;
  slug_cat: string;
  desc_cat: string;
  id_parent_cat: number | null;
  id_img_cat: number;
}