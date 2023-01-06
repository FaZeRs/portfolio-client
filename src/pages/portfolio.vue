<script setup lang="ts">
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

import { removeTrailingSlash } from '~/helpers'
import type Project from '~/models/project'

const currentRoute = useRoute()
useHead({
  title: 'Portfolio',
  link: [
    {
      rel: 'canonical',
      href: removeTrailingSlash(import.meta.env.VITE_BASE_URL) + currentRoute.path,
    },
  ],
})

const data = ref<Project[]>([])
const error = ref(null)

const apiUrl = removeTrailingSlash(import.meta.env.VITE_API_URL)
fetch(`${apiUrl}/projects`)
  .then(res => res.json())
  .then(json => (data.value = json.data))
  .catch(err => (error.value = err))

const projectModal = ref<null | { setIsOpen: (value: boolean) => null; setIgnoreEvents: (value: boolean) => null }>(null)
const activeProject = ref<Project>()

function openProjectModal(project: Project): void {
  projectModal.value?.setIsOpen(true)
  activeProject.value = project
}

function projectImage(project: Project): string {
  if (project.images && project.images.length > 0)
    return project.images[0].url

  return 'https://atom.redpixelthemes.com//assets/img/portfolio-apple.jpeg'
}

const galleryVisible = ref(false)
const imgIndex = ref(0)
const galleryImages = ref<string[]>([])

watch(activeProject, (newProject) => {
  if (!newProject || !newProject.images || newProject.images.length === 0)
    return []
  galleryImages.value = newProject.images.map((image) => {
    return image.url
  })
})

function closeGallery(): void {
  galleryVisible.value = false
  projectModal.value?.setIgnoreEvents(false)
}

function openGallery(index: number): void {
  galleryVisible.value = true
  imgIndex.value = index
  projectModal.value?.setIgnoreEvents(true)
}
</script>

<template>
  <div id="portfolio" class="container mx-auto py-16 md:py-20 px-8">
    <h2 class="text-center text-4xl font-semibold uppercase text-indigo-700 sm:text-5xl lg:text-6xl">
      Check out my Portfolio
    </h2>
    <h3 class="pt-6 text-center text-xl font-medium text-black dark:text-slate-200 sm:text-2xl lg:text-3xl">
      Here's what I have done with the past
    </h3>

    <div v-if="error">
      Oops! Error encountered.
    </div>
    <div v-else-if="data" class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-3">
      <a v-for="project in data" :key="project.id" class="mx-auto transform transition-all hover:scale-105 md:mx-0 cursor-pointer" @click="openProjectModal(project)">
        <img
          :src="projectImage(project)"
          loading="lazy"
          class="shadow object-cover aspect-video h-min w-full lazy"
          :alt="project.title"
          width="250"
          height="250"
        >
      </a>
    </div>
    <div v-else>
      Loading...
    </div>
    <Modal ref="projectModal">
      <template #title>
        {{ activeProject?.title }}
      </template>
      <template #default>
        <div
          class="text-slate-600 dark:text-slate-300 p-6"
        >
          <span v-if="activeProject?.description">
            {{ activeProject.description }}
          </span>
        </div>
        <div
          v-if="activeProject?.images && activeProject?.images.length > 0"
          class="
              flex
              items-center
              my-2
              p-6
              space-x-2
              border-t
              border-gray-200
              dark:border-gray-600
            "
        >
          <div
            class="
                mx-auto
                grid
                w-full
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-2
              "
          >
            <a
              v-for="(image, key) in galleryImages"
              :key="key"
              class="
                  mx-auto
                  transform
                  transition-all
                  hover:scale-105
                  md:mx-0
                  cursor-pointer
                "
              @click="openGallery(key)"
            >
              <img
                :src="image"
                class="shadow max-w-full h-48 mx-auto"
                :alt="activeProject?.title"
                loading="lazy"
                width="200"
                height="200"
              >
            </a>
          </div>
        </div>
        <div
          v-if="activeProject?.links && activeProject?.links.length > 0"
          class="
              flex
              items-center
              p-6
              my-2
              space-x-2
              border-t
              border-gray-200
              dark:border-gray-600
            "
        >
          <div class="inline-flex">
            <a
              v-for="link in activeProject.links"
              :key="link.id"
              :href="link.url"
              target="_blank"
              class="
                  inline-flex
                  items-center
                  py-2
                  px-4
                  mr-2
                  text-sm
                  font-medium
                  text-gray-900
                  bg-white
                  rounded-l-lg
                  rounded-r-lg
                  border
                  border-gray-200
                  hover:bg-gray-100
                  hover:text-blue-700
                  focus:z-10
                  focus:ring-2
                  focus:ring-blue-700
                  focus:text-blue-700
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:text-white
                  dark:hover:text-white
                  dark:hover:bg-gray-600
                  dark:focus:ring-blue-500
                  dark:focus:text-white
                "
            >
              <div v-show="link.icon" class="mr-2 w-4 h-4 fill-current" :class="link.icon" />
              {{ link.title }}
            </a>
          </div>
        </div>
        <div
          v-if="activeProject?.tags && activeProject?.tags.length > 0"
          class="
              flex
              flex-row
              items-center
              p-6
              mt-2
              space-x-2
              rounded-b
              border-t
              border-gray-200
              dark:border-gray-600
              overflow-auto
            "
        >
          <span
            v-for="tag in activeProject.tags"
            :key="tag.id"
            class="
                bg-blue-100
                text-blue-800
                text-sm
                font-medium
                mr-2
                px-2.5
                py-0.5
                rounded
                dark:bg-blue-200
                dark:text-blue-800
                transform
                transition-all
                hover:scale-105
                cursor-pointer
              "
          >{{ tag.title }}</span>
        </div>
      </template>
    </Modal>
    <VueEasyLightbox
      :visible="galleryVisible"
      :imgs="galleryImages"
      :index="imgIndex"
      @hide="closeGallery"
    />
  </div>
</template>

<route lang="yaml">
name: portfolio
</route>
