import React from 'react'
import { shallow, mount } from 'enzyme'

import Input from './index'

const type = 'text'
const width = '200px'
const showValidate = false
const validationText = ''

describe('Test Input ui-kit', () => {
  it('renders without crashing', () => {
    shallow(
      <Input
        type={type}
        width={width}
        showValidate={showValidate}
        validationText={validationText}
      />
    ).render()
  })

  it('have stricted data type of props', () => {
    const wrapper = mount(<Input />)
    expect(typeof wrapper.prop('type')).toBe('string')
    expect(typeof wrapper.prop('width')).toBe('string')
    expect(typeof wrapper.prop('showValidate')).toBe('boolean')
    expect(typeof wrapper.prop('validationText')).toBe('string')
  })

  it(`have default property of type (text), width (''), validationText (''), and showValidate (false)`, () => {
    const wrapper = mount(<Input />)
    expect(wrapper.props()).toHaveProperty('width')
    expect(wrapper.prop('width')).toBe('')
    expect(wrapper.props()).toHaveProperty('type')
    expect(wrapper.prop('type')).toBe('text')
    expect(wrapper.props()).toHaveProperty('showValidate')
    expect(wrapper.prop('showValidate')).toBe(false)
    expect(wrapper.props()).toHaveProperty('validationText')
    expect(wrapper.prop('validationText')).toBe('')
  })

  it('can set props', () => {
    const wrapper = mount(<Input />)
    expect(wrapper.prop('width')).toEqual('')
    wrapper.setProps({ width: '300px' })
    expect(wrapper.prop('width')).toEqual('300px')
    expect(wrapper.prop('type')).toEqual('text')
    wrapper.setProps({ type: 'password' })
    expect(wrapper.prop('type')).toEqual('password')
  })
})
