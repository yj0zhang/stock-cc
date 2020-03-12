import ajaxInstance from "./index";

function fetchList() {
  return ajaxInstance({
    url: "/stock/follow/list",
    method: 'get'
  })
}

export default {
  fetchList,
}
