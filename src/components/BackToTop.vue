<script setup lang="ts">
const state = reactive({ userScrollPosition: 0 })

const isScrolled = computed(() => {
  return state.userScrollPosition > 100
})

function updateScrollPosition(): void {
  state.userScrollPosition = window.scrollY
}

function backToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
})
</script>

<template>
  <!-- Scroll to top -->
  <transition name="fade">
    <div
      v-show="isScrolled"
      id="back-to-top"
      class="
        transition
        duration-500
        transform
        hover:scale-110
        rounded-full
        cursor-pointer
        flex
        p-2
        bg-indigo-500
        hover:bg-indigo-600
        text-white
        items-center
        hover:shadow-sm
        border-none
        ring-none
        outline-none
      "
      @click="backToTop"
    >
      <div i="carbon-chevron-up" />
    </div>
  </transition>
</template>
