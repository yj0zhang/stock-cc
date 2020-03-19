import { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

import "./ButtonTab.scss"

interface IProps {
  buttonList: Array<IButtonTabBtn>,
  active: Number,
  activeChange: Function
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
    if (this.state.activeId === btn.id) {
      return;
    }
    this.setState({
      activeId: btn.id
    })
    this.props.activeChange && this.props.activeChange(btn)
  }

  render() {
    return (
      <View className="ButtonTab">
        {this.props.buttonList.map(btn => {
          return (
            <Button size="mini" className={this.state.activeId === btn.id ? "ButtonTab__active" : ""} onClick={this.handleClick.bind(this, btn)}>
              <Text>{btn.name}</Text>
            </Button>
          )
        })}
      </View>
    )
  }
}
