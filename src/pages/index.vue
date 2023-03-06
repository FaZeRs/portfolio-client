<script setup lang="ts">
import { sanitizeUrl } from '@braintree/sanitize-url'

const avatar = ref('')
const bgHero = ref('')

import('~/assets/images/avatar.webp').then(module => avatar.value = module.default)
import('~/assets/images/bg-hero.webp').then(module => bgHero.value = module.default)

const {
  VITE_GITHUB_URL,
  VITE_FACEBOOK_URL,
  VITE_TWITTER_URL,
  VITE_LINKEDIN_URL,
  VITE_BASE_URL,
} = import.meta.env

const githubUrl = VITE_GITHUB_URL
const facebookUrl = VITE_FACEBOOK_URL
const twitterUrl = VITE_TWITTER_URL
const linkedinUrl = VITE_LINKEDIN_URL

const currentRoute = useRoute()
useHead({
  title: 'Home',
  link: [
    {
      rel: 'canonical',
      href: sanitizeUrl(VITE_BASE_URL + currentRoute.path),
    },
  ],
})
</script>

<template>
  <div>
    <div
      class="relative bg-cover bg-center bg-no-repeat py-8"
      :style="`background-image: url(${bgHero});`"
    >
      <div
        bg-gradient="to-r from-indigo-800 to-indigo-900"
        class="absolute inset-0 z-20 bg-cover bg-center bg-no-repeat opacity-90"
      />

      <div
        class="container relative z-30 pt-20 pb-12 lg:pt-34 lg:pb-34 mx-auto px-8"
      >
        <div class="flex flex-col items-center justify-center lg:flex-row">
          <div class="rounded-full border-8 border-indigo-700 shadow-xl">
            <img
              :src="avatar"
              class="h-48 rounded-full sm:h-56"
              alt="Nauris Linde"
              loading="lazy"
              width="224"
              height="224"
            >
          </div>
          <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1
              class="
                text-center
                text-4xl text-white
                sm:text-left sm:text-5xl
                md:text-6xl
              "
            >
              Hello I'm Nauris Linde!
            </h1>
            <div
              class="
                flex flex-col
                justify-center
                pt-3
                sm:flex-row sm:pt-5
                lg:justify-start
              "
            >
              <div
                class="
                  flex
                  items-center
                  justify-center
                  pl-0
                  sm:justify-start
                  md:pl-1
                "
              >
                <p class="font-body text-lg uppercase text-white">
                  Let's connect
                </p>
                <div class="hidden sm:block">
                  <div i="carbon-chevron-right" class="text-2xl text-yellow" />
                </div>
              </div>
              <div
                class="
                  flex
                  items-center
                  justify-center
                  pt-5
                  pl-2
                  sm:justify-start sm:pt-0
                  text-white text-2xl
                "
              >
                <a :href="sanitizeUrl(githubUrl)" target="_blank" class="pl-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-github" />
                </a>
                <a :href="sanitizeUrl(linkedinUrl)" target="_blank" class="pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-linkedin" />
                </a>
                <a :href="sanitizeUrl(facebookUrl)" target="_blank" class="pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-facebook" />
                </a>
                <a :href="sanitizeUrl(twitterUrl)" target="_blank" class="pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" class="bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div
        class="
          container
          flex flex-col
          items-center
          py-16
          md:py-20
          lg:flex-row
          mx-auto
          px-8
        "
      >
        <div class="w-full text-center lg:text-left">
          <h2
            class="
              text-4xl
              font-semibold
              uppercase
              text-indigo-700
              sm:text-5xl
              lg:text-6xl
            "
          >
            Who am I?
          </h2>
          <h4
            class="
              pt-6
              text-xl
              font-medium
              sm:text-2xl
              lg:text-3xl
            "
          >
            I'm Nauris Linde, a Backend Developer
          </h4>
          <p class="pt-6 font-body leading-relaxed text-slate-600 dark:text-slate-300">
            I am a C++ developer with expertise in desktop app and full-stack web dev. I create high-quality software using various skills and knowledge.
          </p>
          <p class="pt-6 font-body leading-relaxed text-slate-600 dark:text-slate-300">
            My C++ skills enable me to design complex and efficient desktop apps for Windows, Linux, and macOS. I use C++ libraries and frameworks like Qt, OpenCV, and STL to optimize code and build scalable applications.
          </p>
          <p class="pt-6 font-body leading-relaxed text-slate-600 dark:text-slate-300">
            I am proficient in full-stack web dev using NodeJS, Typescript, VueJS, and NestJS. I develop e-commerce platforms, dashboards, and inventory management systems.
          </p>
        </div>
      </div>
    </div>
    <Services />
  </div>
</template>

<route lang="yaml">
name: index
</route>
