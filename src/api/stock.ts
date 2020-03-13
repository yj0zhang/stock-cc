import ajaxInstance from "./index";

function fetchList() {
  return ajaxInstance({
    url: "/stock/follow/list"
  })
}

function fetchDetail(id) {
  return ajaxInstance({
    url: `/stock/realtime/info?stockId=${id}`
  })
}

function fetchOffLineData(id) {
  return ajaxInstance({
    url: `/stock/offline/line?stockId=${id}`
  })
}

function fetchRealTimeData(id) {
  return ajaxInstance({
    url: `/stock/realtime/line?stockId=${id}`
  })
}

export default {
  fetchList,
  fetchDetail,
  fetchOffLineData,
  fetchRealTimeData
}
