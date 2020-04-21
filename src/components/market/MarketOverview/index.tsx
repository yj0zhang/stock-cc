import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./MarketOverview.scss"

interface IState {
  up: number,
  down: number,
  topRate: number,
  topName: string,
  hotRate: number,
  hotName: string
}

export class MarketOverview extends Component<voidProps, IState> {
  constructor(props:voidProps) {
    super(props)
    this.state = {
      up: 132,
      down: 5,
      topRate: 6.20,
      topName: "景峰医药",
      hotRate: 5.97,
      hotName: "嘉麟杰"
    }
  }

  externalClasses: ['MarketOverview']

  render() {
    return (
      <View className="MarketOverview g-p-40 g-mb-40">
        <View className="g-py-20">
          <View>市场概况</View>
        </View>
        <View className="MarketOverview__list">
          <View className="MarketOverview__card g-p-16">
            <View className="MarketOverview__card-name">涨跌停对比</View>
            <View className="MarketOverview__card-down">
              <Text className="MarketOverview__card-down">{this.state.down}</Text>:
              <Text className="MarketOverview__card-up">{this.state.up}</Text>
            </View>
          </View>
          <View className="MarketOverview__card g-p-16">
            <View className="MarketOverview__card-name">昨日涨停表现</View>
            <View className="MarketOverview__card-up">{this.state.topRate}%</View>
            <View className="MarketOverview__card-title">{this.state.topName}</View>
          </View>
          <View className="MarketOverview__card g-p-16">
            <View className="MarketOverview__card-name">同花顺热股</View>
            <View className="MarketOverview__card-up">{this.state.hotRate}%</View>
            <View className="MarketOverview__card-title">{this.state.hotName}</View>
          </View>
        </View>
      </View>
    )
  }
}
