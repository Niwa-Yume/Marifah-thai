# Marifah — site vitrine

Proposition de nouveau site pour le Restaurant Marifah (cuisine thaïe, Meyrin).

**Stack** : [Astro](https://astro.build) 7 en sortie 100 % statique, avec trois composants React hydratés côté client. Pas de backend, pas de base de données, pas de cookies.

## Commandes

Il faut Node 22.12 ou plus.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ en local
npm run check    # vérification TypeScript / Astro
```

## Déployer sur Vercel

Le projet est détecté automatiquement comme projet Astro, sans aucune configuration.

- **CLI** : `npx vercel` à la racine du projet, puis `npx vercel --prod`.
- **GitHub** : pousse le repo, puis « Add New → Project » sur vercel.com et importe-le.

## Où modifier quoi

| Contenu | Fichier |
|---|---|
| Carte (plats, prix, photos par catégorie) | `src/data/carte.ts` |
| Téléphone, adresse, horaires, menu du midi, rabais, chiffres de la salle | `src/data/restaurant.ts` |
| Mode maquette (bandeau + `noindex`) | `DEMO` dans `src/data/restaurant.ts` |
| Couleurs, typo, mise en page | `src/styles/global.css` (tokens en haut du fichier) |
| Photos | `public/img/` |

## Structure

```
src/
  pages/index.astro        page unique, assemble les sections
  layouts/Base.astro       <head>, SEO, données structurées, bandeau maquette
  components/
    Header, Hero, Lunch, Carte, Dish, Takeaway, Venue, Infos, ActionBar, Icon (.astro, rendus au build)
    OpenStatus.tsx         statut « ouvert / fermé » en direct (React, client:load)
    CategoryNav.tsx        navigation collante de la carte (React, client:idle)
    HoursTable.tsx         horaires avec le jour courant surligné (React, client:visible)
  data/                    contenu
  lib/                     horaires (fuseau Europe/Zurich), format des prix, JSON-LD
public/                    polices auto-hébergées (Pridi, Sarabun, licence OFL), photos, favicon
```

Les composants React affichent d’abord un contenu neutre, puis calculent l’heure dans le navigateur. Le HTML du build ne dépend donc jamais de l’heure à laquelle il a été généré.

## Avant une mise en ligne officielle

- [ ] Passer `DEMO` à `false` (retire le bandeau et la balise `noindex`).
- [ ] Ajouter les plats n° 51 à 70 dans `src/data/carte.ts` (absents des captures du site actuel).
- [ ] Faire confirmer la description du n° 19, déduite du nom.
- [ ] Vérifier que le 078 84 99 345 est bien sur WhatsApp.
- [ ] Remplacer les photos par des photos récentes du restaurant (salle, terrasse, plats).
- [ ] Mettre à jour la note Google dans `restaurant.ts`.
- [ ] Brancher le nom de domaine `marifah-thai-restaurant.ch` sur Vercel.
