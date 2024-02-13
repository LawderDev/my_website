<template>
    <div class="flex items-center justify-center min-h-screen overflow-clip pt-10 z-1">
        <div v-if="viewport.isGreaterOrEquals('desktop')" class="w-[353px]" data-aos="slide-left">
            <DotLottieVue
              autoplay
              loop
              src="/lotties/animate2.lottie"
              class="w-[300] h-[300px]"
            />
        </div>
        <div class="relative" data-aos="fade-up">
          <DotLottieVue
              autoplay
              loop
              src="/lotties/animate.lottie"
              class="w-[512px] h-[512px]"
              style="width:512px"
            />
          <img src="/me.svg" alt="me" class="absolute top-20 left-24" />
  
          <div class="relative bottom-14">
            <h1 class="flex flex-col items-center text-6xl shadow_text">
              <span class="text-primary">Kenny Ramin,</span> Développeur
            </h1>
          </div>
          <DotLottieVue
              autoplay
              loop
              src="/lotties/next.lottie"
              class="relative bottom-14 w-[150px] h-[150px] left-48"
            />
        </div>
  
        <div v-if="viewport.isGreaterOrEquals('desktop')" data-aos="slide-right">
          <DotLottieVue
              autoplay
              loop
              src="/lotties/animate3.lottie"
              class="w-[400px] h-[400px]"
            />
        </div>
      </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import animate from '~/assets/lotties/animate.lottie';
import animate2 from '~/assets/lotties/animate2.lottie';
import animate3 from '~/assets/lotties/animate3.lottie';
import next from '~/assets/lotties/next.lottie';
import axios from 'axios';

/*const lottieBuffers = reactive([]);

const getLottieBuffers = async () => {
  const lottieFiles = await axios.get('../assets/lotties');

  const lotties = await Promise.all(
    lottieFiles.data.map(async (fileName) => {
      const filePath = `/assets/lotties/${fileName}`;
      const response = await axios.get(filePath, { responseType: 'arraybuffer' });
      return response.data;
    })
  );

  return lotties;
}

lottieBuffers.value = await getLottieBuffers()*/

const viewport = useViewport();
</script>