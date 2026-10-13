import { hours, restaurant } from '../data/restaurant';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** Données structurées schema.org pour Google (fiche restaurant, horaires). */
export function restaurantJsonLd() {
  const r = restaurant;
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: r.fullName,
    servesCuisine: 'Thaïe',
    telephone: r.phone.tel,
    email: r.email,
    priceRange: 'CHF 15–38',
    acceptsReservations: true,
    hasMenu: '#carte',
    address: {
      '@type': 'PostalAddress',
      streetAddress: r.address.street,
      postalCode: r.address.zip,
      addressLocality: r.address.city,
      addressRegion: r.address.region,
      addressCountry: r.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: r.geo.lat, longitude: r.geo.lng },
    openingHoursSpecification: hours.flatMap((h) =>
      h.slots.map(([opens, closes]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAY_NAMES[h.day],
        opens,
        closes: closes === '24:00' ? '23:59' : closes,
      })),
    ),
  };
}
