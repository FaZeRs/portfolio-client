<script setup lang="ts">
import type { RouteParams } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

interface NavLink {
  name: string
  params?: Partial<RouteParams>
  title: string
  icon?: string
  display: 'all' | 'guest' | 'authorized'
}

const navLinks = computed<NavLink[]>(() => [
  {
    name: 'index',
    title: 'Home',
    display: 'all',
  },
  {
    name: 'experience',
    title: 'Experience',
    display: 'all',
  },
  {
    name: 'portfolio',
    title: 'Portfolio',
    display: 'all',
  },
  {
    name: 'contact',
    title: 'Contact',
    display: 'all',
  },
])

const mobileNav = ref(null)
const showMenu = ref(false)

function closeMobileNav() {
  showMenu.value = false
}
onClickOutside(mobileNav, closeMobileNav)
</script>

<template>
  <nav class="top-0 sticky z-40 shadow-lg bg-white dark:bg-slate-800">
    <div
      class="
        container
        h-18
        flex flex-row
        px-8
        justify-between
        items-center
        mx-auto
      "
    >
      <a href="#" class="flex items-center space-x-7">
        <span
          class="
            self-center
            text-3xl
            font-semibold
            whitespace-nowrap
            text-slate-800
            dark:text-white
          "
        >{Portfolio}</span>
      </a>
      <ul class="hidden md:flex flex-row self-end h-12 space-x-7 text-slate-700 dark:text-slate-300">
        <li v-for="link in navLinks" :key="link.name">
          <router-link
            :to="{ name: link.name }"
            class="
              hover:text-indigo-700
              dark:hover:text-white
              cursor-pointer
              font-medium
              tracking-wide
              flex
              items-start
              justify-center
              h-full
              px-2
            "
            active-class="dark:text-white text-indigo-700 border-b-3 border-indigo-700"
          >
            {{ link.title }}
          </router-link>
        </li>
      </ul>
      <button class="md:hidden text-gray-800 dark:text-gray-300" @click="showMenu = !showMenu">
        <div i="carbon-menu" />
      </button>

      <aside ref="mobileNav" class="p-5 transform top-0 left-0 w-64 bg-white dark:bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 shadow-2xl" :class="showMenu ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 text-lg" @click="closeMobileNav">
            <div i="carbon-close" />
          </button>
        </div>
        <ul class="font-sans">
          <li v-for="link in navLinks" :key="link.name">
            <router-link
              :to="{ name: link.name }"
              class="
                hover:text-indigo-700
                dark:hover:text-white
                cursor-pointer
                font-medium
                my-4
                inline-block
              "
              active-class="dark:text-white text-indigo-700 border-b-3 border-indigo-700"
              @click="closeMobileNav"
            >
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>
