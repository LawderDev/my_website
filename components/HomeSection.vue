<template>
    <div class="flex items-center justify-center min-h-screen overflow-clip pt-10 z-1">
        <div class="w-[353px] hidden lg:flex">
          <Vue3Lottie
            :animationData="animate2"
            :width="300"
          />
        </div>
        <div class="relative">
          <Vue3Lottie
            :animationData="animate"
            :width="512"
          />
  
          <img src="/me.svg" alt="me" class="absolute top-20 left-24" />
  
          <div class="relative bottom-14">
            <h1 class="flex flex-col items-center text-6xl shadow_text">
              <span class="text-primary">Kenny Ramin,</span> Développeur
            </h1>
          </div>
  
          <Vue3Lottie
            class="relative bottom-14"
            :animationData="nextAnimation"
            :height="150"
            :width="150"
          />
        </div>
  
        <div>
          <Vue3Lottie
            class="hidden lg:flex"
            :animationData="animate3"
            :width="400"
          />
        </div>
      </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import animate from '~/assets/lotties/animate.json'
import animate2 from '~/assets/lotties/animate2.json'
import animate3 from '~/assets/lotties/animate3.json'
import nextAnimation from '~/assets/lotties/next.json'
</script>