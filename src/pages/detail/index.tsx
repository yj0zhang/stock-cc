import stockApi from "@/api/stock";
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Echart } from 'echarts12'

import ButtonTab from "@/components/ButtonTab"

interface btn {
  id: Number,
  name: String
}

interface IProps {}

interface StockDetail {
  name?: String
}

interface IState {
  detail: StockDetail,
  lineData: Object,
  buttonList: Array<btn>,
  active: Number
}

export default class Index extends Component<IProps, IState> {

  id = (this.$router.params || {}).id || 0
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      lineData: {},
      buttonList: [
        {id: 1, name: "实时"},
        {id: 2, name: "离线"},
      ],
      active: 1
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.getDetail()
    this.getOffLineData()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getDetail() {
    stockApi.fetchDetail(this.id).then(
      ({body}) => {
        this.setState({
          detail: body
        })
      }
    )
  }

  getOffLineData() {
    stockApi.fetchOffLineData(this.id).then(
      ({body}) => {
        this.setState({
          lineData: body
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
    navigationBarTitleText: '详情'
  }

  lineOptions = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
  }

  render () {
    return (
      <View className='index'>
        <Text >{this.state.detail.name}</Text>
        <Echart option={this.lineOptions} />
        <ButtonTab buttonList={this.state.buttonList} active={this.state.active}></ButtonTab>
      </View>
    )
  }
}
