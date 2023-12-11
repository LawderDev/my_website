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
        description: "Web developper",
      },
      {
        title: "Mink Agency",
        description: "Web developper",
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
        description: "University of Bordeaux",
      },
      {
        title: "Bachelor degrees of Computer Science",
        description: "University of Bordeaux",
      },
      {
        title: "BTEC Higher National Diploma of Computer Science",
        description: "University of Bordeaux",
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
