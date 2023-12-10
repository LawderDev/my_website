<template>
  <div class="card card-compact w-[450px] bg-base-100 border-[1px] border-[#CAC4D0]">
    <div class="card-body">
      <h3 class="text-2xl text-center py-8">{{ title }}</h3>
      
      <div class="card bg-base-100 border-[1px] border-[#CAC4D0]" v-for="item in items" :key="item">
        <div class="card-body">
          <h3 class="text-lg">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

    </div>
  </div>
</template>
 
<script setup>
defineProps({
  title: String,
  items: Array,
});
</script>
