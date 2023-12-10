<template>
  <div :data-theme="state.mode" class="font-raleway">
    <video id="background-video" autoplay loop muted>
      <source src="/background.mp4" type="video/mp4">
    </video>
    <!-- <NuxtWelcome /> -->
    <NavBar @toggleChangeMode="changeMode"></NavBar>

    <HomeSection></HomeSection>

    <ProjectSection></ProjectSection>

    <AboutSection></AboutSection>

  </div>
</template>

<script setup>
const state = reactive({
  mode: "light",
});

const changeMode = () => {
  state.mode = state.mode === "light" ? "dark" : "light";
};
</script>

<style>
#background-video {
  height: 100vh;
  opacity: 20%;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
