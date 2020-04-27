import { transformNumber, transformNumberV2 } from "@/shared/utils/numberTransform";

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
    this.dealNum = transformNumberV2(dealNum || 0, 3, 2);
    this.dealMoney = transformNumberV2(dealMoney || 0, 3, 2);
  }
}
