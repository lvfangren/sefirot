<template lang="md">
<StoryBase title="Show input number with thousand separator when the focus is out">
  <div class="input">
    <SInputNumber
      placeholder="123,456,789"
      separator
      v-model="value"
    />
  </div>
</StoryBase>

```vue
<template>
  <div class="input">
    <SInputNumber
      placeholder="123456789"
      separator
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SInputNumber from '@globalbraon/sefirot/lib/components/SInputNumber'

export default defineComponent({
  components: {
    SInputNumber
  },

  setup() {
    const value = ref<number | null>(1000000)

    return {
      value
    }
  }
})
</script>

<style lang="postcss" scoped>
.input {
  max-width: 320px;
}
</style>
```
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SInputNumber from '@@/lib/components/SInputNumber.vue'
import StoryBase from '@/components/StoryBase.vue'

export default defineComponent({
  components: {
    SInputNumber,
    StoryBase
  },

  setup() {
    const value = ref<number | null>(1000000)

    return {
      value
    }
  }
})
</script>

<style lang="postcss" scoped>
.input {
  max-width: 320px;
}
</style>
