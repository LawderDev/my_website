<template>
  <div class="card card-compact w-96 backdrop-blur-sm border-[1px] border-base-100 drop-shadow shadow-xl">
    <figure>
      <img
        :src="img"
        class="max-h-[200px] object-cover"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p>{{ description }}</p>
      <p><span class="font-bold">Stack: </span>{{ stack }}</p>
      <p v-if="link"><span class="font-bold">Link: </span><a :href="link" class="text-primary underline">Voir le site web</a></p>
      <p><span class="font-bold">Github: </span><a class="text-primary underline" :href="github">Voir la page github</a></p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary" @click="link ? openWebsite(link) : openWebsite(github)">See more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['click-on-open-modal'])

defineProps({
  title: String,
  description: String,
  img: String,
  link: String,
  github: String,
  stack: String
});

const openWebsite = (url) => {
  window.open(url);
}
</script>
