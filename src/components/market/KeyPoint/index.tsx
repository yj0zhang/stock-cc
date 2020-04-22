import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./KeyPoint.scss"

interface IState {
  list: any,
  stateDesc: string,
  stateText: string
}
export class KeyPoint extends Component<voidProps, IState> {
  constructor() {
    super()
    this.state = {
      list: [
        {
          name: "上证指数",
          currentNum: "2800",
          gap: 54.33,
          gapRate: 2.05
        },
        {
          name: "深证成指",
          currentNum: "10428",
          gap: -342.33,
          gapRate: -3.05
        },
        {
          name: "创业板",
          currentNum: "1993",
          gap: 74.33,
          gapRate: 3.23
        }
      ],
      stateDesc: "kkkk",
      stateText: "已收盘"
    }
  }

  externalClasses: ['KeyPoint']

  render() {
    return (
      <View className="KeyPoint g-p-40 g-mb-40">
        <View className="g-py-20">
          <View>{this.state.stateText}</View>
          <View className="KeyPoint__tip">{this.state.stateDesc}</View>
        </View>
        <View className="KeyPoint__list">
          {
            this.state.list.map(item => {
              return (
                <View className="KeyPoint__card g-p-12 g-text-center">
                  <View className="KeyPoint__card-name">{item.name}</View>
                  <View className="KeyPoint__card-num">{item.currentNum}</View>
                  <View>
                    <Text className="g-mr-8 KeyPoint__card-gap">{item.gap > 0 ? `+${item.gap}` : item.gap}</Text>
                    <Text className="KeyPoint__card-gap-rate">{item.gapRate > 0 ? `+${item.gapRate}%` : `${item.gapRate}%`}</Text>
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
