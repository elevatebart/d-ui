<template>
  <Template>
    <Wizard :key="selectedTestingType">
      <Step :validateNext="() => !!selectedTestingType">
        <SelectTestingType />
      </Step>
      <Step
        v-if="selectedTestingType === 'component'"
        :validateNext="() => !!component.framework"
      >
        <SelectFramework />
      </Step>
      <Step v-else> think of e2e </Step>
      <Step>
        <InstallDependencies />
      </Step>
    </Wizard>
  </Template>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Template from './components/Template.vue'
import { Wizard, Step } from './components/Wizard'
import SelectTestingType from './components/SelectTestingType.vue'
import SelectFramework from './components/SelectFramework.vue'
import InstallDependencies from './components/InstallDependencies.vue'
import { useStore } from './store'

export default defineComponent({
  name: 'App',
  components: {
    Template,
    Wizard,
    Step,
    SelectTestingType,
    SelectFramework,
    InstallDependencies,
  },
  setup() {
    const store = useStore()

    return {
      selectedTestingType: computed(() => store.getState().testingType),
      component: computed(() => store.getState().component),
    }
  },
})
</script>
