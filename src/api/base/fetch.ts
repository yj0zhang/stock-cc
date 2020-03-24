
import Taro from '@tarojs/taro';

import createResponse from './createResponse';
import Exception from '../../shared/Exception';
import ERR_TYPES from '../../shared/ERR_TYPES';

const BASE_URL = "https://api.1fox3.com"

const assign = Object.assign;
// interceptor to config the options.
let optionInterceptor: any = null;
let onErrorInterceptor = (err) => {
  return Promise.reject(err);
};

export default function fetch(options: IApiOption) {
  options = assign({}, options, {
    header: assign({}, {
      'content-type': 'application/json',
    }, options.header),
    method: 'get',
  }, options);

  const request = () => {
    // 必须放在这里，不然token失效，重新获取到token，这里的要刷新.
    if (typeof optionInterceptor === 'function') {
      options = optionInterceptor(options);
    }

    return new Promise((res, rej) => {
      Taro.request(options).then(httpRes => {
        let response = createResponse(httpRes);
        if (!response.ok()) {
          return rej(response.error);
        }
        res(response);
      }, err => {
        return rej(new Exception(err.message || err.errMsg, ERR_TYPES.UNKNOWN));
      })
    })
  }

  return new Promise((res, rej) => {
    request().then(res, (err) => {
      onErrorInterceptor(err).then(() => {
        request().then(res, rej);
      }, (e) => {
        // if (e.type === ERR_TYPES.ABORT_FETCH) {
        //   return;
        // }

        Taro.showToast({
          title: e.message || "接口错误，请重试",
          icon: "none",
          duration: 2000
        })
        rej(e);
      });
    })
  })
}

export function setOptionInterceptor(fn): IApiOption | undefined {
  // can only set once.
  if (optionInterceptor) {
    return;
  }
  optionInterceptor = fn;
}

export function setOnErrorInterceptor(fn) {
  onErrorInterceptor = fn;
}

export function get(url, options?: any) {
  options = options ? options : {}
  options.method = 'GET';
  options.url = BASE_URL + url;
  return fetch(options);
}

export function post(url, options?: any) {
  options = options ? options : {}
  options.method = 'POST';
  options.url = BASE_URL + url;
  return fetch(options);
}

export function put(url, options?: any) {
  options = options ? options : {}
  options.method = 'PUT';
  options.url = BASE_URL + url;
  return fetch(options);
}

export function del(url, options?: any) {
  options = options ? options : {}
  options.method = 'DELETE';
  options.url = BASE_URL + url;
  return fetch(options);
}
