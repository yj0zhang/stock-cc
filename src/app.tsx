import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
// import '@tarojs/async-await'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    // 'pages/index/index',
      // 'pages/detail/index',
    pages: [
      'pages/marketQuotations/index',
      'pages/list/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#d81e06',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      selectedColor: "#d81e06",
      list: [
        {
          pagePath: "pages/marketQuotations/index",
          text: "行情",
          iconPath: "assets/images/hangqing.png",
          selectedIconPath: "assets/images/hangqing-active.png"
        },
        {
          pagePath: "pages/list/index",
          text: "自选",
          iconPath: "assets/images/guanzhu.png",
          selectedIconPath: "assets/images/guanzhu-active.png"
        }
      ]
    },
    subPackages: [
      {
        root: "packageA",
        name: "detail",
        pages: [
          "pages/detail/index"
        ]
      }
    ]
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
