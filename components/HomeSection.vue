<template>
    <div class="flex items-center justify-center min-h-screen overflow-clip pt-10 z-1">
        <div class="w-[353px] hidden lg:flex">
          <Vue3Lottie
            animationLink="/lotties/animate2.json"
            :height="311"
            :width="244"
          />
        </div>
        <div class="relative">
          <Vue3Lottie
            animationLink="/lotties/animate.json"
            :height="512"
            :width="512"
          />
  
          <img src="/me.svg" alt="me" class="absolute top-20 left-24" />
  
          <div class="relative bottom-14">
            <h1 class="flex flex-col items-center text-6xl shadow_text">
              <span class="text-primary">Kenny Ramin,</span> Developer
            </h1>
          </div>
  
          <Vue3Lottie
            class="relative bottom-14"
            animationLink="/lotties/next.json"
            :height="150"
            :width="150"
          />
        </div>
  
        <div>
          <Vue3Lottie
            class="hidden lg:flex"
            animationLink="/lotties/animate3.json"
            :height="500"
            :width="353"
          />
        </div>
      </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
</script>