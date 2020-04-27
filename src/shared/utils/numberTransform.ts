function getDigit(integer: string | number): number {
  return integer.toString().length
}

function getDecimal(decimal: string | number, digit: number): string {
  if (!decimal) {
    return ""
  }
  if (getDigit(decimal) <= digit) {
    return "." + decimal
  }
  let arr: string[] = decimal.toString().split('')
  arr.splice(digit, 0, '.')
  decimal = Math.round(parseFloat(arr.join('')))
  return decimal ? "." + decimal : ""
}

/**
 * transformNumber
 * @param number 需要转换的数字
 * @param interDigit 整数部分需要保留的位数
 * @param decimalDigit 小数部分需要保留的位数
 * console.log(transformNumber(3.4, 1, 2)) //3.4
 * console.log(transformNumber(31.4, 2, 2)) //31.4
 * console.log(transformNumber(311.4, 2, 2)) //31.14十
 * console.log(transformNumber(3111.4, 2, 2)) //31.11百
 * console.log(transformNumber(31111.4, 2, 2)) //31.11千
 * console.log(transformNumber(311111.4, 2, 2)) //31.11万
 * console.log(transformNumber(3111111.4, 2, 2)) //31.11十万
 * console.log(transformNumber(31111111.4, 2, 2)) //31.11百万
 * console.log(transformNumber(315555111.4, 2, 2)) //31.56千万
 */
export function transformNumber(number: number, interDigit: number, decimalDigit: number): string {
  if (isNaN(number)) {
    throw Error(`${number} is not number`)
  }
  interDigit = interDigit > 0 ? interDigit : 1
  const integer: number = Math.floor(number)
  const numberInterDigit: number = getDigit(integer)
  const decimal: string = number.toString().split(".")[1] || ""

  if (numberInterDigit <= interDigit) {
    return integer + getDecimal(decimal, decimalDigit)
  } else {
    const unit: string[] = ["", "十", "百", "千", "万", "十万", "百万", "千万", "亿", "十亿", "百亿", "千亿"]
    const fUnit = unit[numberInterDigit - 1]
    if (typeof fUnit !== "string") {
      throw Error(`${number} is too large`)
    }
    const remainNum = integer.toString().substr(1) + decimal
    return decimalDigit > 0 ? integer.toString().substr(0, 1) + getDecimal(remainNum, decimalDigit) + fUnit :
      Math.round(parseFloat(integer.toString().substr(0, 1) + getDecimal(remainNum, 2))) + fUnit
  }
}

export function transformNumberV2(number: number, interDigit: number, decimalDigit: number): string {
  const result = transformNumber(number, interDigit, decimalDigit + 4)

  const unit = result.substr(-1)
  const num = parseFloat(result);
  enum pow {"十" = 1, "百", "千"}
  const secondaryPower = parseInt(pow[result.substr(-2, 1)]) || 0

  return (num * Math.pow(10, secondaryPower)).toFixed(decimalDigit) + unit
}
