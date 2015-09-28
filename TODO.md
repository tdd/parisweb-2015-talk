Présentation sponsor Paris-Web 2015
===================================

http://www.paris-web.fr/2015/conferences/le-dev-front-a-mach-1-au-quotidien.php

TRENTE MINUTES

## TECH INFRA

  - Transitions simples (latérales)
  - Grosse surface d'écran exploitable
  - Font pairing sympa (Merriweather Bold + Source Sans Pro Light + Source Code Pro, à la US Playbook ?)
  - Thèmes colorimétriques par section
  - Reporting plan dans le HTML (utiliser les aside.notes)
  - Remplir le contenu (liens, snapshots, démos)
  - Planifier les démos précisément
  - Tag GA pour gh-pages et MàJ index.html
  - Synchro branche gh-pages (hook pre-push ?!)
  - Publication gh-pages

## Plan

Les piliers d'un dev front plus rapide:

  - Edition live dans le navigateur
  - Feedback instantané
  - Source Maps
  - Automatisation
  - Modules
  - ES6+
  - Tests automatisés rapides et parallèles

## L'état des lieux : le bon vieux cycle SSRR (Save-Switch-Reload-Replay)

  -> Quelques estimations winging-it, off-my-hat sur les temps perdus, de plus en plus agrégé (et % temps de travail)
  -> C'était en 95.  Il y a 20 ans.  Qu'est-ce qu'on fout ?!

## Pilier 1 : Édition live dans le navigateur

  -> pour tirer parti de l'état courant de l'état courant de la runtime (complétion réelle, introspection, débogage pas à pas, etc.)
  -> Possible partout en desktop (IE8+ mais même avant en plus galère, FF sans avoir besoin de Firebug, Chrome, Safari, Opera…), souvent à distance sur mobile
  -> Hot-swapping CSS (partout)
  -> Hot-swapping JS (Chrome seulement, bientôt FF et Edge) : démo avec animation + code de dessin ?

### Bonus 1.1 : Maîtriser ses DevTools pour de vrai

  -> Comparaison Office (5% utilisé)
  -> Excellentes ressources : Discover DevTools, doc officielle Google, chaînes Google Developers / Google Chrome Developers, HTML5Rocks Tutorials, MDN, hacks.mozilla.com, comptes Twitter à suivre…
  -> Quitte à basculer d'un browser à l'autre pour avoir le meilleur outil ponctuel
  -> Tonne de raccourcis clavier
  -> Derniers DevTools : on peut même réordonner les onglets

### Bonus 1.2 : DevTools dédiés

  -> React, Angular, Ember, Redux, client REST…
  -> DevTools Extensions (https://chrome.google.com/webstore/category/ext/11-web-development)

## Pilier 2 : Feedback instantané depuis l'extérieur

  -> CSS = hot-swapping facile, programmatique, plein de solutions (LiveReload, BrowserSync, fb-flo, Brackets, etc.)
  -> JS = hot reloading : BrowserSync?, fb-flo, mais plus loin Webpack HMR + MHL / RHL…

## Bonus 2.1 : Synchro multi-devices

  -> BrowserSync et son Ghost Mode, par exemple.

## Pilier 3 : Source Maps

  -> Découpler le code source / dev (langage, découpage / enrobage, lisibilité…) et celui exécuté (bundle CSS/JS unique voire minifié)
  -> Seul frein en dev : le code interprété n'est pas le source original ! SM = mapping entre les deux.
  -> v3 02/2011 (bientôt 5 ans). FF23+, Chrome (26+?), IE11+, Saf (6+?)
  -> Multi-niveau.  Ex. : ES6 files -> ES5 files -> ES5 bundle -> ES5 minified bundle
  -> Plus d'excuse pour ne pas utiliser le top en dev !

## Pilier 4 : Automatisation

  -> On a aujourd'hui de véritables chaînes de build : le dev front s'est énormément industrialisé ces dernières années.
  -> Beaucoup de tâches fréquentes, voire ultra-récurrentes, rébarbatives et error-prone à la main
  -> Grunt a popularisé le truc, mais trop mal branlé, est déjà largement sur la fin.
  -> Principaux acteurs aujourd'hui : Gulp (générique, a néanmoins pas mal de problèmes) et Webpack (bundling)
  -> Browserify encore bien populaire, mais nécessite pas mal de code / CLI, Webpack et JSPM lui bouffent son lunch
  -> Brunch longtemps l'outsider qui défonce tout, mais a raté sa prise en charge npm (on y reviendra), condamné à la marge :'-(.

## Pilier 5 : Modules

  -> Déjà évoqué dans les Source Maps
  -> Indispensable pour les mêmes raisons que côté backend
  -> Ne pas confondre avec Bower, qui simplifie juste la récup de deps front
  -> AMD comateux, CommonJS dominant, mais en vrai on passe à ES6 et ses modules natifs
  -> Transition facile avec des outils comme SystemJS
  -> Par ailleurs, très très grosse tendance : npm all the things!
    -> Exclut (hélas) Brunch
    -> A émergé notamment grâce à Browserify et au Universal (ex. Isomorphic) JS
    -> Webpack au top :-)
    -> JSPM, ce héros

## Pilier 6 : Tests automatisés et parallèles

  -> Industriel / quali = tests complets (95%+)
  -> L'écosystème de tests auto sans doute le plus avancé et riche qui soit, toutes technos confondues
  -> Briques : Assertions, Mocking/Stubbing, Harnais, Runners, Coverage Reporters
  -> Roi de l'assertion : Chai et ses plugins
  -> Roi du mocking/stubbing : SinonJS
  -> Principaux harnais : Mocha et Tape (Jasmine en perte de vitesse, QUnit comateux, JSTest [trop] à la marge)
  -> Principaux runners : Karma + SaaS (BrowserStack et Sauce)
  -> Principaux CR : Istanbul et variantes ES6+ (Isparta) (Blanket sur la fin, moins pratique/utile)

## Pilier 7 : ES6+

  -> C'est là, ça y est, c'est utilisable MAINTENANT
  -> Énormes gains de productivité, de performance et de fiabilité à la clé, mais aussi…
  -> Énormes gains de PLAISIR
  -> Pour tout savoir là-dessus, venez à mon atelier de Samedi ou à ma pres à Blend ! ;-)

## Conclusion

  -> ARRÊTEZ DE GASPILLER VOTRE TEMPS AVEC VOS SILEX
  -> REPRENEZ DU PLAISIR EN CRÉANT PLUTÔT QU'EN ATTENDANT APRÈS VOS OUTILS

