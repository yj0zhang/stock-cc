(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"140":function(t,e,n){var o=n(141);"string"==typeof o&&(o=[[t.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(15)(o,r);o.locals&&(t.exports=o.locals)},"141":function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'img[src=""] {\n  opacity: 0;\n}\n\n.taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.taro-img__mode-aspectfill--width {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfill--height {\n  width: 100%;\n  min-height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}',""])},"142":function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){"use strict";if("object"===("undefined"==typeof window?"undefined":n(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{"get":function get(){return this.intersectionRatio>0}});else{var t=window.document,e=[];IntersectionObserver.prototype.THROTTLE_TIMEOUT=100,IntersectionObserver.prototype.POLL_INTERVAL=null,IntersectionObserver.prototype.USE_MUTATION_OBSERVER=!0,IntersectionObserver.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({"element":t,"entry":null}),this._monitorIntersections(),this._checkForIntersections()}},IntersectionObserver.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},IntersectionObserver.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},IntersectionObserver.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},IntersectionObserver.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},IntersectionObserver.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{"value":parseFloat(e[1]),"unit":e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},IntersectionObserver.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(addEvent(window,"resize",this._checkForIntersections,!0),addEvent(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{"attributes":!0,"childList":!0,"characterData":!0,"subtree":!0}))))},IntersectionObserver.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,removeEvent(window,"resize",this._checkForIntersections,!0),removeEvent(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},IntersectionObserver.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{"top":0,"bottom":0,"left":0,"right":0,"width":0,"height":0};this._observationTargets.forEach(function(n){var o=n.element,r=getBoundingClientRect(o),i=this._rootContainsTarget(o),s=n.entry,a=t&&i&&this._computeTargetAndRootIntersection(o,e),c=n.entry=new IntersectionObserverEntry({"time":function now(){return window.performance&&performance.now&&performance.now()}(),"target":o,"boundingClientRect":r,"rootBounds":e,"intersectionRect":a});s?t&&i?this._hasCrossedThreshold(s,c)&&this._queuedEntries.push(c):s&&s.isIntersecting&&this._queuedEntries.push(c):this._queuedEntries.push(c)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},IntersectionObserver.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var o,r,i,s,a,c,h,l,u=getBoundingClientRect(e),p=getParentNode(e),f=!1;!f;){var d=null,m=1==p.nodeType?window.getComputedStyle(p):{};if("none"==m.display)return;if(p==this.root||p==t?(f=!0,d=n):p!=t.body&&p!=t.documentElement&&"visible"!=m.overflow&&(d=getBoundingClientRect(p)),d&&(o=d,r=u,void 0,void 0,void 0,void 0,void 0,void 0,i=Math.max(o.top,r.top),s=Math.min(o.bottom,r.bottom),a=Math.max(o.left,r.left),c=Math.min(o.right,r.right),l=s-i,!(u=(h=c-a)>=0&&l>=0&&{"top":i,"bottom":s,"left":a,"right":c,"width":h,"height":l})))break;p=getParentNode(p)}return u}},IntersectionObserver.prototype._getRootRect=function(){var e;if(this.root)e=getBoundingClientRect(this.root);else{var n=t.documentElement,o=t.body;e={"top":0,"left":0,"right":n.clientWidth||o.clientWidth,"width":n.clientWidth||o.clientWidth,"bottom":n.clientHeight||o.clientHeight,"height":n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},IntersectionObserver.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={"top":t.top-e[0],"right":t.right+e[1],"bottom":t.bottom+e[2],"left":t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},IntersectionObserver.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},IntersectionObserver.prototype._rootIsInDom=function(){return!this.root||containsDeep(t,this.root)},IntersectionObserver.prototype._rootContainsTarget=function(e){return containsDeep(this.root||t,e)},IntersectionObserver.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},IntersectionObserver.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=IntersectionObserver,window.IntersectionObserverEntry=IntersectionObserverEntry}function IntersectionObserverEntry(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{"top":0,"bottom":0,"left":0,"right":0,"width":0,"height":0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function IntersectionObserver(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function throttle(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function addEvent(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function removeEvent(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function getBoundingClientRect(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={"top":e.top,"right":e.right,"bottom":e.bottom,"left":e.left,"width":e.right-e.left,"height":e.bottom-e.top}),e):{"top":0,"bottom":0,"left":0,"right":0,"width":0,"height":0}}function containsDeep(t,e){for(var n=e;n;){if(n==t)return!0;n=getParentNode(n)}return!1}function getParentNode(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},"239":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var o=n(0),r=n(4),i=n.n(r),s=n(73),a=n.n(s),c=n(8),h=n(74),l=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var u=function(t){function AtList(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,AtList),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(AtList.__proto__||Object.getPrototypeOf(AtList)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(AtList,h["a"]),l(AtList,[{"key":"render","value":function render(){var t=i()("at-list",{"at-list--no-border":!this.props.hasBorder},this.props.className);return o.j.createElement(c.a,{"className":t},this.props.children)}}]),AtList}();u.defaultProps={"hasBorder":!0},u.propTypes={"hasBorder":a.a.bool}},"245":function(t,e,n){"use strict";var o=n(0),r=n(4),i=n.n(r),s=n(88),a=n.n(s),c=n(73),h=n.n(c),l=n(8),u=(n(6),n(140),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}),p=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();n(142);var f=function(t){function Image(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Image);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments));return t.state={"isLoaded":!1,"aspectFillMode":"width"},t.imageOnLoad=t.imageOnLoad.bind(t),t.observer={},t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Image,o["j"].Component),p(Image,[{"key":"componentDidMount","value":function componentDidMount(){var t=this;this.props.lazyLoad&&(this.observer=new IntersectionObserver(function(e,n){e[e.length-1].isIntersecting&&t.setState({"isLoaded":!0},function(){o.j.findDOMNode(t).children[0].src=t.props.src})},{"rootMargin":"300px 0px"}),this.observer.observe(this.imgRef))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.observer.disconnect&&this.observer.disconnect()}},{"key":"imageOnLoad","value":function imageOnLoad(t){var e=this.props.onLoad;Object.defineProperty(t,"detail",{"enumerable":!0,"writable":!0,"value":{"width":this.imgRef.width,"height":this.imgRef.height}}),this.imgRef.naturalWidth>this.imgRef.naturalHeight?this.setState({"aspectFillMode":"width"}):this.setState({"aspectFillMode":"height"}),e&&e(t)}},{"key":"render","value":function render(){var t=this,e=this.props,n=e.className,r=e.src,s=e.style,a=e.mode,c=e.onError,h=e.lazyLoad,l=function _objectWithoutProperties(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["className","src","style","mode","onError","lazyLoad"]),p=this.state.aspectFillMode,f=i()("taro-img",{"taro-img__widthfix":"widthFix"===a},n),d=i()("taro-img__mode-"+(a||"scaleToFill").toLowerCase().replace(/\s/g,""),function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}({},"taro-img__mode-aspectfill--"+p,"aspectFill"===a));return o.j.createElement("div",u({"className":f,"style":s},l),h?o.j.createElement("img",{"ref":function ref(e){return t.imgRef=e},"className":d,"data-src":r,"onLoad":this.imageOnLoad,"onError":c}):o.j.createElement("img",{"ref":function ref(e){return t.imgRef=e},"className":d,"src":r,"onLoad":this.imageOnLoad,"onError":c}))}}]),Image}(),d=n(236),m=n(16),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},g=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var _={"switch":"switch","checkbox":"check"};var v=function(t){function Switch(){!function switch_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Switch);var t=function switch_possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Switch.__proto__||Object.getPrototypeOf(Switch)).apply(this,arguments));return t.state={"checked":t.props.checked},t.switchChange=t.switchChange.bind(t),t}return function switch_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Switch,o["j"].Component),g(Switch,[{"key":"switchChange","value":function switchChange(t){var e=this.props.onChange;Object.defineProperty(t,"detail",{"enumerable":!0,"value":{"value":t.target.checked}}),e&&e(t),this.setState({"checked":t.target.checked})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(t){t.hasOwnProperty("checked")&&this.setState({"checked":t.checked})}},{"key":"render","value":function render(){var t=this.props,e=t.type,n=void 0===e?"switch":e,r=t.className,s=t.color,a=i()(function switch_defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}({},"weui-"+function parseType(t){if(!_[t])throw new Error("unexpected type");return _[t]}(n),!0),r),c=void 0;return c=this.state.checked?{"borderColor":s||"04BE02","backgroundColor":s||"04BE02"}:"",o.j.createElement("input",b({},Object(m.a)(this.props,["className","checked","onChange"]),{"className":a,"checked":this.state.checked,"type":"checkbox","onChange":this.switchChange,"style":c}))}}]),Switch}(),y=n(74);n.d(e,"a",function(){return O});var w=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var O=function(t){function AtListItem(){!function item_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,AtListItem);var t=function item_possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(AtListItem.__proto__||Object.getPrototypeOf(AtListItem)).apply(this,arguments));return t.handleClick=function(e){a()(t.props.onClick)&&!t.props.disabled&&t.props.onClick(e)},t.handleSwitchChange=function(e){a()(t.props.onSwitchChange)&&!t.props.disabled&&t.props.onSwitchChange(e)},t}return function item_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(AtListItem,y["a"]),w(AtListItem,[{"key":"handleSwitchClick","value":function handleSwitchClick(t){t.stopPropagation()}},{"key":"render","value":function render(){var t=this.props,e=t.note,n=t.arrow,r=t.thumb,s=t.iconInfo,a=t.disabled,c=t.isSwitch,h=t.hasBorder,u=t.extraThumb,p=t.switchColor,m=t.switchIsCheck,b=this.props,g=b.extraText,_=b.title;g=String(g),_=String(_);var y=i()("at-list__item",{"at-list__item--thumb":r,"at-list__item--multiple":e,"at-list__item--disabled":a,"at-list__item--no-border":!h},this.props.className),w=i()(s.prefixClass||"at-icon",function item_defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}({},(s.prefixClass||"at-icon")+"-"+s.value,s.value),s.className);return o.j.createElement(l.a,{"className":y,"onClick":this.handleClick},o.j.createElement(l.a,{"className":"at-list__item-container"},r&&o.j.createElement(l.a,{"className":"at-list__item-thumb item-thumb"},o.j.createElement(f,{"className":"item-thumb__info","mode":"scaleToFill","src":r})),s.value&&o.j.createElement(l.a,{"className":"at-list__item-icon item-icon"},o.j.createElement(d.a,{"className":w,"style":this.mergeStyle({"color":s.color||"","fontSize":(s.size||24)+"px"},s.customStyle)})),o.j.createElement(l.a,{"className":"at-list__item-content item-content"},o.j.createElement(l.a,{"className":"item-content__info"},o.j.createElement(l.a,{"className":"item-content__info-title"},_),e&&o.j.createElement(l.a,{"className":"item-content__info-note"},e))),o.j.createElement(l.a,{"className":"at-list__item-extra item-extra"},g&&o.j.createElement(l.a,{"className":"item-extra__info"},g),u&&!g&&o.j.createElement(l.a,{"className":"item-extra__image"},o.j.createElement(f,{"className":"item-extra__image-info","mode":"aspectFit","src":u})),c&&!u&&!g&&o.j.createElement(l.a,{"className":"item-extra__switch","onClick":this.handleSwitchClick},o.j.createElement(v,{"color":p,"disabled":a,"checked":m,"onChange":this.handleSwitchChange})),n?o.j.createElement(l.a,{"className":"item-extra__icon"},o.j.createElement(d.a,{"className":"at-icon item-extra__icon-arrow at-icon-chevron-"+n})):null)))}}]),AtListItem}();O.defaultProps={"note":"","disabled":!1,"title":"","thumb":"","isSwitch":!1,"hasBorder":!0,"switchColor":"#6190E8","switchIsCheck":!1,"extraText":"","extraThumb":"","iconInfo":{"value":""},"onSwitchChange":function onSwitchChange(){},"onClick":function onClick(){}},O.propTypes={"note":h.a.string,"disabled":h.a.bool,"title":h.a.string,"thumb":h.a.string,"onClick":h.a.func,"isSwitch":h.a.bool,"hasBorder":h.a.bool,"switchColor":h.a.string,"switchIsCheck":h.a.bool,"extraText":h.a.string,"extraThumb":h.a.string,"onSwitchChange":h.a.func,"arrow":h.a.oneOf(["up","down","right"]),"iconInfo":h.a.shape({"size":h.a.number,"value":h.a.string,"color":h.a.string,"prefixClass":h.a.string,"customStyle":h.a.oneOfType([h.a.object,h.a.string]),"className":h.a.oneOfType([h.a.array,h.a.string])})}}}]);