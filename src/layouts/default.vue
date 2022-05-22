<template>
  <div class="bg-gray-100 dark:bg-gray-900">
    <Header />
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
      <Footer />
    </main>
    <div
      class="
        flex
        space-x-2
        mr-8
        mb-6
        right-0
        bottom-0
        z-50
        fixed
        items-center
        sm:space-x-4
      "
    >
      <BackToTop />
    </div>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.4s;
  animation-delay: 0.2s;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>