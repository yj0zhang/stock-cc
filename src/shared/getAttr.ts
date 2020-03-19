import { isNil } from './utils/is';

export default function getAttr(path, data, defaultValue) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    return defaultValue;
  }

  if (!path) {
    return data;
  }

  let paths = path.split('.');
  let last = data;

  let p;

  for (let i = 0; i < paths.length; i++) {
    p = paths[i];
    if (!p && !isNil(defaultValue)) {
      return null;
    }

    last = last[p];
    if (!isNil(last)) {
      return last;
    }
  }

  return isNil(defaultValue) ? last : defaultValue;
}
