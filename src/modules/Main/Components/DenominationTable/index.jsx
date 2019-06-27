import React, {
  memo,
  Suspense,
  lazy,
  useCallback
} from 'react'
import PropTypes from 'prop-types'

import { nominalWithDot } from '../../../../helpers'

const Table = lazy(() => import('../../../../commons/ui-kit/Table'))

const DenominationTable = memo(function(props) {
  const { denominationData } = props

  const getCountOrLeft = useCallback((isValidFraction, count) => isValidFraction ? count : 'Left', [])

  const getRpOrLeft = useCallback((fraction) => `Rp ${nominalWithDot(fraction)}`, [])

  const getFractionCalculation = useCallback((fraction, count) => `Rp ${nominalWithDot(fraction * count)}`, [])

  const manipulateDenominationData = useCallback((data) => data.map(el => ({
    0: getCountOrLeft(el.isValidFraction, el.count),
    1: getRpOrLeft(el.fraction),
    2: getFractionCalculation(el.fraction, el.count)
  })), [
    getCountOrLeft,
    getRpOrLeft,
    getFractionCalculation
  ])

  return (
    <Suspense fallback={<div />}>
      <Table
        dataHead={['Count', 'Fraction', 'Total']}
        dataBody={manipulateDenominationData(denominationData)}
      />
    </Suspense>
  )
})

DenominationTable.defaultProps = {
  denominationData: []
}

DenominationTable.propTypes = {
  denominationData: PropTypes.arrayOf(PropTypes.shape({
    fraction: PropTypes.number.isRequired,
    isValidFraction: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired),
}

export default DenominationTable
