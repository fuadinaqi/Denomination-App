import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { TableContainer } from './style'
import Conditional from '../../utils/Conditional'
import ArrayMap from '../../utils/ArrayMap'

const Table = memo(function(props) {
  const { dataHead, dataBody } = props

  return (
    <TableContainer>
      <Conditional if={dataHead.length > 0}>
        <thead>
          <tr>
            <ArrayMap data={dataHead}>
              {(el) => (
                <th>{el}</th>
              )}
            </ArrayMap>
          </tr>
        </thead>
      </Conditional>
      <Conditional if={dataBody.length > 0}>
        <tbody>
          <ArrayMap data={dataBody}>
            {(el) => (
              <tr>
                <ArrayMap data={Object.values(el)}>
                  {(element) => <td>{element}</td>}
                </ArrayMap>
              </tr>
            )}
          </ArrayMap>
        </tbody>
      </Conditional>
    </TableContainer>
  )
})

Table.defaultProps = {
  dataHead: [],
  dataBody: []
}

Table.propTypes = {
  dataHead: PropTypes.arrayOf(PropTypes.string),
  dataBody: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
}

export default Table
