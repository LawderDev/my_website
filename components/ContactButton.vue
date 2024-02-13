
import GitHub from './svgs/gitHub.vue';

import LinkedIn from './svgs/linkedIn.vue';
<template>
  <div class="flex flex-col justify-center items-center pt-40 pb-24 relative z-1 gap-5">
    <a href="mailto:kenny.ramin433@gmail.com">
      <button class="btn btn-primary animate-bounce-custom">Contact me !</button>
    </a>
    <div class="flex gap-5">
      <a class="btn p-0 animate-bounce-custom" href="https://www.linkedin.com/in/kenny-ramin/"><LinkedIn class="icon-size"></LinkedIn></a>
      <a class="btn p-0 animate-bounce-custom" href="https://github.com/LawderDev"><GitHub class="icon-size"></GitHub></a>
    </div>
  </div>
</template>

<script setup>
import LinkedIn from './svgs/icons/LinkedIn.vue';
import GitHub from './svgs/icons/GitHub.vue';
</script>
<style scoped>
.icon-size {
  width: 50px;
  height: 50px;
}
</style>
