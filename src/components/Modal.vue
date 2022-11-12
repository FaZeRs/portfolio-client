<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const isOpen = ref(false)
const ignoreEvents = ref(false)

defineExpose({
  setIsOpen,
  setIgnoreEvents,
})

function setIsOpen(value: boolean) {
  if (ignoreEvents.value)
    return
  isOpen.value = value
}

function setIgnoreEvents(value: boolean) {
  ignoreEvents.value = value
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="setIsOpen">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl
                font-medium
                leading-normal
                text-indigo-700
                dark:text-indigo-500 border-b
                border-gray-200
                dark:border-gray-600
                p-6
                flex
                flex-shrink-0
                items-center
                justify-between"
              >
                <slot name="title" />
                <button
                  type="button"
                  class="
                text-gray-400
                bg-transparent
                hover:bg-gray-200 hover:text-slate-900
                rounded-lg
                text-lg
                p-1.5
                ml-auto
                inline-flex
                items-center
                dark:hover:bg-slate-400 dark:hover:text-white
              "
                  @click="setIsOpen(false)"
                >
                  <div i="carbon-close" />
                </button>
              </DialogTitle>
              <div class="mt-2">
                <slot />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
