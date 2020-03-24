

import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Auth from '@/components/Auth'
import UserModel from "@/models/UserModel"
import { saveUserInfo } from "@/api/user"

const userInfo = new UserModel()

interface IProps {}

interface IState {
  list: Array<IStock>
  needAuth: Boolean
}

export default class Index extends Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      needAuth: false
    }
  }

  async componentWillMount () {
    Taro.navigateTo({
      url: '/pages/list/index'
    })
    //不能直接要求用户授权，必须要先使用小程序之后，才能授权，否则审核不通过
    //确保用户已登录
    // await userInfo.ensureLogin()

    // this.setState({
    //   needAuth: !userInfo.getAuthState()
    // }, () => {
    //   if (!this.state.needAuth) {
    //     Taro.navigateTo({
    //       url: '/pages/list/index'
    //     })
    //   }
    // })

  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async authSucess(res: any) {
    if (!userInfo.authCode) {
      return
    }
    await saveUserInfo({
      platId:'stock',
      code: userInfo.authCode,
      encryptedData: res.detail.encryptedData,
      iv: res.detail.iv,
    })
    Taro.navigateTo({
      url: '/pages/list/index'
    })
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View>
        {this.state.needAuth ? <Auth onAuthSuccess={this.authSucess}/> : "加载中..."}
      </View>
    )
  }
}
