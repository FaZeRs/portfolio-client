<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark, preferredDark } from '~/composables'

useHead({
  title: 'Nauris Linde',
  titleTemplate: title => `${title} | Nauris Linde`,
  meta: [
    { name: 'description', content: 'Nauris Linde\'s Portfolio' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
    { property: 'og:title', content: 'Nauris Linde' },
    { property: 'og:image', content: 'https://naurislinde.dev/avatar.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@naurislinde' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
