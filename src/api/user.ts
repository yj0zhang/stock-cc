import {
  post
} from "./base/fetch";

function saveUserInfo(data) {
  return post("/open/wechatmini/login", {data})
}

export {
  saveUserInfo
}
