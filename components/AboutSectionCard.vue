<template>
  <div class="card card-compact w-96 lg:w-[40vw] backdrop-blur-sm border-[1px] border-base-100 drop-shadow shadow-xl">
    <div class="card-body">
      <h3 class="text-2xl text-center py-8 font-bold">{{ title.normal }} <span class="text-primary">{{ title.special }}</span></h3>
      
      <div class="card bg-accent" v-for="item in items" :key="item">
        <div class="card-body">
          <h3 class="text-lg" :class="{ 'text-primary text-xl font-bold': item.specialTitle }">{{ item.title }}</h3>
          <p v-if="item.date"><span class="font-bold">{{ item.description }}</span>, {{ item.date }}</p>
          <p v-else>{{ item.description }}</p>
          <p v-if="item.stack"><span class="font-bold">Stack: </span> {{ item.stack }}</p>
          <ul v-if="item.missions" class="list-disc pl-4">
            <li v-for="mission in item.missions" :key="mission">{{ mission }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup>
defineProps({
  title: Object,
  items: Array,
  missions: String,
  date: String,
  stack: String
});
</script>
