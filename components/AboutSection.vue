<template>
  <div class="min-h-screen flex flex-col align-center relative z-1">
    <h2 class="text-5xl mt-24 mb-10 text-center shadow_text">
      How about <span class="text-primary">me</span> ?
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
      normal: "My ",
      special: "work experience",
    },
    items: [
      {
        title: "Clip-it.io",
        specialTitle: true,
        description: "Web developper",
        date: "2022 - 2024",
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
        description: "Web developper",
        date: "2021 (3 month)",
        missions: [
          "Développement d'une plateforme SaaS de gestion de projet et de planning."
        ]
      },
    ],
  },
  {
    title: {
      normal: "My ",
      special: "studies",
    },
    items: [
      {
        title: "Master degrees of Business Informatics",
        specialTitle: true,
        description: "University of Bordeaux",
        date: "2022 - 2024"
      },
      {
        title: "Bachelor degrees of Computer Science",
        specialTitle: true,
        description: "University of Bordeaux",
        date: "2021 - 2022"
      },
      {
        title: "BTEC Higher National Diploma of Computer Science",
        specialTitle: true,
        description: "University of Bordeaux",
        date: "2019 - 2021"
      },
    ],
  },
  {
    title: {
      normal: "My other ",
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
      normal: "My ",
      special: "story",
    },
    items: [
      {
        title: "From Reunion Island to Bordeaux",
        specialTitle: true,
        description: `I’m a huge passionate of computer science, that is why i aspire to become developer.
        
        I quit my beautiful little island to discover new horizon and increase my opportunities.`,
      },
    ],
  },
];
</script>
