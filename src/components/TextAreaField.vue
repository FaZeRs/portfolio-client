<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
})

// make sure to convert the name prop to a ref to maintain its reactivity
// this way vee-validate can react to the field name changing
const nameRef = toRef(props, 'name')
const { errorMessage, meta, value } = useField<string>(nameRef)

const inputErrorClasses
  = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
const inputClasses
  = 'text-black dark:bg-gray-900 dark:text-white border-slate-200 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
</script>

<template>
  <div>
    <textarea
      v-model="value" :name="name" :placeholder="placeholder"
      class="mt-6 w-full rounded border focus:outline-none px-4 py-3 font-body"
      :class="[errorMessage ? inputErrorClasses : inputClasses]"
      cols="30"
      rows="10"
    />
    <span v-if="errorMessage && meta.touched" class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">
      {{ errorMessage }}
    </span>
  </div>
</template>
