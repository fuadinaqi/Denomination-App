import React, {
  Suspense,
  lazy,
  memo,
  useState,
  useCallback
} from 'react'

import { nominalWithDot } from '../../helpers'

import Conditional from '../../commons/utils/Conditional'

import { MainContainer } from './style'

import calculatorImage from '../../assets/calculator.png'

const Header = lazy(() => import('./Components/Header'))
const DenominationForm = lazy(() => import('./Components/DenominationForm'))
const DenominationTable = lazy(() => import('./Components/DenominationTable'))

const Main = memo(() => {
  const [denominationData, setDenominationData] = useState([])
  const [nominal, setNominal] = useState(0)

  const setDenomination = useCallback((data, currentNominal) => {
    setDenominationData(data)
    setNominal(currentNominal)
  }, [setDenominationData])

  return (
    <MainContainer>
      <Suspense fallback={<div />}>
        <img src={calculatorImage} alt="calculator" />
        <Header />
        <DenominationForm setDenomination={setDenomination} />
        <Conditional if={nominal}>
          <h2>{`Denomination of Rp ${nominalWithDot(nominal)} are`}</h2>
        </Conditional>
        <DenominationTable denominationData={denominationData} />
      </Suspense>
    </MainContainer>
  )
})

export default Main
