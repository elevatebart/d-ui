<template>
  <label
    class="
      text-left
      inline-block
      border-2
      rounded-lg
      mx-2
      p-3
      w-xs
      cursor-pointer
    "
    :class="selected ? 'border-blue-500' : 'border-gray-500'"
    :for="testingType"
  >
    <input
      type="radio"
      class="mr-3"
      :name="testingType"
      :id="testingType"
      :class="selected ? 'border-blue-500' : 'border-gray-500'"
      :checked="selected"
    />
    <img class="mr-3 h-12 w-12 inline" src="https://via.placeholder.com/48" />
    {{ testingType }}
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TestingType } from '../types'

export default defineComponent({
  props: {
    testingType: {
      type: String as PropType<TestingType>,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
