<template lang="md">
# Inputs: HMS

HMS input let users enter and edit hours, minutes, and seconds value in number format.

<StoryInputHMSShowcase />

## Sizes

The HMS input comes in several different sizes. You may pass `size` prop to control the size of the input. Supported sizes are `mini`, `small` and `medium`. The default size is set to `small`.

<StoryInputHMSEXSizes />

## API

<SpecProps :props="props" />
<SpecEvents :events="events" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import StoryInputHMSShowcase from '@/components/inputs/StoryInputHMSShowcase.vue'
import StoryInputHMSEXSizes from '@/components/inputs/StoryInputHMSEXSizes.vue'
import SpecProps from '@/components/SpecProps.vue'
import SpecEvents from '@/components/SpecEvents.vue'
import { useSpec } from '@/composables/Spec'

export default defineComponent({
  components: {
    StoryInputHMSShowcase,
    StoryInputHMSEXSizes,
    SpecProps,
    SpecEvents
  },

  scrollToTop: true,

  setup() {
    return useSpec({
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          description: 'Disable the input.'
        },
        {
          name: 'size',
          type: "'mini' | 'small' | 'medium'",
          required: false,
          default: 'small',
          description: 'The size of the input.'
        },
        {
          name: 'mode',
          type: "'outlined'",
          required: false,
          default: 'outlined',
          description: 'The style of the input.'
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          default: 'null',
          description: 'The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus.'
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          default: 'null',
          description: 'The label for the input.'
        },
        {
          name: 'note',
          type: 'string',
          required: false,
          default: 'null',
          description: 'The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`.'
        },
        {
          name: 'help',
          type: 'string',
          required: false,
          default: 'null',
          description: 'The help text that will be displayed under the input. Useful to add a little detailed information about the input.'
        },
        {
          name: 'hour',
          type: 'boolean',
          required: false,
          default: 'true',
          description: 'Whether to display "hour" input or not.'
        },
        {
          name: 'minute',
          type: 'boolean',
          required: false,
          default: 'true',
          description: 'Whether to display "minute" input or not.'
        },
        {
          name: 'second',
          type: 'boolean',
          required: false,
          default: 'true',
          description: 'Whether to display "second" input or not.'
        },
        {
          name: 'value',
          type: 'HMS | null',
          required: false,
          default: 'null',
          description: 'The value of input. You may also use `v-model` to bind a value to the input.'
        },
        {
          name: 'validation',
          type: 'Validation',
          required: false,
          default: 'null',
          description: 'You can pass Validation object to let input display any errors.'
        }
      ],

      events: [
        {
          name: 'input',
          description: 'Fires when a user input any value to the filed.'
        }
      ]
    })
  },

  head: {
    title: 'Inputs: HMS'
  }
})
</script>
