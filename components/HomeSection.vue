<template>
    <div class="flex items-center justify-center min-h-screen overflow-clip pt-10 z-1">
        <div v-if="viewport.isGreaterOrEquals('desktop')" class="w-[353px]" data-aos="slide-left">
            <DotLottieVue
              autoplay
              loop
              :use-frame-interpolation="true"
              src="/lotties/animate2.lottie"
              class="w-[300] h-[300px]"
            />
        </div>
        <div class="relative" data-aos="fade-up">
          <DotLottieVue
              autoplay
              loop
              :use-frame-interpolation="true"
              src="/lotties/animate.lottie"
              class="w-[512px] h-[512px]"
              style="width:512px"
            />
            <MeSvg class="absolute top-20 left-24"></MeSvg>
  
          <div class="relative bottom-14">
            <h1 class="flex flex-col items-center text-6xl shadow_text">
              <span class="text-primary">Kenny Ramin,</span> Développeur
            </h1>
          </div>
          <DotLottieVue
              autoplay
              loop
              :use-frame-interpolation="true"
              src="/lotties/next.lottie"
              class="relative bottom-14 w-[150px] h-[150px] left-48"
            />
        </div>
  
        <div v-if="viewport.isGreaterOrEquals('desktop')" data-aos="slide-right">
          <DotLottieVue
              autoplay
              loop
              :use-frame-interpolation="true"
              src="/lotties/animate3.lottie"
              class="w-[400px] h-[400px]"
            />
        </div>
      </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const viewport = useViewport();
</script>