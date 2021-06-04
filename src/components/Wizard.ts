import { Component, computed, defineComponent, h, PropType, ref } from 'vue'
import WizardButtonBar from './WizardButtonBar.vue'

const stepNumber = ref(0)

let lastStepIndex: number

export const Wizard = defineComponent({
  setup(_, { slots }) {
    const stepChildren = slots
      .default?.()
      .filter((childNode) => (childNode.type as Component).name === 'Step')

    lastStepIndex = (stepChildren?.length || 0) - 1
    return () =>
      h('div', { class: 'p-3', key: stepNumber.value }, [
        stepChildren?.[stepNumber.value],
      ])
  },
})

export const Step = defineComponent({
  name: 'Step',
  props: {
    validateNext: {
      type: Function as PropType<() => boolean>,
      default: () => true,
    },
  },
  setup({ validateNext }, { slots }) {
    const prev = () => {
      stepNumber.value--
    }

    const next = () => {
      stepNumber.value++
    }

    return () => [
      slots.default?.(),
      h(WizardButtonBar, {
        onPrev: prev,
        onNext: next,
        firstStep: stepNumber.value === 0,
        lastStep: stepNumber.value === lastStepIndex,
        validateNext,
      }),
    ]
  },
})
