interface IApiOption {
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT" | undefined,
  header?: Object,
  data?: Object
}
