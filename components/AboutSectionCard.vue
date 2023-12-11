<template>
  <div class="card card-compact w-[450px] backdrop-blur-sm border-[1px] drop-shadow shadow-xl">
    <div class="card-body">
      <h3 class="text-2xl text-center py-8">{{ title.normal }} <span class="text-primary">{{ title.special }}</span></h3>
      
      <div class="card bg-base-100 " v-for="item in items" :key="item">
        <div class="card-body">
          <h3 class="text-lg" :class="{ 'text-primary text-xl': item.specialTitle }">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

    </div>
  </div>
</template>
 
<script setup>
defineProps({
  title: Object,
  items: Array,
});
</script>
