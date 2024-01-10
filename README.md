## Getting Started

```bash
npm i && npm run dev
```

### Explication du projet

Ce projet était plutôt orienté professionnel que tech. On a d’abord procédé à une étude du besoin du client afin de lui proposer une solution qui lui convient. On a donc décidé de faire un site en 3 parties : 
La page Home qui présente le client et son travail, ainsi qu’un formulaire de contact qui permet de lui envoyer un mail pour une prise de rendez-vous ou autre (le système de mail fonctionne mais les mails ne sont pas reliés au client mais à moi pour le moment). 
La page WinWatt qui permet au client de mettre en vitrine des pièces de vélo performante qu’il pourra vendre par la suite après rendez-vous (pas de vente directement sur le site). Il y a une page /login cachée qui permet seulement à notre client de se connecter afin qu’il soit le seul à pouvoir ajouter, éditer ou supprimer les objets en vitrine (username: test    password: good), du coup pas de création de compte on créera le seul utilisateur final manuellement. 
Quelqu’un de non connecté va seulement pouvoir voir les objets sans rien modifier. 
La page VeloClandestin n’est pas encore créée mais son but était de relier le compte Ebay du client et de récupérer tous les objets en vente sur son compte pour les afficher ici, la différence avec WinWatt c’est que les pièces de VéloClandestin sont des pièces de vélo de collections interdites maintenant. 
