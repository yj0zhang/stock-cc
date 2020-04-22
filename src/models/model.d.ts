interface IStockDetail {
  name: string;
}

interface IStock {
  stockId: number;
  stockCode: string;
  stockName: string;
  followTime: string;
}

interface IKeyObj {
  stockId: number;
  stockName: string;
  currentPrice: number;
  yesterdayClosePrice: number;
  [propName: string]: any;
}

declare class KeyPointClass implements IKeyObj {
  stockId: number;
  stockName: string;
  currentPrice: number;
  yesterdayClosePrice: number;
  attrs: object;
  gap: Function;
  gapRate: Function;
}
