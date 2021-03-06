interface IApiOption {
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT" | undefined,
  header?: object,
  data?: object
}

/** components */

interface voidProps {}

interface voidState {}

/** polling service */
interface PollingInterface {
  restart: Function,
  startPolling: Function,
  stopPolling: Function
}
