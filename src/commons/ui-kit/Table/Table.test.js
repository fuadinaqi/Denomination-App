import React from 'react'
import { shallow } from 'enzyme'

import Table from './index'

describe('Test Table ui-kit', () => {
  it('renders without crashing', () => {
    shallow(
      <Table
        dataHead={['Count', 'Fraction', 'Total']}
        dataBody={[{
          fraction: 20000,
          isValidFraction: true,
          count: 1
        }, {
          fraction: 10000,
          isValidFraction: true,
          count: 1
        }]}
      />
    ).render()
  })
})
