

import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { fetchList } from "@/api/stock"
import { AtList, AtListItem } from "taro-ui"

import './list.scss'

interface IState {
  list: Array<IFollowStock>
}

export default class Index extends Component<voidProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount () {}

  componentDidMount () {
    this.getList()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(stock: IFollowStock) {
    Taro.navigateTo({
      url: `/packageA/pages/detail/index?id=${stock.stockId}`
    })
  }

  getList() {
    fetchList().then(
      ({data}) => {
        this.setState({
          list: data
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
        <AtList>
          {
            this.state.list.map(item => {
              return (
                <AtListItem  key={item.stockId} onClick={this.handleClick.bind(this, item)}
                  arrow='right'
                  note={item.stockCode}
                  title={item.stockName}
                />
              )
            })
          }
        </AtList>
      </View>
    )
  }
}
