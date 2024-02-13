<template>
    <div data-aos="fade-up">
        div class="flex flex-col relative z-1 w-full items-center pb-20">
        <p class="flex text-center justify-center items-center">@2024 Copyright: Kenny Ramin</p>
        <button @click="isModalOpen = !isModalOpen" class="flex text-center justify-center items-center underline hover:text-primary" href="/credits">Crédits</button> 
    </div>     
    <CreditsModal :is-open="isModalOpen"></CreditsModal>
</template>

<script setup>
import CreditsModal from './CreditsModal.vue';

const isModalOpen = ref(false);

</script>