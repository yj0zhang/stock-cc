import Taro, { Component } from "@tarojs/taro"
import { Button, View } from "@tarojs/components"

interface IProps {
  onAuthSuccess: Function
}
export default class Auth extends Component<IProps> {
  constructor(props:IProps) {
    super(props)
  }

  render() {
    return (
      <View>
        <Button openType="getUserInfo" onGetUserInfo={this.props.onAuthSuccess.bind(this)}>授权</Button>
      </View>
    )
  }
}
