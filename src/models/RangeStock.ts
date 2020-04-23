function getRate(num): number {
  if (!num || isNaN(parseFloat(num))) {
    return 0;
  } else {
    return parseFloat((parseFloat(num) * 100).toFixed(2))
  }
}

export class RangeStock implements Stock {
  stockId: number;
  stockCode: string;
  stockName: string;
  uptickRate: number;
  surgeRate: number;
  dealNum: number;
  dealMoney: number;
  constructor(props) {
    const {stockId, stockCode, stockName, uptickRate, surgeRate, dealNum, dealMoney} = props;
    this.stockId = stockId;
    this.stockCode = stockCode;
    this.stockName = stockName;
    this.uptickRate = getRate(uptickRate);
    this.surgeRate = getRate(surgeRate);
    this.dealNum = dealNum || 0;
    this.dealMoney = dealMoney || 0;
  }
}
