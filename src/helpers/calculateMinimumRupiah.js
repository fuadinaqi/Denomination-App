const fractions = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50]

export default function(nominal) {
  const denominated = []

  for (let i = 0; i < fractions.length; i++) {
    const fraction = fractions[i]
    const tempNominal = nominal % fraction
    if (Math.floor(nominal / fraction) > 0) {
      denominated.push({
        fraction,
        isValidFraction: true,
        count: Math.floor(nominal / fraction)
      })
      nominal = tempNominal
    }
  }

  if (nominal > 0) {
    denominated.push({
      fraction: nominal,
      isValidFraction: false,
      count: 1
    })
  }
  return denominated
}
