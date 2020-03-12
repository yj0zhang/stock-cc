import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

interface StockDetail {
  id: number,
  name?: String,
}

interface IProps {}

interface IState {
  detail: StockDetail
}

export default class Index extends Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      detail: {id: 0}
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.setState({
      detail: {id: 2, name: "顶点软件"}
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick() {
    Taro.navigateTo({
      url: "pages/detail"
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
    navigationBarTitleText: '详情'
  }

  render () {
    return (
      <View className='index'>
        <Text >{this.state.detail.name}</Text>
      </View>
    )
  }
}
