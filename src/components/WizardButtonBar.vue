<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  emits: ['prev', 'next'],
  props: {
    firstStep: {
      type: Boolean,
      required: true,
    },
    lastStep: {
      type: Boolean,
      required: true,
    },
    validateNext: {
      type: Function as PropType<() => boolean>,
      required: true,
    },
  },
  setup({ validateNext }) {
    return { disabled: computed(() => !validateNext()) }
  },
})
</script>

<template>
  <div class="absolute bottom-2 right-2">
    <button
      @click="$emit('prev')"
      class="rounded ml-2 px-2 border border-indigo-600"
      :class="{ invisible: firstStep }"
    >
      Previous
    </button>
    <button
      @click="$emit('next')"
      :disabled="disabled"
      class="
        rounded
        ml-2
        px-2
        border border-indigo-600
        bg-indigo-600
        text-light-50
      "
      :class="{ 'opacity-50': disabled, invisible: lastStep }"
    >
      Next
    </button>
  </div>
</template>
