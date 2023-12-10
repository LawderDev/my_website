<template>
  <div :data-theme="state.mode" class="font-raleway"> 
    <!-- <NuxtWelcome /> -->
    <div class="fiex space-x-4 items-center">
      <div class="navbar bg-base-100 fixed">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">daisyUI</a>
       
      
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>

          <a class="btn btn-primary">Get my Resume</a>
          <label class="swap swap-rotate ml-4">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" @click="changeMode" />
            
            <!-- sun icon -->
            <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            
            <!-- moon icon -->
            <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
          </label>

        </div>
      </div>
    </div>
    <div class="flex items-center justify-center h-screen overflow-clip">
      
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

      <img src="/me.svg" alt="me" class="absolute top-20 left-24">
        
      <div class="relative bottom-14">
        <h1 class="flex flex-col items-center text-6xl">
          <span class="text-primary">Ramin Kenny,</span> Developer 
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

   <!-- PROJECTS -->
   <div class="h-screen  flex flex-col align-center ">
    <h2 class="text-5xl mt-24 mb-10 text-center">My <span class="text-primary">Project</span></h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      <!-- FOREACH PROJECT-->
     <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://images.assetsdelivery.com/compings_v2/kapona/kapona2111/kapona211100019.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">See more</button>
          </div>
        </div>
      </div>

      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://images.assetsdelivery.com/compings_v2/kapona/kapona2111/kapona211100019.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">See more</button>
          </div>
        </div>
      </div>

      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://images.assetsdelivery.com/compings_v2/kapona/kapona2111/kapona211100019.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>

  <div class="h-screen  flex flex-col align-center ">
    <h2 class="text-5xl mt-24 mb-10 text-center">My <span class="text-primary">Project</span></h2>
  </div>
</template>

<script setup>
    import { Vue3Lottie } from 'vue3-lottie'
    const state = reactive({
      mode: 'light'
    })

    const changeMode = () => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
</script>
