<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ref } from 'vue'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { object, string } from 'yup'
import { removeTrailingSlash } from '~/helpers'

const currentRoute = useRoute()
useHead({
  title: 'Contact',
  link: [
    {
      rel: 'canonical',
      href: removeTrailingSlash(import.meta.env.VITE_BASE_URL) + currentRoute.path,
    },
  ],
})
const contactEmail = import.meta.env.VITE_EMAIL

const schema = object({
  name: string().required(),
  email: string().required().email(),
  message: string().required(),
})

const apiUrl = removeTrailingSlash(import.meta.env.VITE_API_URL)

const formSuccess = ref(false)
const formError = ref(false)

function closeSuccessMsg(): void {
  formSuccess.value = false
}

function closeErrorMsg(): void {
  formError.value = false
}

function onSubmit(values: Object, { resetForm }: any): void {
  fetch(`${apiUrl}/mail/contact`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        formSuccess.value = true
        resetForm()
      }
      else {
        formError.value = true
      }
    })
    .catch((response) => {
      formError.value = true
    })
}

const inputErrorClasses
  = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
const inputClasses
  = 'text-black dark:bg-gray-900 dark:text-white border-slate-200 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
</script>

<template>
  <div id="contact" class="container mx-auto py-16 md:py-20">
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
        <a class="italic" :href="`mailto:${contactEmail}`">{{
          contactEmail
        }}</a>
        or message me here:
      </p>
    </div>
    <Form
      v-slot="{ isSubmitting }"
      class="mx-auto w-full pt-10 sm:w-3/4"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <div
        v-if="formError"
        class="
          flex
          w-full
          p-4
          mb-4
          text-sm
          bg-red-100
          rounded-lg
          dark:bg-red-200
        "
        role="alert"
      >
        <div class="text-sm font-medium text-red-700 dark:text-red-800">
          <span class="font-medium">Failed to send message!</span> Please try
          again.
        </div>
        <button
          type="button"
          class="
            ml-auto
            -mx-1.5
            -my-1.5
            bg-green-100
            text-green-500
            rounded-lg
            focus:ring-2 focus:ring-green-400
            p-1.5
            hover:bg-green-200
            inline-flex
            h-8
            w-8
            dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300
          "
          data-dismiss-target="#alert-3"
          aria-label="Close"
        >
          <div i="carbon-close" class="text-lg" @click="closeErrorMsg" />
        </button>
      </div>
      <div
        v-if="formSuccess"
        class="
          flex
          w-full
          p-4
          mb-4
          text-sm
          bg-green-100
          rounded-lg
          dark:bg-green-200
        "
        role="alert"
      >
        <div class="text-sm font-medium text-green-700 dark:text-green-800">
          <span class="font-medium">Message sent sucessfuly!</span> I will
          contact you shortly.
        </div>
        <button
          type="button"
          class="
            ml-auto
            -mx-1.5
            -my-1.5
            bg-green-100
            text-green-500
            rounded-lg
            focus:ring-2 focus:ring-green-400
            p-1.5
            hover:bg-green-200
            inline-flex
            h-8
            w-8
            dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300
          "
          data-dismiss-target="#alert-3"
          aria-label="Close"
        >
          <div i="carbon-close" class="text-lg" @click="closeSuccessMsg" />
        </button>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mb-6 md:mb-0 md:w-1/2 lg:mr-5 mr-3">
          <Field id="name" v-slot="{ field, errors }" type="text" name="name">
            <input
              v-bind="field"
              class="
                w-full
                rounded
                border
                focus:outline-none
                px-4
                py-3
                font-body
              "
              :class="[errors.length > 0 ? inputErrorClasses : inputClasses]"
              placeholder="Your Full Name"
              type="text"
            >
          </Field>
          <ErrorMessage
            class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"
            name="name"
          />
        </div>
        <div class="w-full mb-6 md:mb-0 md:mt-0 md:ml-3 md:w-1/2 lg:ml-5 mt-6">
          <Field id="email" v-slot="{ field, errors }" type="text" name="email">
            <input
              v-bind="field"
              class="
                w-full
                rounded
                border
                focus:outline-none
                px-4
                py-3
                font-body
              "
              :class="[errors.length > 0 ? inputErrorClasses : inputClasses]"
              placeholder="Your Email"
              type="email"
            >
          </Field>
          <ErrorMessage
            class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"
            name="email"
          />
        </div>
      </div>
      <div class="w-full mb-6 md:mb-0 lg:mr-5 mr-3">
        <Field id="message" v-slot="{ field, errors }" name="message">
          <!-- todo: Fix vue-tsc error -->
          <textarea
            v-bind="field"
            class="
              mt-6
              w-full
              rounded
              border
              focus:outline-none
              px-4
              py-3
              font-body
            "
            :class="[errors.length > 0 ? inputErrorClasses : inputClasses]"
            placeholder="Your Message"
            cols="30"
            rows="10"
          />
        </Field>
        <ErrorMessage
          class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"
          name="message"
        />
      </div>
      <button
        type="submit"
        :disabled="isSubmitting"
        class="
          mt-6
          flex
          items-center
          justify-center
          rounded
          bg-indigo-500
          px-8
          py-3
          text-lg
          font-bold
          uppercase
          text-white
          hover:bg-indigo-700
        "
      >
        Send
        <div i="carbon-chevron-right" class="relative -right-2 text-xl" />
      </button>
    </Form>
  </div>
</template>

<route lang="yaml">
name: contact
</route>
