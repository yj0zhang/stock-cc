import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { fetchKeyPoint } from "@/api/marketQuotation";
import KeyPointModel from "@/models/KeyPointModel.ts"

import "./KeyPoint.scss"

interface IState {
  list: Array<KeyPointClass>;
  stateDesc: string;
  stateText: string;
}
export class KeyPoint extends Component<voidProps, IState> {
  constructor() {
    super()
    this.state = {
      list: [],
      stateDesc: "kkkk",
      stateText: "已收盘"
    }
  }

  componentWillMount() {
    this.getKeyPoint()
  }

  getKeyPoint() {
    fetchKeyPoint().then(
      ({data_}) => {
        console.log(data_)
        this.setState({
          list: data_.map(item => new KeyPointModel(item))
        })
      }
    )
  }

  externalClasses: ['KeyPoint']

  render() {
    return (
      <View className="KeyPoint g-p-40 g-mb-40">
        <View className="g-py-20">
          {/* <View>{this.state.stateText}</View> */}
          {/* <View className="KeyPoint__tip">{this.state.stateDesc}</View> */}
          <View>A股-沪深</View>
        </View>
        <View className="KeyPoint__list">
          {
            this.state.list.map(item => {
              return (
                <View className="KeyPoint__card g-p-12 g-text-center">
                  <View className="KeyPoint__card-name">{item.stockName}</View>
                  <View className="KeyPoint__card-num">{item.currentPrice}</View>
                  <View>
                    <Text className="g-mr-8 KeyPoint__card-gap">{item.gap() > 0 ? `+${item.gap()}` : item.gap()}</Text>
                    <Text className="KeyPoint__card-gap-rate">{item.gapRate() > 0 ? `+${item.gapRate()}%` : `${item.gapRate()}%`}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
