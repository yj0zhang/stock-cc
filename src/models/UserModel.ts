import Taro from "@tarojs/taro";

export default class UserModel {
  _hasAuth: Boolean
  _hasLogin: Boolean
  _loginRes: any
  _userInfoRes: any
  authCode: string
  constructor() {
    this._hasAuth = false
    this._hasLogin = false
    this._loginRes = null
    this._userInfoRes = null
  }

  setAuthState(val: Boolean) {
    this._hasAuth = val
  }

  getAuthState() {
    return this._hasAuth
  }

  setLoginState(val: Boolean) {
    this._hasLogin = val
  }

  getLoginState() {
    return this._hasLogin
  }

  checkSession() {
    return Taro.checkSession()
  }

  login() {
    return Taro.login();
  }

  ensureLogin() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.checkSession()
        this.setLoginState(true)
        this.setAuthState(true)
        resolve()
      } catch (error) {
        try {
          this._loginRes = await this.login()
          this.setLoginState(true)
          this.authCode = this._loginRes.code
          resolve()
        } catch (error) {
          reject(error)
        }
      }
    })
  }

}
