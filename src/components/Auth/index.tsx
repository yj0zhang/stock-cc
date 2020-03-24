import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtButton } from 'taro-ui'

import "./Auth.scss"

interface IProps {
  onAuthSuccess: any
}
export default class Auth extends Component<IProps> {
  constructor(props:IProps) {
    super(props)
  }

  render() {
    return (
      <View>
        <View className="g-text-center g-my-40">stock 需要您的授权</View>
        <AtButton className="g-mx-100 scope-auth-button" type='primary' openType="getUserInfo" onGetUserInfo={this.props.onAuthSuccess}>授权</AtButton>
      </View>
    )
  }
}
