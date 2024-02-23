<template>
    <div class="navbar fixed backdrop-blur z-10 shadow-xl">
      <div class="navbar-start">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />
        <div class="drawer-content">
          <label for="my-drawer-3" aria-label="open sidebar">
            <div role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer-3"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <li>
              <a href="#" @click="handleLinkClick">Accueil</a>
            </li>
            <li>
              <a href="#project-section" @click="handleLinkClick">Mes réalisations</a>
            </li>
            <li>
              <a href="#about-section" @click="handleLinkClick">À propos</a>
            </li>
            <li>
              <a href="#contact-section" @click="handleLinkClick">Contact</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl" href="#">Kenny Ramin</a>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal px-1 text-md hidden lg:flex">
          <li>
            <a class="hover:text-primary animate-link" href="#"> Accueil </a>
          </li>
          <li>
            <a class="hover:text-primary animate-link" href="#project-section"
              >Mes réalisations</a
            >
          </li>
          <li>
            <a class="hover:text-primary animate-link" href="#about-section"
              >À propos</a
            >
          </li>
          <li>
            <a class="hover:text-primary animate-link" href="#contact-section"
              >Contact</a
            >
          </li>
        </ul>

        <NavBarResumeButton></NavBarResumeButton>
        <NavBarChangeTheme @toggleChangeMode="$emit('toggleChangeMode')"></NavBarChangeTheme>
      </div>
    </div>
</template>

<script setup>
defineEmits(["toggleChangeMode"]);

const isDrawerOpen = ref(false);

const handleLinkClick = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<style>
.animate-link:hover {
  text-shadow: 0.5px 0.5px 0 currentColor;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
</style>
