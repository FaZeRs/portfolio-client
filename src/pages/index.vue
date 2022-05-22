<script setup lang="ts">
import { isDark } from '~/composables'
</script>

<template>
  <div>
    <div
      class="relative bg-cover bg-center bg-no-repeat py-8"
      style="
        background-image: url(https://atom.redpixelthemes.com/assets/img/bg-hero.jpg);
      "
    >
      <div
        bg-gradient="to-r from-indigo-800 to-indigo-900"
        class="absolute inset-0 z-20 bg-cover bg-center bg-no-repeat opacity-90"
      ></div>

      <div
        class="container relative z-30 pt-20 pb-12 lg:pt-34 lg:pb-34 mx-auto"
      >
        <div class="flex flex-col items-center justify-center lg:flex-row">
          <div class="rounded-full border-8 border-indigo-700 shadow-xl">
            <img
              src="https://atom.redpixelthemes.com/assets/img/blog-author.jpg"
              class="h-48 rounded-full sm:h-56"
              alt="author"
            />
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
                  <i class="bx bx-chevron-right text-3xl text-yellow"></i>
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
                <a href="/" class="pl-4 transform transition-all hover:scale-125">
                  <div i="carbon-logo-github" />
                </a>
                <a href="/" class="pl-4 transform transition-all hover:scale-125">
                  <div i="carbon-logo-facebook" />
                </a>
                <a href="/" class="pl-4 transform transition-all hover:scale-125">
                  <div i="carbon-logo-twitter" />
                </a>
                <a href="/" class="pl-4 transform transition-all hover:scale-125">
                  <div i="carbon-logo-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 dark:text-white" id="about">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div class="container py-16 md:py-20 mx-auto dark:text-white text-primary px-8" id="services">
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
                src="https://atom.redpixelthemes.com/assets/img/icon-development-white.svg"
                alt="development icon"
              />
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-development-white.svg"
                alt="development icon"
              />
            </div>
            <div class="block group-hover:hidden">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-development-black.svg"
                alt="development icon"
              />
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              WEB DEVELOPMENT
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div class="block group-hover:hidden">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Technical Writing
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-mobile-white.svg"
                alt="Mobile Application icon"
              />
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-mobile-white.svg"
                alt="Mobile Application icon"
              />
            </div>
            <div class="block group-hover:hidden">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-mobile-black.svg"
                alt="Mobile Application icon"
              />
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-email-white.svg"
                alt="Email Marketing icon"
              />
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-email-white.svg"
                alt="Email Marketing icon"
              />
            </div>
            <div class="block group-hover:hidden">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-email-black.svg"
                alt="Email Marketing icon"
              />
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-design-white.svg"
                alt="Theme Design icon"
              />
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-design-white.svg"
                alt="Theme Design icon"
              />
            </div>
            <div class="block group-hover:hidden">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-design-black.svg"
                alt="Theme Design icon"
              />
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Graphic Design
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 transform transition-all hover:scale-105">
          <div v-if="isDark" class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-graphics-white.svg"
                alt="Graphic Design icon"
              />
            </div>
          </div>
          <div v-else class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-graphics-white.svg"
                alt="Graphic Design icon"
              />
            </div>
            <div class="block group-hover:hidden">
              <img
                src="https://atom.redpixelthemes.com/assets/img/icon-graphics-black.svg"
                alt="Graphic Design icon"
              />
            </div>
          </div>
          <div class="text-center">
            <h3
              class="
                pt-8
                text-lg
                font-semibold
                text-indigo-700
                uppercase
                group-hover:text-yellow
                lg:text-xl
              "
            >
              Web Design
            </h3>
            <p
              class="text-slate-600 dark:text-slate-300 pt-4 text-sm group-hover:text-white md:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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