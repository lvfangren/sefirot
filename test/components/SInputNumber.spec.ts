import { mount } from '@vue/test-utils'
import SInputNumber from 'sefirot/components/SInputNumber.vue'
import { CreateWrapperFn } from '../utils'

let createWrapper: CreateWrapperFn

describe('components/SInputNumber', () => {
  beforeEach(() => {
    createWrapper = options => mount(SInputNumber, options)
  })

  it('should format help text with thousand separator', async () => {
    const wrapper = createWrapper({
      propsData: {
        helpFormat: true
      }
    })

    await wrapper.setProps({ value: 1000000000.2222 })
    expect(wrapper.vm.valueWithSeparator).toBe('1,000,000,000.2222')
  })

  it('should not format help text with excessive value', async () => {
    const wrapper = createWrapper({
      propsData: {
        helpFormat: true
      }
    })

    await wrapper.setProps({ value: 200000000000000000000 })
    expect(wrapper.vm.valueWithSeparator).toBe('The number is too big')
  })

  it('should show the value with thousand separator when the foucs is out', async () => {
    const wrapper = createWrapper({
      propsData: {
        separator: true
      }
    })
    const input = wrapper.find('.SInputNumber .input')

    await wrapper.setProps({ value: 1000000 })
    expect(input.text()).toBe('1,000,000')
  })

  it('should show the value without thousand separator when separator props does not passed', async () => {
    const wrapper = createWrapper()
    const input = wrapper.find('.SInputNumber .input')

    await wrapper.setProps({ value: 1000000 })
    expect(input.text()).toBe('1000000')
  })

  it('should emit value on input', () => {
    const wrapper = createWrapper()

    wrapper.find('.SInputNumber .input-area').setValue(1)
    expect(wrapper.emitted('input')).toHaveEmittedWith(1)
  })

  it('should emit null when value is empty', () => {
    const wrapper = createWrapper()

    wrapper.find('.SInputNumber .input-area').setValue(null)
    expect(wrapper.emitted('input')).toHaveEmittedWith(null)
  })

  it('should emit value when losing focus', () => {
    const wrapper = createWrapper()

    const input = wrapper.find('.SInputNumber .input-area')

    input.setValue(1)
    input.trigger('blur')

    expect(wrapper.emitted('blur')).toHaveEmittedWith(1)
  })

  it('should emit value on `enter` keypress', () => {
    const wrapper = createWrapper()

    const input = wrapper.find('.SInputNumber .input-area')

    input.setValue(1)
    input.trigger('keypress.enter')

    expect(wrapper.emitted('enter')).toHaveEmittedWith(1)
  })
})
