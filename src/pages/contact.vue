<script setup lang="ts">
import { sanitizeUrl } from '@braintree/sanitize-url'

const currentRoute = useRoute()
useHead({
  title: 'Contact',
  link: [
    {
      rel: 'canonical',
      href: sanitizeUrl(import.meta.env.VITE_BASE_URL + currentRoute.path),
    },
  ],
})
const contactEmail = import.meta.env.VITE_EMAIL
</script>

<template>
  <div id="contact" class="container mx-auto py-16 md:py-20 px-8">
    <h2
      class="
        text-center
        text-4xl
        font-semibold
        uppercase
        text-indigo-700
        sm:text-5xl
        lg:text-6xl
      "
    >
      Here's a contact form
    </h2>
    <h4
      class="
        pt-6
        text-center
        text-xl
        font-medium
        text-black
        dark:text-slate-200
        sm:text-2xl
        lg:text-3xl
      "
    >
      Have Any Questions?
    </h4>
    <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
      <p class="font-body text-slate-600 dark:text-slate-400">
        Email me at
        <a class="italic" :href="sanitizeUrl(`mailto:${contactEmail}`)">{{
          contactEmail
        }}</a>
        or message me here:
      </p>
    </div>
    <ContactForm />
  </div>
</template>

<route lang="yaml">
name: contact
</route>
