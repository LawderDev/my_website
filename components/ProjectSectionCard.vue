<template>
  <div class="card card-compact w-96 backdrop-blur-sm border-[1px] drop-shadow shadow-xl">
    <figure>
      <img
        :src="img"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">See more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  img: String,
});
</script>
