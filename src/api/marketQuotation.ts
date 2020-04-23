import {
  get
} from "./base/fetch";

function fetchKeyPoint() {
  return get("/stock/realtime/topIndex")
}

function fetchMarketOverview() {
  return get("/stock/realtime/uptickRateStatistics")
}

function fetchRankList(params) {
  return get("/stock/realtime/rank", {data: params})
}

export {
  fetchKeyPoint,
  fetchMarketOverview,
  fetchRankList
}
