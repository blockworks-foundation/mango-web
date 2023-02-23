export const formatNumericValue = (
  value: number | string,
  decimals?: number
): string => {
  const numberValue = Number(value)
  let formattedValue
  if (numberValue > -0.0000000001 && numberValue < 0.000000001) {
    formattedValue = '0'
  } else if (decimals) {
    formattedValue = roundValue(numberValue, decimals)
  } else if (Math.abs(numberValue) >= 1000) {
    formattedValue = roundValue(numberValue, 0)
  } else if (Math.abs(numberValue) >= 0.1) {
    formattedValue = roundValue(numberValue, 3)
  } else {
    formattedValue = roundValue(numberValue, 9)
  }
  return formattedValue
}

export const formatCurrencyValue = (
  value: number | string,
  decimals?: number
): string => {
  const numberValue = Number(value)
  let formattedValue
  if (numberValue > -0.0000000001 && numberValue < 0.000000001) {
    formattedValue = '$0.00'
  } else if (decimals) {
    formattedValue = Intl.NumberFormat('en', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      style: 'currency',
      currency: 'USD',
    }).format(numberValue)
  } else if (Math.abs(numberValue) >= 1000) {
    formattedValue = usdFormatter0.format(numberValue)
  } else if (Math.abs(numberValue) >= 0.1) {
    formattedValue = usdFormatter2.format(numberValue)
  } else {
    formattedValue = usdFormatter3Sig.format(numberValue)
  }

  if (formattedValue === '-$0.00') return '$0.00'
  return formattedValue
}

const roundValue = (value: number, decimals: number): string => {
  const roundedValue = parseFloat(value.toFixed(decimals))
  if (decimals === 2) return digits2.format(roundedValue)
  if (decimals === 3) return digits3.format(roundedValue)
  if (decimals === 4) return digits4.format(roundedValue)
  if (decimals === 5) return digits5.format(roundedValue)
  if (decimals === 6) return digits6.format(roundedValue)
  if (decimals === 7) return digits7.format(roundedValue)
  if (decimals === 8) return digits8.format(roundedValue)
  if (decimals === 9) return digits9.format(roundedValue)
  return roundedValue.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  })
}

const digits2 = new Intl.NumberFormat('en', { maximumFractionDigits: 2 })
const digits3 = new Intl.NumberFormat('en', { maximumFractionDigits: 3 })
const digits4 = new Intl.NumberFormat('en', { maximumFractionDigits: 4 })
const digits5 = new Intl.NumberFormat('en', { maximumFractionDigits: 5 })
const digits6 = new Intl.NumberFormat('en', { maximumFractionDigits: 6 })
const digits7 = new Intl.NumberFormat('en', { maximumFractionDigits: 7 })
const digits8 = new Intl.NumberFormat('en', { maximumFractionDigits: 8 })
const digits9 = new Intl.NumberFormat('en', { maximumFractionDigits: 9 })

const usdFormatter0 = Intl.NumberFormat('en', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  style: 'currency',
  currency: 'USD',
})

const usdFormatter2 = Intl.NumberFormat('en', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'USD',
})

const usdFormatter3Sig = Intl.NumberFormat('en', {
  minimumSignificantDigits: 3,
  maximumSignificantDigits: 3,
  style: 'currency',
  currency: 'USD',
})
