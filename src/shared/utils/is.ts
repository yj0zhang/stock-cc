
export function isNil(v) {
  return typeof v === 'undefined' || v === null;
}

export function isObject(v) {
  return v && Object.prototype.toString.call(v) === '[object Object]';
}

export function isEmpty(v) {
  return isNil(v) || /^\s*$/.test(v);
}
