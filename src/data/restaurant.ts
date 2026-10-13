/**
 * Toutes les infos du restaurant. Modifier ici, pas dans les composants.
 */

/** true = bandeau « proposition de site » + balise noindex. Passer à false pour la mise en ligne officielle. */
export const DEMO = true;

/** Créneau d'ouverture au format 'HH:MM'. '24:00' = minuit. */
export type Slot = [open: string, close: string];

/** day : 0 = dimanche, 1 = lundi … 6 = samedi (comme Date.getDay()). */
export interface DayHours {
  day: number;
  label: string;
  slots: Slot[];
}

const midi: Slot = ['11:00', '14:30'];
const soir: Slot = ['17:30', '24:00'];

export const hours: DayHours[] = [
  { day: 1, label: 'Lundi', slots: [midi, soir] },
  { day: 2, label: 'Mardi', slots: [midi, soir] },
  { day: 3, label: 'Mercredi', slots: [midi, soir] },
  { day: 4, label: 'Jeudi', slots: [midi, soir] },
  { day: 5, label: 'Vendredi', slots: [midi, soir] },
  { day: 6, label: 'Samedi', slots: [soir] },
  { day: 0, label: 'Dimanche', slots: [] },
];

/** Affiché tant que le statut en direct n'est pas calculé (et sans JavaScript). */
export const hoursSummary = 'Lun–ven 11:00–14:30 et 17:30–00:00, sam dès 17:30';

const address = {
  street: 'Rue Virginio-Malnati 42',
  zip: '1217',
  city: 'Meyrin',
  region: 'GE',
  country: 'CH',
};

const destination = encodeURIComponent(`Restaurant Marifah, ${address.street}, ${address.zip} ${address.city}`);
const whatsapp = '41788499345';

export const restaurant = {
  name: 'Marifah',
  fullName: 'Restaurant Marifah',
  tagline: 'Restaurant thaï, Meyrin',
  address,
  geo: { lat: 46.2267527, lng: 6.0694691 },
  phone: { display: '022 782 55 69', tel: '+41227825569' },
  mobile: { display: '078 84 99 345', tel: '+41788499345', whatsapp },
  email: 'thaideng62@gmail.com',
  /** Note Google relevée le 13.10.2026, à mettre à jour de temps en temps. */
  rating: { value: '4,4', count: 347 },
  lunch: { price: '19.50', days: 'Du lundi au vendredi', hours: '11:00 – 14:30' },
  takeawayDiscount: 10,
  facts: [
    { value: '35', label: 'places à l’intérieur' },
    { value: '50', label: 'couverts en terrasse, l’été' },
    { value: '25', label: 'convives minimum pour privatiser la salle' },
    { value: '4', label: 'personnes dans l’équipe : deux en salle, deux en cuisine' },
  ],
  links: {
    mapsPlace: 'https://www.google.com/maps/search/?api=1&query=Marifah+Tha%C3%AF+Restaurant+Meyrin',
    mapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
    whatsappOrder: `https://wa.me/${whatsapp}?text=${encodeURIComponent('Bonjour, je voudrais commander à l’emporter : ')}`,
    privatisation: `mailto:thaideng62@gmail.com?subject=${encodeURIComponent('Privatisation de la salle')}&body=${encodeURIComponent('Bonjour,\n\nDate souhaitée : \nNombre de personnes : \n')}`,
  },
  author: { name: 'Julien Castro', url: 'https://portfolio-julien-castro.vercel.app/' },
} as const;
