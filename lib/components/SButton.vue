<template>
  <component
    :is="tag"
    class="SButton"
    :class="classes"
    :to="to"
    role="button"
    @click="handleClick"
  >
    <span class="content">
      <span v-if="icon" class="icon"><component :is="icon" class="icon-svg" /></span>
      <span v-if="label" class="label">{{ label }}</span>
    </span>

    <transition name="fade">
      <span v-if="loading" key="loading" class="loader">
        <SIconPreloader class="loader-icon" />
      </span>
    </transition>
  </component>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from '@vue/composition-api'
import SIconPreloader from './icons/SIconPreloader.vue'

type Size = 'mini' | 'small' | 'medium' | 'large' | 'jumbo'

export default defineComponent({
  components: {
    SIconPreloader
  },

  props: {
    label: { type: String, default: null },
    tag: { type: String, default: 'button' },
    to: { type: String, default: '/' },
    type: { type: String, default: 'primary' },
    mode: { type: String, default: 'neutral' },
    size: { type: String as PropType<Size>, default: 'medium' },
    rounded: { type: Boolean, default: false },
    icon: { type: Object, default: null },
    block: { type: Boolean, default: false },
    inverse: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },

  setup(props, { emit }) {
    const classes = computed(() => [
      props.type,
      props.mode,
      props.size,
      { rounded: props.rounded },
      { block: props.block },
      { inverse: props.inverse },
      { 'has-label': props.label },
      { 'has-icon': props.icon },
      { loading: props.loading },
      { disabled: props.disabled }
    ])

    function handleClick(): void {
      !props.disabled && emit('click')
    }

    return {
      classes,
      handleClick
    }
  }
})
</script>

<style lang="postcss" scoped>
@import "@/assets/styles/variables";

.SButton {
  position: relative;
  display: inline-block;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  transition: color .25s, border-color .25s, background-color .25s;
}

.SButton.primary {
  color: var(--button-primary-text);
  background-color: var(--button-primary-bg);

  &:hover  { background-color: var(--button-primary-bg-hover); }
  &:active { background-color: var(--button-primary-bg-focus); }

  &.info {
    color: var(--c-text-dark-1);
    background-color: var(--c-info);

    &:hover  { background-color: var(--c-info-dark); }
    &:active { background-color: var(--c-info-darker); }
  }

  &.success {
    color: var(--c-text-dark-1);
    background-color: var(--c-success);

    &:hover  { background-color: var(--c-success-dark); }
    &:active { background-color: var(--c-success-darker); }
  }

  &.warning {
    color: var(--c-text-dark-1);
    background-color: var(--c-warning);

    &:hover  { background-color: var(--c-warning-dark); }
    &:active { background-color: var(--c-warning-darker); }
  }

  &.danger {
    color: var(--c-text-dark-1);
    background-color: var(--c-danger);

    &:hover  { background-color: var(--c-danger-dark); }
    &:active { background-color: var(--c-danger-darker); }
  }

  &.disabled {
    opacity: .75;
    cursor: not-allowed;

    &:hover  { background-color: var(--button-primary-bg); }
    &:active { background-color: var(--button-primary-bg); }

    &.info {
      &:hover  { background-color: var(--c-info); }
      &:active { background-color: var(--c-info); }
    }

    &.success {
      &:hover  { background-color: var(--c-success); }
      &:active { background-color: var(--c-success); }
    }

    &.warning {
      &:hover  { background-color: var(--c-warning); }
      &:active { background-color: var(--c-warning); }
    }

    &.danger {
      &:hover  { background-color: var(--c-danger); }
      &:active { background-color: var(--c-danger); }
    }
  }

  &.inverse {
    color: var(--button-primary-inverse-text);
    background-color: var(--button-primary-inverse-bg);

    &:hover  { background-color: var(--button-primary-inverse-bg-hover); }
    &:active { background-color: var(--button-primary-inverse-bg-focus); }

    &.info {
      color: var(--c-text-light-1);
      background-color: var(--c-info-light);

      &:hover  { background-color: var(--c-info); }
      &:active { background-color: var(--c-info-dark); }
    }

    &.success {
      color: var(--c-text-light-1);
      background-color: var(--c-success);

      &:hover  { background-color: var(--c-success-dark); }
      &:active { background-color: var(--c-success-darker); }
    }

    &.warning {
      color: var(--c-text-light-1);
      background-color: var(--c-warning);

      &:hover  { background-color: var(--c-warning-dark); }
      &:active { background-color: var(--c-warning-darker); }
    }

    &.danger {
      color: var(--c-text-light-1);
      background-color: var(--c-danger);

      &:hover  { background-color: var(--c-danger-dark); }
      &:active { background-color: var(--c-danger-darker); }
    }
  }

  & .loader-icon >>> .bar {
    fill: var(--c-text-inverse-1);
  }
}

.SButton.secondary {
  border-color: var(--button-secondary-border);
  color: var(--button-secondary-text);

  &:hover  { background-color: var(--button-secondary-bg-hover); }
  &:active { background-color: var(--button-secondary-bg-focus); }

  &.info {
    border-color: var(--c-info);
    color: var(--c-info);

    &:hover  { border-color: var(--c-info-dark); }
    &:active { border-color: var(--c-info-darker); }
  }

  &.success {
    border-color: var(--c-success);
    color: var(--c-success);

    &:hover  { border-color: var(--c-success-dark); }
    &:active { border-color: var(--c-success-darker); }
  }

  &.warning {
    border-color: var(--c-warning);
    color: var(--c-warning);

    &:hover  { border-color: var(--c-warning-dark); }
    &:active { border-color: var(--c-warning-darker); }
  }

  &.danger {
    border-color: var(--c-danger);
    color: var(--c-danger);

    &:hover  { border-color: var(--c-danger-dark); }
    &:active { border-color: var(--c-danger-darker); }
  }

  &.disabled {
    opacity: .75;
    cursor: not-allowed;

    &:hover  { background-color: var(--button-secondary-bg); }
    &:active { background-color: var(--button-secondary-bg); }

    &.info {
      &:hover  { border-color: var(--c-info); }
      &:active { border-color: var(--c-info); }
    }

    &.success {
      &:hover  { border-color: var(--c-success); }
      &:active { border-color: var(--c-success); }
    }

    &.warning {
      &:hover  { border-color: var(--c-warning); }
      &:active { border-color: var(--c-warning); }
    }

    &.danger {
      &:hover  { border-color: var(--c-danger); }
      &:active { border-color: var(--c-danger); }
    }
  }

  &.inverse {
    border-color: var(--button-secondary-inverse-border);
    color: var(--button-secondary-inverse-text);

    &:hover  { background-color: var(--button-secondary-inverse-bg-hover); }
    &:active { background-color: var(--button-secondary-inverse-bg-focus); }
  }
}

.SButton.tertiary {
  border-color: transparent;
  color: var(--button-tertiary-text);
  background-color: var(--button-tertiary-bg);

  &:hover  { background-color: var(--button-tertiary-bg-hover); }
  &:active { background-color: var(--button-tertiary-bg-focus); }

  &.disabled {
    opacity: .75;
    cursor: not-allowed;

    &:hover  { background-color: var(--button-tertiary-bg); }
    &:active { background-color: var(--button-tertiary-bg); }
  }

  &.inverse {
    border-color: transparent;
    color: var(--button-tertiary-inverse-text);
    background-color: var(--button-tertiary-inverse-bg);

    &:hover  { background-color: var(--button-tertiary-inverse-bg-hover); }
    &:active { background-color: var(--button-tertiary-inverse-bg-focus); }
  }
}

.SButton.text {
  color: var(--button-text-text);

  &:hover  { background-color: var(--button-text-bg-hover); }
  &:active { background-color: var(--button-text-bg-focus); }

  &.info    { color: var(--c-info); }
  &.success { color: var(--c-success); }
  &.warning { color: var(--c-warning); }
  &.danger  { color: var(--c-danger); }

  &.disabled {
    opacity: .75;
    cursor: not-allowed;

    &:hover  { background-color: var(--button-text-bg); }
    &:active { background-color: var(--button-text-bg); }
  }

  &.inverse {
    color: var(--button-text-inverse-text);

    &:hover  { background-color: var(--button-text-inverse-bg-hover); }
    &:active { background-color: var(--button-text-inverse-bg-focus); }
  }
}

.SButton.mute {
  color: var(--button-mute-text);

  &:hover  {
    color: var(--button-mute-text-hover);
    background-color: var(--button-mute-bg-hover);
  }

  &:active {
    color: var(--button-mute-text-hover);
    background-color: var(--button-mute-bg-focus);
  }

  &.disabled {
    cursor: not-allowed;

    &:hover  {
      color: var(--button-mute-text);
      background-color: transparent;
    }

    &:active {
      color: var(--button-mute-text);
      background-color: transparent;
    }
  }

  &.inverse {
    color: var(--button-mute-inverse-text);

    &:hover {
      color: var(--button-mute-inverse-text-hover);
      background-color: var(--button-mute-inverse-bg-hover);
    }

    &:active {
      color: var(--button-mute-inverse-text);
      background-color: var(--button-mute-inverse-bg-focus);
    }
  }
}

.SButton.mini {
  width: 28px;
  height: 28px;
  font-size: 12px;

  .icon-svg {
    width: 14px;
    height: 14px;
  }
}

.SButton.mini.rounded {
  border-radius: 14px;
}

.SButton.mini.has-label {
  padding: 0 8px;
  width: auto;
}

.SButton.mini.has-label.block {
  width: 100%;
}

.SButton.mini.has-icon {
  .label {
    padding-right: 1px;
    padding-left: 6px;
  }
}

.SButton.small {
  width: 32px;
  height: 32px;
  font-size: 12px;

  .icon-svg {
    width: 14px;
    height: 14px;
  }
}

.SButton.small.rounded {
  border-radius: 16px;
}

.SButton.small.has-label {
  padding: 0 10px;
  width: auto;
}

.SButton.small.has-label.block {
  width: 100%;
}

.SButton.small.has-icon {
  .label {
    padding-right: 1px;
    padding-left: 8px;
  }
}

.SButton.medium {
  width: 40px;
  height: 40px;
  font-size: 13px;

  .label {
    transform: translateY(1px);
  }

  .icon-svg {
    width: 16px;
    height: 16px;
  }
}

.SButton.medium.rounded {
  border-radius: 20px;
}

.SButton.medium.has-label {
  padding: 0 12px;
  width: auto;
}

.SButton.medium.has-label.block {
  width: 100%;
}

.SButton.medium.has-icon {
  .label {
    padding-right: 1px;
    padding-left: 8px;
  }
}

.SButton.large {
  width: 48px;
  height: 48px;
  font-size: 14px;

  .label {
    transform: translateY(1px);
  }

  .icon-svg {
    width: 18px;
    height: 18px;
  }
}

.SButton.large.rounded {
  border-radius: 24px;
}

.SButton.large.has-label {
  padding: 0 14px;
  width: auto;
}

.SButton.large.has-label.block {
  width: 100%;
}

.SButton.large.has-icon {
  .label {
    padding-right: 2px;
    padding-left: 10px;
  }
}

.SButton.jumbo {
  width: 64px;
  height: 64px;
  font-size: 14px;

  .icon-svg {
    width: 18px;
    height: 18px;
  }
}

.SButton.jumbo.rounded {
  border-radius: 32px;
}

.SButton.jumbo.has-label {
  padding: 0 24px;
  width: auto;
}

.SButton.jumbo.has-label.block {
  width: 100%;
}

.SButton.jumbo.has-icon {
  .label {
    padding-right: 2px;
    padding-left: 10px;
  }
}

.SButton.block {
  display: block;
  width: 100%;
}

.SButton.loading {
  &.primary {
    &:hover  { background-color: var(--button-primary-bg); }
    &:active { background-color: var(--button-primary-bg); }

    &.info {
      &:hover  { background-color: var(--c-info-light); }
      &:active { background-color: var(--c-info-light); }
    }

    &.success {
      &:hover  { background-color: var(--c-success); }
      &:active { background-color: var(--c-success); }
    }

    &.warning {
      &:hover  { background-color: var(--c-warning); }
      &:active { background-color: var(--c-warning); }
    }

    &.danger {
      &:hover  { background-color: var(--c-danger); }
      &:active { background-color: var(--c-danger); }
    }

    &.inverse {
      &:hover  { background-color: var(--c-white); }
      &:active { background-color: var(--c-white); }
    }
  }

  &.secondary,
  &.text,
  &.mute {
    &:hover  { background-color: transparent; }
    &:active { background-color: transparent; }
  }

  .content {
    opacity: 0;
    transform: scale(.9);
  }
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: opacity .25s, transform .25s;
}

.icon-svg {
  fill: currentColor;
  transition: fill .25s;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  color: var(--c-text-1);
  transform: translate(-50%, -50%);
  transition: opacity .25s, transform .25s;
}

.loader.fade-enter,
.loader.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5);
}

.loader-icon {
  width: 32px;
  height: 32px;
}
</style>
