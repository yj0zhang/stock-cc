import Taro from "@tarojs/taro"

const API_BASE = "https://api.1fox3.com/";

interface requestHeaders {
  'Content-Type'?: String
}
interface Options {
  url: String,
  headers?: requestHeaders,
  method?: String,
  data?: Object | String
}

export default (options: Options) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: API_BASE + options.url,
      data: options.data,
      header: {
        'Content-type': 'application/json',
        ...options.headers
      },
      method: options.method ? options.method.toUpperCase() : "GET"
    }).then(
      (res) => {
        const { statusCode, data } = res;
        if (statusCode >= 200 && statusCode < 300) {
          if (data.code !== 0) {
            reject(data)
          } else {
            resolve(data)
          }
        } else {
          reject(res)
        }
      }
    )
  })
}
