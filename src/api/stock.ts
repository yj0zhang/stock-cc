import {
  get
} from "./base/fetch";

function fetchList() {
  return get("/stock/follow/list")
}

function fetchDetail(id) {
  return get("/stock/realtime/info", {
    data: {
      stockId: id
    }
  })
}

function fetchOffLineData(id) {
  return get("/stock/offline/line", {
    data: {
      stockId: id
    }
  })
}

function fetchRealTimeData(id) {
  return get("/stock/realtime/line", {
    data: {
      stockId: id
    }
  })
}

export {
  fetchList,
  fetchDetail,
  fetchOffLineData,
  fetchRealTimeData
}
