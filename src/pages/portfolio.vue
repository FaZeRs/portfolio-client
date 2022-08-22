<script setup lang="ts">
import { ref } from 'vue'

import ProjectModal from '~/components/ProjectModal.vue'
import { removeTrailingSlash } from '~/helpers'
import type Project from '~/models/project'

useHead({
  title: 'Portfolio',
})

const data = ref<Project[]>([])
const error = ref(null)

const apiUrl = removeTrailingSlash(import.meta.env.VITE_API_URL)
fetch(`${apiUrl}/projects`)
  .then(res => res.json())
  .then(json => (data.value = json.data))
  .catch(err => (error.value = err))

const modalVisible = ref(false)
const activeProject = ref<Project>()

function openProjectModal(project: Project): void {
  modalVisible.value = true
  activeProject.value = project
}

function closeProjectModal(): void {
  modalVisible.value = false
  activeProject.value = {} as Project
}

function projectImage(project: Project): string {
  if (project.images && project.images.length > 0)
    return project.images[0].url

  return 'https://atom.redpixelthemes.com//assets/img/portfolio-apple.jpeg'
}
</script>

<template>
  <div id="portfolio" class="container mx-auto py-16 md:py-20">
    <h2 class="text-center font-header text-4xl font-semibold uppercase text-indigo-700 sm:text-5xl lg:text-6xl">
      Check out my Portfolio
    </h2>
    <h3 class="pt-6 text-center font-header text-xl font-medium text-black dark:text-slate-200 sm:text-2xl lg:text-3xl">
      Here's what I have done with the past
    </h3>

    <div v-if="error">
      Oops! Error encountered.
    </div>
    <div v-else-if="data" class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-3">
      <a v-for="project in data" :key="project.id" class="mx-auto transform transition-all hover:scale-105 md:mx-0 cursor-pointer" @click="openProjectModal(project)">
        <img :src="projectImage(project)" class="shadow object-cover aspect-video h-min w-full" :alt="project.title">
      </a>
    </div>
    <div v-else>
      Loading...
    </div>
    <ProjectModal :show-modal="modalVisible" :project="activeProject" @close="closeProjectModal" />
  </div>
</template>

<route lang="yaml">
name: portfolio
</route>
