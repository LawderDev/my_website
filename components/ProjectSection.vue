<template>
  <div class="min-h-screen flex flex-col align-center">
    <h2 class="text-5xl mt-24 mb-10 text-center">
      My <span class="text-primary">Project</span>
    </h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center"
    >
      <ProjectSectionCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :img="project.img"
      >
      </ProjectSectionCard>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    img: "https://images.assetsdelivery.com/compings_v2/kapona/kapona2111/kapona211100019.jpg",
  },
  {
    title: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    img: "https://images.assetsdelivery.com/compings_v2/kapona/kapona2111/kapona211100019.jpg",
  },
  {
    title: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    img: "https://images.assetsdelivery.com/compings_v2/kapona/kapona2111/kapona211100019.jpg",
  },
  
];
</script>
