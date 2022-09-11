<script setup lang="ts">
import { ref } from 'vue'

import { formatDate, removeTrailingSlash } from '~/helpers'
import type Experience from '~/models/experience'

useHead({
  title: 'Experience',
})

const data = ref<Experience[]>([])
const error = ref(null)

const apiUrl = removeTrailingSlash(import.meta.env.VITE_API_URL)
fetch(`${apiUrl}/experiences`)
  .then(res => res.json())
  .then(json => (data.value = json.data))
  .catch(err => (error.value = err))

function dateTo(experience: Experience): string {
  if (experience.onGoing)
    return 'Present'

  if (experience.dateTo)
    return formatDate(experience.dateTo)

  return formatDate(new Date())
}
</script>

<template>
  <div id="work" class="container mx-auto py-16 md:py-20">
    <h2 class="text-center font-header text-4xl font-semibold uppercase text-indigo-700 sm:text-5xl lg:text-6xl">
      My experience
    </h2>
    <h3 class="pt-6 text-center font-header text-xl font-medium text-black dark:text-slate-200 sm:text-2xl lg:text-3xl">
      Here's what I did before
    </h3>

    <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
      <div v-if="error">
        Oops! Error encountered.
      </div>
      <div v-else-if="data">
        <span class="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-gray-500 md:block" />

        <div v-for="experience in data" :key="experience.id" class="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <div v-if="experience.logo" class="flex justify-center md:justify-start">
              <span class="shrink-0">
                <img :src="experience.logo.url" class="h-12 max-w-full" alt="company logo">
              </span>
              <div class="relative ml-3 hidden w-full md:block">
                <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>
          </div>
          <div class="md:w-3/5">
            <div class="relative flex md:pl-18 justify-center md:justify-start">
              <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-500 bg-white md:block" />

              <div class="mt-1 flex">
                <div i="carbon-caret-right" class="hidden text-indigo-700 md:block" />
                <div class="flex-1 md:-mt-1 md:pl-8">
                  <span class="block text-slate-500 dark:text-slate-400">{{ formatDate(experience.dateFrom) }} - {{ dateTo(experience) }}</span>
                  <span class="block pt-2 font-header text-xl uppercase text-indigo-700 dark:text-indigo-500">{{ experience.title }}</span>
                  <a v-if="experience.website" :href="experience.website" target="_blank" class="block pt-2 font-header uppercase text-slate-600 dark:text-slate-300">{{ experience.organisation }}</a>
                  <span v-else class="block pt-2 font-header uppercase text-slate-600 dark:text-slate-300">{{ experience.organisation }}</span>
                  <div v-if="experience.description" class="pt-2">
                    <span class="block font-body text-black dark:text-slate-300">{{ experience.description }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: experience
</route>
