import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from 'taro-ui'

import "./RankingList.scss"

interface IState {
  sortTypes: Array<any>,
  list: Array<any>
}

export class RankingList extends Component<voidProps, IState> {
  constructor(props: voidProps) {
    super(props)
    this.state = {
      sortTypes: [
        { name: "涨幅榜", value: 1 },
        { name: "跌幅榜", value: 2 },
        { name: "快速涨幅", value: 3 },
        { name: "成交额", value: 4 },
      ],
      list: [
        {name: "东方生物", typeText: "科创", code: 688298, curr: 40.21, upRate: 44.01, industry: "医疗器械服务"}
      ]
    }
  }
  handleClick(type) {
    console.log(type)
  }

  externalClasses: ['RankingList']

  render() {
    return (
      <View className="RankingList g-p-40 g-mb-40">
        <View className="g-py-20">股票排行</View>
        <View className="RankingList__sort-type">
          {this.state.sortTypes.map(sType => {
            return (
            <AtButton onClick={this.handleClick.bind(this, sType)}>{sType.name}</AtButton>
            )
          })}
        </View>
        <View className="RankingList__table g-py-20 flex-column">
          <View className="flex-cell flex-row">
            <Text className="flex-cell flex-row RankingList__table-title">展开分析</Text>
            <Text className="flex-cell flex-row RankingList__table-title">最新</Text>
            <Text className="flex-cell flex-row RankingList__table-title">涨幅</Text>
            <Text className="flex-cell flex-row RankingList__table-title">行业板块</Text>
          </View>
          {this.state.list.map(item => {
            return (
              <View className="flex-cell flex-row">
                <Text className="flex-cell flex-row">{item.name}</Text>
                <Text className="flex-cell flex-row">{item.curr}</Text>
                <Text className="flex-cell flex-row">{item.upRate}%</Text>
                <Text className="flex-cell flex-row">{item.industry}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
