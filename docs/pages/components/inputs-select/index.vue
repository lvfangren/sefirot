<template lang="md">
# Inputs: Select

Select input let users choose an item from the list of options.

<StoryInputSelectShowcase />

## Filled Style

Input select also has a filled style. Pass `mode` prop to control the looks of the input. Available options are `outlined` and `filled`. The default is `outlined`.

<StoryInputSelectEXFilled />

## Sizes

The select input comes in several different sizes. You may pass `size` prop to control the size of the input.

<StoryInputSelectEXSizes />

## Disabling certain options

You may define `disabled: true` to hide certain option items from showing up in the select list. Disabled options can still be shown as "selected" item.

For example, this is useful when you want to deprecate some options, but you still have past data using those options.

<StoryInputSelectEXDisabledOptions />

## API

<SpecProps :props="props" />
<SpecEvents :events="events" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import StoryInputSelectShowcase from '@/components/inputs/StoryInputSelectShowcase.vue'
import StoryInputSelectEXFilled from '@/components/inputs/StoryInputSelectEXFilled.vue'
import StoryInputSelectEXSizes from '@/components/inputs/StoryInputSelectEXSizes.vue'
import StoryInputSelectEXDisabledOptions from '@/components/inputs/StoryInputSelectEXDisabledOptions.vue'
import SpecProps from '@/components/SpecProps.vue'
import SpecEvents from '@/components/SpecEvents.vue'
import { useSpec } from '@/composables/Spec'

export default defineComponent({
  components: {
    StoryInputSelectShowcase,
    StoryInputSelectEXFilled,
    StoryInputSelectEXSizes,
    StoryInputSelectEXDisabledOptions,
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
          default: "'small'",
          description: 'The size of the input.'
        },
        {
          name: 'mode',
          type: "'outlined' | 'filled'",
          required: false,
          default: "'outlined'",
          description: 'The style of the input.'
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          default: 'null',
          description: 'The name for the field. It will be set to `for` attribute at label, and `id` attribute at input.'
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
          name: 'placeholder',
          type: 'string',
          required: false,
          default: 'null',
          description: 'The placeholder text for the input. The placeholder will be added as a disabled option for the select input and displayed only when the `value` is not set.'
        },
        {
          name: 'validation',
          type: 'Validation',
          required: false,
          default: 'null',
          description: 'You can pass Vuelidate validation object to let input display any errors.'
        },
        {
          name: 'options',
          type: 'array',
          required: true,
          default: '—',
          description: 'The available options for the select options. The array should contain object with properties of `label` and `value`. `label` is used as a text for the radio button, and `value` is the value corresponding to the select option. There is an optional property `disabled`. You may use this option to hide certain options.'
        },
        {
          name: 'nullable',
          type: 'boolean',
          required: false,
          default: 'null',
          description: 'Whether the value can be `null` or not. If this is set to `true`, users may unselect their choise.'
        },
        {
          name: 'error-message',
          type: 'boolean',
          required: false,
          default: 'true',
          description: 'Show the error message under the input field.'
        },
        {
          name: 'value',
          type: 'string | number | boolean',
          required: false,
          default: 'null',
          description: 'The value of the input. You may also use `v-model` to bind a value to the input.'
        }
      ],

      events: [
        {
          name: 'change',
          description: 'Fires when a user selects an option. It will pass the `value` of the selected option as the first argument.'
        }
      ]
    })
  },

  head: {
    title: 'Inputs: Select'
  }
})
</script>
