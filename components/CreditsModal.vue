<template>
    <dialog ref="modal" class="modal">
    <div class="modal-box">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-xl text-primary">Crédits</h3>
        <ul class="py-4 pl-4 list-disc">
          <li class="underline" v-for="link in state.links" :key="link"><a class="">link</a></li>
        </ul>
    </div>
    </dialog>
</template>

<script setup>
const modal = ref(false);
const props = defineProps({
  isOpen: Boolean
})

const state = reactive({
  links: [
    "",
    "",
    "",
    "",
    ""
  ],
});

watch(() => props.isOpen, () => {
  modal.value.showModal()
})
</script>