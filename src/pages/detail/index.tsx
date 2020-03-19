import PollingService from "@/lib/polling";
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Echart } from 'echarts12'
import { realTimeLineOptions, offlineOptions } from "@/service/echartsOptionService"
import { fetchDetail, fetchRealTimeData, fetchOffLineData } from "@/api/stock";

import ButtonTab from "@/components/ButtonTab"

interface PollingInterface {
  restart: Function,
  startPolling: Function,
  stopPolling: Function
}
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
  offlineConfig: Object,
  realtimeConfig: Object,
  buttonList: Array<btn>,
  active: Number,
  realTimePolling: PollingInterface,
  chartsDataReady: Boolean
}

const realtime = 1, offline = 2

export default class Index extends Component<IProps, IState> {

  id = (this.$router.params || {}).id || 0
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      offlineConfig: {},
      realtimeConfig: {},
      buttonList: [
        {id: realtime, name: "实时"},
        {id: offline, name: "离线"},
      ],
      active: offline,
      realTimePolling: new PollingService(10, () => {}),
      chartsDataReady: false
    }
  }

  componentWillMount () {
    this.setState({
      realTimePolling: new PollingService(
        10 * 1000,
        () => { return fetchRealTimeData(this.id) },
        this.updateRealTimeData.bind(this),
        err => { console.log(err) }
      )
    })
  }

  componentDidMount () {
    this.getDetail()
    if (this.state.active === realtime) {
      this.state.realTimePolling.startPolling()
    } else {
      this.getOffLineData()
    }
  }

  componentWillUnmount () {
    this.state.realTimePolling.stopPolling()
  }

  componentDidShow () { }

  componentDidHide () { }

  getDetail() {
    fetchDetail(this.id).then(
      ({data}) => {
        this.setState({
          detail: data
        })
      }
    )
  }

  getOffLineData() {
    fetchOffLineData(this.id).then(
      ({data}) => {
        this.setState({
          offlineConfig: offlineOptions(data.lineNode),
          chartsDataReady: this.state.active === offline
        })
      }
    )
  }

  updateRealTimeData({data}) {
    this.setState({
      realtimeConfig: realTimeLineOptions(data),
      chartsDataReady: this.state.active === realtime
    })
  }

  activeChange(type) {
    this.setState({
      chartsDataReady: false,
      active: type.id
    })
    if (type.id === realtime) {
      this.state.realTimePolling.startPolling()
    } else if (type.id === offline) {
      this.state.realTimePolling.stopPolling()
      this.getOffLineData()
    }
  }

  offlineRef: () => {
    debugger
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
        {this.state.active === realtime && this.state.chartsDataReady ?
          (<Echart style={'height: 600px'} option={this.state.realtimeConfig}/>):
          null
        }
        {this.state.active === offline && this.state.chartsDataReady ?
          (<Echart ref="offlineRef" style={'height: 600px'} option={this.state.offlineConfig}/>):
          null
        }
        <ButtonTab buttonList={this.state.buttonList} active={this.state.active} activeChange={this.activeChange.bind(this)}></ButtonTab>
      </View>
    )
  }
}
