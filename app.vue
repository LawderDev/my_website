<template>
  <div :data-theme="state.mode" class="font-raleway main-div">
    <header>
      <video
        id="background-video"
        class="fadeIn z-0 w-[100vw] h-[100vh]"
        autoplay
        muted
        @ended="removeFadeOutVideo($event)"
      >
        <source src="/bg.webm" type="video/webm" />
      </video>

      <NavBar @toggleChangeMode="changeMode"></NavBar>
      
      <ClientOnly>
        <HomeSection data-aos="slide-up" id="home-section"></HomeSection>
      </ClientOnly>
    </header>

      <main>
        <ClientOnly>
          <ProjectSection data-aos="slide-up" id="project-section"></ProjectSection>
        </ClientOnly>
        <ClientOnly>
          <AboutSection data-aos="slide-up" id="about-section"></AboutSection>
        </ClientOnly>
        <ClientOnly>
          <ContactButton data-aos="slide-up" id="contact-section"></ContactButton>
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

const removeFadeOutVideo = (event) => {
  // Get the HTMLMediaElement object for the video
  const videoElement = event.target;

  // Fade out the video
  videoElement.style.opacity = 0;

  setTimeout(() => {
    videoElement.play();

    // Fade in the video after 2 seconds
    setTimeout(() => {
      videoElement.style.opacity = 1;
    }, 1000);
  }, 1000);
};
</script>

<style>
.main-div {
  overflow: hidden;
}

[data-theme="myDarkTheme"] #background-video {
  filter: invert(0.9) !important;
}

#background-video {
  height: 100vh;
  opacity: 1;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
