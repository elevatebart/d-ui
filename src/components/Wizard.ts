import {
  Component,
  computed,
  defineComponent,
  h,
  inject,
  onMounted,
  PropType,
  provide,
  ref,
} from 'vue'
import WizardButtonBar from './WizardButtonBar.vue'

const wizardStateKey = Symbol()

export const Wizard = defineComponent({
  setup(_, { slots }) {
    const stepChildren = slots
      .default?.()
      .filter((childNode) => (childNode.type as Component).name === 'Step')

    const stepNumber = ref(0)

    const prev = () => {
      stepNumber.value--
    }

    const next = () => {
      stepNumber.value++
    }

    const lastStepIndex = (stepChildren?.length || 0) - 1

    const validateNextRef = ref(() => true)
    const validateNext = () => validateNextRef.value()

    provide(wizardStateKey, { validateNextRef })

    return () =>
      h('div', { class: 'p-3', key: stepNumber.value }, [
        stepChildren?.[stepNumber.value],
        h(WizardButtonBar, {
          onPrev: prev,
          onNext: next,
          firstStep: stepNumber.value === 0,
          lastStep: stepNumber.value === lastStepIndex,
          validateNext,
        }),
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
    const { validateNextRef } = inject(wizardStateKey)!
    onMounted(() => {
      validateNextRef.value = validateNext
    })
    return () => [slots.default?.()]
  },
})
