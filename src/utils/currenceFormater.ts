export const onlyNums = (value: any) => value.replace(/[^\d]/g, '')

export const maskedToMoney = (value: any) => {
  const number = onlyNums(`${value}`)

  return `R$ ${(number / 100)
    .toFixed(2)
    .replace('.', ',')
    .split('')
    .reverse()
    .map((v, i) => (i > 5 && (i + 6) % 3 === 0 ? `${v}.` : v))
    .reverse()
    .join('')}`
}
