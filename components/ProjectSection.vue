<template>
  <div class="min-h-screen flex flex-col align-center relative z-1">
      <h2 class="text-5xl mt-24 mb-10 text-center shadow_text" data-aos="fade-up">
        Mes <span class="text-primary">Projets</span>
      </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center"
    >
        <ProjectSectionCard
          v-for="(project, index) in projects"
          :data-aos="getFlipAnimation(index)"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :img="project.img"
          :link="project.link"
          :github="project.github"
          :stack="project.stack"
          @click-on-open-modal="state.isOpen = !state.isOpen"
        >
        </ProjectSectionCard>
    </div>
  </div>
</template>

<script setup>
const state = reactive({
  isOpen: false,
});

const projects = [
  {
    title: "Ancien site web",
    description: "Ancien site web personnel",
    img: "/projects/website.png",
    link: "https://raminkenny.netlify.app/",
    github: "https://github.com/LawderDev/ramin_kenny_website/",
    stack: "Nuxt.js, Tailwindcss, Strapi, MongoDB"
  },
  {
    title: "IGDB App",
    description: "Site web de gestion de jeux vidéos",
    img: "/projects/igdb_app.png",
    github: "https://github.com/LawderDev/IGDB_project/",
    stack: "Vue.js, Tailwindcss, Express.js, MongoDB"
  },
  {
    title: "Image in dragon",
    description: "Application web de traitement d'images ",
    img: "/projects/image_in_dragon.png",
    github: "https://github.com/LawderDev/Projet_traitement_d_image/",
    stack: "Vue.js, SpringBoot"
  },
  {
    title: "Suivi de consommation d'eau",
    description: "Application permettant aux utilisateurs de suivre leur consommation quotidienne d'eau",
    img: "/projects/water.png",
    github: "https://github.com/LawderDev/Mobile_water_consumption_project",
    stack: "Android Studio, SQLite"
  },
  
];

const getFlipAnimation = (index) => {
    if (index % 2 === 0) {
      return "flip-up";
    } else if (index % 3 === 0) {
      return "flip-left";
    } else {
      return "flip-right";
    }
}
</script>
