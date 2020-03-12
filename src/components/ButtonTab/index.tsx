import { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

import "./ButtonTab.scss"

interface btn {
  id: Number,
  name: String
}

interface IProps {
  buttonList: Array<btn>,
  active: Number
}

interface IState {
  activeId?: Number
}

export default class ButtonTab extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.setState({
      activeId: this.props.active
    })
  }

  handleClick(btn) {
    this.setState({
      activeId: btn.id
    })
    console.log(btn)
  }

  render() {
    return (
      <View className="ButtonTab">
        {this.props.buttonList.map(btn => {
          return (
            <Button className={this.state.activeId === btn.id ? "ButtonTab__active" : ""} onClick={this.handleClick.bind(this, btn)}>
              <Text>{btn.name}</Text>
            </Button>
          )
        })}
      </View>
    )
  }
}
