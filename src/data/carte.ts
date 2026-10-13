/**
 * La carte, recopiée depuis marifah-thai-restaurant.ch (13.10.2026).
 * Noms thaïs gardés tels quels ; seules les coquilles des descriptions françaises sont corrigées.
 *
 * À compléter : les n° 51 à 70 (absents des captures, probablement poissons, riz et nouilles).
 */

export interface Dish {
  n: number;
  name: string;
  desc: string;
  /** '25' s'affiche « 25.- » ; '3.50' s'affiche tel quel. */
  price: string;
  /** Prix de la demi-portion, si elle existe. */
  half?: string;
  /** Précision après le prix, ex. « la boule ». */
  unit?: string;
}

export interface Category {
  slug: string;
  title: string;
  photo?: { src: string; width: number; height: number; alt: string };
  dishes: Dish[];
}

export const carte: Category[] = [
  {
    slug: 'entrees',
    title: 'Entrées',
    dishes: [
      { n: 1, name: 'Popia Thod', desc: 'Rouleaux de printemps (viande ou légumes)', price: '15' },
      { n: 2, name: 'Satay Kaï', desc: 'Poulet frit au lait de coco', price: '15' },
      { n: 3, name: 'Kiew Thod', desc: 'Raviolis croustillants aux crevettes', price: '15' },
      { n: 4, name: 'Kung Homsabay', desc: 'Crevettes frites enveloppées d’une feuille de brick', price: '15' },
      { n: 5, name: 'Thod Man Pla', desc: 'Galettes de poisson frit', price: '15' },
      { n: 6, name: 'Ruam Mit', desc: 'Assortiment d’entrées', price: '30', half: '16' },
    ],
  },
  {
    slug: 'potages',
    title: 'Potages',
    dishes: [
      { n: 7, name: 'Tom Yam Kung-Plan', desc: 'Potage de poissons ou de crevettes à la citronnelle', price: '18', half: '10' },
      { n: 8, name: 'Tom Yam Kaï', desc: 'Potage de poulet à la citronnelle', price: '17', half: '10' },
      { n: 9, name: 'Tom Kha Kung', desc: 'Potage de crevettes au lait de coco', price: '17', half: '10' },
      { n: 10, name: 'Tom Kra Kaï', desc: 'Potage de poulet au lait de coco', price: '17', half: '10' },
      { n: 11, name: 'Kaeng Juud Phak', desc: 'Potage de légumes', price: '17', half: '10' },
      { n: 12, name: 'Kiew Nam', desc: 'Potage de raviolis aux crevettes', price: '18', half: '10' },
    ],
  },
  {
    slug: 'salades',
    title: 'Salades',
    dishes: [
      { n: 13, name: 'Yam Wounsene', desc: 'Salade de vermicelles (avec ou sans viande)', price: '20' },
      { n: 14, name: 'Yam Plamuk-Kung', desc: 'Salade de calamars ou crevettes', price: '22' },
      { n: 15, name: 'Nam Tok Nua', desc: 'Salade piquante de bœuf grillé', price: '22' },
      { n: 16, name: 'Som Tam', desc: 'Salade de papaye', price: '15' },
      { n: 17, name: 'Yam Thalay', desc: 'Salade de fruits de mer', price: '25' },
      { n: 18, name: 'Yam Mamluing', desc: 'Salade de mangue verte aux crevettes', price: '15' },
    ],
  },
  {
    slug: 'porc',
    title: 'Porc',
    dishes: [
      // Pas de description sur le site actuel : déduite du nom, à confirmer avec le restaurant.
      { n: 19, name: 'Keang Kiew Wan Moo', desc: 'Porc au curry vert et au lait de coco', price: '25' },
      { n: 20, name: 'Keang Deng Moo', desc: 'Porc au curry rouge et au lait de coco', price: '25' },
      { n: 21, name: 'Moo Masaman', desc: 'Porc au curry brun et aux cacahuètes', price: '25' },
      { n: 22, name: 'Moo Phad Phed', desc: 'Porc sauté aux piments', price: '25' },
      { n: 23, name: 'Moo Phad Phak', desc: 'Porc sauté aux légumes', price: '25' },
      { n: 24, name: 'Phad Priew Wan Moo', desc: 'Porc à l’aigre-doux', price: '25' },
      { n: 25, name: 'Moo Phad Kratiew', desc: 'Porc sauté à l’ail', price: '25' },
      { n: 26, name: 'Moo Phad Kapraow', desc: 'Porc sauté aux piments et basilic thaï', price: '25' },
    ],
  },
  {
    slug: 'poulet',
    title: 'Poulet',
    photo: {
      src: '/img/poulet-saute.webp',
      width: 1004,
      height: 1339,
      alt: 'Poulet sauté à la coriandre fraîche, carotte sculptée en fleur',
    },
    dishes: [
      { n: 27, name: 'Keang Kiew Wan Kay', desc: 'Poulet au curry vert', price: '25' },
      { n: 28, name: 'Kaeng Deng Kay', desc: 'Poulet au curry rouge', price: '25' },
      { n: 29, name: 'Kaeng Karry Kay', desc: 'Poulet au curry jaune', price: '25' },
      { n: 30, name: 'Paneng Kay', desc: 'Poulet au curry Panang', price: '25' },
      { n: 31, name: 'Mansman Kay', desc: 'Poulet au curry brun et cacahuètes', price: '25' },
      { n: 32, name: 'Kay Phad Prik', desc: 'Poulet sauté aux piments et basilic thaï', price: '25' },
      { n: 33, name: 'Kay Phad Priew Wan', desc: 'Poulet sauté à l’aigre-doux', price: '25' },
      { n: 34, name: 'Kay Phadkhing', desc: 'Poulet sauté au gingembre', price: '25' },
      { n: 35, name: 'Kay Phad Med Mamuing', desc: 'Poulet sauté aux noix de cajou', price: '25' },
      { n: 36, name: 'Kay Phad Kratiem', desc: 'Poulet sauté à l’ail', price: '25' },
      { n: 37, name: 'Kay Phad Kapraow', desc: 'Poulet sauté au basilic thaï', price: '25' },
    ],
  },
  {
    slug: 'canard',
    title: 'Canard',
    dishes: [
      { n: 38, name: 'Ped Yang', desc: 'Canard laqué', price: '38' },
      { n: 39, name: 'Ped Phad Sap Parod', desc: 'Canard sauté à l’ananas et aux noix de cajou', price: '38' },
      { n: 40, name: 'Kaeng Ped Yang', desc: 'Canard au curry rouge et au lait de coco', price: '38' },
    ],
  },
  {
    slug: 'boeuf',
    title: 'Bœuf',
    photo: {
      src: '/img/boeuf-saute.webp',
      width: 1044,
      height: 1392,
      alt: 'Bœuf sauté aux oignons nouveaux et à la coriandre, sur lit de salade',
    },
    dishes: [
      { n: 41, name: 'Keang Kiew Wan Nua', desc: 'Bœuf au curry vert et au lait de coco', price: '34' },
      { n: 42, name: 'Keang Deng Nua', desc: 'Bœuf au curry rouge et au lait de coco', price: '34' },
      { n: 43, name: 'Keang Karry Nua', desc: 'Bœuf au curry jaune et au lait de coco', price: '34' },
      { n: 44, name: 'Nua Praneng', desc: 'Bœuf au curry thaï', price: '34' },
      { n: 45, name: 'Massaman Nua', desc: 'Bœuf au curry brun et aux cacahuètes', price: '36' },
      { n: 46, name: 'Nua Phad Phad Phed', desc: 'Bœuf sauté aux piments', price: '34' },
      { n: 47, name: 'Nua Phad Prak', desc: 'Bœuf sauté aux légumes', price: '34' },
      { n: 48, name: 'Nua Phad Nam Man Hoy', desc: 'Bœuf sauté à la sauce d’huître', price: '35' },
      { n: 49, name: 'Nua Phad Kratiew', desc: 'Bœuf sauté à l’ail', price: '34' },
      { n: 50, name: 'Nua Phad Karphaow', desc: 'Bœuf sauté aux piments et basilic thaï', price: '34' },
    ],
  },
  {
    slug: 'vegetarien',
    title: 'Végétarien',
    dishes: [
      { n: 71, name: 'Phad Prak Tofu', desc: 'Tofu sauté aux légumes', price: '25' },
      { n: 72, name: 'Keang Kiem Wan Prak', desc: 'Légumes mixtes au curry vert', price: '23' },
      { n: 73, name: 'Keang Deng Prak', desc: 'Légumes mixtes au curry rouge', price: '23' },
      { n: 74, name: 'Keang Karry Phak', desc: 'Légumes mixtes au curry jaune', price: '23' },
      { n: 75, name: 'Phad Phed Phak', desc: 'Légumes sautés aux piments et au basilic', price: '23' },
      { n: 76, name: 'Kaengjuud Phak', desc: 'Potage de légumes', price: '17' },
      { n: 77, name: 'Yam Wounsene', desc: 'Salade de vermicelles aux piments', price: '22' },
      { n: 78, name: 'Popia Thod', desc: 'Rouleaux de printemps', price: '15' },
      { n: 79, name: 'Som Tam', desc: 'Salade de papaye', price: '15' },
    ],
  },
  {
    slug: 'desserts',
    title: 'Desserts',
    dishes: [
      { n: 80, name: 'Khaoniyw Mamluing', desc: 'Riz gluant à la mangue et au lait de coco', price: '12' },
      { n: 81, name: 'Kiwy Bwchchi', desc: 'Banane au lait de coco', price: '10' },
      { n: 82, name: 'Naphung Kiwy Chub Paeng Thxd', desc: 'Beignets de banane au miel', price: '9' },
      { n: 83, name: 'Sabparod Tod Namphung', desc: 'Beignets d’ananas au miel', price: '8' },
      { n: 84, name: 'Khe Rm Brule Kab Kathi', desc: 'Crème brûlée au lait de coco', price: '7' },
      { n: 85, name: 'Phea Krim Mamluing', desc: 'Crème brûlée à la mangue', price: '8' },
      { n: 86, name: 'Glaces', desc: 'Vanille, chocolat, mangue, café, framboise, citron, fraise', price: '3.50', unit: 'la boule' },
    ],
  },
];
