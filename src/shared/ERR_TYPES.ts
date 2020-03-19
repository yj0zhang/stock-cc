import keymirror from 'keymirror';

export default keymirror({
  // 未知错误
  UNKNOWN: null,
  WX_API_FAIL: null,
  WX_API_SUPPORT_FAIL: null,
  WX_NOT_AUTH: null,
  // 网络错误
  NETWORK: null,
  API_CLIENT: null,
  API_SERVER: null,
  // token 失效.
  API_INVALID_AUTH_CODE: null,
  ACTION_CANCEL: null,
  NOT_EMPLOYEE: null,
  ABORT_FETCH: null,
})
