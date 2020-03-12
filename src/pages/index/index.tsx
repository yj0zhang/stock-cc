import stockApi from "@/api/stock";
import date from "@/util/date";

import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'


interface StockItem {
  stockId: number,
  stockCode: String,
  stockName: String,
  followTime: String
}

interface IProps {}

interface IState {
  list: Array<StockItem>
}

export default class Index extends Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.getList()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick() {
    Taro.navigateTo({
      url: "../detail/index"
    })
  }

  getList() {
    stockApi.fetchList().then(
      data => {
        this.setState({
          list: data.body
        })
      }
    )
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '关注列表'
  }

  render () {
    return (
      <View className='stock-follow-list'>
        {
          this.state.list.map(item => {
            return (
              <View className='stock-follow-list__item' key={item.stockId} onClick={this.handleClick}>
                <Text>{item.stockCode}</Text>
                <Text >{item.stockName}</Text>
                <Text>{date.formatDate(item.followTime)}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
