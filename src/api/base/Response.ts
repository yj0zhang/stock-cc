
import getAttr from '../../shared/getAttr';

interface IResponse {
  data?: any;
  raw: object;
  code?: number;
  message?: string;
}
export default class Response implements IResponse {
  raw_: any
  error_?: any
  data_?: any
  code_: number
  message_: string
  constructor(props) {
    // original http response.
    this.raw_ = props.raw;
    this.error_ = null;
    this.code_ = props.code;
    this.data_ = props.data;
    // message from server.
    this.message_ = props.message;
  }

  clone() {
    let r = new Response({
      data: this.data,
      raw: this.raw_,
      code: this.code,
      message: this.message,
    })

    return r;
  }

  get raw() {
    return this.raw_;
  }

  get data() {
    return this.data_;
  }

  get error() {
    return this.error_;
  }

  set error(err) {
    this.error_ = err;
  }

  get code() {
    return this.code_;
  }

  get message() {
    return this.message_;
  }

  set message(msg) {
    this.message_ = msg;
  }

  ok() {
    return !this.error;
  }

  unwrap() {
    return this.data;
  }

  wrap(o) {
    let r = this.clone();
    r.data_ = o;

    return r;
  }

  get(key, defaultValue = null) {
    return getAttr(key, this.data, defaultValue);
  }

  has(key) {
    return this.data && (typeof this.data[key] !== 'undefined') && this.data[key] !== null;
  }
}
