<script setup lang="ts">
import { isDark } from '~/composables'
import { removeTrailingSlash } from '~/helpers'
import avatar from '~/assets/images/avatar.jpg'
import bgHero from '~/assets/images/bg-hero.jpg'
import iconWebDevelopmentWhite from '~/assets/images/icon-web-development-white.svg'
import iconWebDevelopmentBlack from '~/assets/images/icon-web-development-black.svg'
import iconAppDevelopmentWhite from '~/assets/images/icon-app-development-white.svg'
import iconAppDevelopmentBlack from '~/assets/images/icon-app-development-black.svg'
import iconServerWhite from '~/assets/images/icon-server-white.svg'
import iconServerBlack from '~/assets/images/icon-server-black.svg'
import iconSeoWhite from '~/assets/images/icon-seo-white.svg'
import iconSeoBlack from '~/assets/images/icon-seo-black.svg'
import iconMobileWhite from '~/assets/images/icon-mobile-white.svg'
import iconMobileBlack from '~/assets/images/icon-mobile-black.svg'
import iconEmailWhite from '~/assets/images/icon-email-white.svg'
import iconEmailBlack from '~/assets/images/icon-email-black.svg'

const githubUrl = import.meta.env.VITE_GITHUB_URL
const facebookUrl = import.meta.env.VITE_FACEBOOK_URL
const twitterUrl = import.meta.env.VITE_TWITTER_URL
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL

useHead({
  title: 'Home',
  link: [
    {
      rel: 'canonical',
      href: removeTrailingSlash(import.meta.env.VITE_BASE_URL) + useRoute().path,
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
        class="container relative z-30 pt-20 pb-12 lg:pt-34 lg:pb-34 mx-auto"
      >
        <div class="flex flex-col items-center justify-center lg:flex-row">
          <div class="rounded-full border-8 border-indigo-700 shadow-xl">
            <img
              :src="avatar"
              class="h-48 rounded-full sm:h-56"
              alt="Nauris Linde"
            >
          </div>
          <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1
              class="
                text-center
                font-header
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
                <a :href="githubUrl" target="_blank" class="pl-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-github" />
                </a>
                <a :href="linkedinUrl" target="_blank" class="pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-linkedin" />
                </a>
                <a :href="facebookUrl" target="_blank" class="pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
                  <div i="carbon-logo-facebook" />
                </a>
                <a :href="twitterUrl" target="_blank" class="pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellow">
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
              font-header
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
              font-header
              text-xl
              font-medium
              sm:text-2xl
              lg:text-3xl
            "
          >
            I'm Nauris Linde, a Backend Developer
          </h4>
          <p class="pt-6 font-body leading-relaxed text-slate-600 dark:text-slate-300">
            Currently I'm working as C++ Developer at Giraffe360. I have been programming for 7 years.
          </p>
        </div>
      </div>
    </div>
    <div id="services" class="container py-16 md:py-20 mx-auto dark:text-white text-primary px-8">
      <h2
        class="
          text-center
          font-header
          text-4xl
          font-semibold
          text-indigo-700
          uppercase
          sm:text-5xl
          lg:text-6xl
        "
      >
        Here's what I'm good at
      </h2>
      <h3
        class="
          pt-6
          text-center
          font-header
          text-xl
          font-medium
          sm:text-2xl
          lg:text-3xl
        "
      >
        These are the services I offer
      </h3>

      <div
        class="
          grid grid-cols-1
          gap-6
          pt-10
          sm:grid-cols-2
          md:gap-10 md:pt-12
          lg:grid-cols-3
        "
      >
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 dark:hover:bg-indigo-700 hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                :src="iconWebDevelopmentWhite"
                alt="Web Development"
              >
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                :src="iconWebDevelopmentWhite"
                alt="Web Development"
              >
            </div>
            <div class="block group-hover:hidden">
              <img
                :src="iconWebDevelopmentBlack"
                alt="Web Development"
              >
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                dark:text-indigo-500
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Web Development
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Modern and mobile-ready website that will help you reach all of your marketing.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                :src="iconAppDevelopmentWhite"
                alt="Application Development"
              >
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                :src="iconAppDevelopmentWhite"
                alt="Application Development"
              >
            </div>
            <div class="block group-hover:hidden">
              <img
                :src="iconAppDevelopmentBlack"
                alt="Application Development"
              >
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                dark:text-indigo-500
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Application Development
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              User-friendly desktop application development to boost your productivity.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                :src="iconMobileWhite"
                alt="Mobile Development"
              >
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                :src="iconMobileWhite"
                alt="Mobile Development"
              >
            </div>
            <div class="block group-hover:hidden">
              <img
                :src="iconMobileBlack"
                alt="Mobile Development"
              >
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                dark:text-indigo-500
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Mobile Development
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Mobile application development is a highlight that businesses are interested in at the moment and in the future.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                :src="iconEmailWhite"
                alt="Email Development"
              >
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                :src="iconEmailWhite"
                alt="Email Development"
              >
            </div>
            <div class="block group-hover:hidden">
              <img
                :src="iconEmailBlack"
                alt="Email Development"
              >
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                dark:text-indigo-500
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Email Development
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Designing and coding your emails so that every single subscriber can engage with them.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                :src="iconSeoWhite"
                alt="SEO Optimization"
              >
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                :src="iconSeoWhite"
                alt="SEO Optimization"
              >
            </div>
            <div class="block group-hover:hidden">
              <img
                :src="iconSeoBlack"
                alt="SEO Optimization"
              >
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                dark:text-indigo-500
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              SEO Optimization
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Improving your site to increase its visibility when people search for products or services related to your business.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                :src="iconServerWhite"
                alt="Server Management"
              >
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                :src="iconServerWhite"
                alt="Server Management"
              >
            </div>
            <div class="block group-hover:hidden">
              <img
                :src="iconServerBlack"
                alt="Server Management"
              >
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                dark:text-indigo-500
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Server Management
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Managing hardware and software components of servers in an effort to have the servers function as expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: index
</route>
