import {
  get
} from "./base/fetch";

function fetchKeyPoint() {
  return get("/stock/realtime/topIndex")
}

export {
  fetchKeyPoint,
}
