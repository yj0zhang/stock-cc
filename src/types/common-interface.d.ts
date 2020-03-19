interface IApiOption {
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT" | undefined,
  header?: Object,
  data?: Object
}

/** components */

interface IButtonTabBtn {
  id: Number,
  name: String
}

/** polling service */
interface PollingInterface {
  restart: Function,
  startPolling: Function,
  stopPolling: Function
}
