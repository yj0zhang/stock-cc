(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"121":function(e,t,n){},"125":function(e,t,n){},"127":function(e,t,n){},"133":function(e,t,n){},"242":function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),o=n(8),i=n(236),s=n(78);var l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(){function KeyPointModel(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,KeyPointModel);var t=e.stockId,n=e.stockName,r=e.currentPrice,a=e.yesterdayClosePrice,o=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["stockId","stockName","currentPrice","yesterdayClosePrice"]);this.stockId=t,this.stockName=n,this.currentPrice=r,this.yesterdayClosePrice=a,this.attrs=o}return l(KeyPointModel,[{"key":"gap","value":function gap(){return(this.currentPrice-this.yesterdayClosePrice).toFixed(2)}},{"key":"gapRate","value":function gapRate(){return(100*(this.currentPrice-this.yesterdayClosePrice)/this.yesterdayClosePrice).toFixed(2)}}]),KeyPointModel}(),u=(n(121),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var f=function(e){function KeyPoint(){!function KeyPoint_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,KeyPoint);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(KeyPoint.__proto__||Object.getPrototypeOf(KeyPoint)).call(this));return e.state={"list":[]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(KeyPoint,a["a"].Component),u(KeyPoint,[{"key":"componentWillMount","value":function componentWillMount(){this.getKeyPoint()}},{"key":"getKeyPoint","value":function getKeyPoint(){var e=this;(function fetchKeyPoint(){return Object(s.a)("/stock/realtime/topIndex")})().then(function(t){var n=t.data_;console.log(n),e.setState({"list":n.map(function(e){return new c(e)})})})}},{"key":"render","value":function render(){return r.j.createElement(o.a,{"className":"KeyPoint g-p-40 g-mb-40"},r.j.createElement(o.a,{"className":"g-py-20"},r.j.createElement(o.a,null,"A股-沪深")),r.j.createElement(o.a,{"className":"KeyPoint__list"},this.state.list.map(function(e){return r.j.createElement(o.a,{"className":"KeyPoint__card g-p-12 g-text-center"},r.j.createElement(o.a,{"className":"KeyPoint__card-name"},e.stockName),r.j.createElement(o.a,{"className":e.gap()>0?"g-up":0===e.gap()?"":"g-down"},e.currentPrice),r.j.createElement(o.a,null,r.j.createElement(i.a,{"className":e.gap()>0?"g-mr-8 g-font-small g-up":0===e.gap()?"g-mr-8 g-font-small":"g-mr-8 g-font-small g-down"},e.gap()>0?"+"+e.gap():e.gap()),r.j.createElement(i.a,{"className":e.gapRate()>0?"g-font-small g-up":0===e.gapRate()?"g-font-small":"g-font-small g-down"},e.gapRate()>0?"+"+e.gapRate()+"%":e.gapRate()+"%")))})))}}]),KeyPoint}(),p=(n(125),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var g=function(e){function MarketOverview(e){!function MarketOverview_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MarketOverview);var t=function MarketOverview_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MarketOverview.__proto__||Object.getPrototypeOf(MarketOverview)).call(this,e));return t.state={"up":0,"down":0,"zero":0},t}return function MarketOverview_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MarketOverview,a["a"].Component),p(MarketOverview,[{"key":"componentWillMount","value":function componentWillMount(){this.getMarketOverview()}},{"key":"getMarketOverview","value":function getMarketOverview(){var e=this;(function fetchMarketOverview(){return Object(s.a)("/stock/realtime/uptickRateStatistics")})().then(function(t){var n=t.data_;console.log(n),e.setState({"up":n.up,"down":n.down,"zero":n.zero})})}},{"key":"render","value":function render(){return r.j.createElement(o.a,{"className":"MarketOverview g-p-40 g-mb-40"},r.j.createElement(o.a,{"className":"g-py-20"},r.j.createElement(o.a,null,"市场概况")),r.j.createElement(o.a,{"className":"MarketOverview__list"},r.j.createElement(o.a,{"className":"MarketOverview__card g-p-16"},r.j.createElement(o.a,{"className":"MarketOverview__card-name"},"涨"),r.j.createElement(o.a,{"className":"g-up"},this.state.up)),r.j.createElement(o.a,{"className":"MarketOverview__card g-p-16"},r.j.createElement(o.a,{"className":"MarketOverview__card-name"},"跌"),r.j.createElement(o.a,{"className":"g-down"},this.state.down)),r.j.createElement(o.a,{"className":"MarketOverview__card g-p-16"},r.j.createElement(o.a,{"className":"MarketOverview__card-name"},"持平"),r.j.createElement(o.a,null,this.state.zero))))}}]),MarketOverview}(),m=n(234),y=n(247);function getDigit(e){return e.toString().length}function getDecimal(e,t){if(!e)return"";if(getDigit(e)<=t)return"."+e;var n=e.toString().split("");return n.splice(t,0,"."),(e=Math.round(parseFloat(n.join(""))))?"."+e:""}function transformNumberV2(e,t,n){var r=function transformNumber(e,t,n){if(isNaN(e))throw Error(e+" is not number");t=t>0?t:1;var r=Math.floor(e),a=getDigit(r),o=e.toString().split(".")[1]||"";if(a<=t)return r+getDecimal(o,n);var i=["","十","百","千","万","十万","百万","千万","亿","十亿","百亿","千亿"][a-1];if("string"!=typeof i)throw Error(e+" is too large");var s=r.toString().substr(1)+o;return n>0?r.toString().substr(0,1)+getDecimal(s,n)+i:Math.round(parseFloat(r.toString().substr(0,1)+getDecimal(s,2)))+i}(e,t,n+4),a=r.substr(-1),o=parseFloat(r),i=void 0;!function(e){e[e["十"]=1]="十",e[e["百"]=2]="百",e[e["千"]=3]="千"}(i||(i={}));var s=parseInt(i[r.substr(-2,1)])||0;return(o*Math.pow(10,s)).toFixed(n)+a}function getRate(e){return!e||isNaN(parseFloat(e))?0:parseFloat((100*parseFloat(e)).toFixed(2))}var d,h,v,k=function RangeStock(e){!function RangeStock_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RangeStock);var t=e.stockId,n=e.stockCode,r=e.stockName,a=e.uptickRate,o=e.surgeRate,i=e.dealNum,s=e.dealMoney;this.stockId=t,this.stockCode=n,this.stockName=r,this.uptickRate=getRate(a),this.surgeRate=getRate(o),this.dealNum=transformNumberV2(i||0,3,2),this.dealMoney=transformNumberV2(s||0,3,2)},_=(n(127),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());!function(e){e.asc="ASC",e.desc="DESC"}(d||(d={})),function(e){e.uptickRate="uptickRate",e.surgeRate="surgeRate",e.dealNum="dealNum",e.dealMoney="dealMoney"}(h||(h={})),function(e){e.ready="more",e.loading="loading",e.nomore="noMore"}(v||(v={}));var b=function(e){function RankingList(e){!function RankingList_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RankingList);var t=function RankingList_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(RankingList.__proto__||Object.getPrototypeOf(RankingList)).call(this,e));return t.state={"listStatus":v.ready,"sortType":d.asc,"sortTypes":[{"name":"涨幅榜","value":h.uptickRate},{"name":"波动","value":h.surgeRate},{"name":"成交量","value":h.dealNum},{"name":"成交金额","value":h.dealMoney}],"pageSize":20,"pageNum":1,"sortField":h.uptickRate,"list":[]},t}return function RankingList_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RankingList,a["a"].Component),_(RankingList,[{"key":"componentWillMount","value":function componentWillMount(){this.getRankList()}},{"key":"getNextPage","value":function getNextPage(){var e=this;this.setState({"pageNum":this.state.pageNum+1},function(){e.getRankList()})}},{"key":"getRankList","value":function getRankList(){var e=this;this.state.listStatus!==v.loading&&this.setState({"listStatus":v.loading},function(){(function fetchRankList(e){return Object(s.a)("/stock/realtime/rank",{"data":e})})({"pageNum":e.state.pageNum,"pageSize":e.state.pageSize,"type":e.state.sortField,"sortType":e.state.sortType}).then(function(t){var n=t.data_;e.setState({"list":e.state.list.concat(n.map(function(e){return new k(e)})),"listStatus":n&&n.length===e.state.pageSize?v.ready:v.nomore})})})}},{"key":"getListByType","value":function getListByType(e){var t=this;console.log(e),this.setState({"sortField":e.value,"pageNum":1,"list":[]},function(){t.getRankList()})}},{"key":"gotoDetail","value":function gotoDetail(e){a.a.navigateTo({"url":"/packageA/pages/detail/index?id="+e.stockId})}},{"key":"toggleSortType","value":function toggleSortType(){var e=this;this.setState({"sortType":this.state.sortType===d.asc?d.desc:d.asc,"pageNum":1,"list":[]},function(){e.getRankList()})}},{"key":"getClass","value":function getClass(e){var t="g-flex-cell g-flex-row";return t+=e>0?" g-up":0===e?"":" g-down"}},{"key":"render","value":function render(){var e=this;return r.j.createElement(o.a,{"className":"RankingList g-p-40 g-mb-40"},r.j.createElement(o.a,{"className":"g-py-20"},"股票排行"),r.j.createElement(o.a,{"className":"RankingList__sort-fields g-mb-10"},this.state.sortTypes.map(function(t){return r.j.createElement(o.a,{"className":e.state.sortField===t.value?"RankingList__sort-fields--active":""},r.j.createElement(m.a,{"size":"small","onClick":e.getListByType.bind(e,t)},t.name))})),r.j.createElement(o.a,{"style":"width: 40px"},r.j.createElement(m.a,{"size":"small","type":"secondary","onClick":this.toggleSortType.bind(this)},this.state.sortType===d.asc?"升序↑":"降序↓")),r.j.createElement(o.a,{"className":"RankingList__table g-py-20 g-flex-column g-flex-column--row-border"},r.j.createElement(o.a,{"className":"g-flex-cell g-flex-row"},r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row RankingList__table-title"},"股票"),r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row RankingList__table-title"},"涨幅"),r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row RankingList__table-title"},"波动"),r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row RankingList__table-title"},"成交量"),r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row RankingList__table-title"},"成交金额")),this.state.list.map(function(t){return r.j.createElement(o.a,{"className":"g-flex-cell g-flex-row","onClick":e.gotoDetail.bind(e,t)},r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row RankingList__table-col"},r.j.createElement(i.a,{"className":"g-flex-cell g-flex-row"},t.stockName),r.j.createElement(i.a,{"className":"RankingList__item-code g-flex-cell g-flex-row"},t.stockCode)),r.j.createElement(i.a,{"className":e.getClass(t.uptickRate)},t.uptickRate,"%"),r.j.createElement(i.a,{"className":e.getClass(t.surgeRate)},t.surgeRate,"%"),r.j.createElement(i.a,{"className":e.getClass(parseFloat(t.dealNum))},t.dealNum),r.j.createElement(i.a,{"className":e.getClass(parseFloat(t.dealMoney))},t.dealMoney))})),r.j.createElement(y.a,{"onClick":this.getNextPage.bind(this),"status":this.state.listStatus}))}}]),RankingList}(),w=(n(133),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),j=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0};var O=function(e){function MarketQuotation(e){!function marketQuotations_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MarketQuotation);var t=function marketQuotations_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MarketQuotation.__proto__||Object.getPrototypeOf(MarketQuotation)).call(this,e));return t.config={"navigationBarTitleText":"行情"},t}return function marketQuotations_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MarketQuotation,a["a"].Component),w(MarketQuotation,[{"key":"render","value":function render(){return r.j.createElement(o.a,{"className":"MarketQuotation"},r.j.createElement(f,null),r.j.createElement(g,null),r.j.createElement(b,null))}},{"key":"componentDidMount","value":function componentDidMount(){j(MarketQuotation.prototype.__proto__||Object.getPrototypeOf(MarketQuotation.prototype),"componentDidMount",this)&&j(MarketQuotation.prototype.__proto__||Object.getPrototypeOf(MarketQuotation.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){j(MarketQuotation.prototype.__proto__||Object.getPrototypeOf(MarketQuotation.prototype),"componentDidShow",this)&&j(MarketQuotation.prototype.__proto__||Object.getPrototypeOf(MarketQuotation.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){j(MarketQuotation.prototype.__proto__||Object.getPrototypeOf(MarketQuotation.prototype),"componentDidHide",this)&&j(MarketQuotation.prototype.__proto__||Object.getPrototypeOf(MarketQuotation.prototype),"componentDidHide",this).call(this)}}]),MarketQuotation}();t.default=O},"78":function(e,t,n){"use strict";var r=n(235),a=n(244);function isNil(e){return void 0===e||null===e}var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(){function Response(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Response),this.raw_=e.raw,this.error_=null,this.code_=e.code,this.data_=e.data,this.message_=e.message}return o(Response,[{"key":"clone","value":function clone(){return new Response({"data":this.data,"raw":this.raw_,"code":this.code,"message":this.message})}},{"key":"ok","value":function ok(){return!this.error}},{"key":"unwrap","value":function unwrap(){return this.data}},{"key":"wrap","value":function wrap(e){var t=this.clone();return t.data_=e,t}},{"key":"get","value":function get(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function getAttr(e,t,n){if("[object Object]"!==Object.prototype.toString.call(t))return n;if(!e)return t;for(var r=e.split("."),a=t,o=void 0,i=0;i<r.length;i++){if(!(o=r[i])&&!isNil(n))return null;if(!isNil(a=a[o]))return a}return isNil(n)?a:n}(e,this.data,t)}},{"key":"has","value":function has(e){return this.data&&void 0!==this.data[e]&&null!==this.data[e]}},{"key":"raw","get":function get(){return this.raw_}},{"key":"data","get":function get(){return this.data_}},{"key":"error","get":function get(){return this.error_},"set":function set(e){this.error_=e}},{"key":"code","get":function get(){return this.code_}},{"key":"message","get":function get(){return this.message_},"set":function set(e){this.message_=e}}]),Response}();var s=function(e){function Exception(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function Exception_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Exception);var r=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Exception.__proto__||Object.getPrototypeOf(Exception)).call(this,e));return r.name="Exception",r.type=t||"UNKNOWN",r.stack=(new Error).stack,r.info=n||{},r}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Exception,Error),Exception}(),l=n(87),c=n.n(l)()({"UNKNOWN":null,"WX_API_FAIL":null,"WX_API_SUPPORT_FAIL":null,"WX_NOT_AUTH":null,"NETWORK":null,"API_CLIENT":null,"API_SERVER":null,"API_INVALID_AUTH_CODE":null,"ACTION_CANCEL":null,"NOT_EMPLOYEE":null,"ABORT_FETCH":null});n.d(t,"a",function(){return fetch_get});var u="https://api.1fox3.com",f=Object.assign,p=null,g=function onErrorInterceptor(e){return Promise.reject(e)};function fetch(e){e=f({},e,{"header":f({},{"content-type":"application/json"},e.header),"method":"get"},e);var t=function request(){return"function"==typeof p&&(e=p(e)),new Promise(function(t,n){Object(r.a)(e).then(function(e){var r=function createResponse(e){var t=null,n=e.statusCode,r=e.data||null;if("string"==typeof r)try{r=JSON.parse(r)}catch(e){r=null}if(!r){var a=e.errMsg||null;return(t=new i({"raw":e,"message":a})).error=new s(null,c.API_SERVER),t}if(200===n||r.code){if(0!==r.code){var o=r.msg||null;return(t=new i({"raw":e,"message":o})).error=new s(o,c.API_SERVER),t}return t=new i({"data":r.data,"code":r.code,"message":r.msg,"raw":e})}var l=c.UNKNOWN;400<=n&&n<=451?l=c.API_CLIENT:500<=n&&n<=511&&(l=c.API_SERVER);var u=(r||{}).msg||e.statusCode+": `"+e.errMsg+"`"||"";return(t=new i({"raw":e,"data":r.data,"code":r.code,"message":u})).error=new s(u,l),t}(e);if(!r.ok())return n(r.error);t(r)},function(e){return n(new s(e.message||e.errMsg,c.UNKNOWN))})})};return new Promise(function(e,n){t().then(e,function(r){g(r).then(function(){t().then(e,n)},function(e){Object(a.a)({"title":e.message||"接口错误，请重试","icon":"none","duration":2e3}),n(e)})})})}function fetch_get(e,t){return(t=t||{}).method="GET",t.url=u+e,fetch(t)}}}]);
