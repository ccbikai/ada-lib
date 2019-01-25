import { shallowMount } from '@vue/test-utils'
import Demo from '@/packages/demo'

describe('Demo.vue', () => {
  it('renders props.name when passed', () => {
    const name = '猪八戒'
    const wrapper = shallowMount(Demo, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })
})
