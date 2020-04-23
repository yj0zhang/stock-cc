import { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KeyPoint from "@/components/market/KeyPoint";
import MarketOverview from "@/components/market/MarketOverview";
import RankingList from "@/components/market/RankingList";

import "./MarketQuotation.scss";

export class MarketQuotation extends Component {
  constructor(props: voidProps) {
    super(props)
  }

  config: Config = {
    navigationBarTitleText: '行情'
  }
  render() {
    return (
      <View className="MarketQuotation">
        <KeyPoint/>
        <MarketOverview />
        <RankingList />
      </View>
    )
  }
}
