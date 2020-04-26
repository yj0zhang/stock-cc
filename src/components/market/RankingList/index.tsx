import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtLoadMore } from 'taro-ui';
import { fetchRankList } from "@/api/marketQuotation";
import { RangeStock } from "@/models/RangeStock";

import "./RankingList.scss"

interface IState {
  sortTypes: Array<any>;
  list: Array<any>;
  sortField: string;
  sortType: string;
  pageSize: number;
  pageNum: number;
  listStatus: "more" | "loading" | "noMore" | undefined;
}

enum TypeDict {asc = "ASC", desc = "DESC"}

enum FieldDict {uptickRate = "uptickRate", surgeRate = "surgeRate", dealNum = "dealNum", dealMoney = "dealMoney"}

enum StatusDict {ready = "more", loading = "loading", nomore = "noMore"};

export default class RankingList extends Component<voidProps, IState> {
  constructor(props: voidProps) {
    super(props)
    this.state = {
      listStatus: StatusDict.ready,
      sortType: TypeDict.asc,
      sortTypes: [
        { name: "涨幅榜", value: FieldDict.uptickRate },
        { name: "波动", value: FieldDict.surgeRate },
        { name: "成交量", value: FieldDict.dealNum },
        { name: "成交金额", value: FieldDict.dealMoney },
      ],
      pageSize: 20,
      pageNum: 1,
      sortField: FieldDict.uptickRate,
      list: []
    }
  }

  componentWillMount() {
    this.getRankList()
  }

  getNextPage() {
    this.setState({
      pageNum: this.state.pageNum + 1
    }, () => {
      this.getRankList()
    })
  }

  getRankList() {
    if (this.state.listStatus === StatusDict.loading) {
      return
    }
    this.setState({
      listStatus: StatusDict.loading
    }, () => {
      fetchRankList({
        pageNum: this.state.pageNum,
        pageSize: this.state.pageSize,
        type: this.state.sortField,
        sortType: this.state.sortType
      }).then(
        ({data_}) => {
          this.setState({
            list: this.state.list.concat(data_.map(item => new RangeStock(item))),
            listStatus: data_ && data_.length === this.state.pageSize ? StatusDict.ready: StatusDict.nomore
          })
        }
      )
    })
  }

  getListByType(type) {
    console.log(type)
    this.setState({
      sortField: type.value,
      pageNum: 1,
      list: []
    }, () => {
      this.getRankList()
    })
  }

  gotoDetail(stock) {
    Taro.navigateTo({
      url: `/packageA/pages/detail/index?id=${stock.stockId}`
    })
  }

  toggleSortType() {
    this.setState({
      sortType: this.state.sortType === TypeDict.asc ? TypeDict.desc : TypeDict.asc,
      pageNum: 1,
      list: []
    }, () => {
      this.getRankList()
    })
  }

  getClass(num: number) {
    let klass = "g-flex-cell g-flex-row";
    klass += num > 0 ? " g-up" : num === 0 ? "" : " g-down"

    return klass
  }


  externalClasses: ['RankingList']

  render() {
    return (
      <View className="RankingList g-p-40 g-mb-40">
        <View className="g-py-20">股票排行</View>
        <View className="RankingList__sort-fields g-mb-10">
          {this.state.sortTypes.map(sType => {
            return (
              <View className={this.state.sortField === sType.value ? "RankingList__sort-fields--active": ""}>
                <AtButton size='small' onClick={this.getListByType.bind(this, sType)}>{sType.name}</AtButton>
              </View>
            )
          })}
        </View>
        <View style="width: 40px">
          <AtButton size="small" type="secondary" onClick={this.toggleSortType.bind(this)}>{this.state.sortType === TypeDict.asc ? "升序↑" : "降序↓"}</AtButton>
        </View>

        <View className="RankingList__table g-py-20 g-flex-column g-flex-column--row-border">
          <View className="g-flex-cell g-flex-row">
            <Text className="g-flex-cell g-flex-row RankingList__table-title">股票</Text>
            <Text className="g-flex-cell g-flex-row RankingList__table-title">涨幅</Text>
            <Text className="g-flex-cell g-flex-row RankingList__table-title">波动</Text>
            <Text className="g-flex-cell g-flex-row RankingList__table-title">成交量</Text>
            <Text className="g-flex-cell g-flex-row RankingList__table-title">成交金额</Text>
          </View>
          {this.state.list.map(item => {
            return (
              <View className="g-flex-cell g-flex-row" onClick={this.gotoDetail.bind(this, item)}>
                <Text className="g-flex-cell g-flex-row">
                  <Text className="g-flex-cell g-flex-row">{item.stockName}</Text>
                  <Text className="RankingList__item-code g-flex-cell g-flex-row">{item.stockCode}</Text>
                </Text>
                <Text className={this.getClass(item.uptickRate)}>{item.uptickRate}%</Text>
                <Text className={this.getClass(item.surgeRate)}>{item.surgeRate}%</Text>
                <Text className={this.getClass(item.dealNum)}>{item.dealNum}</Text>
                <Text className={this.getClass(item.dealMoney)}>{item.dealMoney}</Text>
              </View>
            )
          })}
        </View>
        <AtLoadMore
          onClick={this.getNextPage.bind(this)}
          status={this.state.listStatus}
        />
      </View>
    )
  }
}
