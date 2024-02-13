<template>
    <div class="flex items-center justify-center min-h-screen overflow-clip pt-10 z-1">
        <div v-if="isDesktop" class="w-[353px] hidden lg:flex" data-aos="slide-left">
            <DotLottieVue
              autoplay
              loop
              class="w-[300] h-[300px]"
              src="/lotties/animate2.lottie"
            />
        </div>
        <div class="relative" data-aos="fade-up">
          <DotLottieVue
              autoplay
              loop
              class="w-[512px] h-[512px]"
              style="width:512px"
              src="/lotties/animate.lottie"
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
              class="relative bottom-14 w-[150px] h-[150px] left-48"
              src="/lotties/next.lottie"
            />
        </div>
  
        <div v-if="isDesktop" data-aos="slide-right" class="hidden lg:flex">
          <DotLottieVue
              autoplay
              loop
              class="w-[400px] h-[400px]"
              src="/lotties/animate3.lottie"
            />
        </div>
      </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
/*import { DotLottie } from "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
const lottieAnimate = ref(null)
const lottieAnimate2 = ref(null)
const lottieAnimate3 = ref(null)
const lottieNext = ref(null)

const initLotties = () => {
  new DotLottie({
	  canvas: lottieAnimate.value,
	  src: "/lotties/animate.lottie",
	  loop: true,
	  autoplay: true
	});

  new DotLottie({
	  canvas: lottieNext.value,
	  src: "/lotties/next.lottie",
	  loop: true,
	  autoplay: true
	});
}

const initConditionalLotties = () => {
  if(lottieAnimate2.value){
    new DotLottie({
	  canvas: lottieAnimate2.value,
	  src: "/lotties/animate2.lottie",
	  loop: true,
	  autoplay: true
	});
  }

  if(lottieAnimate3.value){
    new DotLottie({
	  canvas: lottieAnimate3.value,
	  src: "/lotties/animate3.lottie",
	  loop: true,
	  autoplay: true
	});
  }
}

onMounted(() => {
  initLotties()
  initConditionalLotties()
})*/

const isDesktop = window.matchMedia('(min-width: 1024px)').matches
</script>