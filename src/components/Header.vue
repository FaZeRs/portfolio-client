<script setup lang="ts">
import type { RouteParams } from "vue-router";

interface NavLink {
  name: string;
  params?: Partial<RouteParams>;
  title: string;
  icon?: string;
  display: "all" | "guest" | "authorized";
}

const navLinks = computed<NavLink[]>(() => [
  {
    name: "index",
    title: "Home",
    display: "all",
  },
  {
    name: "experience",
    title: "Experience",
    display: "all",
  },
  {
    name: "portfolio",
    title: "Portfolio",
    display: "all",
  },
  {
    name: "contact",
    title: "Contact",
    display: "all",
  },
]);
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
          >{Portfolio}</span
        >
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
      <button class="md:hidden icon-btn text-gray-400">
        <div i="carbon-menu" />
      </button>
    </div>
  </nav>
</template>