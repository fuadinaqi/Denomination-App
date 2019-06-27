import React, {
  memo,
  Suspense,
  lazy,
  useState,
  useRef,
  useCallback
} from 'react'
import PropTypes from 'prop-types'

import { nominalValidity, calculateMinimumRupiah } from '../../../../helpers'

import Form from './style'

const Input = lazy(() => import('../../../../commons/ui-kit/Input'))
const Button = lazy(() => import('../../../../commons/ui-kit/Button'))

const DenominationForm = memo(function(props) {
  const { setDenomination } = props

  const [validationText, setValidationText] = useState('')
  const [showValidate, setShowValidate] = useState(false)
  const [value, setValue] = useState('')

  const inputRef = useRef(null)

  const handleChange = useCallback((e) => {
    if (!e.target.value) {
      setDenomination([], 0)
    }
    if (showValidate) {
      setShowValidate(false)
      setValidationText('')
    }
    setValue(e.target.value)
  }, [showValidate, setDenomination])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (value) {
      const nominal = nominalValidity(value)
      if (typeof nominal === 'number') {
        setShowValidate(false)
        setValidationText('')
        setDenomination(calculateMinimumRupiah(nominal), nominal)
      } else {
        inputRef.current.focus()
        setValidationText(nominal)
        setShowValidate(true)
      }
    }
  }, [value, setDenomination])

  return (
    <Form onSubmit={handleSubmit}>
      <Suspense fallback={<div />}>
        <Input
          type="text"
          placeholder="Input rupiah's nominal"
          ref={inputRef}
          value={value}
          onChange={handleChange}
          onBlur={() => setShowValidate(false)}
          validationText={validationText}
          showValidate={showValidate}
        />
        <Button
          type="submit"
          width="100%"
        >
          Denominate!
        </Button>
      </Suspense>
    </Form>
  )
})

DenominationForm.propTypes = {
  setDenomination: PropTypes.func.isRequired,
}

export default DenominationForm
