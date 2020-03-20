import PollingService from "@/lib/polling";
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Echart } from '@/components/echart'
import { realTimeLineOptions, offlineOptions } from "@/service/echartsOptionService"
import { fetchDetail, fetchRealTimeData, fetchOffLineData } from "@/api/stock";

import ButtonTab from "@/components/ButtonTab"

import "./detail.scss"

interface IProps {}

interface IState {
  detail: IStockDetail,
  offlineConfig: Object,
  realtimeConfig: Object,
  buttonList: Array<IButtonTabBtn>,
  active: Number,
  realTimePolling: PollingInterface,
  chartsDataReady: Boolean,
  coordRange: any
}

const realtime = 1, offline = 2

export default class Index extends Component<IProps, IState> {

  id = (this.$router.params || {}).id || 0
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        name: ""
      },
      offlineConfig: {},
      realtimeConfig: {},
      buttonList: [
        {id: realtime, name: "实时"},
        {id: offline, name: "离线"},
      ],
      active: offline,
      realTimePolling: new PollingService(10, () => {}),
      chartsDataReady: false,
      coordRange: []
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
        let offlineData = offlineOptions(data.lineNode)
        this.setState({
          offlineConfig: offlineData.options,
          chartsDataReady: this.state.active === offline,
          coordRange: offlineData.coordRange
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

  onOfflineInit(chart) {
    chart.dispatchAction({
      type: 'brush',
      areas: [
          {
              brushType: 'lineX',
              coordRange: this.state.coordRange,
              xAxisIndex: 0
          }
      ]
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
      <View className='stock-detail'>
        <Text >{this.state.detail.name}</Text>
        <ButtonTab buttonList={this.state.buttonList} active={this.state.active} activeChange={this.activeChange.bind(this)}></ButtonTab>
        {this.state.active === realtime && this.state.chartsDataReady ?
          (<Echart style={'height: 80vh'} option={this.state.realtimeConfig}/>):
          null
        }
        {this.state.active === offline && this.state.chartsDataReady ?
          (<Echart onInit={this.onOfflineInit.bind(this)} style={'height: 90vh'} option={this.state.offlineConfig}/>):
          null
        }
      </View>
    )
  }
}
