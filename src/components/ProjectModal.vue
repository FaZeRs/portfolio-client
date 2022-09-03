<script setup lang="ts">
import type { PropType } from 'vue'
import { toRefs } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

import type Project from '~/models/project'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object as PropType<Project>,
    default() {
      return {}
    },
  },
})
const emit = defineEmits(['close'])

const { showModal, project } = toRefs(props)
const galleryVisible = ref(false)
const imgIndex = ref(0)
const galleryImages = ref<string[]>([])

function closeModal(): void {
  emit('close')
}

watch(
  () => props.project,
  (first, second) => {
    if (!first || !first.images || first.images.length === 0)
      return []

    galleryImages.value = first.images.map((image) => {
      return image.url
    })
  },
)

function closeGallery(): void {
  galleryVisible.value = false
}
function openGallery(index: number): void {
  galleryVisible.value = true
  imgIndex.value = index
}
</script>

<template>
  <div v-if="project">
    <VueFinalModal
      v-model="showModal"
      classes="flex justify-center items-center"
      content-class="relative flex flex-col max-h-full mx-4 rounded"
      @click-outside="closeModal"
      @cancel="closeModal"
    >
      <div class="modal-dialog relative w-full max-w-3xl h-full md:h-auto">
        <div
          class="
            modal-content
            border-none
            shadow-lg
            relative
            flex flex-col
            w-full
            pointer-events-auto
            bg-white
            dark:bg-gray-800
            bg-clip-padding
            rounded-md
            outline-none
            text-current
          "
        >
          <div
            class="
              modal-header
              flex flex-shrink-0
              items-center
              justify-between
              p-4
              border-b border-gray-200
              dark:border-gray-600
              rounded-t-md
            "
          >
            <h5
              v-if="project.title"
              class="
                text-xl
                font-medium
                leading-normal
                text-indigo-700
                dark:text-indigo-500
              "
            >
              {{ project.title }}
            </h5>
            <button
              type="button"
              class="
                text-gray-400
                bg-transparent
                hover:bg-gray-200 hover:text-slate-900
                rounded-lg
                text-lg
                p-1.5
                ml-auto
                inline-flex
                items-center
                dark:hover:bg-slate-400 dark:hover:text-white
              "
              @click="closeModal"
            >
              <div i="carbon-close" />
            </button>
          </div>
          <div
            class="modal-body relative p-4 text-slate-600 dark:text-slate-300"
          >
            <span v-if="project.description">
              {{ project.description }}
            </span>
          </div>
          <div
            class="
              flex
              items-center
              p-6
              space-x-2
              border-t border-gray-200
              dark:border-gray-600
            "
          >
            <div
              class="
                mx-auto
                grid
                w-full
                grid-cols-3
                gap-2
                flex
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
                  class="shadow max-w-full h-48"
                  :alt="project.title"
                >
              </a>
            </div>
          </div>
          <div
            v-if="project.links && project.links.length > 0"
            class="
              flex
              items-center
              p-6
              space-x-2
              border-t border-gray-200
              dark:border-gray-600
            "
          >
            <div class="inline-flex">
              <a
                v-for="link in project.links"
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
                  border border-gray-200
                  hover:bg-gray-100 hover:text-blue-700
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
                <div v-if="link.icon" :i="link.icon" class="mr-2 w-4 h-4 fill-current" />
                {{ link.title }}
              </a>
            </div>
          </div>
          <div
            v-if="project.tags && project.tags.length > 0"
            class="
              flex
              items-center
              p-6
              space-x-2
              rounded-b
              border-t border-gray-200
              dark:border-gray-600
            "
          >
            <span
              v-for="tag in project.tags"
              :key="tag.id"
              class="
                bg-blue-100
                text-blue-800 text-sm
                font-medium
                mr-2
                px-2.5
                py-0.5
                rounded
                dark:bg-blue-200 dark:text-blue-800
              "
            >{{ tag.title }}</span>
          </div>
        </div>
      </div>
    </VueFinalModal>
    <VueEasyLightbox
      :visible="galleryVisible"
      :imgs="galleryImages"
      :index="imgIndex"
      @hide="closeGallery"
    />
  </div>
</template>
