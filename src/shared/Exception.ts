
export default class Exception extends Error {
  type: String
  info: Object
  constructor(message, type, info = {}) {
    super(message);

    this.name = "Exception";
    this.type = type || 'UNKNOWN';
    this.stack = new Error().stack;
    this.info = info || {};
  }
}
