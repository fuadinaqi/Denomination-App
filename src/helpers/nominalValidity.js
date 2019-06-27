function checkDot(nominal) {
  if (nominal.indexOf('.') === -1) {
    return nominal
  }
  let splitedNominal = nominal.split('.')
  let result = splitedNominal.join('')
  for (let i = 0; i < splitedNominal.length; i += 1) {
    const current = splitedNominal[i]
    if (i === 0) {
      if (splitedNominal[0].length > 3) {
        result = 'invalid separator'
        break
      }
    } else {
      if (current.length !== 3 && current.indexOf(',') === -1) {
        result = 'invalid separator'
        break
      }
    }
  }
  return result
}

function checkComma(nominal) {
  if (nominal.indexOf(',') === -1) {
    return nominal
  }
  let splitedNominal = nominal.split(',')
  if (splitedNominal.length > 2) {
    return 'invalid separator'
  }
  if (splitedNominal[1] === '00') {
    return splitedNominal[0]
  }
  return 'invalid separator'
}

function checkSpaceSeparator(nominal) {
  if (nominal.indexOf(' ') !== -1) {
    return 'invalid separator'
  }
  return nominal
}

export default function(nominal) {
  let currentNominal = nominal.toLowerCase()
  const rpSplited = currentNominal.split('rp')

  if (rpSplited.length > 1) {
    if (rpSplited[0] && Number(rpSplited[0])) {
      return 'valid character in wrong position'
    }
    if (!rpSplited[1].trim()) {
      return 'missing value'
    }
    if (rpSplited[1][0] === ' ') {
      currentNominal = rpSplited[1].trim()
    } else {
      currentNominal = rpSplited[1]
    }
  }
  currentNominal = checkDot(currentNominal)
  if (currentNominal !== 'invalid separator') {
    currentNominal = checkComma(currentNominal)
    if (currentNominal !== 'invalid separator') {
      currentNominal = checkSpaceSeparator(currentNominal)
      if (currentNominal !== 'invalid separator') {
        currentNominal = parseInt(currentNominal, 10)
      }
    }
  }
  return currentNominal
}