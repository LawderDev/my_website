<template>
  <div :data-theme="state.mode" class="font-raleway main-div">
    <header>

      <Background></Background>  

        <NavBar @toggleChangeMode="changeMode"></NavBar>

        <ClientOnly>
          <HomeSection id="home-section"></HomeSection>
        </ClientOnly>
    </header>

      <main>
        <ClientOnly>
          <ProjectSection id="project-section"></ProjectSection>
          <AboutSection data-aos="zoom-out-up" id="about-section"></AboutSection>
          <ContactButton data-aos="fade-down" id="contact-section"></ContactButton>
        </ClientOnly>
      </main>

    <footer>
      <FooterSection></FooterSection>
    </footer>
  </div>
</template>

<script setup>

const state = reactive({
  mode: "myLightTheme",
});

const changeMode = () => {
  state.mode = state.mode === "myLightTheme" ? "myDarkTheme" : "myLightTheme";
};
</script>

<style>
.main-div {
  overflow: hidden;
}

.shadow_text {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}

html {
 @apply scroll-smooth;
}

.animate-bounce-custom {
  @apply hover:animate-[pulse_1.15s_ease-in-out_infinite] ;
}
</style>
