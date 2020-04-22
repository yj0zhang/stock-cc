import {
  get
} from "./base/fetch";

function fetchKeyPoint() {
  return get("/stock/realtime/topIndex")
}

function fetchMarketOverview() {
  return get("/stock/realtime/uptickRateStatistics")
}

export {
  fetchKeyPoint,
  fetchMarketOverview
}
