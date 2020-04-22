import PollingService from "@/lib/polling";
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Echart } from '@/components/echart'
import { realTimeLineOptions, offlineOptions } from "@/service/echartsOptionService"
import { fetchDetail, fetchRealTimeData, fetchOffLineData } from "@/api/stock";

import { AtTabs, AtTabsPane } from 'taro-ui'

import "./detail.scss"

interface IState {
  detail: IStockDetail;
  offlineConfig: object;
  realtimeConfig: object;
  buttonList: any;
  active: number;
  realTimePolling: PollingInterface;
  chartsDataReady: boolean;
  coordRange: any;
  currentTab: number;
}

const realtime = 1, offline = 2

export default class Index extends Component<voidProps, IState> {

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
        {id: realtime, title: "实时"},
        {id: offline, title: "离线"},
      ],
      active: offline,
      currentTab: 1,
      realTimePolling: new PollingService(10, () => {}),
      chartsDataReady: false,
      coordRange: []
    }
  }

  componentWillMount () {
    this.setState({
      realTimePolling: new PollingService(
        30 * 1000,
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

  activeChange(val) {
    const type = this.state.buttonList[val]
    console.log(type, val)
    this.setState({
      chartsDataReady: false,
      active: type.id,
      currentTab: val
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

  handleClick (value) {
    this.setState({
      active: value
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
        <AtTabs current={this.state.currentTab} tabList={this.state.buttonList} onClick={this.activeChange.bind(this)}>
          {
            this.state.buttonList.map((btn, index) => {
              return (
                <AtTabsPane current={this.state.currentTab} index={index} >
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
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
