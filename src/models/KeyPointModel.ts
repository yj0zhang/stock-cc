export default class KeyPointModel implements KeyPointClass {
  stockId: number;
  stockName: string;
  currentPrice: number;
  yesterdayClosePrice: number;
  attrs: object;
  constructor(props) {
    const {stockId, stockName, currentPrice, yesterdayClosePrice, ...attrs} = props
    this.stockId = stockId;
    this.stockName = stockName;
    this.currentPrice = currentPrice;
    this.yesterdayClosePrice = yesterdayClosePrice;
    this.attrs = attrs;
  }

  gap() {
    return (this.currentPrice - this.yesterdayClosePrice).toFixed(2);
  }

  gapRate() {
    return ((this.currentPrice - this.yesterdayClosePrice) * 100 / this.yesterdayClosePrice).toFixed(2);
  }
}
