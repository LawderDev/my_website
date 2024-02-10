<template>
  <div class="min-h-screen flex flex-col align-center relative z-1">
    <h2 class="text-5xl mt-24 mb-10 text-center shadow_text">
      À propos de <span class="text-primary">moi</span> ?
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      <AboutSectionCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :items="card.items"
      ></AboutSectionCard>
    </div>
  </div>
</template>

<script setup>
import AboutSectionCard from "./AboutSectionCard.vue";

const cards = [
  {
    title: {
      normal: "Mon ",
      special: "expérience professionnelle",
    },
    items: [
      {
        title: "Clip-it.io",
        specialTitle: true,
        description: "Développeur web",
        date: "2022 - 2024",
        stack: "Vue.js, Django, PostgreSQL, ExtendScript, Node.js, Webflow, Polaris, AWS",
        missions: [
          "Développement d'une plateforme SaaS pour un outil d’automatisation de vidéo.",
          "Ajout de fonctionnalités et correction de bugs sur une api de génération de vidéos.",
          "Créations de scripts after effects.",
          "Développement d’un plugin Shopify d’automatisation de vidéos.",
          "Développement de pages d’atterrissage publicitaire."
        ]
      },
      {
        title: "Mink Agency",
        specialTitle: true,
        description: "Développeur web",
        date: "2021 (2 mois)",
        stack: "Vue.js, Tailwindcss, Laravel",
        missions: [
          "Développement d'une plateforme SaaS de gestion de projet et de planning."
        ]
      },
    ],
  },
  {
    title: {
      normal: "Mes ",
      special: "études",
    },
    items: [
      {
        title: "Master MIAGE Sciences du Numérique et Management",
        specialTitle: true,
        description: "Université de Bordeaux",
        date: "2022 - 2024"
      },
      {
        title: "Licence informatique",
        specialTitle: true,
        description: "Université de Bordeaux",
        date: "2021 - 2022"
      },
      {
        title: "DUT informatique",
        specialTitle: true,
        description: "Université de Bordeaux",
        date: "2019 - 2021"
      },
    ],
  },
  {
    title: {
      normal: "Mes autres ",
      special: "passions",
    },
    items: [
      {
        title: "Video games",
      },
      {
        title: "Music",
      },
      {
        title: "Cooking",
      },
    ],
  },
  {
    title: {
      normal: "Mon ",
      special: "histoire",
    },
    items: [
      {
        title: "De l'île de la Réunion à Bordeaux",
        specialTitle: true,
        description: `Je suis un passionné d'informatique depuis mon plus jeune âge, c'est pourquoi je me suis orienté vers le métier de développeur.
        
        J'ai quitté mon île pour étudier, découvrir de nouveaux horizons et avoir de meilleures opportunités professionnelles.`,
      },
    ],
  },
];
</script>
