# Olivier Nguyen Quoc — portfolio

Refonte du portfolio avec **Astro 5, Tailwind CSS 4 et TypeScript**. Site statique, bilingue français/anglais, sans framework JavaScript côté client. Il reprend le design de la dernière itération : hero sur panneau vert, CV compact avec timeline et logos, projets et bibliothèque de 87 références.

## Démarrer

Node.js 22 ou supérieur (Node 24 recommandé).

```sh
npm ci
npm run dev
```

Le serveur de développement indique son adresse, habituellement `http://localhost:4321`.

```sh
npm run check       # Vérification Astro et TypeScript
npm run build       # Génération dans dist/
npm run preview     # Aperçu de la version générée
npm run format      # Formatage du code
npm run format:check
```

## Organisation

- `src/components/home/Hero.astro` : titre, portrait et liens de la page d’accueil.
- `src/components/cv/` : biographie, timeline, logos et colonne de droite du CV.
- `src/components/shared/` : navigation, pied de page et éléments communs.
- `src/layouts/BaseLayout.astro` : document HTML, métadonnées et ressources partagées.
- `src/pages/[...path].astro` : génération des 14 pages françaises et anglaises.
- `src/data/content.json` : contenus structurés et traductions du site original.
- `src/data/references.json` : bibliothèque académique et tags de filtrage.
- `src/lib/pages.js` et `projects.js` : rendu statique des contenus éditoriaux et des projets, avec échappement des valeurs issues des données.
- `src/scripts/interactions.js` : menu mobile et recherche/filtrage des références. Les filtres sont conservés dans l’URL.
- `src/styles/global.css` : thème et styles précis du design, avec Tailwind 4 via son plugin Vite. Le reset Tailwind est volontairement omis pour conserver les proportions typographiques approuvées.
- `public/assets/` : photos, polices, logos et capture réelle de 1er Balcon.

La mise en page du CV passe à une colonne sous 768 px. La colonne de droite mesure 240 px sur tablette et 300 px à partir de 1024 px. Le portrait conserve son cadrage grâce à un panneau de ratio fixe. Les marges extérieures augmentent sur grand écran.

AvignApp attend encore une vraie capture d’application. Son panneau actuel est un texte de présentation, pas une simulation de l’interface. Les PDF du CV et des slides restent accessibles sur le domaine original ; ils peuvent être ajoutés dans `public/assets/` puis les liens adaptés.

## Hébergement

Lancer `npm run build`, puis servir le dossier `dist/`. Compatible avec Cloudflare Pages, Netlify, Vercel ou tout hébergement statique.

Définir `SITE_URL` dans l’environnement de build pour renseigner les liens canoniques, Open Graph et le sitemap. Valeur par défaut : `https://oliviernguyen.com`.

Pour Cloudflare Pages : commande `npm run build`, dossier de sortie `dist`, Node 24. Ajouter `SITE_URL` dans les variables du projet. Le workflow GitHub vérifie le code et la compilation ; il ne déploie pas automatiquement sur le site existant.

## Contenus et droits

Les contenus, photographies et éléments de marque proviennent du portfolio d’Olivier Nguyen Quoc. Les logos restent la propriété de leurs titulaires respectifs. Le portrait détouré a été préparé pendant les itérations de design. Aucun identifiant ou secret de la plateforme de prévisualisation n’est inclus.
