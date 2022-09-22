<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

import { removeTrailingSlash } from '~/helpers'

const schema = object({
  name: string().required(),
  email: string().email().required(),
  message: string().required(),
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
})

const apiUrl = removeTrailingSlash(import.meta.env.VITE_API_URL)
const formSuccess = ref(false)
const formError = ref(false)

const onSubmit = handleSubmit((values, { resetForm }) => {
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
})

function closeSuccessMsg(): void {
  formSuccess.value = false
}

function closeErrorMsg(): void {
  formError.value = false
}
</script>

<template>
  <form
    class="mx-auto w-full pt-10 sm:w-3/4"
    novalidate
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
        <InputField name="name" type="text" placeholder="Your Full Name" />
      </div>
      <div class="w-full mb-6 md:mb-0 md:mt-0 md:ml-3 md:w-1/2 lg:ml-5 mt-6">
        <InputField name="email" type="email" placeholder="Your Email" />
      </div>
    </div>
    <div class="w-full mb-6 md:mb-0 lg:mr-5 mr-3">
      <TextAreaField name="message" placeholder="Your Message" />
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
  </form>
</template>
