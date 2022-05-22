<script setup lang="ts">
	useHead({
		title: 'Experience',
	});
</script>

<template>
<div class="container mx-auto py-16 md:py-20" id="work">
  <h2 class="text-center font-header text-4xl font-semibold uppercase text-indigo-700 sm:text-5xl lg:text-6xl">
    My experience
  </h2>
  <h3 class="pt-6 text-center font-header text-xl font-medium text-black dark:text-slate-200 sm:text-2xl lg:text-3xl">
    Here's what I did before
  </h3>

  <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span class="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-gray-500 md:block"></span>

    <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div class="md:w-2/5">
        <div class="flex justify-center md:justify-start">
          <span class="shrink-0">
            <img src="https://atom.redpixelthemes.com/assets/img/logo-spotify.svg" class="h-auto w-32" alt="company logo">
          </span>
          <div class="relative ml-3 hidden w-full md:block">
            <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></span>
          </div>
        </div>
      </div>
      <div class="md:w-3/5">
        <div class="relative flex md:pl-18">
          <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-500 bg-white md:block"></span>

          <div class="mt-1 flex">
            <div i="carbon-caret-right" class="hidden text-indigo-700 md:block" />
            <div class="flex-1 md:-mt-1 md:pl-8">
              <span class="block text-slate-500 dark:text-slate-400">Apr 2015 - Mar 2018</span>
              <span class="block pt-2 font-header text-xl font-bold uppercase text-indigo-700">Frontend Developer</span>
              <div class="pt-2">
                <span class="block font-body text-black dark:text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div class="md:w-2/5">
        <div class="flex justify-center md:justify-start">
          <span class="shrink-0">
            <img src="https://atom.redpixelthemes.com/assets/img/logo-microsoft.svg" class="h-auto w-32" alt="company logo">
          </span>
          <div class="relative ml-3 hidden w-full md:block">
            <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></span>
          </div>
        </div>
      </div>
      <div class="md:w-3/5">
        <div class="relative flex md:pl-18">
          <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-500 bg-white md:block"></span>

          <div class="mt-1 flex">
            <div i="carbon-caret-right" class="hidden text-indigo-700 md:block" />
            <div class="flex-1 md:-mt-1 md:pl-8">
              <span class="block text-slate-500 dark:text-slate-400">Mar 2018 - September 2019</span>
              <span class="block pt-2 font-header text-xl font-bold uppercase text-indigo-700">Software Engineer</span>
              <div class="pt-2">
                <span class="block font-body text-black dark:text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div class="md:w-2/5">
        <div class="flex justify-center md:justify-start">
          <span class="shrink-0">
            <img src="https://atom.redpixelthemes.com/assets/img/logo-fedex.svg" class="h-auto w-32" alt="company logo">
          </span>
          <div class="relative ml-3 hidden w-full md:block">
            <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></span>
          </div>
        </div>
      </div>
      <div class="md:w-3/5">
        <div class="relative flex md:pl-18">
          <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-500 bg-white md:block"></span>

          <div class="mt-1 flex">
            <div i="carbon-caret-right" class="hidden text-indigo-700 md:block" />
            <div class="flex-1 md:-mt-1 md:pl-8">
              <span class="block text-slate-500 dark:text-slate-400">October 2019 - Feb 2021</span>
              <span class="block pt-2 font-header text-xl font-bold uppercase text-indigo-700">DevOps Engineer</span>
              <div class="pt-2">
                <span class="block font-body text-black dark:text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<route lang="yaml">
name: experience
</route>