<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl mt-6 class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-link class="icon-btn mx-2" to="/" title="Home">
      <div i-carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" title="Toggle dark mode" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/fazers/portfolio-client" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
