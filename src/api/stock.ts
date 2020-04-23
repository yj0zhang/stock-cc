import {
  get
} from "./base/fetch";
import { format } from "date-fns";
import { getStartFromDay } from "@/shared/date";

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
      stockId: id,
      endDate: format(new Date(), "yyyy-MM-dd"),
      startDate: format(getStartFromDay(new Date(), 180), "yyyy-MM-dd")
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
