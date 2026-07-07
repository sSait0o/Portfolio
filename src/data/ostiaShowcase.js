const ostiaShowcase = [
  {
    id: "ia",
    label: "IA",
    video: {
      mp4: "videos/ostia/ia.mp4",
      webm: "videos/ostia/ia.webm",
    },
    title: "Suivi automatique par IA",
    steps: [
      "Lecture automatique des emails de candidature reçus chaque jour",
      "Extraction des données clés via l'API Groq (entreprise, poste, statut)",
      "Classement automatique de l'offre dans le bon statut du kanban",
      "Géolocalisation de l'entreprise affichée directement sur la carte",
    ],
  },
  {
    id: "cicd",
    label: "CI/CD",
    video: {
      mp4: "videos/ostia/cicd.mp4",
      webm: "videos/ostia/cicd.webm",
    },
    title: "Intégration et déploiement continus",
    steps: [
      "Lint, build et tests exécutés en parallèle sur Backend, Frontend et Core",
      "Vérifications automatiques bloquant tout merge non conforme sur main",
      "Build et publication automatique des images à chaque validation",
      "Déploiement automatique sur Railway sans intervention manuelle",
    ],
  },
  {
    id: "data",
    label: "DATA",
    video: {
      mp4: "videos/ostia/data.mp4",
      webm: "videos/ostia/data.webm",
    },
    title: "Agrégation multi-sources",
    steps: [
      "Centralisation des offres provenant de plusieurs providers connectés",
      "Normalisation des données brutes dans un modèle unique et cohérent",
      "Modélisation PostgreSQL complète du suivi des candidatures",
      "Visualisation combinée : kanban, carte interactive et statistiques",
    ],
  },
];

export default ostiaShowcase;
