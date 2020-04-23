interface IStockDetail {
  name: string;
}

interface IFollowStock {
  stockId: number;
  stockCode: string;
  stockName: string;
  followTime?: string;
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

declare class Stock implements IFollowStock {
  stockId: number;
  stockCode: string;
  stockName: string;
  uptickRate: number;
  surgeRate: number;
  dealNum: number;
  dealMoney: number;
}
