<script setup lang="ts">
	useHead({
		title: 'Contact',
	});
</script>

<template>
<div class="container mx-auto py-16 md:py-20" id="contact">
  <h2 class="text-center font-header text-4xl font-semibold uppercase text-indigo-700 sm:text-5xl lg:text-6xl">
    Here's a contact form
  </h2>
  <h4 class="pt-6 text-center font-header text-xl font-medium text-black dark:text-slate-200 sm:text-2xl lg:text-3xl">
    Have Any Questions?
  </h4>
  <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
    <p class="font-body text-slate-600 dark:text-slate-400">
      Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
      condimentum turpis nisl sem, viverra habitasse urna ante lobortis
      fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
      accumsan.
    </p>
  </div>
  <form class="mx-auto w-full pt-10 sm:w-3/4">
    <div class="flex flex-col md:flex-row">
      <input class="mr-3 w-full rounded border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-indigo-500 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5 dark:bg-gray-900 dark:text-white" placeholder="Name" type="text" id="name">
      <input class="mt-6 w-full rounded border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-indigo-500 px-4 py-3 font-body text-black dark:bg-gray-900 dark:text-white md:mt-0 md:ml-3 md:w-1/2 lg:ml-5" placeholder="Email" type="text" id="email">
    </div>
    <textarea class="mt-6 w-full rounded border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-indigo-500 px-4 py-3 font-body text-black dark:bg-gray-900 dark:text-white md:mt-8" placeholder="Message" id="message" cols="30" rows="10"></textarea>
    <button class="mt-6 flex items-center justify-center rounded bg-indigo-500 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-indigo-700">
      Send
      <div i="carbon-chevron-right" class="relative -right-2 text-xl" />
    </button>
  </form>
  <div class="flex flex-col pt-16 lg:flex-row">
    <div class="w-full border-l-1 border-t-1 border-r-1 border-b-1 border-slate-300 px-6 py-6 sm:py-8 lg:w-1/3">
      <div class="flex items-center">
        <div i="carbon-phone" class="text-xl text-slate-600 dark:text-slate-400" />
        <p class="pl-2 font-body font-bold uppercase text-slate-600 dark:text-slate-400 lg:text-lg">
          My Phone
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-indigo-700 lg:text-lg">
        (+881) 111 222 333
      </p>
    </div>
    <div class="w-full border-l-1 border-t-0 border-r-1 border-b-1 border-slate-300 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-1">
      <div class="flex items-center">
        <div i="carbon-email" class="text-xl text-slate-600 dark:text-slate-400" />
        <p class="pl-2 font-body font-bold uppercase text-slate-600 dark:text-slate-400 lg:text-lg">
          My Email
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-indigo-700 lg:text-lg">
        name@mydomain.com
      </p>
    </div>
    <div class="w-full border-l-1 border-t-0 border-r-1 border-b-1 border-slate-300 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-1">
      <div class="flex items-center">
        <div i="carbon-map" class="text-xl text-slate-600 dark:text-slate-400" />
        <p class="pl-2 font-body font-bold uppercase text-slate-600 dark:text-slate-400 lg:text-lg">
          My Address
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-indigo-700 lg:text-lg">
        123 New York D Block 1100, 2011 USA
      </p>
    </div>
  </div>
</div>
</template>

<route lang="yaml">
name: contact
</route>