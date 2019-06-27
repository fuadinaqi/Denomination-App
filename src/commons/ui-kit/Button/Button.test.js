import React from 'react'
import { shallow } from 'enzyme'

import Button from './index'

const width="200px"
const buttonName = 'Test Button'

describe('Test Button ui-kit', () => {
  it('renders without crashing', () => {
    shallow(<Button width={width}>{buttonName}</Button>).render()
  })

  it('have stricted data type of props', () => {
    const wrapper = shallow(<Button>{buttonName}</Button>)
    expect(typeof wrapper.prop('width')).toBe('string')
    expect(typeof wrapper.prop('type')).toBe('string')
  })

  it('have default property of width (200px) and type (submit)', () => {
    const wrapper = shallow(<Button>{buttonName}</Button>)
    expect(wrapper.props()).toHaveProperty('width')
    expect(wrapper.prop('width')).toEqual('200px')
    expect(wrapper.props()).toHaveProperty('type')
    expect(wrapper.prop('type')).toEqual('submit')
  })

  it('renders a buttonName called Test Button', () => {
    const wrapper = shallow(<Button width={width}>{buttonName}</Button>)
    expect(wrapper.contains('Test Button')).toBe(true)
  })

  it('can set prop of width', () => {
    const wrapper = shallow(<Button width={width}>{buttonName}</Button>)
    expect(wrapper.prop('width')).toEqual('200px')
    wrapper.setProps({ width: '300px' })
    expect(wrapper.prop('width')).toEqual('300px')
  })
})
