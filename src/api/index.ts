import Taro from "@tarojs/taro"

const API_BASE = "https://api.1fox3.com/";


export default (options = {method: String, data: {}, url: String}) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: API_BASE + options.url,
      data: options.data,
      headers: {
        'Content-type': 'application/json'
      },
      method: options.method.toString().toUpperCase() || "GET",
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
